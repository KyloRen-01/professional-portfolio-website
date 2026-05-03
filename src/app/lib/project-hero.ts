interface ProjectProps {
  title: string;
  description: string;
  image: string;
  alt?: string;
  githubLink?: string;
  deploymentLink?: string;
  badges?: string[];
}

export const ProjectData: ProjectProps[] = [
  {
    title: "SAMAHAN WEBSITE 2026",
    description:
      "Get to know more about SAMAHAN On The Move, its officers, departments, and independent bodies",
    image: "/Projects/Samahan-website/1st.jpg",
    deploymentLink: "https://samahan.addu.edu.ph/",
    badges: ["Next.js", "TailwindCSS", "React"],
  },
  {
    title: "ADTO",
    description:
      "A new way to discover, share, and join events in ADDU starts now",
    image: "/Projects/ADTO-website/1st.jpg",
    deploymentLink: "https://samahan.addu.edu.ph/adto/home",
    badges: ["Next.js", "TailwindCSS", "React"],
  },
];
