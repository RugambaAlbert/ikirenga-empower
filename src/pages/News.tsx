import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const News = () => {
  const articles = [
    {
      title: "COOPEC Ikirenga Celebrates 15 Years of Financial Empowerment",
      date: "March 15, 2024",
      category: "Milestone",
      excerpt: "Reflecting on a journey of transforming lives and building stronger communities through accessible financial services.",
      image: "celebration",
    },
    {
      title: "New Mobile Banking App Launches for Members",
      date: "March 10, 2024",
      category: "Technology",
      excerpt: "Experience easier access to your accounts with our new mobile banking platform featuring enhanced security and user-friendly interface.",
      image: "mobile-app",
    },
    {
      title: "Agricultural Loan Program Expands to New Districts",
      date: "March 5, 2024",
      category: "Loans",
      excerpt: "We're extending our agricultural loan services to three new districts, supporting more farmers in growing their businesses.",
      image: "agriculture",
    },
    {
      title: "Financial Literacy Workshop Series Begins",
      date: "February 28, 2024",
      category: "Education",
      excerpt: "Join our free monthly workshops covering savings strategies, investment basics, and small business management.",
      image: "workshop",
    },
    {
      title: "Record Growth: 5,000 New Members in Q1 2024",
      date: "February 20, 2024",
      category: "Growth",
      excerpt: "Our cooperative continues to grow as more people discover the benefits of community-focused financial services.",
      image: "growth",
    },
    {
      title: "Women Entrepreneurs Program Launches",
      date: "February 15, 2024",
      category: "Programs",
      excerpt: "New initiative offers specialized loans and training for women-led businesses, promoting economic empowerment.",
      image: "women-entrepreneurs",
    },
  ];

  const tips = [
    {
      title: "5 Tips for Building Your Emergency Fund",
      description: "Learn how to create a financial safety net for unexpected expenses.",
    },
    {
      title: "Understanding Interest Rates: A Simple Guide",
      description: "Demystifying how interest rates affect your savings and loans.",
    },
    {
      title: "Starting a Small Business: Financial Planning Essentials",
      description: "Key financial considerations when launching your entrepreneurial venture.",
    },
  ];

  return (
    <div>
      <Hero
        title="News & Updates"
        subtitle="Stay informed about the latest developments, announcements, and financial tips from COOPEC Ikirenga"
      />

      {/* Latest News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Latest News</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Catch up on recent announcements and stories from our cooperative community.
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
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{article.excerpt}</CardDescription>
                  <Button variant="link" className="p-0 h-auto text-primary group">
                    Read More
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
            <h2 className="mb-4">Financial Tips & Advice</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical guidance to help you make better financial decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tips.map((tip, index) => (
              <Card key={index} className="card-hover border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{tip.description}</CardDescription>
                  <Button variant="link" className="p-0 h-auto text-primary group">
                    Read Article
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
              <CardTitle className="text-2xl">Stay Updated</CardTitle>
              <CardDescription>
                Subscribe to our newsletter for the latest news, tips, and exclusive member benefits.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <Button className="btn-hover whitespace-nowrap">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default News;
