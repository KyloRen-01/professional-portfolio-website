interface ProjectProps {
  title: string;
  description: string;
  image: string;
  alt?: string;
  githubLink?: string;
  deploymentLink?: string;
  badges?: string[];
}

export const FeatureProjectData: ProjectProps[] = [
  {
    title: "SAMAHAN WEBSITE 2026",
    description:
      "Get to know more about SAMAHAN On The Move, its officers, departments, and independent bodies",
    image: "/Projects/Samahan-website/1st.jpg",
    deploymentLink: "https://samahan.addu.edu.ph/",
    badges: ["Next.js", "TailwindCSS"],
  },
  {
    title: "ADTO WEBSITE 2026",
    description:
      "A new way to discover, share, and join events in ADDU starts now",
    image: "/Projects/ADTO-website/1st.jpg",
    deploymentLink: "https://samahan.addu.edu.ph/adto/home",
    badges: ["Next.js", "TailwindCSS", "Supabase"],
  },
  {
    title: "MAGIS MARKET WEBSITE",
    description:
      "Ateneo De Davao University's first online marketplace for students, faculty, and staff to buy and sell pre-loved items, fostering a sustainable and connected campus community.",
    image: "/Projects/MagisMarket-website/1st.png",
    deploymentLink: "https://magis-market-client.vercel.app/",
    badges: ["Next.js", "TailwindCSS", "Supabase"],
  },
];
