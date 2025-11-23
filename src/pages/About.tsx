import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We prioritize the needs and wellbeing of our members and their communities.",
    },
    {
      icon: Target,
      title: "Integrity",
      description: "We maintain the highest standards of honesty and transparency in all operations.",
    },
    {
      icon: Users,
      title: "Inclusion",
      description: "We believe financial services should be accessible to everyone, regardless of background.",
    },
    {
      icon: Eye,
      title: "Innovation",
      description: "We continuously improve our services to meet the evolving needs of our members.",
    },
  ];

  return (
    <div>
      <Hero
        title="About COOPEC Ikirenga"
        subtitle="Building financial resilience and empowering communities since 2008"
      />

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Founded in 2008, COOPEC Ikirenga began as a small community initiative to provide accessible financial services to underserved populations in Rwanda. What started with just 50 members has grown into a thriving cooperative serving over 50,000 members across multiple regions.
              </p>
              <p className="mb-4">
                Our journey has been one of continuous growth and adaptation. We've expanded our services from basic savings accounts to comprehensive financial solutions including business loans, mobile banking, and financial education programs.
              </p>
              <p>
                Today, we stand proud as one of Rwanda's leading microfinance cooperatives, committed to our founding mission of empowering communities through financial inclusion.
              </p>
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
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide accessible, affordable, and sustainable financial services that empower individuals and communities to achieve economic independence and improve their quality of life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be Rwanda's most trusted and innovative microfinance cooperative, recognized for transforming lives and building prosperous communities through financial inclusion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-hover border-border text-center">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
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
            <h2 className="mb-6">Governance & Leadership</h2>
            <p className="text-lg text-muted-foreground mb-8">
              COOPEC Ikirenga is governed by a Board of Directors elected by our members. Our leadership team brings decades of combined experience in finance, community development, and cooperative management.
            </p>
            <p className="text-muted-foreground">
              We maintain the highest standards of corporate governance, with regular audits, transparent financial reporting, and member-focused decision making. Our governance structure ensures accountability while keeping member interests at the forefront of everything we do.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
