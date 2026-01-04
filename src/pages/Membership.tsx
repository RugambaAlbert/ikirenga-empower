import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";

const Membership = () => {
  const { t } = useTranslation();

  const benefitKeys = [
    "membership.benefit1",
    "membership.benefit2",
    "membership.benefit3",
    "membership.benefit4",
    "membership.benefit5",
    "membership.benefit6",
    "membership.benefit7",
    "membership.benefit8",
  ];

  const requirements = [
    { titleKey: "membership.reqAge", descriptionKey: "membership.reqAgeDesc" },
    { titleKey: "membership.reqID", descriptionKey: "membership.reqIDDesc" },
    { titleKey: "membership.reqFee", descriptionKey: "membership.reqFeeDesc" },
    { titleKey: "membership.reqDeposit", descriptionKey: "membership.reqDepositDesc" },
    { titleKey: "membership.reqForm", descriptionKey: "membership.reqFormDesc" },
    { titleKey: "membership.reqPhoto", descriptionKey: "membership.reqPhotoDesc" },
  ];

  const steps = [
    { step: "1", titleKey: "membership.step1Title", descKey: "membership.step1Desc" },
    { step: "2", titleKey: "membership.step2Title", descKey: "membership.step2Desc" },
    { step: "3", titleKey: "membership.step3Title", descKey: "membership.step3Desc" },
    { step: "4", titleKey: "membership.step4Title", descKey: "membership.step4Desc" },
  ];

  const faqs = [
    { questionKey: "membership.faq1Q", answerKey: "membership.faq1A" },
    { questionKey: "membership.faq2Q", answerKey: "membership.faq2A" },
    { questionKey: "membership.faq3Q", answerKey: "membership.faq3A" },
    { questionKey: "membership.faq4Q", answerKey: "membership.faq4A" },
    { questionKey: "membership.faq5Q", answerKey: "membership.faq5A" },
  ];

  return (
    <div>
      <Hero
        title={t("membership.heroTitle")}
        subtitle={t("membership.heroSubtitle")}
        ctaText={t("membership.startApplication")}
        ctaLink="/contact"
      />

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center">{t("membership.benefits")}</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              {t("membership.benefitsSubtitle")}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {benefitKeys.map((benefitKey, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{t(benefitKey)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center">{t("membership.requirements")}</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              {t("membership.requirementsSubtitle")}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {requirements.map((req, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">{t(req.titleKey)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{t(req.descriptionKey)}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center">{t("membership.howToJoin")}</h2>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {steps.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{t(item.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{t(item.descKey)}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" className="btn-hover">
                <Download className="mr-2 h-5 w-5" />
                {t("membership.downloadForm")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-center">{t("membership.faq")}</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{t(faq.questionKey)}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t(faq.answerKey)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
