// Central project data — edit this file to add/update projects.
// `priority` controls default sort order (lower = shown first).

const projects = [
  {
    id: "prms",
    title: "Project Review Management System",
    category: "MERN",
    image: "images/pr-7.png",
    tags: ["MERN"],
    tagline: "Realtime workflow for managing project reviews, developers & reviewers",
    description:
      "A realtime Project Review Management System designed to manage project reviews, developers, reviewers and administrative workflows.",
    features: [
      "Role-based dashboards for admins, reviewers and developers",
      "Realtime status updates on review cycles",
      "Structured review history and activity tracking",
      "Responsive interface built with React",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    live: "https://prms-frontend-delta.vercel.app/",
    github: "https://github.com/mugi1906",
    featured: true,
    priority: 1,
    source: "SDLC Training",
  },

  {
    id: "instalant",
    title: "Instalant — Social Media Platform",
    category: "MERN",
    image: "images/pr-10.png",
    tags: ["MERN"],
    tagline: "A social networking platform with posts, profiles & interaction",
    description:
      "A social media platform inspired by modern social networking applications, featuring user interaction, posts and responsive UI.",
    features: [
      "User authentication & profile management",
      "Post creation, likes and interactions",
      "Responsive, mobile-friendly interface",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    live: "https://code-alpha-social-media-frontend-opal.vercel.app/",
    github: "https://github.com/mugi1906",
    priority: 2,
    source: "CodeAlpha Internship",
  },

  {
    id: "project-mgmt-tool",
    title: "Project Management Tool",
    category: "MERN",
    image: "images/pr-9.png",
    tags: ["MERN"],
    tagline: "Collaborative workspace for projects, tasks & teams",
    description:
      "A collaborative project management application for managing projects, tasks, team members and project activities.",
    features: [
      "Task and project organisation",
      "Team member assignment",
      "Activity tracking across projects",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    live: "https://code-alpha-project-managment-tool-f.vercel.app/",
    github: "https://github.com/mugi1906",
    priority: 3,
    source: "CodeAlpha Internship",
  },

  {
    id: "ecommerce-intern",
    title: "E-Commerce Application",
    category: "MERN",
    image: "images/pr-8.png",
    tags: ["MERN"],
    tagline: "Full-stack storefront with product browsing & cart flow",
    description:
      "A responsive e-commerce application built using MERN Stack with product browsing and shopping functionality.",
    features: [
      "Product listing and browsing",
      "Shopping cart functionality",
      "Responsive storefront layout",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    live: "https://intern-e-commerce-frontend.vercel.app/",
    github: "https://github.com/mugi1906",
    priority: 4,
    source: "CodeAlpha Internship",
  },

  {
    id: "transport-tracking",
    title: "Transport Tracking Management System",
    category: "Flutter",
    image: "images/TTMS.jpeg",
    tags: ["Flutter"],
    tagline: "Final-year mobile app for realtime transport tracking",
    description:
      "A mobile-based transport tracking management system developed as my college final-year project using Flutter, Dart and Firebase.",
    features: [
      "Realtime transport tracking",
      "Firebase-backed data sync",
      "Mobile-first, user-friendly interface",
    ],
    stack: ["Flutter", "Dart", "Firebase"],
    live: "https://drive.google.com/file/d/1FaI1q1fApI3ZQnpxjrZjEl9IsivNfpdM/view?usp=drive_link",
    liveLabel: "View on Drive",
    priority: 5,
    source: "Final Year Project",
  },

  {
    id: "task-manager",
    title: "Task Management System",
    category: "React",
    image: "images/pr-6.png",
    tags: ["React"],
    tagline: "A focused React app for organising day-to-day tasks",
    description:
      "A React-based task management application designed to organize and manage tasks through a responsive user interface.",
    features: [
      "Create, edit and track tasks",
      "Clean, responsive interface",
      "Built entirely with React.js",
    ],
    stack: ["React.js"],
    live: "https://lucent-kitsune-89b19.netlify.app/",
    priority: 6,
    source: "Personal Project",
  },

  {
    id: "ems",
    title: "Employee Management System",
    category: "PHP",
    image: "images/pr-11.png",
    tags: ["PHP", "MySQL", "jQuery", "AJAX"],
    tagline: "Employee and department management system with CRUD operations",
    description:
      "A PHP-based Employee Management System developed using CRUD operations for managing employees and departments. The project also includes search and filtering functionality, sessions, cookies, jQuery and AJAX for a more interactive user experience.",
    features: [
      "Employee CRUD operations",
      "Department management",
      "Employee search and filtering",
      "Session and cookie handling",
      "AJAX-based operations",
      "jQuery-powered interactions",
      "MySQL database integration",
    ],
    stack: ["PHP", "MySQL", "jQuery", "AJAX", "HTML", "CSS"],
    live: "https://employee-management.freehosting.dev/",
    liveLabel: "Live Demo",
    priority: 7,
    source: "Personal Project",
  },

  {
    id: "shopify-mens-store",
    title: "Men's Online Shopping Store",
    category: "Shopify",
    image: "images/pr-12.png",
    tags: ["Shopify", "Liquid", "HTML/CSS", "JavaScript"],
    tagline: "Modern men's online shopping store built and customized with Shopify",
    description:
      "A men's online shopping website developed and customized using Shopify and Liquid. The store features product listings, collections, product details and shopping functionality with a responsive storefront designed for both desktop and mobile users.",
    features: [
      "Product listings and collections",
      "Product detail pages",
      "Shopping functionality",
      "Customized Shopify storefront",
      "Responsive desktop and mobile design",
      "Liquid-based theme customization",
      "User-friendly e-commerce interface",
    ],
    stack: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    live: "https://onlineshopping-t2xzzf2c.myshopify.com/",
    liveLabel: "Live Demo",
    storePassword: "admin",
    priority: 8,
    source: "Shopify Project",
  },

  {
    id: "electronic-ecommerce",
    title: "Electronic E-Commerce",
    category: "JavaScript",
    image: "images/pr-5.png",
    tags: ["JavaScript", "HTML/CSS"],
    tagline: "Frontend electronics storefront concept",
    description:
      "A frontend e-commerce website developed using HTML, CSS and JavaScript.",
    features: [
      "Product catalogue layout",
      "Vanilla JS interactivity",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://mugi1906.github.io/Electronic-E-Commers/",
    priority: 9,
    source: "Practice Project",
  },

  {
    id: "typewriting",
    title: "TypeWriting Web",
    category: "JavaScript",
    image: "images/pr-4.png",
    tags: ["JavaScript"],
    tagline: "Typing animation built with dynamic DOM manipulation",
    description:
      "A JavaScript-based typing animation project demonstrating dynamic DOM manipulation and interactive frontend behavior.",
    features: [
      "Animated typing effect",
      "DOM manipulation practice",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://mugi1906.github.io/type-Writing/",
    priority: 10,
    source: "Practice Project",
  },

  {
    id: "fresh-cart",
    title: "Fresh Cart Website",
    category: "HTML/CSS/Bootstrap",
    image: "images/pr-3.png",
    tags: ["HTML/CSS/BootStrap"],
    tagline: "Responsive food ordering website",
    description:
      "A responsive food ordering website created using HTML, CSS and Bootstrap.",
    features: [
      "Responsive menu layout",
      "Bootstrap-based grid",
    ],
    stack: ["HTML", "CSS", "Bootstrap"],
    live: "https://mugi1906.github.io/Fresh-Crat-Website-/",
    priority: 11,
    source: "Practice Project",
  },

  {
    id: "organic-food",
    title: "Organic Food Delivery",
    category: "HTML/CSS",
    image: "images/pr-1.png",
    tags: ["HTML/CSS"],
    tagline: "Static responsive delivery website",
    description:
      "A static responsive organic food delivery website designed using HTML and CSS.",
    features: [
      "Static responsive layout",
      "Section-based design",
    ],
    stack: ["HTML", "CSS"],
    live: "https://mugi1906.github.io/Organic-Food-Delivery/",
    priority: 12,
    source: "Practice Project",
  },

  {
    id: "car-ecommerce",
    title: "Car E-Commerce Website",
    category: "HTML/CSS",
    image: "images/pr-2.png",
    tags: ["HTML/CSS"],
    tagline: "Product-oriented static car listing site",
    description:
      "A static car e-commerce website created with HTML and CSS with a responsive product-oriented layout.",
    features: [
      "Product-oriented layout",
      "Fully static build",
    ],
    stack: ["HTML", "CSS"],
    live: "https://mugi1906.github.io/CarWebsite/",
    priority: 13,
    source: "Practice Project",
  },
];

export const filterCategories = [
  "All",
  "MERN",
  "React",
  "JavaScript",
  "PHP",
  "Shopify",
  "Flutter",
  "HTML/CSS",
  "HTML/CSS/BootStrap",
];

export default projects;