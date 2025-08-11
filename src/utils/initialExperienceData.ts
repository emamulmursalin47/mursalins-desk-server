export interface Experience {
  
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    
    title: "Software Engineer",
    company: "Tech Solutions Inc.",
    location: "New York, NY",
    duration: "Jan 2022 - Present",
    description: "Developed and maintained web applications using React and Node.js.",
    responsibilities: [
      "Designed and implemented RESTful APIs.",
      "Collaborated with cross-functional teams.",
      "Optimized application performance.",
    ],
  },
  {
    
    title: "Junior Developer",
    company: "Web Innovations Co.",
    location: "San Francisco, CA",
    duration: "Jul 2020 - Dec 2021",
    description: "Assisted in the development of client-side features.",
    responsibilities: [
      "Wrote clean and maintainable code.",
      "Participated in code reviews.",
      "Learned new technologies quickly.",
    ],
  },
];
