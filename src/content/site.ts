// Everything a visitor reads lives here. Edit this file to update the site.

export const site = {
  name: "Eray Kaya",
  role: "Lead Developer",
  url: "https://eraykaya.me",
  tagline: "Lead developer. Builds fast frontends and the teams behind them.",
  description:
    "Eray Kaya is a lead developer who has been building products and leading frontend teams since 2017.",
  devtoUsername: "eraywebdev",
};

/** Lines that rotate under the room scene, after the "Now" tag. Keep them short and true. */
export const nowLines = [
  "Rebuilding this site, slowly and properly",
  "Building products and leading teams since 2017",
  "Writing about frontend on dev.to",
];

export const about = [
  "I've been building products and managing projects since 2017. I care about clean, maintainable codebases and about the people who work in them.",
  "I've shipped single-page apps, traditional web apps and decentralized apps with React, Vue, Next.js, Nuxt, Node.js, GraphQL, tRPC, ethers and web3.js. The tools change; the habit of choosing them carefully doesn't.",
];

export type Role = {
  company: string;
  title: string;
  /** Short marker shown on the right of the row. */
  note: string;
  summary: string;
  details: string[];
  stack?: string[];
};

export const experience: Role[] = [
  {
    company: "TokenSuite",
    title: "Lead Frontend Developer",
    note: "lead",
    summary:
      "Set the frontend foundation for each project, chose the stack, planned sprints and still wrote a lot of the code.",
    details: [
      "Built the frontend foundation for every project.",
      "Worked directly with customers to solve their problems.",
      "Organized tasks and planned sprints for the team.",
      "Mentored junior developers.",
      "Made technical and product decisions.",
      "Ran code reviews and refactored where needed.",
    ],
    stack: ["Next.js", "TypeScript", "GraphQL", "ethers.js", "Sass"],
  },
  {
    company: "3Pounds",
    title: "Software Developer",
    note: "scale",
    summary:
      "Rebuilt trt.net.tr, the site of Türkiye's national broadcaster, which serves millions of visitors a month.",
    details: [
      "Rebuilt trt.net.tr from scratch.",
      "Led frontend work in Nuxt.js, turning designs into production code.",
      "Applied SEO improvements across the site.",
      "Created a design system from scratch, in close collaboration with the designers.",
    ],
    stack: ["Nuxt.js", "Vue", "SEO", "Design systems"],
  },
  {
    company: "Bilet Bayisi",
    title: "Software Developer",
    note: "solo",
    summary:
      "The only frontend developer on biletbayisi.com, a flight ticket site with 400–600k visitors a month. Rebuilt it from the ground up.",
    details: [
      "Rebuilt the whole site with Laravel Blade and React.",
      "Built payments, complex client-side filtering and date handling for flight search.",
    ],
    stack: ["React", "Laravel Blade", "JavaScript"],
  },
];

export const links = [
  { label: "GitHub", href: "https://github.com/Elvaleryn" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eray-kaya-17955b1a9/" },
  { label: "dev.to", href: "https://dev.to/eraywebdev" },
  { label: "X", href: "https://x.com/eraywebdev" },
];
