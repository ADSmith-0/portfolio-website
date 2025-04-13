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
  | "sveltekit"
  | "next"
  | "astro"
  | "neovim"
  | "tmux"
  | "alacritty"
  | "c"
  | "pwa";

export type VersionNumber = `V${number}`;
export type Version = { version: VersionNumber } & Pick<
  Project,
  "technologies" | "repo" | "about"
> &
  Partial<Pick<Project, "link">>;

export type Project = {
  id: ProjectId;
  name: string;
  description: string;
  about: string;
  technologies: TechnologyId[];
  link: string;
  repo: string;
  colour: string;
  versions?: Version[];
};
