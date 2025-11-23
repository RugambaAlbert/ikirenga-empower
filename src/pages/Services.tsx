import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, PiggyBank, Smartphone, GraduationCap, TrendingUp, Users, Shield, Gift } from "lucide-react";

const Services = () => {
  const savingsProducts = [
    {
      icon: PiggyBank,
      title: "Regular Savings Account",
      description: "Flexible savings with competitive interest rates and easy access to your funds.",
      features: ["Minimum balance: 5,000 RWF", "Interest rate: 8% per annum", "Quarterly interest payments"],
    },
    {
      icon: TrendingUp,
      title: "Fixed Deposit Account",
      description: "Higher returns for committed savings over fixed periods.",
      features: ["Minimum deposit: 50,000 RWF", "Interest rate: up to 12% per annum", "Terms: 6, 12, or 24 months"],
    },
    {
      icon: Users,
      title: "Group Savings Account",
      description: "Collective savings for community groups and associations.",
      features: ["Minimum 5 members", "Discounted loan rates", "Free financial training"],
    },
  ];

  const services = [
    {
      icon: Smartphone,
      title: "Mobile Banking",
      description: "Bank on the go with our secure mobile platform. Check balances, transfer funds, and pay bills anytime, anywhere.",
      features: [
        "24/7 account access",
        "Instant transfers",
        "Bill payments",
        "Transaction history",
      ],
    },
    {
      icon: GraduationCap,
      title: "Financial Education",
      description: "Free workshops and training programs to improve your financial literacy and money management skills.",
      features: [
        "Monthly workshops",
        "Business planning training",
        "Savings strategies",
        "Debt management",
      ],
    },
    {
      icon: Gift,
      title: "Member Benefits",
      description: "Exclusive perks and rewards for our valued members.",
      features: [
        "Annual dividends",
        "Discounted loan rates",
        "Free financial consultation",
        "Community events",
      ],
    },
  ];

  return (
    <div>
      <Hero
        title="Our Services"
        subtitle="Comprehensive financial solutions designed to support your journey to financial independence"
        ctaText="Become a Member"
        ctaLink="/membership"
      />

      {/* Savings Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Savings Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of savings options to match your financial goals and lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {savingsProducts.map((product, index) => (
              <Card key={index} className="card-hover border-border">
                <CardHeader>
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <product.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Shield className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
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
            <h2 className="mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond savings and loans, we offer services to support your complete financial journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-border">
                <CardHeader>
                  <div className="h-14 w-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Shield className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
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
