import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";

const News = () => {
  const { t } = useTranslation();

  const articles = [
    {
      titleKey: "news.article1Title",
      date: "March 15, 2024",
      categoryKey: "news.article1Category",
      excerptKey: "news.article1Excerpt",
    },
    {
      titleKey: "news.article2Title",
      date: "March 10, 2024",
      categoryKey: "news.article2Category",
      excerptKey: "news.article2Excerpt",
    },
    {
      titleKey: "news.article3Title",
      date: "March 5, 2024",
      categoryKey: "news.article3Category",
      excerptKey: "news.article3Excerpt",
    },
    {
      titleKey: "news.article4Title",
      date: "February 28, 2024",
      categoryKey: "news.article4Category",
      excerptKey: "news.article4Excerpt",
    },
    {
      titleKey: "news.article5Title",
      date: "February 20, 2024",
      categoryKey: "news.article5Category",
      excerptKey: "news.article5Excerpt",
    },
    {
      titleKey: "news.article6Title",
      date: "February 15, 2024",
      categoryKey: "news.article6Category",
      excerptKey: "news.article6Excerpt",
    },
  ];

  const tips = [
    {
      titleKey: "news.tip1Title",
      descriptionKey: "news.tip1Desc",
    },
    {
      titleKey: "news.tip2Title",
      descriptionKey: "news.tip2Desc",
    },
    {
      titleKey: "news.tip3Title",
      descriptionKey: "news.tip3Desc",
    },
  ];

  return (
    <div>
      <Hero
        title={t("news.heroTitle")}
        subtitle={t("news.heroSubtitle")}
      />

      {/* Latest News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t("news.latestNews")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("news.latestNewsSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="card-hover border-border overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-6xl opacity-20">📰</span>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{t(article.categoryKey)}</Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{t(article.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{t(article.excerptKey)}</CardDescription>
                  <Button variant="link" className="p-0 h-auto text-primary group">
                    {t("news.readMore")}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Tips */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t("news.financialTips")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("news.financialTipsSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tips.map((tip, index) => (
              <Card key={index} className="card-hover border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{t(tip.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{t(tip.descriptionKey)}</CardDescription>
                  <Button variant="link" className="p-0 h-auto text-primary group">
                    {t("news.readArticle")}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-border text-center">
            <CardHeader>
              <CardTitle className="text-2xl">{t("news.stayUpdated")}</CardTitle>
              <CardDescription>
                {t("news.subscribeDesc")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder={t("news.enterEmail")}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <Button className="btn-hover whitespace-nowrap">{t("news.subscribe")}</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default News;
