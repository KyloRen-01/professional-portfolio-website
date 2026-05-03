import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiCss,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiVercel,
  SiRailway,
  SiGithubactions,
  SiTga,
} from "react-icons/si";

interface SkillProps {
  name: string;
  icon: React.ElementType;
  color: string;
}
export const techstackbadges: SkillProps[] = [
  // --- Front End ---
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "React Native", icon: FaReact, color: "#61DAFB" },

  // --- Back End ---
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "SQL", icon: FaDatabase, color: "#F29111" },

  // --- UI & UX ---
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },

  // --- Developer Tools ---
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#181717" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
  { name: "Railway", icon: SiRailway, color: "#0B0D0E" },
  { name: "Taiga", icon: SiTga, color: "#A8E106" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
  { name: "Huly", icon: FaTools, color: "#7B8191" },
];
