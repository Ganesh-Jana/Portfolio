export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  features: string[];
  category: 'Full Stack' | 'AI' | 'Web Development';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "BTechHub",
    description: "Created a centralized learning platform for B.Tech students, providing organized access to notes, question papers, and educational resources while fostering knowledge sharing within the student community.",
    image: "/btechhub.png",
    tech: ["Spring Boot", "React", "Rest APIs", "MySQL", "JWT", "Tailwind"],
    github: "https://github.com/Ganesh-Jana/B.TechHub-Frontend",
    demo: "https://b-tech-hub-frontend.vercel.app",
    features: ["📚 Centralized Resource Repository", "📤 Resource Upload & Sharing", "📝 Previous Year Question Bank", "📱 Responsive Design", "🔍 AI Doubt Solving"],
    category: "Full Stack"
  },
  {
    id: 2,
    title: "AI Email Replier (Chrome Extension)",
    description: "Created an AI-driven email productivity tool that analyzes email content and generates personalized, professional responses with a single click, reducing email drafting time and improving communication efficiency.",

    image: "/email_replier.png",
    tech: ["React", "Spring Boot", "Gemini API", "Manifest.Js"],
    github: "https://github.com/Ganesh-Jana/Email_Generator",
    demo: "",
    features: ["✉️ One-click AI-generated email replies", "🤖 Context-aware response generation", "🎨 Customizable tone and style", "🔒 Privacy-focused processing", "⚡ Seamless Gmail integration"],
    category: "AI"
  },
  {
    id: 3,
    title: "E-Commerce Microservices",
    description: "A scalable e-commerce backend built with microservices architecture handling 10K+ concurrent orders with event-driven communication.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tech: ["Spring Boot", "Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
    github: "https://github.com",
    demo: "https://demo.com",
    features: ["CQRS & Event Sourcing", "Payment gateway integration", "Inventory management", "Order tracking pipeline"],
    category: "Full Stack"
  },
  {
    id: 4,
    title: "Smart Resume Analyzer",
    description: "NLP-powered tool that parses resumes, scores ATS compatibility, and suggests improvements to match specific job descriptions.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
    tech: ["Python", "spaCy", "React", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    features: ["ATS score calculator", "Keyword gap analysis", "Section-by-section feedback", "Job description matching"],
    category: "AI"
  },
  {
    id: 5,
    title: "Personal Finance Dashboard",
    description: "A beautiful, interactive dashboard for tracking expenses, setting budgets, and visualizing spending patterns with bank account integration.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tech: ["React", "TypeScript", "Recharts", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    features: ["Automated expense categorization", "Budget alerts via email", "Monthly trend charts", "CSV import/export"],
    category: "Web Development"
  },
  {
    id: 6,
    title: "Campus Event Hub",
    description: "A centralized web app for college students to discover, register, and get reminders for campus events, fests, and club activities.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    tech: ["React", "Firebase", "Tailwind", "Node.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    features: ["QR-based check-in system", "Push notifications", "Event calendar sync", "Admin panel for organizers"],
    category: "Web Development"
  }
];
