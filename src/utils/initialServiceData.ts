export interface Service {
  id: string;
  category: string;
  title: string;
  details: string;
  subDetails: string[];
  imageSrc: string;
}

export const services: Service[] = [
  {
    id: "web-dev",
    category: "Website Development",
    title: "Crafting Responsive & Engaging Websites",
    details:
      "Elevate your online presence with a custom-built website that not only looks stunning but also performs flawlessly across all devices. We focus on user experience, search engine visibility, and robust functionality to turn visitors into customers.",
    subDetails: [
      "Custom Web Design & Development",
      "E-commerce Solutions (Shopify, WooCommerce)",
      "CMS Integration (WordPress, Headless CMS)",
      "Performance Optimization & SEO Basics",
    ],
    imageSrc: "https://via.placeholder.com/150/0000FF/FFFFFF?text=WebDev", // Placeholder image
  },
  {
    id: "mobile-app-dev",
    category: "Mobile App Development",
    title: "Building Intuitive & Powerful Mobile Applications",
    details:
      "Reach your audience wherever they are with a custom mobile application. We design and develop intuitive, high-performance apps for iOS and Android that provide exceptional user experiences and drive meaningful engagement for your business.",
    subDetails: [
      "Native iOS & Android App Development",
      "Cross-Platform (React Native, Flutter)",
      "UI/UX Design for Mobile",
      "API Integration & Backend Services",
    ],
    imageSrc: "https://via.placeholder.com/150/FF0000/FFFFFF?text=MobileApp", // Placeholder image
  },
  {
    id: "custom-software-dev",
    category: "Custom Software Development",
    title: "Tailored Software Solutions for Your Business",
    details:
      "Streamline your operations and gain a competitive edge with bespoke software solutions. We develop custom applications, robust APIs, and seamless integrations designed to perfectly fit your unique business processes and solve specific challenges.",
    subDetails: [
      "Enterprise Software Solutions",
      "CRM/ERP Customization",
      "API Development & Integration",
      "Cloud-Based Solutions (AWS, Azure)",
    ],
    imageSrc: "https://via.placeholder.com/150/00FF00/FFFFFF?text=CustomSW", // Placeholder image
  },
  {
    id: "developer-services",
    category: "Developer Services",
    title: "Expert Developer Support & Consultation",
    details:
      "Empower your development team and accelerate project success with our expert developer services. From in-depth code reviews and performance optimization to strategic technical consulting, we provide the specialized support you need to build robust and efficient software.",
    subDetails: [
      "Code Review & Refactoring",
      "Technical Consulting & Strategy",
      "Performance Optimization",
      "Ongoing Maintenance & Support",
    ],
    imageSrc: "https://via.placeholder.com/150/FFFF00/000000?text=DevServices", // Placeholder image
  },
];
