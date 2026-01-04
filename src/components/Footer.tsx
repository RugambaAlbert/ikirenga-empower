import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">COOPEC IKIRENGA</h3>
            <p className="text-sm opacity-90 mb-4">{t("footer.description")}</p>
            <div className="flex space-x-3">
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:opacity-80 transition-opacity">{t("nav.about")}</Link></li>
              <li><Link to="/services" className="hover:opacity-80 transition-opacity">{t("nav.services")}</Link></li>
              <li><Link to="/loans" className="hover:opacity-80 transition-opacity">{t("nav.loans")}</Link></li>
              <li><Link to="/membership" className="hover:opacity-80 transition-opacity">{t("nav.membership")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer.ourServices")}</h4>
            <ul className="space-y-2 text-sm">
              <li>{t("services.savingsAccounts")}</li>
              <li>{t("services.businessLoans")}</li>
              <li>{t("services.mobileBanking")}</li>
              <li>{t("services.financialEducation")}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer.contactInfo")}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2"><MapPin size={18} className="mt-0.5 flex-shrink-0" /><span>Kigali, Rwanda</span></li>
              <li className="flex items-center space-x-2"><Phone size={18} className="flex-shrink-0" /><span>+250 788 123 456</span></li>
              <li className="flex items-center space-x-2"><Mail size={18} className="flex-shrink-0" /><span>info@coopecikirenga.rw</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} COOPEC Ikirenga. {t("footer.allRights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
