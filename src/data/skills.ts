export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  category: string;
  emoji: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    emoji: "⌨️",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 82 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 78 },
      { name: "SQL", level: 80 },
    ]
  },
  {
    category: "Frontend",
    emoji: "🎨",
    skills: [
      { name: "React.js", level: 88 },
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "Tailwind CSS", level: 85 },
    ]
  },
  {
    category: "Backend",
    emoji: "⚙️",
    skills: [
      { name: "Spring Boot", level: 82 },
      { name: "Node.js", level: 78 },
      { name: "REST APIs", level: 88 },
      { name: "FastAPI", level: 72 },
    ]
  },
  {
    category: "Database",
    emoji: "🗄️",
    skills: [
      { name: "MySQL", level: 82 },
      { name: "PostgreSQL", level: 78 },
      { name: "MongoDB", level: 74 },
      { name: "Redis", level: 65 },
    ]
  },
  {
    category: "Tools & DevOps",
    emoji: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 72 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 88 },
    ]
  }
];
