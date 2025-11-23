import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Membership = () => {
  const benefits = [
    "Access to competitive savings and loan products",
    "Lower interest rates compared to commercial banks",
    "Annual dividends based on cooperative performance",
    "Free financial literacy training and workshops",
    "Voting rights in cooperative decisions",
    "Access to mobile banking services",
    "Priority customer service and support",
    "Community networking opportunities",
  ];

  const requirements = [
    { title: "Age", description: "Must be 18 years or older" },
    { title: "ID", description: "Valid national ID or passport" },
    { title: "Fee", description: "One-time membership fee of 5,000 RWF" },
    { title: "Deposit", description: "Minimum initial deposit of 10,000 RWF" },
    { title: "Form", description: "Completed membership application form" },
    { title: "Photo", description: "Two recent passport-size photographs" },
  ];

  const faqs = [
    {
      question: "How long does it take to become a member?",
      answer: "Once you submit your complete application with all required documents, membership is typically processed within 3-5 business days. You'll receive confirmation via phone or email.",
    },
    {
      question: "Can I open a joint account?",
      answer: "Yes, we offer joint savings accounts for spouses or business partners. Both parties must be COOPEC Ikirenga members and provide all necessary documentation.",
    },
    {
      question: "Is my money safe with COOPEC Ikirenga?",
      answer: "Absolutely. We are regulated by the National Bank of Rwanda and maintain strict financial controls. Your deposits are also insured up to regulatory limits.",
    },
    {
      question: "Can I become a member if I live outside Rwanda?",
      answer: "Yes, Rwandans living abroad can become members. You'll need to provide proof of identity and can complete most processes through our online channels with initial verification at our office.",
    },
    {
      question: "What happens if I want to withdraw my membership?",
      answer: "Members can withdraw by submitting a written notice. You'll receive your share capital and savings after settling any outstanding loans, subject to our withdrawal policy.",
    },
  ];

  return (
    <div>
      <Hero
        title="Join COOPEC Ikirenga"
        subtitle="Become part of a thriving financial community committed to your prosperity and growth"
        ctaText="Start Your Application"
        ctaLink="/contact"
      />

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center">Membership Benefits</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              As a COOPEC Ikirenga member, you gain access to exclusive benefits and services designed to support your financial journey.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
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
            <h2 className="mb-6 text-center">Membership Requirements</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Simple, straightforward requirements to get started with COOPEC Ikirenga.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {requirements.map((req, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">{req.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{req.description}</CardDescription>
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
            <h2 className="mb-6 text-center">How to Join</h2>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { step: "1", title: "Download Form", desc: "Get the membership application form" },
                { step: "2", title: "Complete", desc: "Fill in your details and gather documents" },
                { step: "3", title: "Submit", desc: "Bring everything to our office" },
                { step: "4", title: "Start Saving", desc: "Begin your financial journey with us" },
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

            <div className="text-center">
              <Button size="lg" className="btn-hover">
                <Download className="mr-2 h-5 w-5" />
                Download Membership Form
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
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
