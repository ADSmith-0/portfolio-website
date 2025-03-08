export type ProjectIds =
  | "grately"
  | "chess"
  | "dot-files"
  | "artist-network"
  | "js-patterns"
  | "advent-of-code-go-2021";

export type TechnologyIds =
  | "javascript"
  | "typescript"
  | "web-components-api"
  | "go"
  | "oauth"
  | "react"
  | "react-native"
  | "svelte"
  | "astro"
  | "linux";

export type Project = {
  id: ProjectIds;
  name: string;
  technologies: TechnologyIds[];
  projectLink: string;
  repoLink: string;
  colour: string;
};
