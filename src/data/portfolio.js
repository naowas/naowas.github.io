export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" }
];

export const skills = [
  {
    category: "Backend",
    items: ["Laravel", "PHP", "Node.js", "Express.js", "REST API Development", "FilamentPHP", "WordPress/WooCommerce"]
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL", "MariaDB", "MongoDB"]
  },
  {
    category: "Frontend",
    items: ["JavaScript", "Vue.js", "Blade Templating", "HTML/CSS", "Tailwind CSS"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git & GitHub", "Linux", "Docker", "AWS", "GCP", "FFmpeg", "CI/CD Basics"]
  }
];

export const projects = [
  {
    title: "Buy You a",
    type: "Backend",
    description:
      "A social app backend focused on connecting people through gifting. Integrated Stripe for payments and Google Maps for location-based features, ensuring secure and scalable transactions.",
    stack: ["Laravel", "Stripe API", "Google Maps API", "REST"],
    github: ""
  },
  {
    title: "Metrofrontdesk",
    type: "Backend",
    description:
      "A reservation management system built to streamline bookings and operations. Handled complex third-party integrations including Guesty API and Stripe for payment processing.",
    stack: ["PHP", "FilamentPHP", "Stripe API", "Guesty API", "MySQL"],
    github: ""
  },
  {
    title: "DigiKeyboard / Content Platform",
    type: "Fullstack",
    description:
      "A content writing platform where customers can order various customized content based on their needs, featuring a robust order management and delivery workflow.",
    stack: ["PHP", "Laravel", "MySQL", "API"],
    github: ""
  },
  {
    title: "Converts",
    type: "Fullstack",
    description:
      "A comprehensive file conversion and compression tool platform (similar to Smallpdf). Handled integrations with FFmpeg, LibreOffice, ImageMagick, Potrace, and Python scripts for processing images, videos, Word, and PDF files.",
    stack: ["Node.js / PHP", "Python", "FFmpeg", "LibreOffice", "ImageMagick", "Potrace"],
    github: ""
  },
  {
    title: "Geo-Coding Server",
    type: "Backend",
    description:
      "A microservice dedicated to reverse-geocoding latitude and longitude into addresses. Integrates MongoDB to cache resulting addresses and drastically reduce external API load on repeated coordinates.",
    stack: ["Node.js", "Express.js", "MongoDB", "Geocoding", "Caching"],
    github: ""
  },
  {
    title: "Autonemo ERP & PiHR CRM",
    type: "Fullstack",
    description:
      "Developed robust business logic and optimized software performance for Autonemo ERP, Client Portal, and PiHR CRM to ensure seamless operations.",
    stack: ["PHP", "Laravel", "MySQL", "Payment Gateways", "REST"],
    github: ""
  }
];

export const openSource = [
  {
    name: "crud-generator",
    highlight: "Laravel package that generates CRUD scaffolding for faster backend delivery.",
    stars: "1",
    usage: "Focused on reducing repetitive implementation work",
    link: "https://github.com/naowas/crud-generator"
  },
  {
    name: "free-fire-api",
    highlight: "Public API utility repository with practical PHP endpoint implementation.",
    stars: "4",
    usage: "Publicly used reference for simple external API response patterns",
    link: "https://github.com/naowas/free-fire-api"
  },
  {
    name: "laravel-full-calendar",
    highlight: "Community contribution through a Laravel FullCalendar helper fork.",
    stars: "1",
    usage: "Used as an integration reference in Laravel ecosystem projects",
    link: "https://github.com/naowas/laravel-full-calendar"
  }
];

export const experiences = [
  {
    period: "Mar 2022 - Present",
    role: "Software Engineer",
    company: "Autonemo",
    points: [
      "Developing robust business logics and optimizing software performance for Autonemo ERP, Client Portal, Geo-Coding Server, and PiHR CRM.",
      "Implementing and maintaining multiple Payment Gateways including Bkash, Nagad, SslCommerz, AamarPay, and Upay.",
      "Deploying application code in servers and collaborating with external agencies to ensure seamless operations."
    ]
  },
  {
    period: "Mar 2025 - Sep 2025",
    role: "Software Engineer (Project Basis)",
    company: "BEM Group (bemgroup.agency)",
    points: [
      "Worked on DigiKeyboard, a content writing platform with complex order management workflows.",
      "Developed 'Converts', a comprehensive file conversion tool handling videos, images, and documents using FFmpeg and Python.",
      "Built custom WordPress plugins tailored to business requirements."
    ]
  },
  {
    period: "Nov 2023 - Feb 2025",
    role: "Backend Engineer (Project Basis)",
    company: "Spacecats (spacecats.tech)",
    points: [
      "Architected backend for 'Buy You a', a social gifting app, with complex Stripe and Google Maps integration.",
      "Developed 'Metrofrontdesk', a reservation management system, heavily utilizing Guesty API and Stripe for bookings."
    ]
  },
  {
    period: "Feb 2021 - Mar 2022",
    role: "Jr. Software Engineer (PHP)",
    company: "Easytrax Ltd.",
    points: [
      "Wrote business logic and solved software performance problems for the Easytrax CRM web application.",
      "Implemented third-party APIs (Bulk SMS, Email, Telegram Bot) and payment gateways within the CRM.",
      "Deployed Laravel projects to AWS LightSail and maintained source code infrastructure using GIT."
    ]
  },
  {
    period: "Oct 2020 - Jan 2021",
    role: "WordPress Developer",
    company: "Nested IT Solutions",
    points: [
      "Built custom WordPress themes from raw HTML templates and developed specialized widgets for Elementor.",
      "Communicated directly with clients to resolve bugs and improve existing platform features."
    ]
  }
];

export const contact = {
  email: "naowas.morshed@gmail.com",
  github: "https://github.com/naowas",
  linkedin: "https://linkedin.com/in/naowas"
};
