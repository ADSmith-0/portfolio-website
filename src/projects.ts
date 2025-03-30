import type { Project, ProjectId } from "src/types";

export const projects: Project[] = [
  {
    id: "grately",
    name: "Grately",
    description:
      "A gratitude journal created as a mobile app, with built in daily reminders.",
    technologies: ["react-native", "typescript"],
    link: "",
    repo: "https://github.com/ADSmith-0/gratitude-journal-v3",
    colour: "#ea54a4",
    versions: [
      {
        version: "v2",
        description:
          "This version I tried to use NativeScript with Svelte to build a native app, although unfortunately it wasn't quite what I was looking for as there was a lot of basic functionality such as navigation that seemed quite difficult to do.",
        technologies: ["nativescript", "svelte"],
        repo: "",
      },
      {
        version: "v1",
        description:
          "This version I used Svelte and made it a PWA. The idea was to learn Svelte and PWA's and to be able to make an app that functioned as a website, as well as, a mobile app. What I found was that PWA's were intended to be progressive enhancements to websites and so there were certain limitations, for example, the app always has to launch with an internet connection available. I didn't want this for the app I wanted to be able to use the app entirely offline, with the online experience being only used to backup data, so I looked to rewrite it as a native app in the next version.",
        technologies: ["pwa", "svelte"],
        repo: "https://github.com/ADSmith-0/gratitude-journal",
      },
    ],
  },
  {
    id: "chess",
    name: "Chess",
    description:
      "Chess made with vanilla HTML, CSS and JavaScript. Mostly complete with: en passant, castling, check and checkmate.",
    technologies: ["web-components-api", "javascript"],
    link: "https://vanilla-js-chess-v1.netlify.app/",
    repo: "https://github.com/ADSmith-0/vanilla-js-chess",
    colour: "#0cf",
    versions: [
      {
        version: "v1",
        description:
          "This version I attempted to build chess using React, but I found it very hard to use as the reactivity meant it was re-rendering far more than it should, so I switched to a simpler approach in the next version.",
        technologies: ["react"],
        repo: "",
      },
    ],
  },
  {
    id: "dot-files",
    name: "Dot Files",
    description:
      "Configuration files for my development setup. Includes configurations for Neovim, Tmux, Alacritty, Git, as well as various scripts I've written that I've found helpful with development.",
    technologies: ["neovim", "tmux", "alacritty"],
    link: "",
    repo: "https://github.com/ADSmith-0/dot-files",
    colour: "#ffffff",
  },
  {
    id: "artist-network",
    name: "Artist Network",
    description:
      "A Web app designed to recommend music artists to you based on your tastes. It uses an unweighted bidirectional graph built from querying Spotify's API for recommended artists, then uses the BFS algorithm to find the shortest path, so it can recommend artists that are along this path.",
    technologies: ["react", "oauth", "javascript"],
    link: "",
    repo: "https://github.com/ADSmith-0/Artist-Network",
    colour: "#ffffff",
  },
  {
    id: "advent-of-code-go-2021",
    name: "Advent of Code 2021",
    description:
      'The 2021 <a target="_blank" href="https://adventofcode.com">Advent of Code</a>, which is a yearly christmas coding challenge. I used this to help me learn the Go programming language.',
    technologies: ["go"],
    link: "",
    repo: "https://github.com/ADSmith-0/advent-of-code-2021-go",
    colour: "#00acd7",
  },
  {
    id: "typescript-server",
    name: "TypeScript HTTP Server",
    description:
      'A HTTP server that I wrote from scratch using typescript. This was made with <a target="_blank" href="https://app.codecrafters.io/catalog">CodeCrafters</a>.',
    technologies: ["typescript"],
    link: "",
    repo: "https://github.com/adsmith-0/http-server-ts-codecrafters",
    colour: "#007acc",
  },
  {
    id: "c-programming-language",
    name: "C Programming Language",
    description:
      'Exercises and notes taken from working through <a target="_blank" href="https://en.wikipedia.org/wiki/The_C_Programming_Language">The C Programming Language</a> book.',
    technologies: ["c"],
    link: "",
    repo: "https://github.com/ADSmith-0/C-programming-language",
    colour: "#03599C",
  },
  {
    id: "my-website",
    name: "My Website",
    description:
      "My portfolio website for showing off my projects. This is the website that you are currently using",
    technologies: ["astro"],
    link: "https://adsmith-0-dev.netlify.app/",
    repo: "https://github.com/adsmith-0/my-website",
    colour: "#ff5d01",
  },
  {
    id: "js-patterns",
    name: "JS Patterns",
    description:
      "A repo dedicated to any JavaScript patterns or snippets that I find useful.",
    technologies: ["javascript"],
    link: "",
    repo: "https://github.com/ADSmith-0/test-js",
    colour: "#f0db4f",
  },
] as const;
