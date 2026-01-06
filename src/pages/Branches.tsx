import { useTranslation } from "@/contexts/TranslationContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Building2, Store, Crown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Branches = () => {
  const { t } = useTranslation();

  const headquarters = {
    name: t('branches.hqName'),
    location: t('branches.hqLocation'),
  };

  const branches = [
    { name: "KINIHIRA", location: t('branches.kinihiraLocation') },
    { name: "TUMBA", location: t('branches.tumbaLocation') },
    { name: "KAREGAMAZI", location: t('branches.karegamaziLocation') },
    { name: "CYUNGO", location: t('branches.cyungoLocation') },
    { name: "GASIZA", location: t('branches.gasizaLocation') },
    { name: "BASE", location: t('branches.baseLocation') },
  ];

  const outlets = [
    { name: "MIYOVE", location: t('branches.miyoveLocation') },
    { name: "GATETE", location: t('branches.gateteLocation') },
    { name: "SHYORONGI", location: t('branches.shyorongiLocation') },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('branches.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('branches.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Headquarters Section */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary shadow-xl">
              <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Crown className="h-8 w-8" />
                  {t('branches.headquarters')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {headquarters.name}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {headquarters.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">
                {t('branches.branchesTitle')}
              </h2>
            </div>
            <p className="text-muted-foreground">
              {t('branches.branchesSubtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {branches.map((branch, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {branch.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {branch.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outlets Section */}
      <section className="py-12 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Store className="h-8 w-8 text-secondary" />
              <h2 className="text-3xl font-bold text-foreground">
                {t('branches.outletsTitle')}
              </h2>
            </div>
            <p className="text-muted-foreground">
              {t('branches.outletsSubtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {outlets.map((outlet, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-secondary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <Store className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {outlet.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {outlet.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
            {t('branches.visitUs')}
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            {t('branches.contactUs')}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Branches;
