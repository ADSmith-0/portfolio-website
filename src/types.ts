export type ProjectIds =
  | "grately"
  | "chess"
  | "dot-files"
  | "artist-network"
  | "js-patterns"
  | "advent-of-code-go-2021"
  | "typescript-server"
  | "c-programming-language"
  | "portfolio-website"
  | "my-website"
  | "traversy-js-challenges";

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
  | "linux"
  | "c";

export type Project = {
  id: ProjectIds;
  name: string;
  description: string;
  technologies: TechnologyIds[];
  link: string;
  repo: string;
  colour: string;
};
