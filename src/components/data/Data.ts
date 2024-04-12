import { TabsStatusType } from "../menu/tabMenu/TabMenu";
import projectTravelCover from "../../components/assets/images/project_travel.png";
import projectFridayLiveCodingCover from "../../components/assets/images/project_friday-live-coding.png";
import projectPlantsCover from "../../components/assets/images/project_plants.png";
import projectLibraryCover from "../../components/assets/images/project_library.png";
import projectAudioPlayerCover from "../../components/assets/images/project_audio-player.png";
import projectCssMemeSliderCover from "../../components/assets/images/project_css-meme-slider.png";
import projectPortfolioCover from "../../components/assets/images/project_portfolio.png";
import projectRsschoolCvCover from "../../components/assets/images/project_rsschool-cv.png";
// import { ProjectLinksPropsType } from "../link/Link";


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
  { 
  href: "/demo", 
  title: "demo",
  // status: 'demo',
  },
  { 
  href: "https://github.com/Lazeta?tab=repositories", 
  title: "code",
  // status: 'code',
  },
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
    title: "Travel",
    src: projectTravelCover,
    type: "landing",
    skill: "",
    text: "",
    href: "",
  },
  {
    title: "FridayLiveCoding",
    src: projectFridayLiveCodingCover,
    type: "spa",
    skill: "",
    text: "",
    href: "",
  },
  {
    title: "Plants",
    src: projectPlantsCover,
    type: "js",
    skill: "",
    text: "",
    href: "",
  },
  {
    title: "Library",
    src: projectLibraryCover,
    type: "js",
    skill: "",
    text: "",
    href: "",
  },
  {
    title: "Audio-player",
    src: projectAudioPlayerCover,
    type: "spa",
    skill: "",
    text: "",
    href: "",
  },
  {
    title: "Css-meme-slider",
    src: projectCssMemeSliderCover,
    type: "landing",
    skill: "",
    text: "",
    href: "",
  },
  {
    title: "Portfolio",
    src: projectPortfolioCover,
    type: "react",
    skill: "",
    text: "",
    href: "",
  },
  {
    title: "Rsschool-CV",
    src: projectRsschoolCvCover,
    type: "landing",
    skill: "",
    text: "",
    href: "",
  },
];