import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, TrendingUp, Users, Shield, Smartphone, GraduationCap, ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const Home = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Wallet,
      title: t("services.savingsAccounts"),
      description: t("services.savingsDesc"),
      link: "/services",
    },
    {
      icon: TrendingUp,
      title: t("services.businessLoans"),
      description: t("services.businessDesc"),
      link: "/loans",
    },
    {
      icon: Smartphone,
      title: t("services.mobileBanking"),
      description: t("services.mobileDesc"),
      link: "/services",
    },
    {
      icon: GraduationCap,
      title: t("services.financialEducation"),
      description: t("services.educationDesc"),
      link: "/services",
    },
  ];

  const stats = [
    { icon: Users, number: "50,000+", label: t("stats.activeMembers") },
    { icon: Wallet, number: "$10M+", label: t("stats.totalSavings") },
    { icon: TrendingUp, number: "$8M+", label: t("stats.loansDelivered") },
    { icon: Shield, number: "15+", label: t("stats.yearsOfTrust") },
  ];

  return (
    <div>
      <Hero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        ctaText={t("hero.becomeMember")}
        ctaLink="/membership"
        secondaryCtaText={t("hero.applyLoan")}
        secondaryCtaLink="/loans"
      />

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t("services.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-border">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <Link to={service.link}>
                    <Button variant="link" className="p-0 h-auto text-primary group">
                      {t("services.learnMore")}
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">{t("cta.ready")}</h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            {t("cta.join")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/membership">
              <Button size="lg" variant="secondary" className="btn-hover">
                {t("nav.joinNow")}
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary btn-hover">
                {t("cta.contactUs")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
