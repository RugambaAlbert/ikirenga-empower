import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/contexts/TranslationContext";
import { User, Mail, Lock, ArrowRight, ArrowLeft } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");
const passwordSchema = z.string().min(6, "Password must be at least 6 characters");

type AuthMode = "login" | "signup" | "forgot" | "reset";

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useTranslation();
  const [mode, setMode] = useState<AuthMode>("login");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Check for password reset token in URL
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = hashParams.get("access_token");
    const type = hashParams.get("type");
    
    if (accessToken && type === "recovery") {
      setMode("reset");
    }
  }, []);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session?.user && mode !== "reset") {
        navigate("/");
      }
    });

    if (mode !== "reset") {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          navigate("/");
        }
      });
    }

    return () => subscription.unsubscribe();
  }, [navigate, mode]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (mode !== "reset") {
      try {
        emailSchema.parse(formData.email);
      } catch (e) {
        if (e instanceof z.ZodError) {
          newErrors.email = e.errors[0].message;
        }
      }
    }

    if (mode === "login" || mode === "signup" || mode === "reset") {
      try {
        passwordSchema.parse(formData.password);
      } catch (e) {
        if (e instanceof z.ZodError) {
          newErrors.password = e.errors[0].message;
        }
      }
    }

    if (mode === "reset" && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (mode === "signup" && !formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);

    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        toast({ title: "Welcome back!", description: "You have successfully logged in." });
      } else if (mode === "signup") {
        const redirectUrl = `${window.location.origin}/`;
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            emailRedirectTo: redirectUrl,
            data: { full_name: formData.fullName },
          },
        });
        if (error) throw error;
        toast({ title: "Account created!", description: "Welcome to COOPEC Ikirenga member portal." });
      } else if (mode === "forgot") {
        const resetLink = `${window.location.origin}/auth#access_token=PLACEHOLDER&type=recovery`;
        
        const { error } = await supabase.auth.resetPasswordForEmail(formData.email, {
          redirectTo: `${window.location.origin}/auth`,
        });
        
        if (error) throw error;
        
        // Also send custom email via edge function
        const language = localStorage.getItem("language") || "en";
        await supabase.functions.invoke("send-password-reset", {
          body: { 
            email: formData.email, 
            resetLink: `${window.location.origin}/auth`,
            language 
          },
        });
        
        toast({ 
          title: "Reset link sent!", 
          description: "Check your email for the password reset link." 
        });
        setMode("login");
      } else if (mode === "reset") {
        const { error } = await supabase.auth.updateUser({
          password: formData.password,
        });
        if (error) throw error;
        toast({ title: "Password updated!", description: "You can now login with your new password." });
        await supabase.auth.signOut();
        setMode("login");
        window.location.hash = "";
      }
    } catch (error: any) {
      let errorMessage = error.message;
      if (error.message.includes("User already registered")) {
        errorMessage = "This email is already registered. Please login instead.";
      } else if (error.message.includes("Invalid login credentials")) {
        errorMessage = "Invalid email or password. Please try again.";
      }
      toast({ title: "Error", description: errorMessage, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const getTitle = () => {
    switch (mode) {
      case "login": return t("auth.memberLogin");
      case "signup": return t("auth.createAccount");
      case "forgot": return t("auth.resetPassword");
      case "reset": return t("auth.updatePassword");
    }
  };

  const getDescription = () => {
    switch (mode) {
      case "login": return t("auth.accessPortal");
      case "signup": return t("auth.joinJourney");
      case "forgot": return "Enter your email to receive a password reset link";
      case "reset": return "Enter your new password below";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 py-12 px-4">
      <Card className="w-full max-w-md shadow-xl border-2">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
            <User className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl">{getTitle()}</CardTitle>
          <CardDescription>{getDescription()}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="fullName">{t("auth.fullName")}</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`pl-10 ${errors.fullName ? "border-destructive" : ""}`}
                  />
                </div>
                {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
              </div>
            )}

            {mode !== "reset" && (
              <div className="space-y-2">
                <Label htmlFor="email">{t("auth.email")}</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`pl-10 ${errors.email ? "border-destructive" : ""}`}
                  />
                </div>
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>
            )}

            {(mode === "login" || mode === "signup" || mode === "reset") && (
              <div className="space-y-2">
                <Label htmlFor="password">
                  {mode === "reset" ? t("auth.newPassword") : t("auth.password")}
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className={`pl-10 ${errors.password ? "border-destructive" : ""}`}
                  />
                </div>
                {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
              </div>
            )}

            {mode === "reset" && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">{t("auth.confirmPassword")}</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className={`pl-10 ${errors.confirmPassword ? "border-destructive" : ""}`}
                  />
                </div>
                {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword}</p>}
              </div>
            )}

            {mode === "login" && (
              <Button
                type="button"
                variant="link"
                className="p-0 h-auto text-sm text-muted-foreground"
                onClick={() => setMode("forgot")}
              >
                {t("auth.forgotPassword")}
              </Button>
            )}

            <Button type="submit" className="w-full btn-hover" disabled={isLoading}>
              {isLoading ? (
                t("auth.pleaseWait")
              ) : (
                <>
                  {mode === "login" && t("auth.login")}
                  {mode === "signup" && t("auth.createAccount")}
                  {mode === "forgot" && t("auth.sendResetLink")}
                  {mode === "reset" && t("auth.updatePassword")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center space-y-2">
            {mode === "login" && (
              <>
                <p className="text-sm text-muted-foreground">{t("auth.noAccount")}</p>
                <Button variant="link" className="text-primary" onClick={() => setMode("signup")}>
                  {t("auth.createAccountLink")}
                </Button>
              </>
            )}
            {mode === "signup" && (
              <>
                <p className="text-sm text-muted-foreground">{t("auth.hasAccount")}</p>
                <Button variant="link" className="text-primary" onClick={() => setMode("login")}>
                  {t("auth.loginInstead")}
                </Button>
              </>
            )}
            {(mode === "forgot" || mode === "reset") && (
              <Button variant="link" className="text-primary" onClick={() => setMode("login")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("auth.backToLogin")}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
