export type ProjectIds = "grately" | "chess" | "dot-files" | "artist-network" | "js-patterns";

export type Project = {
  id: ProjectIds;
  name: string;
  projectLink: string;
  repoLink: string;
  colour: string;
}
