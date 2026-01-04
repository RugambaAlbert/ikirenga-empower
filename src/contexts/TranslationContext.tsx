import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Language = "en" | "fr" | "rw";

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
    rw: string;
  };
}

const translations: Translations = {
  // Navbar
  "nav.home": { en: "Home", fr: "Accueil", rw: "Ahabanza" },
  "nav.about": { en: "About Us", fr: "À Propos", rw: "Abo Turibo" },
  "nav.services": { en: "Services", fr: "Services", rw: "Serivisi" },
  "nav.loans": { en: "Loans", fr: "Prêts", rw: "Inguzanyo" },
  "nav.membership": { en: "Membership", fr: "Adhésion", rw: "Kwiyandikisha" },
  "nav.news": { en: "News", fr: "Actualités", rw: "Amakuru" },
  "nav.contact": { en: "Contact", fr: "Contact", rw: "Twandikire" },
  "nav.login": { en: "Login", fr: "Connexion", rw: "Injira" },
  "nav.logout": { en: "Logout", fr: "Déconnexion", rw: "Gusohoka" },
  "nav.joinNow": { en: "Join Now", fr: "Adhérer", rw: "Iyandikishe" },
  "nav.admin": { en: "Admin", fr: "Admin", rw: "Ubuyobozi" },

  // Hero
  "hero.title": { 
    en: "Empowering Communities Through Financial Inclusion", 
    fr: "Autonomiser les Communautés par l'Inclusion Financière", 
    rw: "Gutera Inkunga Abaturage Binyuze mu Kwinjizwa mu by'Imari" 
  },
  "hero.subtitle": { 
    en: "Join COOPEC Ikirenga and access affordable financial services designed to help you save, invest, and grow your future.", 
    fr: "Rejoignez COOPEC Ikirenga et accédez à des services financiers abordables conçus pour vous aider à épargner, investir et faire croître votre avenir.", 
    rw: "Injira muri COOPEC Ikirenga ubone serivisi z'imari zishoboka zagenewe kugufasha kubika, gushora, no gukura ejo hazaza hawe." 
  },
  "hero.becomeMember": { en: "Become a Member", fr: "Devenir Membre", rw: "Ba Umunyamuryango" },
  "hero.applyLoan": { en: "Apply for a Loan", fr: "Demander un Prêt", rw: "Saba Inguzanyo" },

  // Stats
  "stats.activeMembers": { en: "Active Members", fr: "Membres Actifs", rw: "Abanyamuryango Bakora" },
  "stats.totalSavings": { en: "Total Savings", fr: "Épargne Totale", rw: "Ubwizigame Bwose" },
  "stats.loansDelivered": { en: "Loans Disbursed", fr: "Prêts Décaissés", rw: "Inguzanyo Zatanzwe" },
  "stats.yearsOfTrust": { en: "Years of Trust", fr: "Années de Confiance", rw: "Imyaka y'Icyizere" },

  // Services
  "services.title": { en: "Our Services", fr: "Nos Services", rw: "Serivisi Zacu" },
  "services.subtitle": { 
    en: "Comprehensive financial solutions tailored to meet your needs and help you achieve your goals.", 
    fr: "Des solutions financières complètes adaptées à vos besoins pour vous aider à atteindre vos objectifs.", 
    rw: "Ibisubizo by'imari byuzuye byubatswe kugira ngo bihuze n'ibyo ukeneye kandi bikugiremo ubufasha kugera ku ntego zawe." 
  },
  "services.savingsAccounts": { en: "Savings Accounts", fr: "Comptes d'Épargne", rw: "Konti y'Ubwizigame" },
  "services.savingsDesc": { 
    en: "Secure and flexible savings options with competitive interest rates to help you grow your wealth.", 
    fr: "Options d'épargne sécurisées et flexibles avec des taux d'intérêt compétitifs pour faire croître votre patrimoine.", 
    rw: "Uburyo bwo kubika butanga umutekano kandi bushyigikira n'inyungu zishimishije zo gukuza umutungo wawe." 
  },
  "services.businessLoans": { en: "Business Loans", fr: "Prêts aux Entreprises", rw: "Inguzanyo z'Ubucuruzi" },
  "services.businessDesc": { 
    en: "Tailored loan products to help entrepreneurs and businesses thrive and expand.", 
    fr: "Produits de prêt adaptés pour aider les entrepreneurs et les entreprises à prospérer et à se développer.", 
    rw: "Ibicuruzwa by'inguzanyo byubatswe kugira ngo bifashe abahinzi n'ubucuruzi gukura no kwaguka." 
  },
  "services.mobileBanking": { en: "Mobile Banking", fr: "Banque Mobile", rw: "Banki kuri Telefone" },
  "services.mobileDesc": { 
    en: "Access your accounts anytime, anywhere with our secure mobile banking platform.", 
    fr: "Accédez à vos comptes à tout moment, n'importe où avec notre plateforme bancaire mobile sécurisée.", 
    rw: "Gera kuri konti yawe igihe cyose, ahandi hose ukoresheje urubuga rwacu rwa banki kuri telefone rwumutekano." 
  },
  "services.financialEducation": { en: "Financial Education", fr: "Éducation Financière", rw: "Uburezi bw'Imari" },
  "services.educationDesc": { 
    en: "Free financial literacy programs to help you make informed financial decisions.", 
    fr: "Programmes gratuits d'éducation financière pour vous aider à prendre des décisions financières éclairées.", 
    rw: "Gahunda z'uburezi bw'imari ku buntu zo kugufasha gufata ibyemezo by'imari bifite amakuru." 
  },
  "services.learnMore": { en: "Learn More", fr: "En Savoir Plus", rw: "Menya Byinshi" },

  // Testimonials
  "testimonials.title": { en: "What Our Members Say", fr: "Ce Que Disent Nos Membres", rw: "Icyo Abanyamuryango Bacu Bavuga" },
  "testimonials.subtitle": { 
    en: "Real stories from real members who have transformed their lives with COOPEC Ikirenga.", 
    fr: "De vraies histoires de vrais membres qui ont transformé leur vie avec COOPEC Ikirenga.", 
    rw: "Inkuru z'ukuri z'abanyamuryango nyakuri bahindutse ubuzima bwabo na COOPEC Ikirenga." 
  },
  "testimonials.memberStories": { en: "Member Stories", fr: "Histoires des Membres", rw: "Inkuru z'Abanyamuryango" },

  // CTA
  "cta.ready": { en: "Ready to Get Started?", fr: "Prêt à Commencer?", rw: "Witeguye Gutangira?" },
  "cta.join": { 
    en: "Join thousands of members who are building their financial future with COOPEC Ikirenga.", 
    fr: "Rejoignez des milliers de membres qui construisent leur avenir financier avec COOPEC Ikirenga.", 
    rw: "Injira mu banyamuryango ibihumbi bubaka ejo hazaza habo h'imari na COOPEC Ikirenga." 
  },
  "cta.contactUs": { en: "Contact Us", fr: "Contactez-Nous", rw: "Twandikire" },

  // Auth
  "auth.memberLogin": { en: "Member Login", fr: "Connexion Membre", rw: "Kwinjira kw'Umunyamuryango" },
  "auth.createAccount": { en: "Create Account", fr: "Créer un Compte", rw: "Fungura Konti" },
  "auth.accessPortal": { 
    en: "Access your COOPEC Ikirenga member portal", 
    fr: "Accédez à votre portail membre COOPEC Ikirenga", 
    rw: "Gera ku rubuga rw'abanyamuryango ba COOPEC Ikirenga" 
  },
  "auth.joinJourney": { 
    en: "Join COOPEC Ikirenga and start your journey", 
    fr: "Rejoignez COOPEC Ikirenga et commencez votre parcours", 
    rw: "Injira muri COOPEC Ikirenga utangire urugendo rwawe" 
  },
  "auth.fullName": { en: "Full Name", fr: "Nom Complet", rw: "Amazina Yombi" },
  "auth.email": { en: "Email Address", fr: "Adresse Email", rw: "Aderesi ya Imeyili" },
  "auth.password": { en: "Password", fr: "Mot de Passe", rw: "Ijambo ry'Ibanga" },
  "auth.login": { en: "Login", fr: "Connexion", rw: "Injira" },
  "auth.pleaseWait": { en: "Please wait...", fr: "Veuillez patienter...", rw: "Tegereza..." },
  "auth.noAccount": { en: "Don't have an account?", fr: "Vous n'avez pas de compte?", rw: "Nta konti ufite?" },
  "auth.hasAccount": { en: "Already have an account?", fr: "Vous avez déjà un compte?", rw: "Usanzwe ufite konti?" },
  "auth.createAccountLink": { en: "Create an account", fr: "Créer un compte", rw: "Fungura konti" },
  "auth.loginInstead": { en: "Login instead", fr: "Se connecter", rw: "Injira" },
  "auth.forgotPassword": { en: "Forgot Password?", fr: "Mot de passe oublié?", rw: "Wibagiwe ijambo ry'ibanga?" },
  "auth.resetPassword": { en: "Reset Password", fr: "Réinitialiser le Mot de Passe", rw: "Hindura Ijambo ry'Ibanga" },
  "auth.sendResetLink": { en: "Send Reset Link", fr: "Envoyer le Lien", rw: "Ohereza Ihuza" },
  "auth.backToLogin": { en: "Back to Login", fr: "Retour à la Connexion", rw: "Subira ku Kwinjira" },
  "auth.newPassword": { en: "New Password", fr: "Nouveau Mot de Passe", rw: "Ijambo ry'Ibanga Rishya" },
  "auth.confirmPassword": { en: "Confirm Password", fr: "Confirmer le Mot de Passe", rw: "Emeza Ijambo ry'Ibanga" },
  "auth.updatePassword": { en: "Update Password", fr: "Mettre à Jour le Mot de Passe", rw: "Hindura Ijambo ry'Ibanga" },

  // Contact
  "contact.title": { en: "Get in Touch", fr: "Contactez-Nous", rw: "Twandikire" },
  "contact.subtitle": { 
    en: "We're here to help you with any questions about our services, membership, or loans", 
    fr: "Nous sommes là pour vous aider avec toute question sur nos services, adhésion ou prêts", 
    rw: "Turi hano kukugirira ubufasha ku bibazo byose bijyanye na serivisi zacu, kwiyandikisha, cyangwa inguzanyo" 
  },
  "contact.visitUs": { en: "Visit Us", fr: "Visitez-Nous", rw: "Dusure" },
  "contact.callUs": { en: "Call Us", fr: "Appelez-Nous", rw: "Duhamagare" },
  "contact.emailUs": { en: "Email Us", fr: "Envoyez-Nous un Email", rw: "Dutumire Imeyili" },
  "contact.businessHours": { en: "Business Hours", fr: "Heures d'Ouverture", rw: "Amasaha y'Akazi" },
  "contact.sendMessage": { en: "Send Us a Message", fr: "Envoyez-Nous un Message", rw: "Dutumire Ubutumwa" },
  "contact.formDesc": { 
    en: "Fill out the form below and we'll get back to you as soon as possible.", 
    fr: "Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.", 
    rw: "Uzuza ifishi iri hepfo kandi tuzagusubiza vuba bishoboka." 
  },
  "contact.fullName": { en: "Full Name", fr: "Nom Complet", rw: "Amazina Yombi" },
  "contact.phone": { en: "Phone Number", fr: "Numéro de Téléphone", rw: "Nimero ya Telefone" },
  "contact.subject": { en: "Subject", fr: "Sujet", rw: "Ingingo" },
  "contact.message": { en: "Message", fr: "Message", rw: "Ubutumwa" },
  "contact.send": { en: "Send Message", fr: "Envoyer", rw: "Ohereza" },
  "contact.sending": { en: "Sending...", fr: "Envoi...", rw: "Kohereza..." },
  "contact.visitOffice": { en: "Visit Our Office", fr: "Visitez Notre Bureau", rw: "Sura Ibiro Byacu" },
  "contact.officeDesc": { 
    en: "Come meet us in person at our main branch in Kigali.", 
    fr: "Venez nous rencontrer en personne à notre succursale principale à Kigali.", 
    rw: "Ino uze uduhure mu maso ku ishami ryacu rinini i Kigali." 
  },
  "contact.connectWithUs": { en: "Connect With Us", fr: "Connectez-Vous Avec Nous", rw: "Duhure" },
  "contact.socialDesc": { 
    en: "Follow us on social media for updates and financial tips.", 
    fr: "Suivez-nous sur les réseaux sociaux pour les mises à jour et conseils financiers.", 
    rw: "Dukurikire ku mbuga nkoranyambaga kugira ngo ubone amakuru n'inama z'imari." 
  },

  // Admin
  "admin.title": { en: "Admin Dashboard", fr: "Tableau de Bord Admin", rw: "Ububiko bw'Ubuyobozi" },
  "admin.contactSubmissions": { en: "Contact Submissions", fr: "Soumissions de Contact", rw: "Ubutumwa Bwakiriwe" },
  "admin.members": { en: "Members", fr: "Membres", rw: "Abanyamuryango" },
  "admin.status": { en: "Status", fr: "Statut", rw: "Imiterere" },
  "admin.pending": { en: "Pending", fr: "En Attente", rw: "Bitegerejwe" },
  "admin.reviewed": { en: "Reviewed", fr: "Examiné", rw: "Byasuzumwe" },
  "admin.resolved": { en: "Resolved", fr: "Résolu", rw: "Byakemutse" },
  "admin.actions": { en: "Actions", fr: "Actions", rw: "Ibikorwa" },
  "admin.view": { en: "View", fr: "Voir", rw: "Reba" },
  "admin.delete": { en: "Delete", fr: "Supprimer", rw: "Siba" },
  "admin.noSubmissions": { en: "No contact submissions yet.", fr: "Aucune soumission de contact.", rw: "Nta butumwa bwakiriwe." },
  "admin.noMembers": { en: "No members found.", fr: "Aucun membre trouvé.", rw: "Nta munyamuryango ubonetse." },

  // Loans
  "loans.title": { en: "Loan Products", fr: "Produits de Prêt", rw: "Ibicuruzwa by'Inguzanyo" },
  "loans.subtitle": { 
    en: "Affordable financing solutions to help you achieve your personal and business goals", 
    fr: "Solutions de financement abordables pour vous aider à atteindre vos objectifs personnels et professionnels", 
    rw: "Ibisubizo by'imari bishoboka kugufasha kugera ku ntego zawe bwite n'iz'ubucuruzi" 
  },
  "loans.applyNow": { en: "Apply Now", fr: "Postuler Maintenant", rw: "Saba Ubu" },
  "loans.calculatePayment": { en: "Calculate Payment", fr: "Calculer le Paiement", rw: "Bala Ubwishyu" },
  "loans.calculator": { en: "Loan Calculator", fr: "Calculateur de Prêt", rw: "Imibare y'Inguzanyo" },
  "loans.calcSubtitle": { 
    en: "Use our loan calculator to estimate your monthly payments and plan your finances effectively.", 
    fr: "Utilisez notre calculateur de prêt pour estimer vos paiements mensuels et planifier efficacement vos finances.", 
    rw: "Koresha imibare yacu y'inguzanyo kugira ngo ugereranye ubwishyu bwawe bwa buri kwezi kandi utegure neza imari yawe." 
  },
  "loans.loanAmount": { en: "Loan Amount", fr: "Montant du Prêt", rw: "Ingano y'Inguzanyo" },
  "loans.interestRate": { en: "Annual Interest Rate", fr: "Taux d'Intérêt Annuel", rw: "Inyungu ya Buri Mwaka" },
  "loans.loanTerm": { en: "Loan Term (Months)", fr: "Durée du Prêt (Mois)", rw: "Igihe cy'Inguzanyo (Amezi)" },
  "loans.monthlyPayment": { en: "Monthly Payment", fr: "Paiement Mensuel", rw: "Ubwishyu bwa Buri Kwezi" },
  "loans.totalPayment": { en: "Total Payment", fr: "Paiement Total", rw: "Ubwishyu Bwose" },
  "loans.totalInterest": { en: "Total Interest", fr: "Intérêt Total", rw: "Inyungu Yose" },
  "loans.applyForThis": { en: "Apply for This Loan", fr: "Demander ce Prêt", rw: "Saba Iyi Nguzanyo" },

  // Footer
  "footer.description": { 
    en: "Your trusted partner in financial empowerment and community development since 2009.", 
    fr: "Votre partenaire de confiance pour l'autonomisation financière et le développement communautaire depuis 2009.", 
    rw: "Umuhanzi wawe wizera mu gutera inkunga y'imari no guteza imbere umuryango kuva 2009." 
  },
  "footer.quickLinks": { en: "Quick Links", fr: "Liens Rapides", rw: "Amahuza y'Vuba" },
  "footer.ourServices": { en: "Our Services", fr: "Nos Services", rw: "Serivisi Zacu" },
  "footer.contactInfo": { en: "Contact Info", fr: "Coordonnées", rw: "Amakuru yo Gutwandikira" },
  "footer.allRights": { en: "All rights reserved.", fr: "Tous droits réservés.", rw: "Uburenganzira bwose burabitswe." },

  // Common
  "common.loading": { en: "Loading...", fr: "Chargement...", rw: "Gutegereza..." },
  "common.error": { en: "Error", fr: "Erreur", rw: "Ikosa" },
  "common.success": { en: "Success", fr: "Succès", rw: "Byagenze Neza" },
  "common.cancel": { en: "Cancel", fr: "Annuler", rw: "Hagarika" },
  "common.save": { en: "Save", fr: "Enregistrer", rw: "Bika" },
  "common.close": { en: "Close", fr: "Fermer", rw: "Funga" },
};

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  }, []);

  const t = useCallback((key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language] || translation.en || key;
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};

export const languages = [
  { code: "en" as Language, name: "English", flag: "🇬🇧" },
  { code: "fr" as Language, name: "Français", flag: "🇫🇷" },
  { code: "rw" as Language, name: "Kinyarwanda", flag: "🇷🇼" },
];
