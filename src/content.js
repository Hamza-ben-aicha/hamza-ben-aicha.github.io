// All site copy lives here, in English and French.
// To edit a project, change its entry in `projects`. To swap a cover for a real
// screenshot, replace the file in /public/projects with one of the same name (16:10 works best).

export const site = {
  name: "Hamza Ben Aicha",
  email: "hamza.ben.aicha@outlook.com",
  phone: "+216 51 761 176",
  phoneHref: "tel:+21651761176",
  whatsapp: "https://wa.me/21651761176",
  linkedin: "https://www.linkedin.com/in/Hamza-Ben-Aicha",
  github: "https://github.com/Hamza-ben-aicha",
  azureCert:
    "https://drive.google.com/file/d/1VgZFAHFuTO37qTXqythagVriihwSKQZg/view?usp=sharing",
};

export const cvFiles = [
  {
    href: "cv/Hamza_Ben_Aicha_CV_Backend_EN.pdf",
    label: { en: "Backend CV (English)", fr: "CV Backend (anglais)" },
  },
  {
    href: "cv/Hamza_Ben_Aicha_CV_Flutter_EN.pdf",
    label: { en: "Flutter / mobile CV (English)", fr: "CV Flutter / mobile (anglais)" },
  },
  {
    href: "cv/Hamza_Ben_Aicha_CV_FR.pdf",
    label: { en: "CV in French", fr: "CV en français" },
  },
];

export const ui = {
  nav: {
    work: { en: "Work", fr: "Projets" },
    experience: { en: "Experience", fr: "Parcours" },
    about: { en: "About", fr: "À propos" },
    contact: { en: "Contact", fr: "Contact" },
  },
  skip: { en: "Skip to content", fr: "Aller au contenu" },
  menu: { en: "Menu", fr: "Menu" },
  themeToDark: { en: "Switch to dark theme", fr: "Passer au thème sombre" },
  themeToLight: { en: "Switch to light theme", fr: "Passer au thème clair" },
  langSwitch: { en: "Afficher en français", fr: "View in English" },
  cv: { en: "Download CV", fr: "Télécharger le CV" },
  hero: {
    status: { en: "Available for remote work", fr: "Disponible en télétravail" },
    lead: {
      en: "Backend and mobile engineer. I build production APIs in Node.js, NestJS and Spring Boot, and the Flutter apps that run on them.",
      fr: "Ingénieur backend et mobile. Je développe des API en production avec Node.js, NestJS et Spring Boot, et les applications Flutter qui les utilisent.",
    },
    sub: {
      en: "Freelance since 2025 for clients in loyalty, logistics and ship cargo inspection. Based in Tunisia and open to remote roles.",
      fr: "Freelance depuis 2025 pour des clients dans la fidélité, la logistique et l'inspection de cargaisons. Basé en Tunisie et ouvert aux postes en télétravail.",
    },
    ctaWork: { en: "View projects", fr: "Voir les projets" },
  },
  console: {
    label: { en: "Try my API", fr: "Testez mon API" },
    send: { en: "Send", fr: "Envoyer" },
    sending: { en: "Sending…", fr: "Envoi…" },
    hint: { en: "Pick an endpoint", fr: "Choisissez un endpoint" },
  },
  work: {
    title: { en: "Selected work", fr: "Projets" },
    intro: {
      en: "Products I built for clients and during my studies. Open one for the full case study: the problem, what I built and how it fits together.",
      fr: "Des produits développés pour des clients et pendant mes études. Ouvrez-en un pour l'étude de cas complète : le besoin, ce que j'ai réalisé et l'architecture.",
    },
    open: { en: "Read case study", fr: "Lire l'étude de cas" },
    live: { en: "Live site", fr: "Site en ligne" },
    earlier: {
      en: "Earlier: QuizApp, an Android quiz app for ISET Sousse where teachers publish exams and students get their grade right after submitting (Java, Firebase, 2021–2022).",
      fr: "Avant : QuizApp, une application Android de quiz pour l'ISET Sousse où les enseignants publient des examens et les étudiants reçoivent leur note dès la soumission (Java, Firebase, 2021–2022).",
    },
  },
  modal: {
    overview: { en: "Overview", fr: "Le projet" },
    built: { en: "What I built", fr: "Ce que j'ai réalisé" },
    challenge: { en: "The hard part", fr: "Le défi technique" },
    architecture: { en: "How it fits together", fr: "Comment tout s'articule" },
    clients: { en: "Apps", fr: "Applications" },
    core: { en: "Backend", fr: "Backend" },
    services: { en: "Services", fr: "Services" },
    role: { en: "Role", fr: "Rôle" },
    period: { en: "Period", fr: "Période" },
    stack: { en: "Stack", fr: "Technologies" },
    live: { en: "In production", fr: "En production" },
    close: { en: "Close", fr: "Fermer" },
    next: { en: "Next project", fr: "Projet suivant" },
    prev: { en: "Previous project", fr: "Projet précédent" },
  },
  experience: {
    title: { en: "Experience", fr: "Parcours" },
    caseStudy: { en: "Case study", fr: "Étude de cas" },
    freelance: { en: "Freelance", fr: "Freelance" },
    internships: { en: "Internships and final-year project", fr: "Stages et projet de fin d'études" },
  },
  about: {
    title: { en: "About me", fr: "À propos" },
    plate: { en: "Backend & mobile engineer", fr: "Ingénieur backend et mobile" },
    p1: {
      en: "I'm a software engineer from Tunisia. I graduated with an engineering degree in computer science in 2025 and have worked freelance ever since.",
      fr: "Je suis ingénieur logiciel, basé en Tunisie. J'ai obtenu mon diplôme d'ingénieur en informatique en 2025 et je travaille en freelance depuis.",
    },
    p2: {
      en: "Most of my work is the part of a product people never see: APIs, payments, notifications, background jobs and data that has to stay correct. When a client needs the mobile app too, I build it in Flutter, so I know both sides of every endpoint.",
      fr: "Je travaille surtout sur la partie d'un produit que personne ne voit : les API, les paiements, les notifications, les tâches planifiées et des données qui doivent rester justes. Quand un client a aussi besoin de l'application mobile, je la développe en Flutter : je connais donc les deux côtés de chaque endpoint.",
    },
    p3: {
      en: "I'm looking for a full-time remote role on a backend or mobile team.",
      fr: "Je cherche un poste à temps plein en télétravail, dans une équipe backend ou mobile.",
    },
    education: { en: "Education", fr: "Formation" },
    certification: { en: "Certification", fr: "Certification" },
    viewCert: { en: "View certificate", fr: "Voir le certificat" },
    languages: { en: "Languages", fr: "Langues" },
    langList: {
      en: [
        ["Arabic", "native"],
        ["French", "professional"],
        ["English", "professional"],
      ],
      fr: [
        ["Arabe", "langue maternelle"],
        ["Français", "courant"],
        ["Anglais", "professionnel"],
      ],
    },
  },
  stack: {
    title: { en: "Tools I use", fr: "Outils et technologies" },
  },
  contact: {
    title: { en: "Get in touch", fr: "Me contacter" },
    line: {
      en: "Looking for a backend or mobile engineer? Email me, or download my CV.",
      fr: "Vous cherchez un ingénieur backend ou mobile ? Écrivez-moi, ou téléchargez mon CV.",
    },
    copy: { en: "Copy email", fr: "Copier l'e-mail" },
    copied: { en: "Email copied", fr: "E-mail copié" },
    phone: { en: "Phone", fr: "Téléphone" },
  },
  footer: {
    built: {
      en: "Designed and built with React and Vite.",
      fr: "Conçu et développé avec React et Vite.",
    },
    top: { en: "Back to top", fr: "Retour en haut" },
  },
};

export const education = [
  {
    degree: {
      en: "Engineering degree in Computer Science",
      fr: "Diplôme national d'ingénieur en informatique",
    },
    school: "EPI Digital School",
    years: "2023 – 2025",
  },
  {
    degree: {
      en: "Master's in Cloud Computing (first year)",
      fr: "Master professionnel en Cloud Computing (M1)",
    },
    school: "ISET Sousse",
    years: "2022 – 2023",
  },
  {
    degree: {
      en: "Bachelor's in Multimedia and Web Development",
      fr: "Licence en multimédia et développement web",
    },
    school: "ISET Sousse",
    years: "2019 – 2022",
  },
];

export const skills = [
  {
    group: { en: "Languages", fr: "Langages" },
    items: ["TypeScript", "JavaScript", "Java", "Dart", "SQL"],
  },
  {
    group: { en: "Backend", fr: "Backend" },
    items: ["Node.js", "NestJS", "Express", "Spring Boot", "REST APIs", "WebSocket", "Socket.IO", "Swagger"],
  },
  {
    group: { en: "Mobile and web", fr: "Mobile et web" },
    items: ["Flutter", "Riverpod", "Dio / Retrofit", "Freezed", "go_router", "TFLite", "React"],
  },
  {
    group: { en: "Databases", fr: "Bases de données" },
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Sequelize", "JPA / Hibernate", "Flyway", "Supabase"],
  },
  {
    group: { en: "DevOps", fr: "DevOps" },
    items: ["Docker", "Kubernetes", "Helm", "GitLab CI/CD", "Git", "Linux"],
  },
  {
    group: { en: "Services", fr: "Services" },
    items: ["Stripe", "Firebase (FCM, Auth, Firestore)", "Twilio", "WhatsApp Business API", "Apple Wallet", "Google Wallet"],
  },
];

// Timeline, newest first. `project` links to a case study id.
export const experience = [
  {
    period: { en: "Jul 2026 – present", fr: "juil. 2026 – aujourd'hui" },
    role: { en: "Backend developer", fr: "Développeur backend" },
    org: "VClub by Vlynk",
    mode: { en: "Freelance, remote", fr: "Freelance, à distance" },
    text: {
      en: "Backend of a loyalty card platform for shops: about 25 modules and 150 endpoints in NestJS and MongoDB, Apple and Google Wallet cards, Stripe subscriptions and marketing campaigns.",
      fr: "Backend d'une plateforme de cartes de fidélité pour commerçants : environ 25 modules et 150 endpoints en NestJS et MongoDB, cartes Apple et Google Wallet, abonnements Stripe et campagnes marketing.",
    },
    project: "vclub",
  },
  {
    period: { en: "Jun – Jul 2026", fr: "juin – juil. 2026" },
    role: { en: "Full stack developer", fr: "Développeur full stack" },
    org: "STE SMASS, version 2",
    mode: { en: "Freelance, remote", fr: "Freelance, à distance" },
    text: {
      en: "Turned the inspection platform into a multi-company SaaS and built its Flutter app from scratch: 22 modules, about 38k lines of Dart, with an offline mode.",
      fr: "Passage de la plateforme d'inspection en SaaS multi-entreprises et développement de son application Flutter de zéro : 22 modules, environ 38k lignes de Dart, avec un mode hors ligne.",
    },
    project: "smass",
  },
  {
    period: { en: "Jan – May 2026", fr: "janv. – mai 2026" },
    role: { en: "Backend developer", fr: "Développeur backend" },
    org: "Lamygo",
    mode: { en: "Freelance, remote", fr: "Freelance, à distance" },
    text: {
      en: "Spring Boot backend for a parcel delivery and carpooling app: offers, price negotiation, Stripe payments, push notifications and Helm charts for Kubernetes.",
      fr: "Backend Spring Boot d'une application de livraison de colis et de covoiturage : offres, négociation de prix, paiements Stripe, notifications push et charts Helm pour Kubernetes.",
    },
    project: "lamygo",
  },
  {
    period: { en: "Aug – Dec 2025", fr: "août – déc. 2025" },
    role: { en: "Backend developer", fr: "Développeur backend" },
    org: "STE SMASS, version 1",
    mode: { en: "Freelance, remote", fr: "Freelance, à distance" },
    text: {
      en: "Built the backend from scratch in Node.js, Express and MySQL: 120+ endpoints, invoicing in USD and EUR, inspector payments and PDF bank transfer forms.",
      fr: "Backend développé de zéro en Node.js, Express et MySQL : plus de 120 endpoints, facturation en USD et en EUR, paiements des inspecteurs et ordres de virement en PDF.",
    },
    project: "smass",
  },
  {
    period: { en: "Jan – Jun 2025", fr: "janv. – juin 2025" },
    role: { en: "Final-year engineering project", fr: "Projet de fin d'études d'ingénieur" },
    org: "TunisMove",
    mode: { en: "Internship", fr: "Stage" },
    text: {
      en: "Flutter app for renting cars by the trip, with on-device damage detection (TFLite), ID card scanning (OCR) and Stripe.",
      fr: "Application Flutter de location de voitures au trajet, avec détection de dommages sur le téléphone (TFLite), lecture de la CIN (OCR) et Stripe.",
    },
    project: "tunismove",
  },
  {
    period: { en: "Jun – Aug 2024", fr: "juin – août 2024" },
    role: { en: "Mobile developer intern", fr: "Stagiaire développeur mobile" },
    org: "Linguify",
    mode: { en: "Internship", fr: "Stage" },
    text: {
      en: "Flutter and Firebase app for language exchange, with learner matching and AI spelling correction.",
      fr: "Application Flutter et Firebase d'échange linguistique, avec mise en relation des apprenants et correction orthographique par IA.",
    },
    project: "linguify",
  },
  {
    period: { en: "Feb – Jun 2022", fr: "févr. – juin 2022" },
    role: { en: "Full stack developer intern", fr: "Stagiaire développeur full stack" },
    org: "Africa Management Services",
    mode: { en: "Internship", fr: "Stage" },
    text: {
      en: "Web app that replaced a manual ISO audit process (Node.js, React, MySQL).",
      fr: "Application web qui remplace un processus d'audit ISO fait à la main (Node.js, React, MySQL).",
    },
    project: "ams",
  },
];

export const projects = [
  {
    id: "vclub",
    name: "VClub",
    client: "Vlynk",
    cover: "projects/vclub.webp",
    live: "https://vclub.fr/",
    kind: { en: "Loyalty platform", fr: "Plateforme de fidélité" },
    period: { en: "Jul 2026 – present", fr: "juil. 2026 – aujourd'hui" },
    role: { en: "Backend developer, freelance", fr: "Développeur backend, freelance" },
    title: {
      en: "Loyalty cards that live in Apple and Google Wallet",
      fr: "Des cartes de fidélité dans Apple Wallet et Google Wallet",
    },
    summary: {
      en: "Backend for a loyalty SaaS where shops run points, stamps and cashback programs. Every in-store scan updates the customer's wallet card and sends a push notification.",
      fr: "Backend d'un SaaS de fidélité où les commerçants gèrent des programmes de points, de tampons et de cashback. Chaque scan en caisse met à jour la carte du client dans son wallet et lui envoie une notification.",
    },
    overview: {
      en: "VClub lets any shop launch its own loyalty program without printing a single card. Customers join from the app and get the shop's card in Apple Wallet or Google Wallet; at checkout, the merchant scans the customer's QR code. I build the backend that serves both the customer app and the shop dashboard: accounts and staff roles, programs, scans, billing and marketing.",
      fr: "VClub permet à n'importe quel commerce de lancer son programme de fidélité sans imprimer une seule carte. Les clients s'inscrivent depuis l'application et reçoivent la carte du commerce dans Apple Wallet ou Google Wallet ; en caisse, le commerçant scanne le QR code du client. Je développe le backend qui sert l'application client et le tableau de bord des commerçants : comptes et rôles des employés, programmes, scans, facturation et marketing.",
    },
    facts: [
      { value: "~150", label: { en: "API endpoints", fr: "endpoints d'API" } },
      { value: "25", label: { en: "backend modules", fr: "modules backend" } },
      { value: "3", label: { en: "languages: FR, EN, AR", fr: "langues : FR, EN, AR" } },
    ],
    built: [
      {
        items: {
          en: [
            "A NestJS, TypeScript and MongoDB API with about 25 modules and 150 endpoints, used by the mobile app and the web dashboard.",
            "Apple Wallet and Google Wallet loyalty cards for each shop, updated after every in-store scan.",
            "Stripe subscriptions with limits per plan, kept in sync with billing status through webhooks.",
            "Marketing campaigns by email, SMS (Twilio) and WhatsApp.",
            "Push notifications (FCM) that reach the customer right after a purchase is scanned.",
            "Google and Apple sign-in, staff roles, audit logs, a forced app-update check and FR/EN/AR translations.",
          ],
          fr: [
            "Une API NestJS, TypeScript et MongoDB d'environ 25 modules et 150 endpoints, utilisée par l'application mobile et le tableau de bord web.",
            "Des cartes de fidélité Apple Wallet et Google Wallet pour chaque commerce, mises à jour à chaque passage en caisse.",
            "Des abonnements Stripe avec des limites par offre, synchronisés avec l'état de facturation grâce aux webhooks.",
            "Des campagnes marketing par e-mail, SMS (Twilio) et WhatsApp.",
            "Des notifications push (FCM) envoyées au client juste après le scan d'un achat.",
            "La connexion Google et Apple, les rôles des employés, un journal d'audit, une vérification de mise à jour obligatoire et des traductions FR/EN/AR.",
          ],
        },
      },
    ],
    challenge: {
      en: "A single scan has to change several things at once: the customer's balance, the card in their Apple or Google wallet, and the notification they receive, while the shop's Stripe plan decides what it is allowed to do. Apple and Google handle wallet passes in very different ways, so both had to stay in step with the same data after every purchase.",
      fr: "Un seul scan doit modifier plusieurs choses à la fois : le solde du client, la carte dans son wallet Apple ou Google et la notification qu'il reçoit, pendant que l'abonnement Stripe du commerce décide de ce qui est autorisé. Apple et Google gèrent les cartes de façon très différente : les deux devaient rester alignées sur les mêmes données après chaque achat.",
    },
    architecture: {
      clients: ["Customer app (iOS, Android)", "Shop dashboard (web)"],
      core: ["NestJS API", "MongoDB"],
      services: ["Apple Wallet, Google Wallet", "Stripe", "Firebase Cloud Messaging", "Twilio, WhatsApp, e-mail"],
    },
    stack: ["NestJS", "TypeScript", "MongoDB", "Stripe", "FCM", "Twilio", "WhatsApp Business API", "Apple Wallet", "Google Wallet"],
  },
  {
    id: "smass",
    name: "STE SMASS",
    client: "STE SMASS",
    cover: "projects/smass.webp",
    live: "https://admin.stesmass.com/",
    kind: { en: "Cargo inspection platform", fr: "Plateforme d'inspection de cargaisons" },
    period: { en: "Aug 2025 – Jul 2026", fr: "août 2025 – juil. 2026" },
    role: {
      en: "Backend (v1), then full stack with the Flutter app (v2), freelance",
      fr: "Backend (v1), puis full stack avec l'app Flutter (v2), freelance",
    },
    title: {
      en: "From spreadsheets to a multi-company SaaS with an offline-ready mobile app",
      fr: "Des tableurs à un SaaS multi-entreprises avec une app mobile qui fonctionne hors ligne",
    },
    summary: {
      en: "A company that inspects oil, chemical and gas cargo on ships ran everything through Excel and email. I built the backend that replaced it, then turned it into a multi-company SaaS and built the Flutter app inspectors use in the field.",
      fr: "Une société qui inspecte des cargaisons pétrolières, chimiques et gazières sur des navires gérait tout avec Excel et des e-mails. J'ai développé le backend qui les a remplacés, puis je l'ai transformé en SaaS multi-entreprises et j'ai développé l'application Flutter utilisée sur le terrain.",
    },
    overview: {
      en: "STE SMASS sends inspectors to ports to check oil, chemical and gas cargo on ships. Missions, inspectors, vessels, invoices and payments were tracked by hand in spreadsheets and emails. Version 1 replaced that with a web platform and a REST API. Version 2 opened the platform to several companies and put it in inspectors' pockets with a Flutter app that keeps working without internet.",
      fr: "STE SMASS envoie des inspecteurs dans les ports pour contrôler des cargaisons pétrolières, chimiques et gazières. Les missions, les inspecteurs, les navires, les factures et les paiements étaient suivis à la main dans des tableurs et des e-mails. La version 1 a remplacé tout cela par une plateforme web et une API REST. La version 2 a ouvert la plateforme à plusieurs entreprises et l'a mise dans la poche des inspecteurs avec une application Flutter qui fonctionne sans internet.",
    },
    facts: [
      { value: "120+", label: { en: "API endpoints", fr: "endpoints d'API" } },
      { value: "22", label: { en: "app modules", fr: "modules dans l'app" } },
      { value: "~38k", label: { en: "lines of Dart", fr: "lignes de Dart" } },
    ],
    built: [
      {
        label: { en: "Version 1: backend (Aug – Dec 2025)", fr: "Version 1 : backend (août – déc. 2025)" },
        items: {
          en: [
            "A Node.js, Express and MySQL backend built from scratch, with 120+ endpoints documented in Swagger.",
            "Invoicing in USD and EUR with VAT, inspector payments and profit reports.",
            "Bank transfer forms generated as PDF, and automatic emails to inspectors.",
            "JWT authentication with admin, inspector and client roles.",
          ],
          fr: [
            "Un backend Node.js, Express et MySQL développé de zéro, avec plus de 120 endpoints documentés dans Swagger.",
            "La facturation en USD et en EUR avec TVA, les paiements des inspecteurs et des rapports de marge.",
            "Des ordres de virement générés en PDF et des e-mails automatiques aux inspecteurs.",
            "Une authentification JWT avec des rôles administrateur, inspecteur et client.",
          ],
        },
      },
      {
        label: { en: "Version 2: SaaS and mobile app (Jun – Jul 2026)", fr: "Version 2 : SaaS et application mobile (juin – juil. 2026)" },
        items: {
          en: [
            "Multi-company SaaS with roles and permissions, including the migration of the existing data.",
            "Excel import, push notifications (FCM) and daily reminder jobs.",
            "A Flutter app for Android and iOS, built from scratch: 22 modules and about 38k lines of Dart, organized by feature with Riverpod, Dio/Retrofit, Freezed and go_router.",
            "An offline mode: one tap downloads the user's data and the app keeps working without a connection.",
            "Live updates with Socket.IO, charts, and PDF and Excel export right on the phone.",
          ],
          fr: [
            "Un SaaS multi-entreprises avec rôles et permissions, migration des données existantes comprise.",
            "L'import Excel, les notifications push (FCM) et des rappels quotidiens automatiques.",
            "Une application Flutter pour Android et iOS, développée de zéro : 22 modules et environ 38k lignes de Dart, organisés par fonctionnalité avec Riverpod, Dio/Retrofit, Freezed et go_router.",
            "Un mode hors ligne : un seul geste télécharge les données de l'utilisateur et l'application continue de fonctionner sans connexion.",
            "Des mises à jour en direct avec Socket.IO, des graphiques et l'export PDF et Excel directement sur le téléphone.",
          ],
        },
      },
    ],
    challenge: {
      en: "Turning a backend built for one company into a multi-company SaaS without losing the data already in production, then designing a mobile app inspectors can rely on in ports where the connection is weak or missing.",
      fr: "Transformer un backend conçu pour une seule entreprise en SaaS multi-entreprises sans perdre les données déjà en production, puis concevoir une application mobile fiable dans des ports où la connexion est faible, voire absente.",
    },
    architecture: {
      clients: ["Flutter app (Android, iOS)", "Web platform"],
      core: ["Node.js + Express API", "MySQL"],
      services: ["Socket.IO live updates", "Firebase Cloud Messaging", "Scheduled reminder jobs", "PDF and e-mail"],
    },
    stack: ["Node.js", "Express", "MySQL", "Swagger", "Flutter", "Dart", "Riverpod", "Dio / Retrofit", "Freezed", "go_router", "Socket.IO", "FCM"],
  },
  {
    id: "lamygo",
    name: "Lamygo",
    client: "Lamygo",
    cover: "projects/lamygo.webp",
    live: "https://lamygo.com/",
    kind: { en: "Parcel delivery and carpooling", fr: "Livraison de colis et covoiturage" },
    period: { en: "Jan – May 2026", fr: "janv. – mai 2026" },
    role: { en: "Backend developer, freelance", fr: "Développeur backend, freelance" },
    title: {
      en: "Payments and price negotiation for a delivery and carpooling app",
      fr: "Paiements et négociation de prix pour une app de livraison et de covoiturage",
    },
    summary: {
      en: "Spring Boot backend for an app where travellers carry parcels and share rides. I worked on offers and price negotiation, Stripe payments, notifications and the Kubernetes deployment.",
      fr: "Backend Spring Boot d'une application où des voyageurs transportent des colis et partagent leurs trajets. J'ai travaillé sur les offres, la négociation de prix, les paiements Stripe, les notifications et le déploiement sur Kubernetes.",
    },
    overview: {
      en: "Lamygo connects people who need to send a parcel or find a ride with travellers already making the trip. Both sides agree on a price inside the app and pay through Stripe. I worked on the Java Spring Boot backend, from the business rules around offers to payments, notifications and deployment.",
      fr: "Lamygo met en relation les personnes qui veulent envoyer un colis ou trouver un trajet avec des voyageurs qui font déjà la route. Les deux parties se mettent d'accord sur un prix dans l'application et paient via Stripe. J'ai travaillé sur le backend Java Spring Boot, des règles métier autour des offres jusqu'aux paiements, aux notifications et au déploiement.",
    },
    facts: [
      { value: "5", label: { en: "API languages", fr: "langues dans l'API" } },
      { value: "1×", label: { en: "each payment event processed once", fr: "chaque paiement traité une seule fois" } },
      { value: "Helm", label: { en: "charts for Kubernetes", fr: "charts pour Kubernetes" } },
    ],
    built: [
      {
        items: {
          en: [
            "Offers, price negotiation, promo codes and referrals, in Spring Boot with PostgreSQL and Redis.",
            "Stripe payments, with webhook handling that never processes the same payment twice.",
            "Push notifications (FCM) with limits so users don't get spammed, and chat alerts over WebSocket.",
            "API responses translated into 5 languages.",
            "The Helm charts used to deploy the backend on Kubernetes.",
          ],
          fr: [
            "Les offres, la négociation de prix, les codes promo et le parrainage, en Spring Boot avec PostgreSQL et Redis.",
            "Les paiements Stripe, avec des webhooks qui ne traitent jamais deux fois le même paiement.",
            "Les notifications push (FCM) avec des limites anti-spam, et des alertes de chat via WebSocket.",
            "Les réponses de l'API traduites en 5 langues.",
            "Les charts Helm utilisés pour déployer le backend sur Kubernetes.",
          ],
        },
      },
    ],
    challenge: {
      en: "Stripe can deliver the same webhook more than once. Payment handling had to be idempotent, so a retried event never confirms or credits a payment twice. Notifications needed the same care: a busy negotiation should not flood someone's phone.",
      fr: "Stripe peut envoyer le même webhook plusieurs fois. Le traitement des paiements devait être idempotent, pour qu'un événement renvoyé ne confirme ou ne crédite jamais un paiement deux fois. Les notifications demandaient le même soin : une négociation animée ne doit pas inonder le téléphone de quelqu'un.",
    },
    architecture: {
      clients: ["Mobile app"],
      core: ["Spring Boot API", "PostgreSQL", "Redis"],
      services: ["Stripe", "Firebase Cloud Messaging", "WebSocket chat alerts", "Kubernetes (Helm)"],
    },
    stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "JPA / Hibernate", "Stripe", "FCM", "WebSocket", "Kubernetes", "Helm"],
  },
  {
    id: "tunismove",
    name: "TunisMove",
    client: { en: "Final-year engineering project", fr: "Projet de fin d'études" },
    cover: "projects/tunismove.webp",
    kind: { en: "Car rental by the trip", fr: "Location de voitures au trajet" },
    period: { en: "Jan – Jun 2025", fr: "janv. – juin 2025" },
    role: { en: "Flutter developer, final-year project", fr: "Développeur Flutter, projet de fin d'études" },
    title: {
      en: "Rent a car by the trip, with damage detection on the phone",
      fr: "Louer une voiture au trajet, avec détection de dommages sur le téléphone",
    },
    summary: {
      en: "A Flutter app for renting cars per trip instead of per day. TFLite models check the car for damage in photos taken before and after each rental, and an ID card scan fills in the renter's details.",
      fr: "Une application Flutter pour louer une voiture au trajet plutôt qu'à la journée. Des modèles TFLite détectent les dommages sur les photos prises avant et après chaque location, et la lecture de la CIN remplit les informations du client.",
    },
    overview: {
      en: "Traditional agencies charge by the day. TunisMove charges for the trip you actually make, and handles the whole rental from the phone: identity check, route, payment, and the vehicle inspection at pickup and return.",
      fr: "Les agences classiques facturent à la journée. TunisMove facture le trajet réellement effectué et gère toute la location depuis le téléphone : vérification d'identité, itinéraire, paiement et état des lieux du véhicule au départ et au retour.",
    },
    facts: [
      { value: "2", label: { en: "TFLite models on the phone", fr: "modèles TFLite sur le téléphone" } },
      { value: "OCR", label: { en: "ID card scan", fr: "lecture de la CIN" } },
      { value: "GPS", label: { en: "live trip tracking", fr: "suivi du trajet en direct" } },
    ],
    built: [
      {
        items: {
          en: [
            "A TFLite damage detection model that compares photos taken before and after each rental.",
            "A TFLite vehicle detection model that checks the photo really shows a car.",
            "ID card scanning with OCR to extract the renter's details automatically.",
            "OpenStreetMap for routes and real-time GPS tracking.",
            "Stripe payments, Cloudinary for photos, and Supabase for cloud functions and backups.",
            "Node.js cron jobs that close expired rentals and send notifications.",
          ],
          fr: [
            "Un modèle TFLite de détection de dommages qui compare les photos prises avant et après chaque location.",
            "Un modèle TFLite de détection de véhicule qui vérifie que la photo montre bien une voiture.",
            "La lecture de la CIN par OCR pour extraire automatiquement les informations du client.",
            "OpenStreetMap pour les itinéraires et le suivi GPS en temps réel.",
            "Les paiements Stripe, Cloudinary pour les photos et Supabase pour les fonctions cloud et les sauvegardes.",
            "Des tâches cron Node.js qui clôturent les locations expirées et envoient des notifications.",
          ],
        },
      },
    ],
    challenge: {
      en: "Running two TFLite models in real time on everyday phones without slowing the app down, while keeping data consistent between Firebase, Supabase and Cloudinary.",
      fr: "Faire tourner deux modèles TFLite en temps réel sur des téléphones ordinaires sans ralentir l'application, tout en gardant des données cohérentes entre Firebase, Supabase et Cloudinary.",
    },
    architecture: {
      clients: ["Flutter app", "TFLite models (on device)"],
      core: ["Firebase", "Supabase", "Node.js cron jobs"],
      services: ["OCR", "OpenStreetMap", "Stripe", "Cloudinary"],
    },
    stack: ["Flutter", "Dart", "TFLite", "Firebase", "Supabase", "Node.js", "Stripe", "Cloudinary", "OpenStreetMap"],
  },
  {
    id: "linguify",
    name: "Linguify",
    client: "Linguify",
    cover: "projects/linguify.webp",
    kind: { en: "Language exchange app", fr: "Application d'échange linguistique" },
    period: { en: "Jun – Aug 2024", fr: "juin – août 2024" },
    role: { en: "Mobile developer intern", fr: "Stagiaire développeur mobile" },
    title: {
      en: "Learn a language by teaching yours",
      fr: "Apprendre une langue en enseignant la sienne",
    },
    summary: {
      en: "A Flutter and Firebase app that pairs learners who speak each other's target language, with real-time chat and AI spelling correction.",
      fr: "Une application Flutter et Firebase qui met en relation des apprenants dont chacun parle la langue que l'autre apprend, avec un chat en temps réel et une correction orthographique par IA.",
    },
    overview: {
      en: "Instead of lessons, Linguify connects people who speak different languages so they teach each other through real conversations and cultural exchange.",
      fr: "Plutôt que des leçons, Linguify met en relation des personnes qui parlent des langues différentes pour qu'elles s'enseignent mutuellement, à travers de vraies conversations et des échanges culturels.",
    },
    facts: [
      { value: "Live", label: { en: "chat synced by Firebase", fr: "chat synchronisé par Firebase" } },
      { value: "AI", label: { en: "spelling correction", fr: "correction orthographique" } },
    ],
    built: [
      {
        items: {
          en: [
            "Matching between learners based on native language and target language.",
            "Real-time chat synced with Firebase.",
            "Spelling and grammar correction through the DeepSeek API.",
            "Cultural profiles for sharing traditions and expressions.",
            "Accounts with Firebase Auth, data and media in Firestore.",
          ],
          fr: [
            "La mise en relation des apprenants selon leur langue maternelle et la langue qu'ils apprennent.",
            "Un chat en temps réel synchronisé avec Firebase.",
            "La correction orthographique et grammaticale via l'API DeepSeek.",
            "Des profils culturels pour partager traditions et expressions.",
            "Les comptes avec Firebase Auth, les données et médias dans Firestore.",
          ],
        },
      },
    ],
    challenge: {
      en: "Designing a matching algorithm that weighs target language, level and interests, so the pairs it makes are people who will actually keep talking.",
      fr: "Concevoir un algorithme de mise en relation qui tient compte de la langue cible, du niveau et des centres d'intérêt, pour former des paires qui continueront vraiment à échanger.",
    },
    architecture: {
      clients: ["Flutter app"],
      core: ["Firebase Auth", "Firestore"],
      services: ["DeepSeek API"],
    },
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "DeepSeek API"],
  },
  {
    id: "ams",
    name: { en: "ISO audit platform", fr: "Plateforme d'audit ISO" },
    client: "Africa Management Services",
    cover: "projects/ams.webp",
    kind: { en: "ISO audit platform", fr: "Plateforme d'audit ISO" },
    period: { en: "Feb – Jun 2022", fr: "févr. – juin 2022" },
    role: { en: "Full stack developer intern", fr: "Stagiaire développeur full stack" },
    title: {
      en: "Replacing paper ISO audits with a web platform",
      fr: "Remplacer les audits ISO sur papier par une plateforme web",
    },
    summary: {
      en: "A consulting firm ran ISO audits with paper forms, Excel files and loose emails. I designed and built the web app that replaced them, from UML and Figma mockups to the finished product.",
      fr: "Un cabinet de conseil menait ses audits ISO avec des formulaires papier, des fichiers Excel et des e-mails épars. J'ai conçu et développé l'application web qui les a remplacés, de l'UML et des maquettes Figma jusqu'au produit fini.",
    },
    overview: {
      en: "Africa Management Services audits companies for ISO certification. Every mission, finding and report was handled by hand. This internship project digitized the whole workflow, end to end.",
      fr: "Africa Management Services accompagne des entreprises vers la certification ISO. Chaque mission, constat et rapport était géré à la main. Ce projet de stage a digitalisé tout le processus, de bout en bout.",
    },
    facts: [
      { value: "3", label: { en: "user roles", fr: "rôles utilisateurs" } },
      { value: "PDF", label: { en: "reports generated after each audit", fr: "rapports générés après chaque audit" } },
    ],
    built: [
      {
        items: {
          en: [
            "Requirements analysis, UML models and Figma mockups.",
            "Audit missions: creation, assignment to consultants and tracking.",
            "Tracking of the non-conformities found during audits.",
            "Inspection scheduling with a built-in calendar.",
            "PDF reports generated automatically at the end of each audit, and emails to clients and consultants.",
            "Authentication with consultant, company and admin roles, on a MySQL schema designed for integrity.",
          ],
          fr: [
            "L'analyse des besoins, les modèles UML et les maquettes Figma.",
            "Les missions d'audit : création, affectation aux consultants et suivi.",
            "Le suivi des non-conformités relevées pendant les audits.",
            "La planification des inspections avec un calendrier intégré.",
            "Des rapports PDF générés automatiquement à la fin de chaque audit, et des e-mails aux clients et aux consultants.",
            "L'authentification avec des rôles consultant, entreprise et administrateur, sur un schéma MySQL pensé pour l'intégrité des données.",
          ],
        },
      },
    ],
    challenge: {
      en: "My first full stack project from start to finish in a real company, with strict business rules set by the firm's auditors.",
      fr: "Mon premier projet full stack mené de bout en bout dans une vraie entreprise, avec des règles métier strictes imposées par les auditeurs du cabinet.",
    },
    architecture: {
      clients: ["React web app"],
      core: ["Node.js + Express API", "MySQL"],
      services: ["PDF reports", "E-mail notifications"],
    },
    stack: ["Node.js", "Express", "React", "MySQL", "Figma", "UML"],
  },
];

// French labels for the architecture diagrams (technology names stay as they are).
export const archFr = {
  "Customer app (iOS, Android)": "App client (iOS, Android)",
  "Shop dashboard (web)": "Tableau de bord commerçant (web)",
  "Twilio, WhatsApp, e-mail": "Twilio, WhatsApp, e-mail",
  "Flutter app (Android, iOS)": "App Flutter (Android, iOS)",
  "Web platform": "Plateforme web",
  "Socket.IO live updates": "Mises à jour en direct (Socket.IO)",
  "Scheduled reminder jobs": "Rappels planifiés",
  "PDF and e-mail": "PDF et e-mail",
  "Mobile app": "App mobile",
  "WebSocket chat alerts": "Alertes de chat (WebSocket)",
  "Flutter app": "App Flutter",
  "TFLite models (on device)": "Modèles TFLite (sur le téléphone)",
  "Node.js cron jobs": "Tâches cron Node.js",
  "React web app": "App web React",
  "PDF reports": "Rapports PDF",
  "E-mail notifications": "Notifications par e-mail",
};

// What the hero API console returns. Keys stay in English: it's code.
export const apiResponses = {
  "/me": {
    name: "Hamza Ben Aicha",
    role: "Backend & mobile engineer",
    location: "Tunisia",
    timezone: "UTC+1",
    open_to: ["remote, full-time", "freelance"],
    freelance_since: 2025,
    languages: ["ar", "fr", "en"],
  },
  "/projects": {
    count: 6,
    featured: [
      "VClub: loyalty SaaS, ~150 endpoints",
      "STE SMASS: inspection SaaS + Flutter app",
      "Lamygo: delivery and carpooling API",
      "TunisMove: car rental, on-device ML",
    ],
    details: "#work",
  },
  "/stack": {
    backend: ["Node.js", "NestJS", "Spring Boot"],
    mobile: ["Flutter", "Riverpod", "TFLite"],
    data: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    ops: ["Docker", "Kubernetes", "Helm", "GitLab CI"],
  },
};
