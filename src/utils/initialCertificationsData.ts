export interface Certification {
  title: string;
  id: string;
  issuer: string;
  date: string;
  description: string;
  iconName: string; // Changed from 'icon' to 'iconName'
}

export const certifications: Certification[] = [
  {
    title: "Scrum Fundamentals Certified (SFC)",
    id: "1058764",
    issuer: "SCRUMstudy",
    date: "2024",
    description: "The SFC™ certification is recognized globally and serves as a stepping stone for further professional development in agile methodologies. .",
    iconName: "FileText",
  },
   {
    title: "Leadership & Team Management Mastery",
    id: "30967/55",
    issuer: "LEAD Academy",
    date: "2024",
    description: "Enhanced ability to align team objectives with organizational vision",
    iconName: "FileText",
  },
   {
    title: "Web Development",
    id: "666b29fc726937986928c4c9",
    issuer: "Bohubrihi",
    date: "2023",
    description: "Mastered the fundamentals of web development, including HTML, CSS, and JavaScript, and built responsive websites.",
    iconName: "FileText",
  },
];
