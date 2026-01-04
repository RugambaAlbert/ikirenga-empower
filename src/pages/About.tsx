import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Heart,
      titleKey: "about.communityFirst",
      descriptionKey: "about.communityDesc",
    },
    {
      icon: Target,
      titleKey: "about.integrity",
      descriptionKey: "about.integrityDesc",
    },
    {
      icon: Users,
      titleKey: "about.inclusion",
      descriptionKey: "about.inclusionDesc",
    },
    {
      icon: Eye,
      titleKey: "about.innovation",
      descriptionKey: "about.innovationDesc",
    },
  ];

  return (
    <div>
      <Hero
        title={t("about.heroTitle")}
        subtitle={t("about.heroSubtitle")}
      />

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-center">{t("about.ourStory")}</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">{t("about.storyParagraph1")}</p>
              <p className="mb-4">{t("about.storyParagraph2")}</p>
              <p>{t("about.storyParagraph3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{t("about.ourMission")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t("about.missionText")}</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">{t("about.ourVision")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t("about.visionText")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t("about.ourValues")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("about.valuesSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-hover border-border text-center">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{t(value.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t(value.descriptionKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">{t("about.governance")}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("about.governanceText1")}
            </p>
            <p className="text-muted-foreground">
              {t("about.governanceText2")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
