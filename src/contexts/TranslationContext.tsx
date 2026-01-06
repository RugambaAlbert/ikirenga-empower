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
  "nav.branches": { en: "Branches", fr: "Agences", rw: "Amashami" },
  "nav.news": { en: "News", fr: "Actualités", rw: "Amakuru" },
  "nav.contact": { en: "Contact", fr: "Contact", rw: "Twandikire" },
  "nav.login": { en: "Login", fr: "Connexion", rw: "Injira" },
  "nav.logout": { en: "Logout", fr: "Déconnexion", rw: "Gusohoka" },
  "nav.joinNow": { en: "Join Now", fr: "Adhérer", rw: "Iyandikishe" },
  "nav.admin": { en: "Admin", fr: "Admin", rw: "Ubuyobozi" },

  // Branches Page
  "branches.title": { en: "Our Branches & Outlets", fr: "Nos Agences et Points de Service", rw: "Amashami n'Ahantu ho Gukorera" },
  "branches.subtitle": { 
    en: "Find COOPEC IKIRENGA near you. We operate across the Northern Province of Rwanda.", 
    fr: "Trouvez COOPEC IKIRENGA près de chez vous. Nous opérons dans toute la Province du Nord du Rwanda.", 
    rw: "Shakisha COOPEC IKIRENGA hafi yawe. Dukora mu Ntara y'Amajyaruguru y'u Rwanda." 
  },
  "branches.headquarters": { en: "Headquarters", fr: "Siège Social", rw: "Ikigo Nkuru" },
  "branches.hqName": { en: "COOPEC IKIRENGA Head Office", fr: "Siège de COOPEC IKIRENGA", rw: "Ikigo Nkuru cya COOPEC IKIRENGA" },
  "branches.hqLocation": { 
    en: "Northern Province, Rulindo District, Base Sector (Base Market - Road Kigali Musanze)", 
    fr: "Province du Nord, District de Rulindo, Secteur Base (Marché Base - Route Kigali Musanze)", 
    rw: "Intara y'Amajyaruguru, Akarere ka Rulindo, Umurenge wa Base (Isoko rya Base - Umuhanda Kigali Musanze)" 
  },
  "branches.branchesTitle": { en: "Our Branches", fr: "Nos Agences", rw: "Amashami Yacu" },
  "branches.branchesSubtitle": { 
    en: "Full-service branches offering complete banking services", 
    fr: "Agences offrant des services bancaires complets", 
    rw: "Amashami atanga serivisi zose za banki" 
  },
  "branches.outletsTitle": { en: "Service Outlets", fr: "Points de Service", rw: "Ahantu ho Gukorera" },
  "branches.outletsSubtitle": { 
    en: "Convenient locations for deposits, withdrawals, and basic transactions", 
    fr: "Emplacements pratiques pour dépôts, retraits et transactions de base", 
    rw: "Ahantu hafasha gutereka, gukuramo, no gukora ibikorwa by'ibanze" 
  },
  "branches.kinihiraLocation": { en: "Rulindo District, Kinihira Sector", fr: "District de Rulindo, Secteur Kinihira", rw: "Akarere ka Rulindo, Umurenge wa Kinihira" },
  "branches.tumbaLocation": { en: "Rulindo District, Tumba Sector", fr: "District de Rulindo, Secteur Tumba", rw: "Akarere ka Rulindo, Umurenge wa Tumba" },
  "branches.karegamaziLocation": { en: "Rulindo District, Karegamazi Sector", fr: "District de Rulindo, Secteur Karegamazi", rw: "Akarere ka Rulindo, Umurenge wa Karegamazi" },
  "branches.cyungoLocation": { en: "Rulindo District, Cyungo Sector", fr: "District de Rulindo, Secteur Cyungo", rw: "Akarere ka Rulindo, Umurenge wa Cyungo" },
  "branches.gasizaLocation": { en: "Rulindo District, Gasiza Sector", fr: "District de Rulindo, Secteur Gasiza", rw: "Akarere ka Rulindo, Umurenge wa Gasiza" },
  "branches.baseLocation": { en: "Rulindo District, Base Sector", fr: "District de Rulindo, Secteur Base", rw: "Akarere ka Rulindo, Umurenge wa Base" },
  "branches.miyoveLocation": { en: "Rulindo District, Miyove Sector", fr: "District de Rulindo, Secteur Miyove", rw: "Akarere ka Rulindo, Umurenge wa Miyove" },
  "branches.gateteLocation": { en: "Rulindo District, Gatete Sector", fr: "District de Rulindo, Secteur Gatete", rw: "Akarere ka Rulindo, Umurenge wa Gatete" },
  "branches.shyorongiLocation": { en: "Shyorongi Sector", fr: "Secteur Shyorongi", rw: "Umurenge wa Shyorongi" },
  "branches.visitUs": { en: "Need more information about our locations? Contact us today!", fr: "Besoin de plus d'informations sur nos emplacements? Contactez-nous!", rw: "Ukeneye amakuru menshi ku mashami yacu? Twandikire uyu munsi!" },
  "branches.contactUs": { en: "Contact Us", fr: "Contactez-Nous", rw: "Twandikire" },

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

  // Services Page
  "services.heroTitle": { en: "Our Services", fr: "Nos Services", rw: "Serivisi Zacu" },
  "services.heroSubtitle": { 
    en: "Comprehensive financial solutions designed to support your journey to financial independence", 
    fr: "Des solutions financières complètes conçues pour soutenir votre chemin vers l'indépendance financière", 
    rw: "Ibisubizo by'imari byuzuye byateguwe gushyigikira urugendo rwawe rwo kugera ku bwigenge bw'imari" 
  },
  "services.becomeMember": { en: "Become a Member", fr: "Devenir Membre", rw: "Ba Umunyamuryango" },
  "services.savingsProducts": { en: "Savings Products", fr: "Produits d'Épargne", rw: "Ibicuruzwa by'Ubwizigame" },
  "services.savingsProductsSubtitle": { 
    en: "Choose from our range of savings options to match your financial goals and lifestyle.", 
    fr: "Choisissez parmi notre gamme d'options d'épargne pour correspondre à vos objectifs financiers et votre style de vie.", 
    rw: "Hitamo mu bicuruzwa byacu by'ubwizigame bihuye n'intego zawe z'imari n'imibereho yawe." 
  },
  "services.regularSavings": { en: "Regular Savings Account", fr: "Compte d'Épargne Régulier", rw: "Konti y'Ubwizigame Busanzwe" },
  "services.regularSavingsDesc": { 
    en: "Flexible savings with competitive interest rates and easy access to your funds.", 
    fr: "Épargne flexible avec des taux d'intérêt compétitifs et un accès facile à vos fonds.", 
    rw: "Ubwizigame bushoboka bufite inyungu zishimishije no kugera ku mafaranga yawe byoroshye." 
  },
  "services.minBalance": { en: "Minimum balance: 5,000 RWF", fr: "Solde minimum: 5,000 RWF", rw: "Igipimo ntarengwa: 5,000 RWF" },
  "services.interestRate8": { en: "Interest rate: 8% per annum", fr: "Taux d'intérêt: 8% par an", rw: "Inyungu: 8% ku mwaka" },
  "services.quarterlyInterest": { en: "Quarterly interest payments", fr: "Paiements d'intérêts trimestriels", rw: "Ubwishyu bw'inyungu bya buri gihembwe" },
  "services.fixedDeposit": { en: "Fixed Deposit Account", fr: "Compte de Dépôt Fixe", rw: "Konti y'Ubwizigame Buhamye" },
  "services.fixedDepositDesc": { 
    en: "Higher returns for committed savings over fixed periods.", 
    fr: "Des rendements plus élevés pour une épargne engagée sur des périodes fixes.", 
    rw: "Inyungu nyinshi ku bwizigame buhamye ku gihe kihamye." 
  },
  "services.minDeposit": { en: "Minimum deposit: 50,000 RWF", fr: "Dépôt minimum: 50,000 RWF", rw: "Igipimo ntarengwa: 50,000 RWF" },
  "services.interestRate12": { en: "Interest rate: up to 12% per annum", fr: "Taux d'intérêt: jusqu'à 12% par an", rw: "Inyungu: kugeza 12% ku mwaka" },
  "services.terms6to24": { en: "Terms: 6, 12, or 24 months", fr: "Durées: 6, 12 ou 24 mois", rw: "Igihe: 6, 12, cyangwa 24 amezi" },
  "services.groupSavings": { en: "Group Savings Account", fr: "Compte d'Épargne de Groupe", rw: "Konti y'Ubwizigame bw'Itsinda" },
  "services.groupSavingsDesc": { 
    en: "Collective savings for community groups and associations.", 
    fr: "Épargne collective pour les groupes communautaires et associations.", 
    rw: "Ubwizigame rusange bw'amatsinda y'abaturage n'imiryango." 
  },
  "services.min5Members": { en: "Minimum 5 members", fr: "Minimum 5 membres", rw: "Nibura abanyamuryango 5" },
  "services.discountedRates": { en: "Discounted loan rates", fr: "Taux de prêt réduits", rw: "Inyungu z'inguzanyo ziri hasi" },
  "services.freeTraining": { en: "Free financial training", fr: "Formation financière gratuite", rw: "Amahugurwa y'imari ku buntu" },
  "services.additionalServices": { en: "Additional Services", fr: "Services Supplémentaires", rw: "Serivisi Zinyongera" },
  "services.additionalServicesSubtitle": { 
    en: "Beyond savings and loans, we offer services to support your complete financial journey.", 
    fr: "Au-delà de l'épargne et des prêts, nous offrons des services pour soutenir votre parcours financier complet.", 
    rw: "Usibye ubwizigame n'inguzanyo, dutanga serivisi zishyigikira urugendo rwawe rwose rw'imari." 
  },
  "services.mobileBankingTitle": { en: "Mobile Banking", fr: "Banque Mobile", rw: "Banki kuri Telefone" },
  "services.mobileBankingDesc": { 
    en: "Bank on the go with our secure mobile platform. Check balances, transfer funds, and pay bills anytime, anywhere.", 
    fr: "Faites vos opérations bancaires en déplacement avec notre plateforme mobile sécurisée. Vérifiez vos soldes, transférez des fonds et payez vos factures à tout moment, n'importe où.", 
    rw: "Koresha banki aho uri hose ukoresheje urubuga rwacu rwa telefone rufite umutekano. Reba amafaranga ufite, ohereza amafaranga, wishyure fagitire igihe cyose, aho uri hose." 
  },
  "services.247Access": { en: "24/7 account access", fr: "Accès au compte 24/7", rw: "Kugera kuri konti 24/7" },
  "services.instantTransfers": { en: "Instant transfers", fr: "Transferts instantanés", rw: "Kohereza amafaranga ako kanya" },
  "services.billPayments": { en: "Bill payments", fr: "Paiements de factures", rw: "Kwishyura fagitire" },
  "services.transactionHistory": { en: "Transaction history", fr: "Historique des transactions", rw: "Amateka y'ibikorwa" },
  "services.financialEducationTitle": { en: "Financial Education", fr: "Éducation Financière", rw: "Uburezi bw'Imari" },
  "services.financialEducationDesc": { 
    en: "Free workshops and training programs to improve your financial literacy and money management skills.", 
    fr: "Ateliers gratuits et programmes de formation pour améliorer votre culture financière et vos compétences en gestion d'argent.", 
    rw: "Amaseminari ku buntu na gahunda z'amahugurwa yo kongera ubumenyi bwawe bw'imari n'ubuhanga bwo gucunga amafaranga." 
  },
  "services.monthlyWorkshops": { en: "Monthly workshops", fr: "Ateliers mensuels", rw: "Amaseminari ya buri kwezi" },
  "services.businessPlanning": { en: "Business planning training", fr: "Formation en planification d'entreprise", rw: "Amahugurwa yo gutegura ubucuruzi" },
  "services.savingsStrategies": { en: "Savings strategies", fr: "Stratégies d'épargne", rw: "Ingamba zo kubika" },
  "services.debtManagement": { en: "Debt management", fr: "Gestion de la dette", rw: "Gucunga imyenda" },
  "services.memberBenefits": { en: "Member Benefits", fr: "Avantages des Membres", rw: "Inyungu z'Abanyamuryango" },
  "services.memberBenefitsDesc": { 
    en: "Exclusive perks and rewards for our valued members.", 
    fr: "Avantages et récompenses exclusifs pour nos membres estimés.", 
    rw: "Inyungu n'ibihembo bidasanzwe by'abanyamuryango bacu bakomeye." 
  },
  "services.annualDividends": { en: "Annual dividends", fr: "Dividendes annuels", rw: "Inyungu za buri mwaka" },
  "services.discountedLoanRates": { en: "Discounted loan rates", fr: "Taux de prêt réduits", rw: "Inyungu z'inguzanyo ziri hasi" },
  "services.freeConsultation": { en: "Free financial consultation", fr: "Consultation financière gratuite", rw: "Inama z'imari ku buntu" },
  "services.communityEvents": { en: "Community events", fr: "Événements communautaires", rw: "Ibikorwa by'umuryango" },

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

  // About Page
  "about.heroTitle": { en: "About COOPEC Ikirenga", fr: "À Propos de COOPEC Ikirenga", rw: "Abo Turi COOPEC Ikirenga" },
  "about.heroSubtitle": { 
    en: "A Financial Cooperative empowering communities in Rwanda's Northern Province", 
    fr: "Une Coopérative Financière qui autonomise les communautés dans la Province du Nord du Rwanda", 
    rw: "Koperative y'Imari itera inkunga abaturage mu Ntara y'Amajyaruguru y'u Rwanda" 
  },
  "about.ourStory": { en: "Our Story", fr: "Notre Histoire", rw: "Amateka Yacu" },
  "about.storyParagraph1": { 
    en: "COOPEC IKIRENGA is a Financial Cooperative operating in the Northern Province of Rwanda. Its creation resulted from the merger of five SACCOs (COOPEC ITI, COOPEC CODEMARU, CSTCR SACCO, CSPKI and TRASO) that decided to consolidate into one single entity in 2023 after an assessment that highlighted a set of challenges that individual SACCOs were unable to handle.", 
    fr: "COOPEC IKIRENGA est une Coopérative Financière opérant dans la Province du Nord du Rwanda. Sa création résulte de la fusion de cinq SACCO (COOPEC ITI, COOPEC CODEMARU, CSTCR SACCO, CSPKI et TRASO) qui ont décidé de se consolider en une seule entité en 2023 après une évaluation qui a mis en évidence un ensemble de défis que les SACCO individuelles ne pouvaient pas gérer.", 
    rw: "COOPEC IKIRENGA ni Koperative y'Imari ikora mu Ntara y'Amajyaruguru y'u Rwanda. Ishingwa ryayo ryavuye mu guhuza amakoperative atanu (COOPEC ITI, COOPEC CODEMARU, CSTCR SACCO, CSPKI na TRASO) yiyemeje kuba ikigo kimwe mu 2023 nyuma y'isuzuma ryerekanye ibibazo byinshi amakoperative yihariye atari ashoboye gukemura." 
  },
  "about.storyParagraph2": { 
    en: "The feasibility study conducted jointly by BNR, RCA, AMIR and RULINDO District revealed that these SACCOs had limited capacity to provide needed services. Among the highlighted issues were limited liquidity level, lack of competitiveness, lower capital base, inaccurate financial resources, lack of innovative financial products, limited technological infrastructure and security standards.", 
    fr: "L'étude de faisabilité menée conjointement par BNR, RCA, AMIR et le District de RULINDO a révélé que ces SACCO avaient une capacité limitée à fournir les services nécessaires. Parmi les problèmes mis en évidence figuraient un niveau de liquidité limité, un manque de compétitivité, une base de capital réduite, des ressources financières inexactes, un manque de produits financiers innovants, une infrastructure technologique limitée et des normes de sécurité insuffisantes.", 
    rw: "Ubushakashatsi bw'ibishoboka bwakoreshejwe na BNR, RCA, AMIR n'Akarere ka RULINDO bwerekana ko aya makoperative yari afite ubushobozi buke bwo gutanga serivisi zikenewe. Mu bibazo byagaragajwe harimo urwego ruto rw'amafaranga ashobora gukoreshwa, kubura kwihangana, igipimo cy'umutungo gito, amafaranga adakwiye, kubura ibicuruzwa by'imari bishya, ikoranabuhanga ry'amakuru rigaragaza n'amategeko y'umutekano." 
  },
  "about.storyParagraph3": { 
    en: "After discovering all these challenges, the promising solution was to merge into one SACCO named \"COOPEC IKIRENGA\" that would operate as one entity where the former SACCOs would become branches. COOPEC IKIRENGA has a new governance and organizational structure complying with the laws and regulations governing cooperative organizations and microfinance institutions in Rwanda.", 
    fr: "Après avoir découvert tous ces défis, la solution prometteuse était de fusionner en un seul SACCO nommé \"COOPEC IKIRENGA\" qui fonctionnerait comme une seule entité où les anciens SACCO deviendraient des succursales. COOPEC IKIRENGA dispose d'une nouvelle structure de gouvernance et organisationnelle conforme aux lois et règlements régissant les organisations coopératives et les institutions de microfinance au Rwanda.", 
    rw: "Nyuma yo kubona izi nzitizi zose, igisubizo cyizewe cyari ugushyira hamwe amakoperative mu koperative imwe yitwa \"COOPEC IKIRENGA\" yakoraga nk'ikigo kimwe aho amakoperative yabanjirije yabaye amashami. COOPEC IKIRENGA ifite imiterere mishya y'ubutegetsi n'imiyoborere ikurikiza amategeko n'amabwiriza agenga imiryango y'amakoperative n'ibigo by'imari nto mu Rwanda." 
  },
  "about.ourMission": { en: "Our Mission", fr: "Notre Mission", rw: "Intego Yacu" },
  "about.missionText": { 
    en: "To provide accessible, affordable, and sustainable financial services that empower individuals and communities in Rwanda's Northern Province to achieve economic independence and improve their quality of life.", 
    fr: "Fournir des services financiers accessibles, abordables et durables qui permettent aux individus et aux communautés de la Province du Nord du Rwanda d'atteindre l'indépendance économique et d'améliorer leur qualité de vie.", 
    rw: "Gutanga serivisi z'imari zishoboka, zishoboka, kandi zirambye zitera inkunga abantu n'abaturage mu Ntara y'Amajyaruguru y'u Rwanda kugera ku bwigenge bw'ubukungu no kunoza ubuzima bwabo." 
  },
  "about.ourVision": { en: "Our Vision", fr: "Notre Vision", rw: "Icyo Dushaka" },
  "about.visionText": { 
    en: "To be the most trusted and innovative financial cooperative in Rwanda's Northern Province, recognized for transforming lives and building prosperous communities through financial inclusion.", 
    fr: "Être la coopérative financière la plus fiable et innovante de la Province du Nord du Rwanda, reconnue pour transformer des vies et bâtir des communautés prospères par l'inclusion financière.", 
    rw: "Kuba koperative y'imari yizerwa cyane kandi ihindura mu Ntara y'Amajyaruguru y'u Rwanda, izwi cyane mu guhindura ubuzima no kubaka abaturage batunganye binyuze mu kwinjizwa mu by'imari." 
  },
  "about.ourValues": { en: "Our Values", fr: "Nos Valeurs", rw: "Indangagaciro Zacu" },
  "about.valuesSubtitle": { 
    en: "These core principles guide every decision we make and every service we provide.", 
    fr: "Ces principes fondamentaux guident chaque décision que nous prenons et chaque service que nous offrons.", 
    rw: "Izi ngingo z'ingenzi ziyobora buri cyemezo dufata na buri serivisi dutanga." 
  },
  "about.communityFirst": { en: "Community First", fr: "Communauté d'Abord", rw: "Abaturage Mbere" },
  "about.communityDesc": { 
    en: "We prioritize the needs and wellbeing of our members and their communities across Rulindo District.", 
    fr: "Nous priorisons les besoins et le bien-être de nos membres et de leurs communautés dans le District de Rulindo.", 
    rw: "Dushyira imbere ibyo abanyamuryango bacu bakeneye n'imibereho myiza yabo n'abaturage babo mu Karere ka Rulindo." 
  },
  "about.integrity": { en: "Integrity", fr: "Intégrité", rw: "Ubunyangamugayo" },
  "about.integrityDesc": { 
    en: "We maintain the highest standards of honesty and transparency in all operations.", 
    fr: "Nous maintenons les normes les plus élevées d'honnêteté et de transparence dans toutes les opérations.", 
    rw: "Dufata ingamba zo hejuru z'ubudahemuka no kugaragara mu bikorwa byose." 
  },
  "about.inclusion": { en: "Inclusion", fr: "Inclusion", rw: "Kwinjizwa" },
  "about.inclusionDesc": { 
    en: "We believe financial services should be accessible to everyone, regardless of background.", 
    fr: "Nous croyons que les services financiers devraient être accessibles à tous, quel que soit leur origine.", 
    rw: "Twizeye ko serivisi z'imari zigomba kuboneka ku muntu wese, uko yava aho yava hose." 
  },
  "about.innovation": { en: "Innovation", fr: "Innovation", rw: "Ibishya" },
  "about.innovationDesc": { 
    en: "We continuously improve our services with modern technology and innovative financial products to meet the evolving needs of our members.", 
    fr: "Nous améliorons continuellement nos services avec une technologie moderne et des produits financiers innovants pour répondre aux besoins évolutifs de nos membres.", 
    rw: "Dukomeza kunoza serivisi zacu n'ikoranabuhanga rishya n'ibicuruzwa by'imari bishya kugira ngo bihuze n'ibyo abanyamuryango bacu bakeneye bihinduka." 
  },
  "about.governance": { en: "Governance & Leadership", fr: "Gouvernance et Leadership", rw: "Ubutegetsi n'Ubuyobozi" },
  "about.governanceText1": { 
    en: "COOPEC Ikirenga has a new governance and organizational structure complying with the laws and regulations governing cooperative organizations and microfinance institutions in Rwanda. Our leadership team is elected by members and brings extensive experience in finance, community development, and cooperative management.", 
    fr: "COOPEC Ikirenga dispose d'une nouvelle structure de gouvernance et organisationnelle conforme aux lois et règlements régissant les organisations coopératives et les institutions de microfinance au Rwanda. Notre équipe de direction est élue par les membres et apporte une vaste expérience en finance, développement communautaire et gestion coopérative.", 
    rw: "COOPEC Ikirenga ifite imiterere mishya y'ubutegetsi n'imiyoborere ikurikiza amategeko n'amabwiriza agenga imiryango y'amakoperative n'ibigo by'imari nto mu Rwanda. Itsinda ryacu ry'ubuyobozi ritowe n'abanyamuryango kandi rizana uburambe bunini mu by'imari, iterambere ry'umuryango, no gucunga koperative." 
  },
  "about.governanceText2": { 
    en: "We maintain the highest standards of corporate governance, with regular audits, transparent financial reporting, and member-focused decision making. Our five former SACCOs now operate as branches, ensuring local accessibility while benefiting from consolidated resources and expertise.", 
    fr: "Nous maintenons les normes les plus élevées de gouvernance d'entreprise, avec des audits réguliers, des rapports financiers transparents et une prise de décision axée sur les membres. Nos cinq anciens SACCO fonctionnent maintenant comme des succursales, garantissant l'accessibilité locale tout en bénéficiant de ressources et d'une expertise consolidées.", 
    rw: "Dufata ingamba zo hejuru z'ubutegetsi bw'ikigo, hamwe n'isuzuma rihoraho, raporo z'imari zigaragara, no gufata ibyemezo bishingiye ku banyamuryango. Amakoperative atanu yabanjirije ubu akora nk'amashami, atanga ubushobozi bwo kugera hafi mu gihe bungukira ku mbaraga n'ubuhanga byahujwe." 
  },

  // Loans Page
  "loans.heroTitle": { en: "Loan Products", fr: "Produits de Prêt", rw: "Ibicuruzwa by'Inguzanyo" },
  "loans.heroSubtitle": { 
    en: "Affordable financing solutions to help you achieve your personal and business goals", 
    fr: "Solutions de financement abordables pour vous aider à atteindre vos objectifs personnels et professionnels", 
    rw: "Ibisubizo by'imari bishoboka kugufasha kugera ku ntego zawe bwite n'iz'ubucuruzi" 
  },
  "loans.applyNow": { en: "Apply Now", fr: "Postuler Maintenant", rw: "Saba Ubu" },
  "loans.ourLoanProducts": { en: "Our Loan Products", fr: "Nos Produits de Prêt", rw: "Ibicuruzwa by'Inguzanyo Byacu" },
  "loans.chooseTheBest": { 
    en: "Choose the loan that best fits your needs and start building your future today.", 
    fr: "Choisissez le prêt qui correspond le mieux à vos besoins et commencez à construire votre avenir aujourd'hui.", 
    rw: "Hitamo inguzanyo ihuye cyane n'ibyo ukeneye utangire kubaka ejo hazaza hawe uyu munsi." 
  },
  "loans.businessLoans": { en: "Business Loans", fr: "Prêts aux Entreprises", rw: "Inguzanyo z'Ubucuruzi" },
  "loans.businessLoansDesc": { 
    en: "Fuel your entrepreneurial dreams with flexible business financing.", 
    fr: "Alimentez vos rêves d'entrepreneur avec un financement d'entreprise flexible.", 
    rw: "Kuzuza inzozi zawe z'ubucuruzi n'imari y'ubucuruzi ishoboka." 
  },
  "loans.agriculturalLoans": { en: "Agricultural Loans", fr: "Prêts Agricoles", rw: "Inguzanyo z'Ubuhinzi" },
  "loans.agriculturalLoansDesc": { 
    en: "Support for farmers and agricultural enterprises to boost productivity.", 
    fr: "Soutien aux agriculteurs et entreprises agricoles pour augmenter la productivité.", 
    rw: "Inkunga ku bahinzi n'ubucuruzi bw'ubuhinzi kugira ngo kongere umusaruro." 
  },
  "loans.personalLoans": { en: "Personal Loans", fr: "Prêts Personnels", rw: "Inguzanyo Bwite" },
  "loans.personalLoansDesc": { 
    en: "Meet personal needs with our convenient personal loan products.", 
    fr: "Répondez à vos besoins personnels avec nos produits de prêt personnel pratiques.", 
    rw: "Kuzuza ibyo ukeneye bwite n'ibicuruzwa byacu by'inguzanyo bwite byoroshye." 
  },
  "loans.educationLoans": { en: "Education Loans", fr: "Prêts pour l'Éducation", rw: "Inguzanyo z'Uburezi" },
  "loans.educationLoansDesc": { 
    en: "Invest in your future with our education financing solutions.", 
    fr: "Investissez dans votre avenir avec nos solutions de financement de l'éducation.", 
    rw: "Shora mu ejo hazaza hawe n'ibisubizo byacu by'imari y'uburezi." 
  },
  "loans.loanAmount": { en: "Loan Amount", fr: "Montant du Prêt", rw: "Ingano y'Inguzanyo" },
  "loans.interestRate": { en: "Interest Rate", fr: "Taux d'Intérêt", rw: "Inyungu" },
  "loans.repaymentTerm": { en: "Repayment Term", fr: "Durée de Remboursement", rw: "Igihe cyo Kwishyura" },
  "loans.upTo": { en: "Up to", fr: "Jusqu'à", rw: "Kugeza" },
  "loans.startingAt": { en: "Starting at", fr: "À partir de", rw: "Gutangira kuri" },
  "loans.perAnnum": { en: "per annum", fr: "par an", rw: "ku mwaka" },
  "loans.months": { en: "months", fr: "mois", rw: "amezi" },
  "loans.quickApproval": { en: "Quick approval process", fr: "Processus d'approbation rapide", rw: "Uburyo bwihuse bwo kwemeza" },
  "loans.flexibleRepayment": { en: "Flexible repayment terms", fr: "Conditions de remboursement flexibles", rw: "Igihe cyo kwishyura gishoboka" },
  "loans.noHiddenFees": { en: "No hidden fees", fr: "Pas de frais cachés", rw: "Nta mafaranga ahishwe" },
  "loans.businessAdvisory": { en: "Business advisory support", fr: "Soutien conseil aux entreprises", rw: "Inkunga y'inama z'ubucuruzi" },
  "loans.seasonalRepayment": { en: "Seasonal repayment schedules", fr: "Calendriers de remboursement saisonniers", rw: "Gahunda yo kwishyura y'ibihe" },
  "loans.agriculturalTraining": { en: "Agricultural training included", fr: "Formation agricole incluse", rw: "Amahugurwa y'ubuhinzi arimo" },
  "loans.groupLending": { en: "Group lending options", fr: "Options de prêt de groupe", rw: "Uburyo bwo gukopesha itsinda" },
  "loans.insuranceAvailable": { en: "Insurance available", fr: "Assurance disponible", rw: "Ubwishingizi buboneka" },
  "loans.fastProcessing": { en: "Fast processing", fr: "Traitement rapide", rw: "Gutunganya vuba" },
  "loans.minimalDocumentation": { en: "Minimal documentation", fr: "Documentation minimale", rw: "Inyandiko nke" },
  "loans.emergencyOptions": { en: "Emergency loan options", fr: "Options de prêt d'urgence", rw: "Uburyo bw'inguzanyo za byihutirwa" },
  "loans.salaryBased": { en: "Salary-based repayment", fr: "Remboursement basé sur le salaire", rw: "Kwishyura bishingiye ku mushahara" },
  "loans.coversTuition": { en: "Covers tuition and supplies", fr: "Couvre les frais de scolarité et fournitures", rw: "Ihemba amafranga y'ishuri n'ibikoresho" },
  "loans.gracePeriod": { en: "Grace period available", fr: "Période de grâce disponible", rw: "Igihe cyo gutegereza kiboneka" },
  "loans.parentCoSigning": { en: "Parent/guardian co-signing", fr: "Co-signature parent/tuteur", rw: "Gusinya hamwe n'umubyeyi" },
  "loans.flexiblePostGrad": { en: "Flexible repayment post-graduation", fr: "Remboursement flexible après graduation", rw: "Kwishyura gushoboka nyuma yo kurangiza" },
  "loans.applyForThis": { en: "Apply for This Loan", fr: "Demander ce Prêt", rw: "Saba Iyi Nguzanyo" },
  "loans.calculator": { en: "Loan Calculator", fr: "Calculateur de Prêt", rw: "Imibare y'Inguzanyo" },
  "loans.calcSubtitle": { 
    en: "Use our loan calculator to estimate your monthly payments and plan your finances effectively.", 
    fr: "Utilisez notre calculateur de prêt pour estimer vos paiements mensuels et planifier efficacement vos finances.", 
    rw: "Koresha imibare yacu y'inguzanyo kugira ngo ugereranye ubwishyu bwawe bwa buri kwezi kandi utegure neza imari yawe." 
  },
  "loans.loanDetails": { en: "Loan Details", fr: "Détails du Prêt", rw: "Amakuru y'Inguzanyo" },
  "loans.annualInterest": { en: "Annual Interest Rate", fr: "Taux d'Intérêt Annuel", rw: "Inyungu ya Buri Mwaka" },
  "loans.loanTerm": { en: "Loan Term (Months)", fr: "Durée du Prêt (Mois)", rw: "Igihe cy'Inguzanyo (Amezi)" },
  "loans.monthlyPayment": { en: "Monthly Payment", fr: "Paiement Mensuel", rw: "Ubwishyu bwa Buri Kwezi" },
  "loans.totalPayment": { en: "Total Payment", fr: "Paiement Total", rw: "Ubwishyu Bwose" },
  "loans.totalInterest": { en: "Total Interest", fr: "Intérêt Total", rw: "Inyungu Yose" },
  "loans.paymentBreakdown": { en: "Payment Breakdown", fr: "Répartition des Paiements", rw: "Ugabanya Ubwishyu" },
  "loans.principalAmount": { en: "Principal Amount", fr: "Montant Principal", rw: "Ingano y'Ibanze" },
  "loans.interestAmount": { en: "Interest Amount", fr: "Montant des Intérêts", rw: "Ingano y'Inyungu" },
  "loans.totalRepayment": { en: "Total Repayment", fr: "Remboursement Total", rw: "Ubwishyu Bwose" },
  "loans.calculatorDisclaimer": { 
    en: "* This calculator provides estimates only. Actual loan terms may vary based on your credit profile and eligibility. Contact us for accurate loan details.", 
    fr: "* Ce calculateur fournit uniquement des estimations. Les conditions de prêt réelles peuvent varier en fonction de votre profil de crédit et de votre éligibilité. Contactez-nous pour des détails de prêt précis.", 
    rw: "* Iyi mibare itanga ibipimo gusa. Amategeko y'inguzanyo nyayo ashobora guhinduka bishingiye ku miterere yawe y'inguzanyo n'ubushoborane. Twandikire kugira ngo ubone amakuru y'inguzanyo nyayo." 
  },
  "loans.eligibility": { en: "Eligibility & Requirements", fr: "Éligibilité et Exigences", rw: "Ibisabwa n'Ibyangombwa" },
  "loans.generalRequirements": { en: "General Requirements", fr: "Exigences Générales", rw: "Ibisabwa Rusange" },
  "loans.requirementsDesc": { 
    en: "To apply for a loan with COOPEC Ikirenga, you'll need to meet these basic requirements:", 
    fr: "Pour demander un prêt auprès de COOPEC Ikirenga, vous devrez remplir ces exigences de base:", 
    rw: "Kugira ngo usabe inguzanyo muri COOPEC Ikirenga, uzakenera kuzuza ibi bisabwa by'ibanze:" 
  },
  "loans.req1": { en: "Be a registered COOPEC Ikirenga member for at least 3 months", fr: "Être membre enregistré de COOPEC Ikirenga depuis au moins 3 mois", rw: "Kuba umunyamuryango wanditswe wa COOPEC Ikirenga nibura amezi 3" },
  "loans.req2": { en: "Valid national ID or passport", fr: "Carte d'identité nationale ou passeport valide", rw: "Indangamuntu cyangwa pasiporo" },
  "loans.req3": { en: "Proof of income or business registration", fr: "Preuve de revenu ou enregistrement d'entreprise", rw: "Icyemezo cy'umushahara cyangwa kwandikwa kw'ubucuruzi" },
  "loans.req4": { en: "Completed loan application form", fr: "Formulaire de demande de prêt rempli", rw: "Ifishi yo gusaba inguzanyo yuzuye" },
  "loans.req5": { en: "Collateral or guarantor (depending on loan amount)", fr: "Garantie ou garant (selon le montant du prêt)", rw: "Ingwate cyangwa umwishingizi (bishingiye ku ngano y'inguzanyo)" },
  "loans.req6": { en: "Recent bank statements or financial records", fr: "Relevés bancaires récents ou registres financiers", rw: "Inyandiko za banki cyangwa z'imari za vuba" },
  "loans.howToApply": { en: "How to Apply", fr: "Comment Postuler", rw: "Uburyo bwo Gusaba" },
  "loans.step1Title": { en: "Visit Us", fr: "Visitez-Nous", rw: "Dusure" },
  "loans.step1Desc": { en: "Come to our office or contact us online", fr: "Venez à notre bureau ou contactez-nous en ligne", rw: "Ino mu biro byacu cyangwa utwandikire kuri interineti" },
  "loans.step2Title": { en: "Submit", fr: "Soumettre", rw: "Ohereza" },
  "loans.step2Desc": { en: "Complete application with required documents", fr: "Compléter la demande avec les documents requis", rw: "Uzuza gusaba hamwe n'inyandiko zisabwa" },
  "loans.step3Title": { en: "Review", fr: "Examen", rw: "Isuzuma" },
  "loans.step3Desc": { en: "We assess your application within 3-5 days", fr: "Nous évaluons votre demande dans les 3-5 jours", rw: "Dusuzuma gusaba kwawe mu minsi 3-5" },
  "loans.step4Title": { en: "Receive", fr: "Recevoir", rw: "Kubona" },
  "loans.step4Desc": { en: "Get your funds and start your project", fr: "Obtenez vos fonds et démarrez votre projet", rw: "Bona amafaranga yawe utangire umushinga wawe" },
  "loans.startApplication": { en: "Start Your Application", fr: "Commencer Votre Demande", rw: "Tangira Gusaba" },

  // Membership Page
  "membership.heroTitle": { en: "Join COOPEC Ikirenga", fr: "Rejoindre COOPEC Ikirenga", rw: "Injira muri COOPEC Ikirenga" },
  "membership.heroSubtitle": { 
    en: "Become part of a thriving financial community committed to your prosperity and growth", 
    fr: "Faites partie d'une communauté financière prospère engagée dans votre prospérité et croissance", 
    rw: "Ba mu muryango w'imari ukora neza wiyemeje ubukire bwawe no gukura" 
  },
  "membership.startApplication": { en: "Start Your Application", fr: "Commencer Votre Demande", rw: "Tangira Gusaba" },
  "membership.benefits": { en: "Membership Benefits", fr: "Avantages de l'Adhésion", rw: "Inyungu z'Umunyamuryango" },
  "membership.benefitsSubtitle": { 
    en: "As a COOPEC Ikirenga member, you gain access to exclusive benefits and services designed to support your financial journey.", 
    fr: "En tant que membre de COOPEC Ikirenga, vous avez accès à des avantages et services exclusifs conçus pour soutenir votre parcours financier.", 
    rw: "Nk'umunyamuryango wa COOPEC Ikirenga, ubona inyungu n'serivisi zidasanzwe zagenewe gushyigikira urugendo rwawe rw'imari." 
  },
  "membership.benefit1": { en: "Access to competitive savings and loan products", fr: "Accès à des produits d'épargne et de prêt compétitifs", rw: "Kubona ibicuruzwa by'ubwizigame n'inguzanyo bishimishije" },
  "membership.benefit2": { en: "Lower interest rates compared to commercial banks", fr: "Taux d'intérêt plus bas par rapport aux banques commerciales", rw: "Inyungu nke ugereranije na banki z'ubucuruzi" },
  "membership.benefit3": { en: "Annual dividends based on cooperative performance", fr: "Dividendes annuels basés sur la performance de la coopérative", rw: "Inyungu za buri mwaka zishingiye ku mikorere ya koperative" },
  "membership.benefit4": { en: "Free financial literacy training and workshops", fr: "Formation gratuite en littératie financière et ateliers", rw: "Amahugurwa y'ubumenyi bw'imari ku buntu n'amaseminari" },
  "membership.benefit5": { en: "Voting rights in cooperative decisions", fr: "Droits de vote dans les décisions de la coopérative", rw: "Uburenganzira bwo gutora mu byemezo bya koperative" },
  "membership.benefit6": { en: "Access to mobile banking services", fr: "Accès aux services bancaires mobiles", rw: "Kubona serivisi za banki kuri telefone" },
  "membership.benefit7": { en: "Priority customer service and support", fr: "Service client et support prioritaires", rw: "Serivisi y'umukiriya n'inkunga by'ibanze" },
  "membership.benefit8": { en: "Community networking opportunities", fr: "Opportunités de réseautage communautaire", rw: "Amahirwe yo guhuza n'abaturage" },
  "membership.requirements": { en: "Membership Requirements", fr: "Exigences d'Adhésion", rw: "Ibisabwa by'Umunyamuryango" },
  "membership.requirementsSubtitle": { 
    en: "Simple, straightforward requirements to get started with COOPEC Ikirenga.", 
    fr: "Exigences simples et directes pour commencer avec COOPEC Ikirenga.", 
    rw: "Ibisabwa byoroshye kandi bisobanutse kugira ngo utangire na COOPEC Ikirenga." 
  },
  "membership.reqAge": { en: "Age", fr: "Âge", rw: "Imyaka" },
  "membership.reqAgeDesc": { en: "Must be 18 years or older", fr: "Doit avoir 18 ans ou plus", rw: "Ugomba kuba ufite imyaka 18 cyangwa irenga" },
  "membership.reqID": { en: "ID", fr: "Pièce d'Identité", rw: "Indangamuntu" },
  "membership.reqIDDesc": { en: "Valid national ID or passport", fr: "Carte d'identité nationale ou passeport valide", rw: "Indangamuntu cyangwa pasiporo ikora" },
  "membership.reqFee": { en: "Fee", fr: "Frais", rw: "Amafaranga" },
  "membership.reqFeeDesc": { en: "One-time membership fee of 5,000 RWF", fr: "Frais d'adhésion uniques de 5,000 RWF", rw: "Amafaranga yo kwiyandikisha rimwe gusa ya 5,000 RWF" },
  "membership.reqDeposit": { en: "Deposit", fr: "Dépôt", rw: "Ibyinjijwe" },
  "membership.reqDepositDesc": { en: "Minimum initial deposit of 10,000 RWF", fr: "Dépôt initial minimum de 10,000 RWF", rw: "Amafaranga yo gutangira nibura 10,000 RWF" },
  "membership.reqForm": { en: "Form", fr: "Formulaire", rw: "Ifishi" },
  "membership.reqFormDesc": { en: "Completed membership application form", fr: "Formulaire de demande d'adhésion rempli", rw: "Ifishi yo gusaba ubunyamuryango yuzuye" },
  "membership.reqPhoto": { en: "Photo", fr: "Photo", rw: "Ifoto" },
  "membership.reqPhotoDesc": { en: "Two recent passport-size photographs", fr: "Deux photos récentes format passeport", rw: "Amafoto abiri mashya y'ingano ya pasiporo" },
  "membership.howToJoin": { en: "How to Join", fr: "Comment Adhérer", rw: "Uburyo bwo Kwinjira" },
  "membership.step1Title": { en: "Download Form", fr: "Télécharger le Formulaire", rw: "Kuramo Ifishi" },
  "membership.step1Desc": { en: "Get the membership application form", fr: "Obtenez le formulaire de demande d'adhésion", rw: "Bona ifishi yo gusaba ubunyamuryango" },
  "membership.step2Title": { en: "Complete", fr: "Remplir", rw: "Uzuza" },
  "membership.step2Desc": { en: "Fill in your details and gather documents", fr: "Remplissez vos informations et rassemblez les documents", rw: "Uzuza amakuru yawe ukusanye inyandiko" },
  "membership.step3Title": { en: "Submit", fr: "Soumettre", rw: "Ohereza" },
  "membership.step3Desc": { en: "Bring everything to our office", fr: "Apportez tout à notre bureau", rw: "Zana byose mu biro byacu" },
  "membership.step4Title": { en: "Start Saving", fr: "Commencer à Épargner", rw: "Tangira Kubika" },
  "membership.step4Desc": { en: "Begin your financial journey with us", fr: "Commencez votre parcours financier avec nous", rw: "Tangira urugendo rwawe rw'imari natwe" },
  "membership.downloadForm": { en: "Download Membership Form", fr: "Télécharger le Formulaire d'Adhésion", rw: "Kuramo Ifishi y'Ubunyamuryango" },
  "membership.faq": { en: "Frequently Asked Questions", fr: "Questions Fréquemment Posées", rw: "Ibibazo Bikunze Kubazwa" },
  "membership.faq1Q": { en: "How long does it take to become a member?", fr: "Combien de temps faut-il pour devenir membre?", rw: "Bifata igihe kingana iki kugira ngo mbe umunyamuryango?" },
  "membership.faq1A": { 
    en: "Once you submit your complete application with all required documents, membership is typically processed within 3-5 business days. You'll receive confirmation via phone or email.", 
    fr: "Une fois que vous avez soumis votre demande complète avec tous les documents requis, l'adhésion est généralement traitée dans les 3-5 jours ouvrables. Vous recevrez une confirmation par téléphone ou email.", 
    rw: "Iyo wohereje gusaba kwawe kuzuye hamwe n'inyandiko zose zisabwa, ubunyamuryango busanzwe butunganywa mu minsi 3-5 y'akazi. Uzabona icyemezo kuri telefone cyangwa imeyili." 
  },
  "membership.faq2Q": { en: "Can I open a joint account?", fr: "Puis-je ouvrir un compte joint?", rw: "Nshobora gufungura konti ishyiraho?" },
  "membership.faq2A": { 
    en: "Yes, we offer joint savings accounts for spouses or business partners. Both parties must be COOPEC Ikirenga members and provide all necessary documentation.", 
    fr: "Oui, nous offrons des comptes d'épargne joints pour les conjoints ou partenaires commerciaux. Les deux parties doivent être membres de COOPEC Ikirenga et fournir toute la documentation nécessaire.", 
    rw: "Yego, dutanga konti z'ubwizigame zishyiraho ku bashakanye cyangwa abafatanyabikorwa b'ubucuruzi. Impande zombi zigomba kuba abanyamuryango ba COOPEC Ikirenga kandi batange inyandiko zose zikenewe." 
  },
  "membership.faq3Q": { en: "Is my money safe with COOPEC Ikirenga?", fr: "Mon argent est-il en sécurité avec COOPEC Ikirenga?", rw: "Amafaranga yanjye afite umutekano muri COOPEC Ikirenga?" },
  "membership.faq3A": { 
    en: "Absolutely. We are regulated by the National Bank of Rwanda and maintain strict financial controls. Your deposits are also insured up to regulatory limits.", 
    fr: "Absolument. Nous sommes réglementés par la Banque Nationale du Rwanda et maintenons des contrôles financiers stricts. Vos dépôts sont également assurés jusqu'aux limites réglementaires.", 
    rw: "Nta kabuza. Turategekwa na Banki Nkuru y'u Rwanda kandi dufata ingamba z'imari zikomeye. Ibyo wabitse na byo birafite ubwishingizi kugeza ku mipaka y'amategeko." 
  },
  "membership.faq4Q": { en: "Can I become a member if I live outside Rwanda?", fr: "Puis-je devenir membre si je vis en dehors du Rwanda?", rw: "Nshobora kuba umunyamuryango niba ntaba mu Rwanda?" },
  "membership.faq4A": { 
    en: "Yes, Rwandans living abroad can become members. You'll need to provide proof of identity and can complete most processes through our online channels with initial verification at our office.", 
    fr: "Oui, les Rwandais vivant à l'étranger peuvent devenir membres. Vous devrez fournir une preuve d'identité et pouvez compléter la plupart des processus via nos canaux en ligne avec une vérification initiale dans notre bureau.", 
    rw: "Yego, Abanyarwanda baba mu mahanga bashobora kuba abanyamuryango. Uzakenera gutanga icyemezo cyo kumenya kandi ushobora gusozera inzira nyinshi binyuze mu nzira zacu za interineti hamwe no kugenzura bwa mbere mu biro byacu." 
  },
  "membership.faq5Q": { en: "What happens if I want to withdraw my membership?", fr: "Que se passe-t-il si je veux retirer mon adhésion?", rw: "Bigenda bite niba nshaka kuva mu bunyamuryango?" },
  "membership.faq5A": { 
    en: "Members can withdraw by submitting a written notice. You'll receive your share capital and savings after settling any outstanding loans, subject to our withdrawal policy.", 
    fr: "Les membres peuvent se retirer en soumettant un avis écrit. Vous recevrez votre capital social et votre épargne après avoir réglé tout prêt en cours, sous réserve de notre politique de retrait.", 
    rw: "Abanyamuryango bashobora kuva bohereza inyandiko. Uzabona umutungo wawe n'ubwizigame bwawe nyuma yo kwishyura inguzanyo iyo ari yo yose isigaye, hakurikijwe politiki yacu yo kuva." 
  },

  // News Page
  "news.heroTitle": { en: "News & Updates", fr: "Actualités et Mises à Jour", rw: "Amakuru n'Ibishya" },
  "news.heroSubtitle": { 
    en: "Stay informed about the latest developments, announcements, and financial tips from COOPEC Ikirenga", 
    fr: "Restez informé des derniers développements, annonces et conseils financiers de COOPEC Ikirenga", 
    rw: "Kora kumenya amakuru agezweho, amatangazo, n'inama z'imari za COOPEC Ikirenga" 
  },
  "news.latestNews": { en: "Latest News", fr: "Dernières Actualités", rw: "Amakuru Mashya" },
  "news.latestNewsSubtitle": { 
    en: "Catch up on recent announcements and stories from our cooperative community.", 
    fr: "Rattrapez les récentes annonces et histoires de notre communauté coopérative.", 
    rw: "Menya amatangazo n'inkuru za vuba z'umuryango wacu wa koperative." 
  },
  "news.readMore": { en: "Read More", fr: "Lire Plus", rw: "Soma Byinshi" },
  "news.article1Title": { en: "COOPEC Ikirenga Celebrates 15 Years of Financial Empowerment", fr: "COOPEC Ikirenga Célèbre 15 Ans d'Autonomisation Financière", rw: "COOPEC Ikirenga Yizihiza Imyaka 15 yo Gutera Inkunga y'Imari" },
  "news.article1Category": { en: "Milestone", fr: "Étape", rw: "Intambwe" },
  "news.article1Excerpt": { 
    en: "Reflecting on a journey of transforming lives and building stronger communities through accessible financial services.", 
    fr: "Réfléchir à un parcours de transformation de vies et de construction de communautés plus fortes grâce à des services financiers accessibles.", 
    rw: "Kuzirikana urugendo rwo guhindura ubuzima no kubaka abaturage bakomeye binyuze muri serivisi z'imari zishoboka." 
  },
  "news.article2Title": { en: "New Mobile Banking App Launches for Members", fr: "Nouvelle Application Bancaire Mobile pour les Membres", rw: "Porogaramu Nshya ya Banki kuri Telefone yatangiye ku Banyamuryango" },
  "news.article2Category": { en: "Technology", fr: "Technologie", rw: "Ikoranabuhanga" },
  "news.article2Excerpt": { 
    en: "Experience easier access to your accounts with our new mobile banking platform featuring enhanced security and user-friendly interface.", 
    fr: "Bénéficiez d'un accès plus facile à vos comptes avec notre nouvelle plateforme bancaire mobile offrant une sécurité renforcée et une interface conviviale.", 
    rw: "Bona uburyo bworoshye bwo kugera kuri konti yawe n'urubuga rwacu rushya rwa banki kuri telefone rufite umutekano wongerewe n'uburyo bworoshye bwo gukoresha." 
  },
  "news.article3Title": { en: "Agricultural Loan Program Expands to New Districts", fr: "Le Programme de Prêt Agricole s'Étend à de Nouveaux Districts", rw: "Gahunda y'Inguzanyo z'Ubuhinzi Yagutse mu Turere Dushya" },
  "news.article3Category": { en: "Loans", fr: "Prêts", rw: "Inguzanyo" },
  "news.article3Excerpt": { 
    en: "We're extending our agricultural loan services to three new districts, supporting more farmers in growing their businesses.", 
    fr: "Nous étendons nos services de prêt agricole à trois nouveaux districts, soutenant plus d'agriculteurs dans le développement de leurs entreprises.", 
    rw: "Turimo kwagura serivisi zacu z'inguzanyo z'ubuhinzi mu turere dutatu dushya, dushyigikira abahinzi benshi mu gukuza ubucuruzi bwabo." 
  },
  "news.article4Title": { en: "Financial Literacy Workshop Series Begins", fr: "Début de la Série d'Ateliers sur la Littératie Financière", rw: "Amaseminari y'Ubumenyi bw'Imari Yatangiye" },
  "news.article4Category": { en: "Education", fr: "Éducation", rw: "Uburezi" },
  "news.article4Excerpt": { 
    en: "Join our free monthly workshops covering savings strategies, investment basics, and small business management.", 
    fr: "Rejoignez nos ateliers mensuels gratuits couvrant les stratégies d'épargne, les bases de l'investissement et la gestion des petites entreprises.", 
    rw: "Injira mu maseminari yacu ya buri kwezi ku buntu ahuza ingamba zo kubika, ibijyanye no gushora, no gucunga ubucuruzi buto." 
  },
  "news.article5Title": { en: "Record Growth: 5,000 New Members in Q1 2024", fr: "Croissance Record: 5,000 Nouveaux Membres au T1 2024", rw: "Gukura Kudasanzwe: Abanyamuryango Bashya 5,000 mu Gice cya 1 cya 2024" },
  "news.article5Category": { en: "Growth", fr: "Croissance", rw: "Gukura" },
  "news.article5Excerpt": { 
    en: "Our cooperative continues to grow as more people discover the benefits of community-focused financial services.", 
    fr: "Notre coopérative continue de croître à mesure que plus de gens découvrent les avantages des services financiers axés sur la communauté.", 
    rw: "Koperative yacu irakomeza gukura uko abantu benshi babona inyungu za serivisi z'imari zishingiye ku muryango." 
  },
  "news.article6Title": { en: "Women Entrepreneurs Program Launches", fr: "Lancement du Programme pour Femmes Entrepreneures", rw: "Gahunda y'Abagore b'Abahinzi Yatangiye" },
  "news.article6Category": { en: "Programs", fr: "Programmes", rw: "Gahunda" },
  "news.article6Excerpt": { 
    en: "New initiative offers specialized loans and training for women-led businesses, promoting economic empowerment.", 
    fr: "Nouvelle initiative offrant des prêts spécialisés et une formation pour les entreprises dirigées par des femmes, promouvant l'autonomisation économique.", 
    rw: "Gahunda nshya itanga inguzanyo zihariye n'amahugurwa ku bucuruzi buyoborwa n'abagore, ishyigikira gutera inkunga y'ubukungu." 
  },
  "news.financialTips": { en: "Financial Tips & Advice", fr: "Conseils Financiers", rw: "Inama z'Imari" },
  "news.financialTipsSubtitle": { 
    en: "Practical guidance to help you make better financial decisions.", 
    fr: "Conseils pratiques pour vous aider à prendre de meilleures décisions financières.", 
    rw: "Inama z'ibikorwa zo kugufasha gufata ibyemezo by'imari byiza." 
  },
  "news.tip1Title": { en: "5 Tips for Building Your Emergency Fund", fr: "5 Conseils pour Constituer Votre Fonds d'Urgence", rw: "Inama 5 zo Kubaka Ikigega cyawe cyo mu Byihutirwa" },
  "news.tip1Desc": { en: "Learn how to create a financial safety net for unexpected expenses.", fr: "Apprenez à créer un filet de sécurité financier pour les dépenses imprévues.", rw: "Iga uburyo bwo gukora urugenge rw'imari ku mafaranga atiteganyije." },
  "news.tip2Title": { en: "Understanding Interest Rates: A Simple Guide", fr: "Comprendre les Taux d'Intérêt: Un Guide Simple", rw: "Gusobanukirwa Inyungu: Amabwiriza Yoroshye" },
  "news.tip2Desc": { en: "Demystifying how interest rates affect your savings and loans.", fr: "Démystifier comment les taux d'intérêt affectent votre épargne et vos prêts.", rw: "Gusobanura uburyo inyungu zigira ingaruka ku bwizigame bwawe n'inguzanyo." },
  "news.tip3Title": { en: "Starting a Small Business: Financial Planning Essentials", fr: "Démarrer une Petite Entreprise: Essentiels de Planification Financière", rw: "Gutangira Ubucuruzi Buto: Ibikenewe byo Gutegura Imari" },
  "news.tip3Desc": { en: "Key financial considerations when launching your entrepreneurial venture.", fr: "Considérations financières clés lors du lancement de votre entreprise.", rw: "Ibintu by'ingenzi by'imari byo gutekereza iyo utangiye umushinga wawe w'ubucuruzi." },
  "news.readArticle": { en: "Read Article", fr: "Lire l'Article", rw: "Soma Inyandiko" },
  "news.stayUpdated": { en: "Stay Updated", fr: "Restez Informé", rw: "Kora Kumenya" },
  "news.subscribeDesc": { 
    en: "Subscribe to our newsletter for the latest news, tips, and exclusive member benefits.", 
    fr: "Abonnez-vous à notre newsletter pour les dernières nouvelles, conseils et avantages exclusifs aux membres.", 
    rw: "Iyandikishe ku makuru yacu kugira ngo ubone amakuru mashya, inama, n'inyungu zidasanzwe z'abanyamuryango." 
  },
  "news.enterEmail": { en: "Enter your email", fr: "Entrez votre email", rw: "Andika imeyili yawe" },
  "news.subscribe": { en: "Subscribe", fr: "S'abonner", rw: "Iyandikishe" },

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
  "common.perMonth": { en: "per month for", fr: "par mois pendant", rw: "ku kwezi mu" },
  "common.month": { en: "month", fr: "mois", rw: "ukwezi" },

  // Tariffs Page
  "nav.tariffs": { en: "Tariffs", fr: "Tarifs", rw: "Ibiciro" },
  "tariffs.title": { en: "Our Tariffs", fr: "Nos Tarifs", rw: "Ibiciro Byacu" },
  "tariffs.subtitle": { 
    en: "Transparent pricing for all our financial services", 
    fr: "Tarification transparente pour tous nos services financiers", 
    rw: "Ibiciro bigaragara kuri serivisi zacu zose z'imari" 
  },
  "tariffs.effectiveDate": { en: "Effective July 2025", fr: "En vigueur juillet 2025", rw: "Bitangira Nyakanga 2025" },
  
  // Account Services
  "tariffs.accountServices": { en: "Account Services Charges", fr: "Frais de Services de Compte", rw: "Amafaranga y'Ibikorwa bya Konti" },
  "tariffs.service": { en: "Service", fr: "Service", rw: "Serivisi" },
  "tariffs.physicalMember": { en: "Physical Member", fr: "Membre Physique", rw: "Umunyamuryango w'Umuntu" },
  "tariffs.registeredBusiness": { en: "Registered Business", fr: "Entreprise Enregistrée", rw: "Ubucuruzi Bwanditswe" },
  "tariffs.registeredNGO": { en: "Registered NGO", fr: "ONG Enregistrée", rw: "ONG Yanditswe" },
  "tariffs.businessNGO": { en: "Business/NGO", fr: "Entreprise/ONG", rw: "Ubucuruzi/ONG" },
  "tariffs.free": { en: "Free", fr: "Gratuit", rw: "Ubuntu" },
  "tariffs.notApplicable": { en: "N/A", fr: "N/A", rw: "Ntibikora" },
  "tariffs.accountOpening": { en: "RWF Account Opening Fees (Savings or Current)", fr: "Frais d'ouverture de compte RWF (Épargne ou Courant)", rw: "Amafaranga yo Gufungura Konti (Ubwizigame cyangwa Isanzwe)" },
  "tariffs.savingsMinBalance": { en: "RWF Savings Account Minimum Balance", fr: "Solde minimum du compte d'épargne RWF", rw: "Igipimo Ntarengwa cy'Ubwizigame" },
  "tariffs.currentMinBalance": { en: "RWF Current Account Minimum Balance", fr: "Solde minimum du compte courant RWF", rw: "Igipimo Ntarengwa cya Konti Isanzwe" },
  "tariffs.dormantActivation": { en: "RWF Dormant Account Activation", fr: "Activation de compte dormant RWF", rw: "Gukangura Konti Idasinziriye" },
  "tariffs.accountClosing": { en: "RWF Account Closing Fee", fr: "Frais de clôture de compte RWF", rw: "Amafaranga yo Gufunga Konti" },
  
  // Salary & Transfers
  "tariffs.salaryTransfers": { en: "Salary and Transfer Commissions", fr: "Commissions sur Salaires et Transferts", rw: "Amafaranga ku Mushahara n'Kohereza" },
  "tariffs.salaryCommission": { en: "RWF Salary Commission", fr: "Commission sur salaire RWF", rw: "Amafaranga ku Mushahara" },
  "tariffs.internalTransfers": { en: "RWF Internal Transfers", fr: "Transferts internes RWF", rw: "Kohereza mu Nzu" },
  "tariffs.externalTransfer": { en: "RWF External Transfer (COOPEC to Members)", fr: "Transfert externe RWF (COOPEC aux Membres)", rw: "Kohereza Hanze (COOPEC ku Banyamuryango)" },
  "tariffs.bankTransfer": { en: "RWF Transfer to Commercial Banks", fr: "Transfert RWF vers Banques Commerciales", rw: "Kohereza ku Mabanki" },
  
  // Cash Operations
  "tariffs.cashWithdrawal": { en: "Cash Withdrawal", fr: "Retrait d'Argent", rw: "Gukura Amafaranga" },
  "tariffs.withdrawCurrent": { en: "Withdraw on Current/TEKANA Account", fr: "Retrait sur Compte Courant/TEKANA", rw: "Gukura kuri Konti Isanzwe/TEKANA" },
  "tariffs.withdrawZigama": { en: "Withdraw on Zigama Witeze Imbere", fr: "Retrait sur Zigama Witeze Imbere", rw: "Gukura kuri Zigama Witeze Imbere" },
  "tariffs.withdrawChildren": { en: "Withdraw on Savings for Children", fr: "Retrait sur Épargne Enfants", rw: "Gukura ku Bwizigame bw'Abana" },
  "tariffs.cashDeposit": { en: "Cash Deposit", fr: "Dépôt d'Argent", rw: "Gushyira Amafaranga" },
  "tariffs.depositMoney": { en: "Deposit of Money", fr: "Dépôt d'argent", rw: "Gushyira Amafaranga" },
  "tariffs.fee": { en: "Fee", fr: "Frais", rw: "Amafaranga" },
  
  // Statements
  "tariffs.statements": { en: "Account Statements", fr: "Relevés de Compte", rw: "Urutonde rwa Konti" },
  "tariffs.firstStatement": { en: "First Account Statement in Month", fr: "Premier relevé du mois", rw: "Urutonde rwa Mbere mu Kwezi" },
  "tariffs.additionalStatement": { en: "Additional Statement (same month)", fr: "Relevé supplémentaire (même mois)", rw: "Urutonde Rwinyongera (ukwezi kumwe)" },
  
  // Other Services
  "tariffs.otherServices": { en: "Other Services", fr: "Autres Services", rw: "Izindi Serivisi" },
  "tariffs.newPassbook": { en: "New & Replacement of Full Used Passbook", fr: "Nouveau carnet ou remplacement", rw: "Igitabo Gishya cyangwa Gisimbuza" },
  "tariffs.lostPassbook": { en: "Lost Passbook Replacement", fr: "Remplacement carnet perdu", rw: "Gusimbuza Igitabo Cyabuze" },
  "tariffs.accountConfirmation": { en: "Account Details Confirmation", fr: "Confirmation des détails du compte", rw: "Kwemeza Amakuru ya Konti" },
  "tariffs.bankClearance": { en: "Bank Clearance Certificate", fr: "Certificat de conformité bancaire", rw: "Icyemezo cy'Ubuziranenge bwa Banki" },
  "tariffs.debtConfirmation": { en: "Debt Confirmation", fr: "Confirmation de dette", rw: "Kwemeza Imyenda" },
  "tariffs.copyBankSlip": { en: "Copy of Bank Slip (Deposit & Withdraw)", fr: "Copie du bordereau bancaire", rw: "Kopi y'Urupapuro rwa Banki" },
  "tariffs.membershipFile": { en: "Membership Information File", fr: "Dossier d'information membre", rw: "Dosiye y'Amakuru y'Umunyamuryango" },
  
  // Search Fees
  "tariffs.searchFees": { en: "Search Fees (Document Retrieval)", fr: "Frais de Recherche (Récupération de Documents)", rw: "Amafaranga yo Gushaka (Kubona Inyandiko)" },
  "tariffs.period": { en: "Period", fr: "Période", rw: "Igihe" },
  "tariffs.feePerDocument": { en: "Fee per Document", fr: "Frais par Document", rw: "Amafaranga kuri Buri Nyandiko" },
  "tariffs.search0to3": { en: "0-3 Months", fr: "0-3 Mois", rw: "Amezi 0-3" },
  "tariffs.search3to12": { en: "3 Months to 1 Year", fr: "3 Mois à 1 An", rw: "Amezi 3 kugeza Umwaka 1" },
  "tariffs.search12plus": { en: "1 Year and Above", fr: "1 An et Plus", rw: "Umwaka 1 no Hejuru" },
  
  // Mobile Banking
  "tariffs.mobileBanking": { en: "Mobile Banking", fr: "Banque Mobile", rw: "Banki kuri Telefone" },
  "tariffs.acToWallet": { en: "Account to E-Wallet", fr: "Compte vers E-Wallet", rw: "Konti ku E-Wallet" },
  "tariffs.walletToAc": { en: "E-Wallet to Account", fr: "E-Wallet vers Compte", rw: "E-Wallet kuri Konti" },
  "tariffs.miniStatement": { en: "Mini Statement", fr: "Mini Relevé", rw: "Urutonde Ruto" },
  "tariffs.checkBalance": { en: "Check Balance", fr: "Vérifier le Solde", rw: "Kureba Amafaranga" },
  "tariffs.pinChange": { en: "PIN Change", fr: "Changement de PIN", rw: "Guhindura PIN" },
  "tariffs.transactionAlert": { en: "Transaction Alert", fr: "Alerte de Transaction", rw: "Kumenyesha Ibikorwa" },
  "tariffs.loanBalance": { en: "Loan Balance Check", fr: "Vérifier le Solde du Prêt", rw: "Kureba Inguzanyo Isigaye" },
  
  // Loan Products
  "tariffs.loanProducts": { en: "Loan Products Pricing", fr: "Tarification des Produits de Prêt", rw: "Ibiciro by'Inguzanyo" },
  "tariffs.loanName": { en: "Loan Product", fr: "Produit de Prêt", rw: "Ubwoko bw'Inguzanyo" },
  "tariffs.interestRate": { en: "Interest Rate", fr: "Taux d'Intérêt", rw: "Inyungu" },
  "tariffs.applicationFee": { en: "Application Fee", fr: "Frais de Demande", rw: "Amafaranga yo Gusaba" },
  "tariffs.studyFee": { en: "Study Fee", fr: "Frais d'Étude", rw: "Amafaranga yo Gusuzuma" },
  "tariffs.commission": { en: "Commission", fr: "Commission", rw: "Komisiyo" },
  "tariffs.collateralVisit": { en: "Collateral Visit Fee", fr: "Frais de Visite de Garantie", rw: "Amafaranga yo Gusura Ingwate" },
  
  // Important Notes
  "tariffs.importantNotes": { en: "Important Notes", fr: "Notes Importantes", rw: "Amabaruwa y'Ingenzi" },
  "tariffs.note1": { en: "All interest rates are calculated on a declining balance method.", fr: "Tous les taux d'intérêt sont calculés sur la méthode du solde dégressif.", rw: "Inyungu zose zibarwa ku buryo bwo kugabanuka." },
  "tariffs.note2": { en: "All charges are exclusive of VAT.", fr: "Tous les frais sont hors TVA.", rw: "Amafaranga yose ntabwo arimo Umusoro." },
  "tariffs.note3": { en: "Collateral within the Sector where Branch is located: 3,000 RWF.", fr: "Garantie dans le Secteur de la succursale: 3,000 RWF.", rw: "Ingwate iri mu Murenge w'Ishami: 3,000 RWF." },
  "tariffs.note4": { en: "Collateral beyond Sector but within Rulindo District: 12,000 RWF.", fr: "Garantie hors Secteur mais dans le District de Rulindo: 12,000 RWF.", rw: "Ingwate hanze y'Umurenge ariko mu Karere ka Rulindo: 12,000 RWF." },
  "tariffs.note5": { en: "Collateral outside Rulindo District: Fees calculated based on Mission Order per COOPEC IKIRENGA Logistic Policy.", fr: "Garantie hors du District de Rulindo: Frais calculés selon l'Ordre de Mission par la Politique Logistique de COOPEC IKIRENGA.", rw: "Ingwate hanze y'Akarere ka Rulindo: Amafaranga abarwa hakurikijwe Itegeko ry'Urugendo nk'uko Politiki y'Ibikoresho ya COOPEC IKIRENGA ibivuga." },
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
