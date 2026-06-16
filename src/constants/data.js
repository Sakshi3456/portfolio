export const personalInfo = {
  name: "Sakshi Nagre",
  title: "Full Stack Developer",
  intro: "I build production-grade web applications using React, Spring Boot, and Node.js — covering fintech, AI-powered platforms, and social networking with real-world auth, schema design, and AI integration.",
  email: "sakshinagre49@gmail.com",
  phone: "9960474914",
  location: "Pune",
  linkedin: "https://linkedin.com/in/sakshinagre",
  github: "https://github.com/Sakshi3456",
  resume: "https://drive.google.com/file/d/1krInNZ8pT4xjFyGdsR_gE5MY2satC3Fa/view?usp=sharing",
}

export const projects = [
  {
    title: "SpendSmart",
    subtitle: "Multi-Persona Expense Management Platform",
    desc: "Full-stack fintech platform serving 4 user personas across 2 portals with a configurable two-level approval workflow, burn rate predictor, JWT refresh token rotation, and automated budget alerts.",
    highlights: [
      "4 distinct user personas (Student, Salaried, Manager, CEO) from a single Spring Boot backend",
      "JWT with 15-min access tokens + 7-day refresh tokens with revocation on logout",
      "State machine approval workflow: DRAFT → PENDING_MANAGER → PENDING_CEO → APPROVED/REJECTED",
      "Burn rate predictor that calculates exact date budget will be exhausted",
      "Automated email alerts at 80% and 100% budget thresholds + PDF/CSV export",
    ],
    tech: ["Spring Boot 3", "Spring Security", "PostgreSQL", "React 18", "JWT", "Redux Toolkit"],
    github: "https://github.com/Sakshi3456",
    live: null,
  },
  {
    title: "PrepForge",
    subtitle: "AI-Powered Placement Preparation Platform",
    desc: "Full-stack placement prep platform with 6 integrated modules, LLaMA 3.1 AI mock interviews, parallel evaluation via Project Reactor, Google OAuth2, and real-time progress analytics.",
    highlights: [
      "6 modules: Notes, Interview Questions, Aptitude Quiz, Technical MCQ, Coding Practice, AI Mock Interviews",
      "LLaMA 3.1 (Groq API) evaluates answers with score (0–10) + specific feedback per session",
      "Parallel AI evaluation using Project Reactor Flux — O(1) concurrent vs O(n) sequential",
      "Dual auth: email/password + Google OAuth2 with email verification and forgot-password flows",
      "17+ table MySQL schema with weak area detection, daily streak, and 5-question recommendations",
    ],
    tech: ["Spring Boot 3", "React.js", "MySQL", "Groq AI (LLaMA 3.1)", "JWT", "OAuth2"],
    github: "https://github.com/Sakshi3456",
    live: null,
  },
  {
    title: "DevRise",
    subtitle: "Developer Social Media Platform",
    desc: "MERN stack social platform for developers to share syntax-highlighted code snippets and career achievements with personalized feeds, follow system, and JWT-secured REST APIs.",
    highlights: [
      "Code sharing with syntax highlighting + achievement badges (Job Offer, Certification, Project Launch)",
      "Personalized feed (followed users) and explore feed (all users) as separate optimized queries",
      "Full REST API with auth, post creation, like/comment, follow/unfollow via JWT middleware",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
    github: "https://github.com/Sakshi3456",
    live: null,
  },
]

export const skills = {
  Languages:["Java" , "JavaScript(ES6"],
  Frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Redux Toolkit", "React Hooks", "Recharts"],
  Backend: ["Spring Boot 3", "Spring MVC", "Spring Security", "Node.js", "Express.js", "Spring Data JPA", "Hibernate", "Project Reactor"],
  Database: ["MySQL", "PostgreSQL", "MongoDB"],
  "APIs & Auth": ["RESTful APIs", "JWT Authentication", "OAuth2 (Google)", "RBAC", "Refresh Token Rotation"],
  "AI & Tools": ["Groq API (LLaMA 3.1)", "OpenAI API", "Prompt Engineering", "Cursor", "Claude", "Chatgpt"],
  "Tools & Concepts": ["Git", "Postman", "OOP", "MVC Architecture"],
}

export const education = [
  {
    degree: "BE Computer Science",
    school: "Sandip Institute of Engineering and Management, Nashik",
    year: "2022 – 2025",
    grade: "CGPA: 7.62",
    type: "degree",
  },
  {
    degree: "Alpha: DSA with Java",
    school: "Apna College",
    year: "2025",
    grade: "Certificate",
    type: "certificate",
  },
  {
    degree: "Java Full Stack Development",
    school: "The Kiran Academy",
    year: "2026",
    grade: "Certificate",
    type: "certificate",
  },
  {
    degree: "HSC Science (12th)",
    school: "Shivsai Universal Junior College, Buldana",
    year: "2020 – 2021",
    grade: "90.67%",
    type: "education",
  },
  {
    degree: "SSC (10th)",
    school: "Bharat Vidhyalaya, Buldana",
    year: "2018 – 2019",
    grade: "76.80%",
    type: "education",
  },
]

export const languages = ["English", "Hindi", "Marathi"]