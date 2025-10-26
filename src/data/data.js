import { FaGithub, FaLinkedin } from "react-icons/fa";

export const social = [
  {
    Icon: FaLinkedin,
    label: "LinKedIn",
    href: "https://www.linkedin.com/in/felipe-castro-907478182/",
  },
  {
    Icon: FaGithub,
    label: "Github",
    href: "https://github.com/FelipeCastro-js",
  },
];

export const glowVariants = {
  initial: {
    scale: 1,
    y: 0,
    filter: "drop-shadow(0 0 0 rgba(0, 0, 0, 0))",
  },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13, 88, 204, 0.9)) drop-shadow(0 0 18px rgba(16, 185, 129, 0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: {
    scale: 0.95,
    y: 0,
    transition: { duration: 0.08 },
  },
};

export const glows = [
  "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
  "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
  "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
];

export const stats = [
  { label: "Experience", value: "2+ years" },
  { label: "Specialized", value: "Frontend Developer" },
  { label: "Focus", value: "Scalable Architecture & Code Quality" },
];
