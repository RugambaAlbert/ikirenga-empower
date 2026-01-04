import Hero from "@/components/Hero";
import LoanCalculator from "@/components/LoanCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Sprout, Home, GraduationCap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Loans = () => {
  const loanTypes = [
    {
      icon: Briefcase,
      title: "Business Loans",
      description: "Fuel your entrepreneurial dreams with flexible business financing.",
      amount: "Up to 10,000,000 RWF",
      rate: "Starting at 14% per annum",
      term: "Up to 36 months",
      features: [
        "Quick approval process",
        "Flexible repayment terms",
        "No hidden fees",
        "Business advisory support",
      ],
    },
    {
      icon: Sprout,
      title: "Agricultural Loans",
      description: "Support for farmers and agricultural enterprises to boost productivity.",
      amount: "Up to 5,000,000 RWF",
      rate: "Starting at 12% per annum",
      term: "Up to 24 months",
      features: [
        "Seasonal repayment schedules",
        "Agricultural training included",
        "Group lending options",
        "Insurance available",
      ],
    },
    {
      icon: Home,
      title: "Personal Loans",
      description: "Meet personal needs with our convenient personal loan products.",
      amount: "Up to 3,000,000 RWF",
      rate: "Starting at 16% per annum",
      term: "Up to 24 months",
      features: [
        "Fast processing",
        "Minimal documentation",
        "Emergency loan options",
        "Salary-based repayment",
      ],
    },
    {
      icon: GraduationCap,
      title: "Education Loans",
      description: "Invest in your future with our education financing solutions.",
      amount: "Up to 4,000,000 RWF",
      rate: "Starting at 13% per annum",
      term: "Up to 48 months",
      features: [
        "Covers tuition and supplies",
        "Grace period available",
        "Parent/guardian co-signing",
        "Flexible repayment post-graduation",
      ],
    },
  ];

  const requirements = [
    "Be a registered COOPEC Ikirenga member for at least 3 months",
    "Valid national ID or passport",
    "Proof of income or business registration",
    "Completed loan application form",
    "Collateral or guarantor (depending on loan amount)",
    "Recent bank statements or financial records",
  ];

  return (
    <div>
      <Hero
        title="Loan Products"
        subtitle="Affordable financing solutions to help you achieve your personal and business goals"
        ctaText="Apply Now"
        ctaLink="/contact"
      />

      {/* Loan Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Loan Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the loan that best fits your needs and start building your future today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="card-hover border-border">
                <CardHeader>
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <loan.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{loan.title}</CardTitle>
                  <CardDescription className="text-base">{loan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Loan Amount</span>
                      <span className="text-sm text-primary font-semibold">{loan.amount}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Interest Rate</span>
                      <span className="text-sm text-primary font-semibold">{loan.rate}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Repayment Term</span>
                      <span className="text-sm text-primary font-semibold">{loan.term}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {loan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button className="w-full btn-hover">Apply for This Loan</Button>
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
            <h2 className="mb-6 text-center">Eligibility & Requirements</h2>
            <Card className="border-border">
              <CardHeader>
                <CardTitle>General Requirements</CardTitle>
                <CardDescription>
                  To apply for a loan with COOPEC Ikirenga, you'll need to meet these basic requirements:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
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
            <h2 className="mb-6">How to Apply</h2>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { step: "1", title: "Visit Us", desc: "Come to our office or contact us online" },
                { step: "2", title: "Submit", desc: "Complete application with required documents" },
                { step: "3", title: "Review", desc: "We assess your application within 3-5 days" },
                { step: "4", title: "Receive", desc: "Get your funds and start your project" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link to="/contact">
              <Button size="lg" className="btn-hover">Start Your Application</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loans;
