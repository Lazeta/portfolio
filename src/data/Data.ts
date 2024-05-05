import {TabsStatusTypeProject} from "../components/menu/tabMenu/TabMenu";
import { TabsStatusTypeSkills } from "../components/menu/tabMenu/FilterMenu";
import projectTravelCover from "../assets/images/project_travel.png";
import projectFridayLiveCodingCover from "../assets/images/project_friday-live-coding.png";
import projectPlantsCover from "../assets/images/project_plants.png";
import projectLibraryCover from "../assets/images/project_library.png";
import projectAudioPlayerCover from "../assets/images/project_audio-player.png";
import projectCssMemeSliderCover from "../assets/images/project_css-meme-slider.png";
import projectPortfolioCover from "../assets/images/project_portfolio.png";
import projectRsschoolCvCover from "../assets/images/project_rsschool-cv.png";

export const headerItems = [
  {
    title: 'Home',
    href: 'home'
  },
  {
    title: 'About me',
    href: 'about'
  },
  {
    title: 'Projects',
    href: 'projects'
  },
  {
    title: 'Skills',
    href: 'skills'
  },
  {
    title: 'Contacts',
    href: 'contacts'
  },
];

export const SkillsData = [
  {
    id: 1,
    iconId: "html5Svg",
    title: "HTML",
    type: ['all'],
  },
  {
    id: 2,
    iconId: "css3Svg",
    title: "CSS",
    type: ['all', 'styles'],
  },
  {
    id: 3,
    iconId: "sassSvg",
    title: "SCSS",
    type: ['all', 'styles'],
  },
  {
    id: 4,
    iconId: "tailwindCssSvg",
    title: "TailwindCss",
    type: ['all', 'styles', 'framework'],
  },
  {
    id: 5,
    iconId: "javascriptSvgrepoCom",
    title: "JavaScript",
    type: ['all', 'languages'],
  },
  {
    id: 6,
    iconId: "TypeScript",
    title: "TypeScript",
    type: ['all', 'languages'],
  },
  {
    id: 7,
    iconId: "reactSvg",
    title: "React",
    type: ['all', 'libraries', 'languages', 'framework'],
  },
  {
    id: 8,
    iconId: "reduxSvg",
    title: "Redux",
    type: ['all', 'libraries'],
  },
  {
    id: 9,
    iconId: "styledComponentSvg",
    title: "Styled Component",
    type: ['all', 'styles'],
  },
  {
    id: 10,
    iconId: "vscodeSvg",
    title: "VS Code",
    type: ['all', 'development_environment'],
  },
  {
    id: 11,
    iconId: "webstormSvg",
    title: "Webstorm",
    type: ['all', 'development_environment'],
  },
  {
    id: 12,
    iconId: "webpackSvg",
    title: "Webpack",
    type: ['all', 'bundlers'],
  },
  {
    id: 13,
    iconId: "AISvg",
    title: "Artificial Intelligence",
    type: ['all', ],
  },
  {
    id: 14,
    iconId: "NPM",
    title: "npm",
    type: ['all', 'libraries'],
  },
  {
    id: 15,
    iconId: "BemMetodology",
    title: "BEM Metodology",
    type: ['all', 'methodology'],
  },
  {
    id: 16,
    iconId: "githubSvg",
    title: "GitHub",
    type: ['all', ],
  },
  {
    id: 17,
    iconId: "gitSvg",
    title: "Git",
    type: ['all', 'libraries'],
  },
];

export const tabsFilterSkills: Array<{ title: string; status: TabsStatusTypeSkills }> = [
  {
    title: "Main stack",
    status: "all",
  },
  {
    title: "Coding languages",
    status: "languages",
  },
  {
    title: "Bundlers",
    status: "bundlers",
  },
  {
    title: "Development environment",
    status: "development_environment",
  },
  {
    title: "Framework",
    status: "framework",
  },
  {
    title: "Styles",
    status: "styles",
  },
  {
    title: "Methodology",
    status: "methodology",
  },
  {
    title: "Libraries",
    status: "libraries",
  },
]

export const tabsFilterProject: Array<{ status: TabsStatusTypeProject; title: string }> = [
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

export const linksData = [
  { name: 'demo', urlKey: 'href' },
  { name: 'code', urlKey: 'code' },
];

export const ObjectProjects = [
  {
    title: "Travel",
    src: projectTravelCover,
    type: ["all", "landing", "js"],
    skills: ["HTML", "SCSS", "JavaScript"],
    text: `Landing page of Travel, this is an application that has authorization menu, registration menu, travel planner, tour offers. Has Travel stories, recommendations for the perfect trip. Popular tours in the form of a slider. Also a contact field with the author`,
    href: "https://lazeta.github.io/Travel/",
    code: "https://github.com/Lazeta/Travel",
    id: 1,
  },
  {
    title: "Friday Live Coding",
    src: projectFridayLiveCodingCover,
    type: ["all", "js"],
    skills: ["HTML", "CSS" ,"SCSS", "JavaScript", "BEM"],
    text: `The 'Productly' also 'Friday Live Coding' is a demo project with various implementations such as: user authorization, user registration, promo video, visual, visual toolset, marketing strategies, card filter, contact form and visualization of footer links for commerce. The product itself. Also a contact field with the author`,
    href: "https://lazeta.github.io/Friday_Live_Coding/",
    code: "https://github.com/Lazeta/Friday_Live_Coding/tree/main?tab=readme-ov-file",
    id: 2,
  },
  {
    title: "Plants",
    src: projectPlantsCover,
    type: ["all", "js"],
    skills: ["HTML", "SCSS", "JavaScript", "BEM"],
    text: `Site 'Plants' for agriculture and gardeners without authorization. One-pagem, demo. Has a focus filtering panel with a list of cards. Menu prices and options to purchase and add to card. A contact field where there is a selection of office cities and contact information, addresses. There is also a contact field with the author.`,
    href: "https://lazeta.github.io/Plants/src/",
    code: "https://github.com/Lazeta/Plants/tree/master",
    id: 3,
  },
  {
    title: "Library",
    src: projectLibraryCover,
    type: ["all", "js"],
    skills: ["HTML", "CSS", "SCSS", "JavaScript", "BEM"],
    text: `This 'Brooklyn Public Library' site is a paginated library photo slider. Preferred seasonal publications available for purchase. Coffee shop price list. Contacts with Google maps link. Reader search field. Registration, authorization. Author's contacts and working hours. Burger menu, pop-up menu for searching purchased books.`,
    href: "https://lazeta.github.io/Library/library/",
    code: "https://github.com/Lazeta/Library/tree/gh-pages",
    id: 4,
  },
  {
    title: "Audio player",
    src: projectAudioPlayerCover,
    type: ["all", "landing", "js"], 
    skills: ["TailwindCSS", "JavaScript"],
    text: `A simple audio player application, the functions of which are to play songs in a list, the ability to stop the player, skip the melody to a certain place, switch to the previous or next one, change the player volume, mute the sound. Displays the song's cover, title, band and playing time. Contacts of the project author in the footer.`,
    href: "https://rolling-scopes-school.github.io/lazeta-JSFEPRESCHOOL2023Q2/audio-player/",
    code: "https://github.com/rolling-scopes-school/lazeta-JSFEPRESCHOOL2023Q2/tree/audio-player/audio-player",
    id: 5,
  },
  {
    title: "Css meme slider",
    src: projectCssMemeSliderCover,
    type: ["all", "landing"],
    skills: ["HTML", "CSS"],
    text: `The landing page 'Css Meme Slider' is presented as an implementation without javascript, only using html and primitive css. There is animation, a slider, pagination buttons, a quote and the meme cards themselves also change.`,
    href: "https://lazeta.github.io/cssMemeSlider/cssMemeSlider/index.html",
    code: "https://github.com/Lazeta/cssMemeSlider/tree/head",
    id: 6,
  },
  {
    title: "Portfolio",
    src: projectPortfolioCover,
    type: ["all", "spa", "react", "ts"],
    skills: ["WEBPACK", "REACT", "JavaScript", "TYPESCRIPT", "REDUX", "styled components"],
    text: `The main project 'portfolio' contains all significant projects. Implemented a tab menu with a category filter. Fields for contacting me. Sections with navigation throughout the application. Acquired skills over time, filtering menu for skill categories. Uses reusable components.`,
    href: "https://main--gilded-salamander-518e59.netlify.app/",
    code: "https://github.com/Lazeta/portfolio/tree/gh-pages",
    id: 7,
  },
  {
    title: "Rsschool CV",
    src: projectRsschoolCvCover,
    type: ["all", "landing"],
    skills: ["HTML", "CSS", "SCSS", "JavaScript"],
    text: `CV is a landing page, business card website, resume, which contains details about the details about the author of the project, training resources, courses, skills and sample code.`,
    href: "https://lazeta.github.io/rsschool-cv/",
    code: "https://github.com/Lazeta/rsschool-cv/tree/gh-pages",
    id: 8,
  },
];