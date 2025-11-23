import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, TrendingUp, Users, Shield, Smartphone, GraduationCap, ArrowRight } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Wallet,
      title: "Savings Accounts",
      description: "Secure and flexible savings options with competitive interest rates to help you grow your wealth.",
      link: "/services",
    },
    {
      icon: TrendingUp,
      title: "Business Loans",
      description: "Tailored loan products to help entrepreneurs and businesses thrive and expand.",
      link: "/loans",
    },
    {
      icon: Smartphone,
      title: "Mobile Banking",
      description: "Access your accounts anytime, anywhere with our secure mobile banking platform.",
      link: "/services",
    },
    {
      icon: GraduationCap,
      title: "Financial Education",
      description: "Free financial literacy programs to help you make informed financial decisions.",
      link: "/services",
    },
  ];

  const stats = [
    { icon: Users, number: "50,000+", label: "Active Members" },
    { icon: Wallet, number: "$10M+", label: "Total Savings" },
    { icon: TrendingUp, number: "$8M+", label: "Loans Disbursed" },
    { icon: Shield, number: "15+", label: "Years of Trust" },
  ];

  return (
    <div>
      <Hero
        title="Empowering Communities Through Financial Inclusion"
        subtitle="Join COOPEC Ikirenga and access affordable financial services designed to help you save, invest, and grow your future."
        ctaText="Become a Member"
        ctaLink="/membership"
        secondaryCtaText="Apply for a Loan"
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
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to meet your needs and help you achieve your goals.
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
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Join thousands of members who are building their financial future with COOPEC Ikirenga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/membership">
              <Button size="lg" variant="secondary" className="btn-hover">
                Join Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary btn-hover">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
