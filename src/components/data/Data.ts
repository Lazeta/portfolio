import libraryImage from "../../components/assets/images/library_project-min.webp";
import plantsImage from "../../components/assets/images/plants_project-min.webp";
import travelImage from "../../components/assets/images/travel_project-min.webp";
import audioPlayerImage from "../../components/assets/images/audio-player_project-min.webp";
import { TabsStatusType } from "../menu/tabMenu/TabMenu";

export const SkillsFilter = [
  "Main stack",
  "Coding languages",
  "Bundlers",
  "Development environment",
  "Styles",
  "Libraries",
  "Metodology",
];

export const SkillsData = [
  {
    iconId: "html5Svg",
    title: "HTML",
  },
  {
    iconId: "css3Svg",
    title: "CSS",
  },
  {
    iconId: "sassSvg",
    title: "SCSS",
  },
  {
    iconId: "tailwindCssSvg",
    title: "TailwindCss",
  },
  {
    iconId: "javascriptSvgrepoCom",
    title: "JavaScript",
  },
  {
    iconId: "TypeScript",
    title: "TypeScript",
  },
  {
    iconId: "reactSvg",
    title: "React",
  },
  {
    iconId: "reduxSvg",
    title: "Redux",
  },
  {
    iconId: "styledComponentSvg",
    title: "Styled Component",
  },
  {
    iconId: "vscodeSvg",
    title: "VS Code",
  },
  {
    iconId: "webstormSvg",
    title: "Webstorm",
  },
  {
    iconId: "webpackSvg",
    title: "Webpack",
  },
  {
    iconId: "AISvg",
    title: "Artificial Intelligence",
  },
  {
    iconId: "NPM",
    title: "npm",
  },
  {
    iconId: "BemMetodology",
    title: "BEM Metodology",
  },
  {
    iconId: "githubSvg",
    title: "GitHub",
  },
  {
    iconId: "gitSvg",
    title: "Git",
  },
];

export const links = [
  { href: "/demo", title: "demo" },
  { href: "/github.io", title: "code" },
];

export const UseTechnologysData = [
  { title: "JAVASCRIPT"},
  { title: "REACT"},
  { title: "WEBPACK"},
  { title: "TYPESCRIPT"},
]

export const tabsItems: Array<{status: TabsStatusType; title: string}> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "SPA",
    status: "spa",
  },
  {
    title: "Landing page",
    status: "landing",
  },
  {
    title: "Java Script",
    status: "js",
  }
]

// у неё это worksData
export const ObjectProjects = [
  {
    title: "Library",
    src: libraryImage,
    skill: "",
    text: "",
    type: "spa",
  },
  {
    title: "Plants",
    src: plantsImage,
    skill: "",
    text: "",
    type: "spa",
  },
  {
    title: "Travel",
    src: travelImage,
    skill: "",
    text: "",
    type: "spa",
  },
  {
    title: "Audio-player",
    src: audioPlayerImage,
    skill: "",
    text: "",
    type: "landing",
  },
  // {
  //   title: "Audio-player",
  //   src: audioPlayerImage,
  //   skill: "",
  //   text: "",
  //   type: "landing",
  // },
  // {
  //   title: "Audio-player",
  //   src: audioPlayerImage,
  //   skill: "",
  //   text: "",
  //   type: "landing",
  // },
  // {
  //   title: "Audio-player",
  //   src: audioPlayerImage,
  //   skill: "",
  //   text: "",
  //   type: "landing",
  // },
];