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
    en: "Building financial resilience and empowering communities since 2008", 
    fr: "Construire la résilience financière et autonomiser les communautés depuis 2008", 
    rw: "Kubaka imbaraga z'imari no gutera inkunga abaturage kuva 2008" 
  },
  "about.ourStory": { en: "Our Story", fr: "Notre Histoire", rw: "Amateka Yacu" },
  "about.storyParagraph1": { 
    en: "Founded in 2008, COOPEC Ikirenga began as a small community initiative to provide accessible financial services to underserved populations in Rwanda. What started with just 50 members has grown into a thriving cooperative serving over 50,000 members across multiple regions.", 
    fr: "Fondée en 2008, COOPEC Ikirenga a commencé comme une petite initiative communautaire pour fournir des services financiers accessibles aux populations mal desservies au Rwanda. Ce qui a commencé avec seulement 50 membres est devenu une coopérative prospère servant plus de 50,000 membres dans plusieurs régions.", 
    rw: "Yashinzwe mu 2008, COOPEC Ikirenga yatangiye nk'umushinga muto w'umuryango wo gutanga serivisi z'imari zishoboka ku baturage batarabonye serivisi mu Rwanda. Icyatangiye n'abanyamuryango 50 gusa cyakuze cyabaye koperative ikora neza itanga serivisi ku banyamuryango barenga 50,000 mu turere twinshi." 
  },
  "about.storyParagraph2": { 
    en: "Our journey has been one of continuous growth and adaptation. We've expanded our services from basic savings accounts to comprehensive financial solutions including business loans, mobile banking, and financial education programs.", 
    fr: "Notre parcours a été celui d'une croissance et d'une adaptation continues. Nous avons élargi nos services des comptes d'épargne de base aux solutions financières complètes, y compris les prêts aux entreprises, la banque mobile et les programmes d'éducation financière.", 
    rw: "Urugendo rwacu rwabaye urwo gukura no guhinduka bidashira. Twagutse serivisi zacu kuva ku konti z'ubwizigame busanzwe kugeza ku bisubizo by'imari byuzuye harimo inguzanyo z'ubucuruzi, banki kuri telefone, na gahunda z'uburezi bw'imari." 
  },
  "about.storyParagraph3": { 
    en: "Today, we stand proud as one of Rwanda's leading microfinance cooperatives, committed to our founding mission of empowering communities through financial inclusion.", 
    fr: "Aujourd'hui, nous sommes fiers d'être l'une des principales coopératives de microfinance du Rwanda, engagés dans notre mission fondatrice d'autonomiser les communautés par l'inclusion financière.", 
    rw: "Uyu munsi, duhagaze twishimiye nk'imwe mu makoperative akomeye y'imari mu Rwanda, twiyemeje intego yacu yo gutera inkunga abaturage binyuze mu kwinjizwa mu by'imari." 
  },
  "about.ourMission": { en: "Our Mission", fr: "Notre Mission", rw: "Intego Yacu" },
  "about.missionText": { 
    en: "To provide accessible, affordable, and sustainable financial services that empower individuals and communities to achieve economic independence and improve their quality of life.", 
    fr: "Fournir des services financiers accessibles, abordables et durables qui permettent aux individus et aux communautés d'atteindre l'indépendance économique et d'améliorer leur qualité de vie.", 
    rw: "Gutanga serivisi z'imari zishoboka, zishoboka, kandi zirambye zitera inkunga abantu n'abaturage kugera ku bwigenge bw'ubukungu no kunoza ubuzima bwabo." 
  },
  "about.ourVision": { en: "Our Vision", fr: "Notre Vision", rw: "Icyo Dushaka" },
  "about.visionText": { 
    en: "To be Rwanda's most trusted and innovative microfinance cooperative, recognized for transforming lives and building prosperous communities through financial inclusion.", 
    fr: "Être la coopérative de microfinance la plus fiable et innovante du Rwanda, reconnue pour transformer des vies et bâtir des communautés prospères par l'inclusion financière.", 
    rw: "Kuba koperative y'imari yizerwa cyane kandi ihindura mu Rwanda, izwi cyane mu guhindura ubuzima no kubaka abaturage batunganye binyuze mu kwinjizwa mu by'imari." 
  },
  "about.ourValues": { en: "Our Values", fr: "Nos Valeurs", rw: "Indangagaciro Zacu" },
  "about.valuesSubtitle": { 
    en: "These core principles guide every decision we make and every service we provide.", 
    fr: "Ces principes fondamentaux guident chaque décision que nous prenons et chaque service que nous offrons.", 
    rw: "Izi ngingo z'ingenzi ziyobora buri cyemezo dufata na buri serivisi dutanga." 
  },
  "about.communityFirst": { en: "Community First", fr: "Communauté d'Abord", rw: "Abaturage Mbere" },
  "about.communityDesc": { 
    en: "We prioritize the needs and wellbeing of our members and their communities.", 
    fr: "Nous priorisons les besoins et le bien-être de nos membres et de leurs communautés.", 
    rw: "Dushyira imbere ibyo abanyamuryango bacu bakeneye n'imibereho myiza yabo n'abaturage babo." 
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
    en: "We continuously improve our services to meet the evolving needs of our members.", 
    fr: "Nous améliorons continuellement nos services pour répondre aux besoins évolutifs de nos membres.", 
    rw: "Dukomeza kunoza serivisi zacu kugira ngo zihuze n'ibyo abanyamuryango bacu bakeneye bihinduka." 
  },
  "about.governance": { en: "Governance & Leadership", fr: "Gouvernance et Leadership", rw: "Ubutegetsi n'Ubuyobozi" },
  "about.governanceText1": { 
    en: "COOPEC Ikirenga is governed by a Board of Directors elected by our members. Our leadership team brings decades of combined experience in finance, community development, and cooperative management.", 
    fr: "COOPEC Ikirenga est gouvernée par un Conseil d'Administration élu par nos membres. Notre équipe de direction apporte des décennies d'expérience combinée en finance, développement communautaire et gestion coopérative.", 
    rw: "COOPEC Ikirenga iyoborwa n'Inama y'Ubuyobozi yatowe n'abanyamuryango bacu. Itsinda ryacu ry'ubuyobozi rizana imyaka icumi y'uburambe mu by'imari, iterambere ry'umuryango, no gucunga koperative." 
  },
  "about.governanceText2": { 
    en: "We maintain the highest standards of corporate governance, with regular audits, transparent financial reporting, and member-focused decision making. Our governance structure ensures accountability while keeping member interests at the forefront of everything we do.", 
    fr: "Nous maintenons les normes les plus élevées de gouvernance d'entreprise, avec des audits réguliers, des rapports financiers transparents et une prise de décision axée sur les membres. Notre structure de gouvernance assure la responsabilité tout en gardant les intérêts des membres au premier plan de tout ce que nous faisons.", 
    rw: "Dufata ingamba zo hejuru z'ubutegetsi bw'ikigo, hamwe n'isuzuma rihoraho, raporo z'imari zigaragara, no gufata ibyemezo bishingiye ku banyamuryango. Imiterere y'ubutegetsi bwacu itanga uburyozwe n'ubuzima bw'abanyamuryango imbere mu byo dukora byose." 
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
