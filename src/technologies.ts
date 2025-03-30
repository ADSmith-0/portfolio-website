import type { TechnologyId } from "./types";

export const technologyFromId: Record<
  TechnologyId,
  { name: string; link: string }
> = {
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
  neovim: { name: "Neovim", link: "https://neovim.io/" },
  tmux: { name: "Tmux", link: "https://github.com/tmux/tmux/wiki" },
  alacritty: { name: "Alacritty", link: "https://alacritty.org/" },
  c: {
    name: "C Programming Language",
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  nativescript: {
    name: "NativeScript",
    link: "https://nativescript.org/",
  },
  pwa: {
    name: "Progressive Web App",
    link: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app",
  },
};
