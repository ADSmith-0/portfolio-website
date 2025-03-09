import type { TechnologyIds } from "./types";

export const technologyFromId: Record<TechnologyIds, { name: string; link: string }> = {
  go: { name: "Go", link: "https://go.dev/" },
  astro: { name: "Astro", link: "https://astro.build/" },
  react: { name: "React", link: "https://react.dev/" },
  "react-native": { name: "React Native", link: "https://reactnative.dev/" },
  svelte: { name: "Svelte", link: "https://svelte.dev/" },
  javascript: {
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  typescript: { name: "TypeScript", link: "https://www.typescriptlang.org/" },
  "web-components-api": {
    name: "Web Components API",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Web_components",
  },
  oauth: { name: "OAuth", link: "https://en.wikipedia.org/wiki/OAuth" },
  linux: { name: "Linux", link: "https://en.wikipedia.org/wiki/Linux" },
  c: { name: "C Programming Language", link: "https://en.wikipedia.org/wiki/C_(programming_language)" }
};
