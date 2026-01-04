import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, PiggyBank, Smartphone, GraduationCap, TrendingUp, Users, Shield, Gift } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const Services = () => {
  const { t } = useTranslation();

  const savingsProducts = [
    {
      icon: PiggyBank,
      titleKey: "services.regularSavings",
      descriptionKey: "services.regularSavingsDesc",
      featureKeys: ["services.minBalance", "services.interestRate8", "services.quarterlyInterest"],
    },
    {
      icon: TrendingUp,
      titleKey: "services.fixedDeposit",
      descriptionKey: "services.fixedDepositDesc",
      featureKeys: ["services.minDeposit", "services.interestRate12", "services.terms6to24"],
    },
    {
      icon: Users,
      titleKey: "services.groupSavings",
      descriptionKey: "services.groupSavingsDesc",
      featureKeys: ["services.min5Members", "services.discountedRates", "services.freeTraining"],
    },
  ];

  const services = [
    {
      icon: Smartphone,
      titleKey: "services.mobileBankingTitle",
      descriptionKey: "services.mobileBankingDesc",
      featureKeys: [
        "services.247Access",
        "services.instantTransfers",
        "services.billPayments",
        "services.transactionHistory",
      ],
    },
    {
      icon: GraduationCap,
      titleKey: "services.financialEducationTitle",
      descriptionKey: "services.financialEducationDesc",
      featureKeys: [
        "services.monthlyWorkshops",
        "services.businessPlanning",
        "services.savingsStrategies",
        "services.debtManagement",
      ],
    },
    {
      icon: Gift,
      titleKey: "services.memberBenefits",
      descriptionKey: "services.memberBenefitsDesc",
      featureKeys: [
        "services.annualDividends",
        "services.discountedLoanRates",
        "services.freeConsultation",
        "services.communityEvents",
      ],
    },
  ];

  return (
    <div>
      <Hero
        title={t("services.heroTitle")}
        subtitle={t("services.heroSubtitle")}
        ctaText={t("services.becomeMember")}
        ctaLink="/membership"
      />

      {/* Savings Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t("services.savingsProducts")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("services.savingsProductsSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {savingsProducts.map((product, index) => (
              <Card key={index} className="card-hover border-border">
                <CardHeader>
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <product.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{t(product.titleKey)}</CardTitle>
                  <CardDescription>{t(product.descriptionKey)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.featureKeys.map((featureKey, idx) => (
                      <li key={idx} className="flex items-start">
                        <Shield className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t("services.additionalServices")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("services.additionalServicesSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-border">
                <CardHeader>
                  <div className="h-14 w-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{t(service.titleKey)}</CardTitle>
                  <CardDescription>{t(service.descriptionKey)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.featureKeys.map((featureKey, idx) => (
                      <li key={idx} className="flex items-start">
                        <Shield className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
