import { Phone, Mail, Clock } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-primary text-primary-foreground">
      {/* Top bar with contact info */}
      <div className="bg-primary-foreground/10 py-1.5">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="tel:+250788000000" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">+250 788 000 000</span>
            </a>
            <a href="mailto:info@coopecikirenga.rw" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">info@coopecikirenga.rw</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Mon - Fri: 8:00 - 17:00</span>
            <span className="sm:hidden">8:00 - 17:00</span>
          </div>
        </div>
      </div>
      
      {/* Main header with logo and branding */}
      <div className="py-4 sm:py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Logo placeholder - circular emblem */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-primary font-bold text-lg sm:text-xl">CI</span>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                COOPEC IKIRENGA
              </h1>
              <p className="text-xs sm:text-sm text-primary-foreground/80 font-medium">
                {t("heroSubtitle")}
              </p>
            </div>
          </div>
          
          {/* Tagline - hidden on mobile */}
          <div className="hidden lg:block text-right">
            <p className="text-sm font-semibold text-accent">
              Northern Province, Rwanda
            </p>
            <p className="text-xs text-primary-foreground/70">
              Rulindo District • Base Sector
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
