import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/contexts/TranslationContext";
import { 
  Mail, 
  Users, 
  Trash2, 
  Eye, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  ArrowLeft,
  Loader2
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  status: string;
  created_at: string;
}

interface Profile {
  id: string;
  full_name: string | null;
  phone: string | null;
  member_number: string | null;
  created_at: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/auth");
        return;
      }

      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin");

      if (!roles || roles.length === 0) {
        toast({
          title: "Access Denied",
          description: "You don't have admin privileges.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      setIsAdmin(true);
      await loadData();
    } catch (error) {
      console.error("Error checking admin access:", error);
      navigate("/");
    } finally {
      setIsLoading(false);
    }
  };

  const loadData = async () => {
    try {
      const [submissionsRes, profilesRes] = await Promise.all([
        supabase
          .from("contact_submissions")
          .select("*")
          .order("created_at", { ascending: false }),
        supabase
          .from("profiles")
          .select("*")
          .order("created_at", { ascending: false }),
      ]);

      if (submissionsRes.data) setSubmissions(submissionsRes.data);
      if (profilesRes.data) setProfiles(profilesRes.data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  const updateSubmissionStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .update({ status })
        .eq("id", id);

      if (error) throw error;

      setSubmissions((prev) =>
        prev.map((s) => (s.id === id ? { ...s, status } : s))
      );

      toast({ title: "Status updated" });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  const deleteSubmission = async (id: string) => {
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setSubmissions((prev) => prev.filter((s) => s.id !== id));
      toast({ title: "Submission deleted" });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary" className="gap-1"><Clock className="w-3 h-3" />{t("admin.pending")}</Badge>;
      case "reviewed":
        return <Badge variant="outline" className="gap-1"><AlertCircle className="w-3 h-3" />{t("admin.reviewed")}</Badge>;
      case "resolved":
        return <Badge className="gap-1 bg-green-600"><CheckCircle className="w-3 h-3" />{t("admin.resolved")}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Button variant="ghost" onClick={() => navigate("/")} className="mb-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("auth.backToLogin").replace("Login", "Home")}
            </Button>
            <h1 className="text-3xl font-bold text-foreground">{t("admin.title")}</h1>
          </div>
        </div>

        <Tabs defaultValue="submissions" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="submissions" className="gap-2">
              <Mail className="w-4 h-4" />
              {t("admin.contactSubmissions")}
            </TabsTrigger>
            <TabsTrigger value="members" className="gap-2">
              <Users className="w-4 h-4" />
              {t("admin.members")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="submissions">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  {t("admin.contactSubmissions")} ({submissions.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submissions.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    {t("admin.noSubmissions")}
                  </p>
                ) : (
                  <div className="space-y-4">
                    {submissions.map((submission) => (
                      <div
                        key={submission.id}
                        className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg gap-4"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">{submission.name}</span>
                            {getStatusBadge(submission.status)}
                          </div>
                          <p className="text-sm text-muted-foreground">{submission.email}</p>
                          <p className="text-sm font-medium mt-1">{submission.subject}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {new Date(submission.created_at).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Select
                            value={submission.status}
                            onValueChange={(value) => updateSubmissionStatus(submission.id, value)}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">{t("admin.pending")}</SelectItem>
                              <SelectItem value="reviewed">{t("admin.reviewed")}</SelectItem>
                              <SelectItem value="resolved">{t("admin.resolved")}</SelectItem>
                            </SelectContent>
                          </Select>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => {
                              setSelectedSubmission(submission);
                              setIsDialogOpen(true);
                            }}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="icon"
                            onClick={() => deleteSubmission(submission.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="members">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  {t("admin.members")} ({profiles.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {profiles.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    {t("admin.noMembers")}
                  </p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted">
                        <tr>
                          <th className="text-left p-3 font-medium">{t("auth.fullName")}</th>
                          <th className="text-left p-3 font-medium">{t("contact.phone")}</th>
                          <th className="text-left p-3 font-medium">Member #</th>
                          <th className="text-left p-3 font-medium">Joined</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {profiles.map((profile) => (
                          <tr key={profile.id} className="hover:bg-muted/50">
                            <td className="p-3">{profile.full_name || "-"}</td>
                            <td className="p-3">{profile.phone || "-"}</td>
                            <td className="p-3">{profile.member_number || "-"}</td>
                            <td className="p-3">
                              {new Date(profile.created_at).toLocaleDateString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{selectedSubmission?.subject}</DialogTitle>
              <DialogDescription>
                From: {selectedSubmission?.name} ({selectedSubmission?.email})
                {selectedSubmission?.phone && ` • ${selectedSubmission.phone}`}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">
                {selectedSubmission && new Date(selectedSubmission.created_at).toLocaleString()}
              </p>
              <p className="whitespace-pre-wrap">{selectedSubmission?.message}</p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Admin;
