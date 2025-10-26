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
