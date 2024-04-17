import { TabsStatusType } from "../menu/tabMenu/TabMenu";
import projectTravelCover from "../../components/assets/images/project_travel.png";
import projectFridayLiveCodingCover from "../../components/assets/images/project_friday-live-coding.png";
import projectPlantsCover from "../../components/assets/images/project_plants.png";
import projectLibraryCover from "../../components/assets/images/project_library.png";
import projectAudioPlayerCover from "../../components/assets/images/project_audio-player.png";
import projectCssMemeSliderCover from "../../components/assets/images/project_css-meme-slider.png";
import projectPortfolioCover from "../../components/assets/images/project_portfolio.png";
import projectRsschoolCvCover from "../../components/assets/images/project_rsschool-cv.png";


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
  },
  {
    href: "https://github.com/Lazeta?tab=repositories",
    title: "code",
  },
];

export const tabsItems: Array<{ status: TabsStatusType; title: string }> = [
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
  },
  {
    title: "Type Script",
    status: "ts",
  },
]


export const ObjectProjects = [
  {
    title: "Travel",
    src: projectTravelCover,
    type: ["landing", "js"],
    skills: ["HTML", "SCSS", "JavaScript"],
    text: `Landing page of Travel, this is an application that has authorization, travel planner, tour offers. Has Travel stories, recommendations for the perfect trip. Popular tours in the form of a slider.`,
    href: "https://lazeta.github.io/Travel/",
  },
  {
    title: "Friday Live Coding",
    src: projectFridayLiveCodingCover,
    type: ["js"],
    skills: ["HTML", "SCSS", "JavaScript", "BEM"],
    text: `The 'Productly' also 'Friday Live Coding' is a demo project with various implementations such as: user authorization, user registration, promo video, visual, visual toolset, marketing strategies, card filter, contact form and visualization of footer links for commerce. The product itself.`,
    href: "https://lazeta.github.io/Friday_Live_Coding/#",
  },
  {
    title: "Plants",
    src: projectPlantsCover,
    type: ["js"],
    skills: ["HTML", "SCSS", "JavaScript", "BEM"],
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
    sequi deserunt quibusdam amet, harum repellendus laborum ea minima
    quidem neque, quaerat voluptatem eum. Placeat laudantium sapiente illo
    velit, officia perspiciatis.`,
    href: "https://lazeta.github.io/Plants/src/",
  },
  {
    title: "Library",
    src: projectLibraryCover,
    type: ["js"],
    skills: ["HTML", "SCSS", "JavaScript", "BEM"],
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
    sequi deserunt quibusdam amet, harum repellendus laborum ea minima
    quidem neque, quaerat voluptatem eum. Placeat laudantium sapiente illo
    velit, officia perspiciatis.`,
    href: "https://lazeta.github.io/Library/library/",
  },
  {
    title: "Audio player",
    src: projectAudioPlayerCover,
    type: ["landing", "js"], 
    skills: ["TailwindCSS", "JavaScript"],
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
    sequi deserunt quibusdam amet, harum repellendus laborum ea minima
    quidem neque, quaerat voluptatem eum. Placeat laudantium sapiente illo
    velit, officia perspiciatis.`,
    href: "https://rolling-scopes-school.github.io/lazeta-JSFEPRESCHOOL2023Q2/audio-player/",
  },
  {
    title: "Css meme slider",
    src: projectCssMemeSliderCover,
    type: ["landing"],
    skills: ["HTML", "CSS"],
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
    sequi deserunt quibusdam amet, harum repellendus laborum ea minima
    quidem neque, quaerat voluptatem eum. Placeat laudantium sapiente illo
    velit, officia perspiciatis.`,
    href: "https://lazeta.github.io/cssMemeSlider/cssMemeSlider/index.html",
  },
  {
    title: "Portfolio",
    src: projectPortfolioCover,
    type: ["spa", "react", "ts"],
    skills: ["WEBPACK", "REACT", "JavaScript", "TYPESCRIPT", "REDUX", "styled components"],
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
    sequi deserunt quibusdam amet, harum repellendus laborum ea minima
    quidem neque, quaerat voluptatem eum. Placeat laudantium sapiente illo
    velit, officia perspiciatis.`,
    href: "https://main--gilded-salamander-518e59.netlify.app/",
  },
  {
    title: "Rsschool CV",
    src: projectRsschoolCvCover,
    type: ["landing"],
    skills: ["HTML", "CSS", "SCSS", "JavaScript"],
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
    sequi deserunt quibusdam amet, harum repellendus laborum ea minima
    quidem neque, quaerat voluptatem eum. Placeat laudantium sapiente illo
    velit, officia perspiciatis.`,
    href: "https://lazeta.github.io/rsschool-cv/",
  },
];