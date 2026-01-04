import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Calendar, DollarSign } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const LoanCalculator = () => {
  const { t } = useTranslation();
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(12);
  const [loanTerm, setLoanTerm] = useState(12);

  const calculations = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm;

    if (monthlyRate === 0) {
      const monthlyPayment = principal / numberOfPayments;
      return {
        monthlyPayment,
        totalPayment: principal,
        totalInterest: 0,
      };
    }

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    return {
      monthlyPayment,
      totalPayment,
      totalInterest,
    };
  }, [loanAmount, interestRate, loanTerm]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("rw-RW", {
      style: "currency",
      currency: "RWF",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            {t("loans.calculator")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("loans.monthlyPayment")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("loans.calcSubtitle")}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card className="card-hover border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  {t("loans.loanDetails")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Loan Amount */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="loanAmount" className="text-base font-medium">
                      {t("loans.loanAmount")}
                    </Label>
                    <span className="text-lg font-bold text-primary">
                      {formatCurrency(loanAmount)}
                    </span>
                  </div>
                  <Slider
                    id="loanAmount"
                    min={50000}
                    max={10000000}
                    step={50000}
                    value={[loanAmount]}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    className="py-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>50,000 RWF</span>
                    <span>10,000,000 RWF</span>
                  </div>
                  <Input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    min={50000}
                    max={10000000}
                    className="mt-2"
                  />
                </div>

                {/* Interest Rate */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="interestRate" className="text-base font-medium">
                      {t("loans.annualInterest")}
                    </Label>
                    <span className="text-lg font-bold text-primary">
                      {interestRate}%
                    </span>
                  </div>
                  <Slider
                    id="interestRate"
                    min={1}
                    max={30}
                    step={0.5}
                    value={[interestRate]}
                    onValueChange={(value) => setInterestRate(value[0])}
                    className="py-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>1%</span>
                    <span>30%</span>
                  </div>
                  <Input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    min={1}
                    max={30}
                    step={0.5}
                    className="mt-2"
                  />
                </div>

                {/* Loan Term */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="loanTerm" className="text-base font-medium">
                      {t("loans.loanTerm")}
                    </Label>
                    <span className="text-lg font-bold text-primary">
                      {loanTerm} {t("loans.months")}
                    </span>
                  </div>
                  <Slider
                    id="loanTerm"
                    min={1}
                    max={60}
                    step={1}
                    value={[loanTerm]}
                    onValueChange={(value) => setLoanTerm(value[0])}
                    className="py-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>1 {t("common.month")}</span>
                    <span>60 {t("loans.months")}</span>
                  </div>
                  <Input
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    min={1}
                    max={60}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary-foreground">
                    <TrendingUp className="w-5 h-5" />
                    {t("loans.monthlyPayment")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl md:text-5xl font-bold">
                    {formatCurrency(calculations.monthlyPayment)}
                  </div>
                  <p className="text-primary-foreground/80 mt-2">
                    {t("common.perMonth")} {loanTerm} {t("loans.months")}
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="card-hover">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-secondary/20 rounded-lg">
                        <DollarSign className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{t("loans.totalPayment")}</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      {formatCurrency(calculations.totalPayment)}
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-accent/20 rounded-lg">
                        <Calendar className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <span className="text-sm text-muted-foreground">{t("loans.totalInterest")}</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      {formatCurrency(calculations.totalInterest)}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2 border-dashed border-primary/30">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3">{t("loans.paymentBreakdown")}</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t("loans.principalAmount")}</span>
                      <span className="font-medium">{formatCurrency(loanAmount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t("loans.interestAmount")}</span>
                      <span className="font-medium">{formatCurrency(calculations.totalInterest)}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between">
                        <span className="font-semibold">{t("loans.totalRepayment")}</span>
                        <span className="font-bold text-primary">
                          {formatCurrency(calculations.totalPayment)}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full btn-hover" size="lg">
                {t("loans.applyForThis")}
              </Button>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            {t("loans.calculatorDisclaimer")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;
