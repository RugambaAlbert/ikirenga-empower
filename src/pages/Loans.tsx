import Hero from "@/components/Hero";
import LoanCalculator from "@/components/LoanCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Sprout, Home, GraduationCap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";

const Loans = () => {
  const { t } = useTranslation();

  const loanTypes = [
    {
      icon: Briefcase,
      titleKey: "loans.businessLoans",
      descriptionKey: "loans.businessLoansDesc",
      amount: "10,000,000 RWF",
      rate: "14%",
      term: "36",
      featureKeys: [
        "loans.quickApproval",
        "loans.flexibleRepayment",
        "loans.noHiddenFees",
        "loans.businessAdvisory",
      ],
    },
    {
      icon: Sprout,
      titleKey: "loans.agriculturalLoans",
      descriptionKey: "loans.agriculturalLoansDesc",
      amount: "5,000,000 RWF",
      rate: "12%",
      term: "24",
      featureKeys: [
        "loans.seasonalRepayment",
        "loans.agriculturalTraining",
        "loans.groupLending",
        "loans.insuranceAvailable",
      ],
    },
    {
      icon: Home,
      titleKey: "loans.personalLoans",
      descriptionKey: "loans.personalLoansDesc",
      amount: "3,000,000 RWF",
      rate: "16%",
      term: "24",
      featureKeys: [
        "loans.fastProcessing",
        "loans.minimalDocumentation",
        "loans.emergencyOptions",
        "loans.salaryBased",
      ],
    },
    {
      icon: GraduationCap,
      titleKey: "loans.educationLoans",
      descriptionKey: "loans.educationLoansDesc",
      amount: "4,000,000 RWF",
      rate: "13%",
      term: "48",
      featureKeys: [
        "loans.coversTuition",
        "loans.gracePeriod",
        "loans.parentCoSigning",
        "loans.flexiblePostGrad",
      ],
    },
  ];

  const requirementKeys = [
    "loans.req1",
    "loans.req2",
    "loans.req3",
    "loans.req4",
    "loans.req5",
    "loans.req6",
  ];

  const steps = [
    { step: "1", titleKey: "loans.step1Title", descKey: "loans.step1Desc" },
    { step: "2", titleKey: "loans.step2Title", descKey: "loans.step2Desc" },
    { step: "3", titleKey: "loans.step3Title", descKey: "loans.step3Desc" },
    { step: "4", titleKey: "loans.step4Title", descKey: "loans.step4Desc" },
  ];

  return (
    <div>
      <Hero
        title={t("loans.heroTitle")}
        subtitle={t("loans.heroSubtitle")}
        ctaText={t("loans.applyNow")}
        ctaLink="/contact"
      />

      {/* Loan Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t("loans.ourLoanProducts")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("loans.chooseTheBest")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="card-hover border-border">
                <CardHeader>
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <loan.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{t(loan.titleKey)}</CardTitle>
                  <CardDescription className="text-base">{t(loan.descriptionKey)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">{t("loans.loanAmount")}</span>
                      <span className="text-sm text-primary font-semibold">{t("loans.upTo")} {loan.amount}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">{t("loans.interestRate")}</span>
                      <span className="text-sm text-primary font-semibold">{t("loans.startingAt")} {loan.rate} {t("loans.perAnnum")}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">{t("loans.repaymentTerm")}</span>
                      <span className="text-sm text-primary font-semibold">{t("loans.upTo")} {loan.term} {t("loans.months")}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {loan.featureKeys.map((featureKey, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button className="w-full btn-hover">{t("loans.applyForThis")}</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Calculator */}
      <LoanCalculator />

      {/* Eligibility & Requirements */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-center">{t("loans.eligibility")}</h2>
            <Card className="border-border">
              <CardHeader>
                <CardTitle>{t("loans.generalRequirements")}</CardTitle>
                <CardDescription>
                  {t("loans.requirementsDesc")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirementKeys.map((reqKey, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{t(reqKey)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">{t("loans.howToApply")}</h2>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
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
            <Link to="/contact">
              <Button size="lg" className="btn-hover">{t("loans.startApplication")}</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loans;
