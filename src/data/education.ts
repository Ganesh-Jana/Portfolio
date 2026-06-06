export interface Education {
  degree: string;
  institution: string;
  year: string;
  grade: string;
  description: string;
}

export const education: Education[] = [
  {
    degree: "B.Tech – Computer Science & Engineering",
    institution: "Durgapur Institute of Advanced Technology and Management, Durgapur",
    year: "2022 – 2026",
    grade: "7.69 CGPA",
    description: "Developed expertise in software engineering, full-stack development, and machine learning through academic projects and hands-on experience."
  },
  {
    degree: "Higher Secondary (Class XII)",
    institution: "Daharkundu S.R.K. High School, Arambagh",
    year: "2020 – 2022",
    grade: "89%",
    description: "Completed Higher Secondary education with PCM and Computer Science, gaining foundational knowledge in mathematics, programming, and logical reasoning."
  },
  {
    degree: "Secondary (Class X)",
    institution: "Daharkundu S.R.K. High School, Arambagh",
    year: "2020",
    grade: "89.43%",
    description: "Achieved 89.43% with distinction and a strong foundation in mathematics and science."
  }
];

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  responsibilities: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    company: "IEEE Computational Intelligence Society",
    role: "AI-ML Research Intern",
    duration: "June 2025 – Aug 2025",
    location: "Remote",
    type: "Internship",
    responsibilities: [
     "Worked on supervised machine learning assignments involving data preprocessing, feature engineering, and model evaluation.", 

"Applied Python-based analytical techniques to structured datasets.",

"Collaborated on AI-focused projects and technical problem-solving activities.",
    ],
    tech: ["Python", "ML", "Supervised Learning", "Scikit-learn", "Agent-based Modeling"]
  },
  {
    company: "JPMorgan Chase Co. Software Engineering Job Simulation– Forage",
    role: "Software Engineer Intern (Simulated)",
    duration: "May 2026",
    location: "Remote",
    type: "Virtual Experience Programs",
    responsibilities: [
      "Completed a virtual software engineering job simulation focused on enterprise application development.",
"Implemented Apache Kafka integration for event-driven communication.", 
"Worked with H2 Database for data storage and management.",
"Developed and integrated REST APIs and REST controllers.",
"Gained hands-on experience with backend system architecture and software development workflows.", 
"Applied Java-based development concepts in a real-world banking technology simulation",
    ],
    tech: ["Java", "H2 Database", "REST APIs", "API Integration", "Backend Development,"]
  }
];

export interface Certification {
  name: string;
  org: string;
  date: string;
  link: string;
  credentialId?: string;
  color: string;
}

export const certifications: Certification[] = [
  {
    name: "IBM SkillsBuild in Advanced IT Skills",
    org: "IBM",
    date: "Mar 2026",
    link: "https://drive.google.com/file/d/1MFZgBMRguxdIxbJNv3G-8q7j14zdp9eD/view?usp=sharing",
    credentialId: "",
    color: "#4285F4"
  },
  {
    name: "Full Stack Developer",
    org: "SimpleLearn",
    date: "Jun 2025",
    link: "https://drive.google.com/file/d/1Azec8OWjPRvH9OanGSOPb0kP8tvcOq0i/view?usp=sharing",
    credentialId: "",
    color: "#EC4899"
  },
  {
    name: "ADVANCE JAVA",
    org: "WEBFLEX COMSULTANCY SERVICES PVT. LTD.",
    date: "Sep 2024",
    link: "https://drive.google.com/file/d/1Sw3cUsgM1Z0iwDE6dCSuhh90dt7FWZ6U/view?usp=sharing",
    credentialId: "",
    color: "#F59E0B"
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    org: "Amazon Web Services",
    date: "Dec 2023",
    link: "https://aws.amazon.com",
    credentialId: "AWS-CPE-2023",
    color: "#FF9900"
  }
];
