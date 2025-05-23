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
  | "pwa"
  | "rust"
  | "zig"
  | "elixir"
  | "htmx"
  | "websockets";

export type Version = Pick<Project, "technologies" | "repo" | "about"> &
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

export const technologyFromId: Record<
  TechnologyId,
  { name: string; link: string }
> = {
  go: { name: "Go", link: "https://go.dev/" },
  astro: { name: "Astro", link: "https://astro.build/" },
  react: { name: "React", link: "https://react.dev/" },
  "react-native": { name: "React Native", link: "https://reactnative.dev/" },
  svelte: { name: "Svelte", link: "https://svelte.dev/" },
  sveltekit: {
    name: "SvelteKit",
    link: "https://svelte.dev/tutorial/kit/introducing-sveltekit",
  },
  next: {
    name: "Next",
    link: "https://nextjs.org/",
  },
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
  rust: {
    name: "Rust",
    link: "https://www.rust-lang.org/",
  },
  zig: {
    name: "Zig",
    link: "https://ziglang.org/",
  },
  elixir: {
    name: "Elixir",
    link: "https://elixir-lang.org/",
  },
  htmx: {
    name: "Htmx",
    link: "https://htmx.org/",
  },
  websockets: {
    name: "Websockets",
    link: "https://en.wikipedia.org/wiki/WebSocket",
  },
};

export const projects: Project[] = [
  {
    id: "grately",
    name: "Grately",
    description:
      "A gratitude journal created as a mobile app, with built in daily reminders.",
    about:
      "This version is using React Native and TypeScript with Notifee for the reminders.",
    technologies: ["react-native", "typescript"],
    link: "",
    repo: "https://github.com/ADSmith-0/gratitude-journal-v3",
    colour: "#ea54a4",
    versions: [
      {
        about:
          "This version I tried to use NativeScript with Svelte to build a native app, although unfortunately it wasn't quite what I was looking for as there was a lot of basic functionality such as navigation that seemed quite difficult to do.",
        technologies: ["nativescript", "svelte"],
        repo: "",
      },
      {
        about:
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
      "A chess game which is mostly complete including: en passant, castling, check and checkmate.",
    about:
      "I made this version using the Web Components API, as well as OOP vanilla JavaScript. I found that the web components API and OOP worked very well together, although I thought that the rule that you have to include a hyphen in the component name was a little frustrating.",
    technologies: ["web-components-api", "javascript"],
    link: "https://vanilla-js-chess-v1.netlify.app/",
    repo: "https://github.com/ADSmith-0/vanilla-js-chess",
    colour: "#0cf",
    versions: [
      {
        about:
          "This version I attempted to build chess using React, but I found it very hard to use as the reactivity meant it was re-rendering far more than it should, so I switched to a simpler approach in the next version.",
        technologies: ["react"],
        repo: "",
      },
    ],
  },
  {
    id: "dot-files",
    name: "Dot Files",
    description: "Configuration files for my development setup.",
    about:
      "This contains my custom Neovim theme, my tmux config, my alacritty config and my zshell config, as well as any scripts I've written or other things that I've found helpful for development.",
    technologies: ["neovim", "tmux", "alacritty"],
    link: "",
    repo: "https://github.com/ADSmith-0/dot-files",
    colour: "#1bb91f",
  },
  {
    id: "artist-network",
    name: "Artist Network",
    description:
      "A Web app designed to recommend music artists to you based on your tastes. It uses a graph that I built from querying Spotify's API for recommended artists. Using that and the artists that you already listen to, it tries to recommend you new artists.",
    about:
      "I built this using React, Express and Neo4j. I wrote a script which would recursively query the Spotify API for recommended artists and then put the data into a Neo4j database. I then wrote a query in Cypher to use an A* algorithm to find the shortest path between two artists, although unfortunately because I was using an unweighted bidirectional graph this really was just Breath First Search. It would then take all the artists that were on the path and would consider them for recommendation, it would do this across your top 10 favourite artists on your Spotify account, then the inbetween artists that appeared the most would be recommended the highest. This worked surprisingly well, me and my friends all found new artists that we liked from this.",
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
    about:
      "This was a coding challenge to help me to learn the Go programming language.",
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
    about:
      "This was made as part of the code crafters course as a way for me to better understand how HTTP servers work, so that I could hopefully build one in C at some point.",
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
    about:
      "This was to help me to gain a deeper understanding of programming in a way that high level interpreted languages would not, while also learning C so that other compiled languages that I wanted to learn such as C++, Go, or Rust would be easier to understand. I also have a script to help me compile some of exercises more easily, and for the most complicated files I've also used Make to make it easier to compile the more complex programs I wrote as part of the book.",
    technologies: ["c"],
    link: "",
    repo: "https://github.com/ADSmith-0/C-programming-language",
    colour: "#03599C",
  },
  {
    id: "portfolio-website",
    name: "Portfolio website",
    description:
      "My portfolio website for showing off my projects. This is the website that you are currently using",
    about:
      "For the current iteration I wanted to try out Astro. I wanted to make a proper SSG focused website with something as close to vanilla as possible, this website uses no libraries as a result and all effects, animation and functionality was written with basic DOM-based TypeScript. I've very much enjoyed using Astro as well as getting back to the basics.",
    technologies: ["astro"],
    link: "https://adsmith-0-dev.netlify.app/",
    repo: "https://github.com/adsmith-0/my-website",
    colour: "#ff5d01",
    versions: [
      {
        technologies: ["sveltekit"],
        repo: "https://github.com/ADSmith-0/my-website",
        link: "https://app.netlify.com/sites/portfolio-website-adamsmith/overview",
        about:
          "For the next version, I decided to change over to use SvelteKit as I really enjoyed using Svelte for how light-weight it was. I thought that this was much better, but I found generally there were some points I wasn't a massive fan of with SvelteKit such as almost every file being called 'index', or the way that handling server side data or static paths seemed so difficult, and I found it difficult to get type-safety working across the front and backend as well.",
      },
      {
        technologies: ["next"],
        repo: "https://github.com/ADSmith-0/personal-website",
        about:
          "I created this using Next.js, I found that it was ok but also quite difficult to use. This was back when 'useStaticProps' and 'useServerSideProps' was the way you handled data.",
      },
    ],
  },
  {
    id: "js-patterns",
    name: "JS Patterns",
    description:
      "A repo dedicated to any JavaScript patterns or snippets that I find useful.",
    about:
      "A repo where I wanted to store all of the useful higher order patterns for JavaScript. At some point I would like to turn this into a website for useful TypeScript patterns, such as: Debounce, Throttle, Exponential backoff with jitter, queue, closures/currying, etc.",
    technologies: ["javascript"],
    link: "",
    repo: "https://github.com/ADSmith-0/test-js",
    colour: "#f0db4f",
  },
] as const;
