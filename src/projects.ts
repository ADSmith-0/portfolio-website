import type { Project } from "src/types";

export const projects: Project[] = [
  {
    id: "grately",
    name: "Grately",
    technologies: ["react-native", "typescript"],
    projectLink: "",
    repoLink: "",
    colour: "#ea54a4",
  },
  {
    id: "chess",
    name: "Chess",
    technologies: ["web-components-api", "javascript"],
    projectLink: "",
    repoLink: "",
    colour: "#0cf",
  },
  {
    id: "dot-files",
    name: "Dot Files",
    technologies: ["linux"],
    projectLink: "",
    repoLink: "",
    colour: "#ffffff",
  },
  {
    id: "artist-network",
    name: "Artist Network",
    technologies: ["react", "oauth", "javascript"],
    projectLink: "",
    repoLink: "",
    colour: "#ffffff",
  },
  {
    id: "js-patterns",
    name: "JS Patterns",
    technologies: ["javascript"],
    projectLink: "",
    repoLink: "",
    colour: "#f0db4f",
  },
  {
    id: "advent-of-code-go-2021",
    name: "Advent of code 2021",
    technologies: ["go"],
    projectLink: "",
    repoLink: "",
    colour: "#00acd7",
  },
] as const;
