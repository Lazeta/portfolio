import { FlexWrapper } from "../../../components/menu/FlexWrapper";
import { Menu } from "../../../components/menu/Menu";
import { SectionTitle } from "../../../components/sectiontitle/SectionTitle";
import { Skill } from "../../../components/skill/Skill";
import { StyledSkills, StyledSkillsMenu } from "./Skills.styled";

const SkilsItems = [
  "Main stack",
  "Coding languages",
  "Bundlers",
  "Development environment",
  "Styles",
  "Libraries",
  "Metodology",
];

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle title="Skills" />
      <StyledSkillsMenu>
        <Menu menuItems={SkilsItems} />
      </StyledSkillsMenu>
      <FlexWrapper
        direction="row"
        wrap="wrap"
        justify="space-between"
        content="center"
        gapItem="20px"
      >
        <Skill iconId={"html5Svg"} title={"HTML"} />
        <Skill iconId={"css3Svg"} title={"CSS"} />
        <Skill iconId={"sassSvg"} title={"SCSS"} />
        <Skill iconId={"tailwindCssSvg"} title={"TailwindCss"} />
        <Skill iconId={"javascriptSvgrepoCom"} title={"JavaScript"} />
        <Skill iconId={"TypeScript"} title={"TypeScript"} />
        <Skill iconId={"reactSvg"} title={"React"} />
        <Skill iconId={"reduxSvg"} title={"Redux"} />
        <Skill iconId={"styledComponentSvg"} title={"Styled Component"} />
        <Skill iconId={"vscodeSvg"} title={"VS Code"} />
        <Skill iconId={"webstormSvg"} title={"Webstorm"} />
        <Skill iconId={"webpackSvg"} title={"Webpack"} />
        <Skill iconId={"AISvg"} title={"Artificial Intelligence"} />
        <Skill iconId={"NPM"} title={"npm"} />
        <Skill iconId={"BemMetodology"} title={"BEM Metodology"} />
        <Skill iconId={"githubSvg"} title={"GitHub"} />
        <Skill iconId={"gitSvg"} title={"Git"} />
      </FlexWrapper>
    </StyledSkills>
  );
};