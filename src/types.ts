export type ProjectId =
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

export type TechnologyId =
  | "javascript"
  | "typescript"
  | "nativescript"
  | "web-components-api"
  | "go"
  | "oauth"
  | "react"
  | "react-native"
  | "svelte"
  | "astro"
  | "neovim"
  | "tmux"
  | "alacritty"
  | "c"
  | "pwa";

export type Project = {
  id: ProjectId;
  name: string;
  description: string;
  technologies: TechnologyId[];
  link: string;
  repo: string;
  colour: string;
};
