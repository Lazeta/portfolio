import styled from "styled-components";
import { FlexWrapper } from "../../../components/menu/FlexWrapper";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Skill } from "../../../components/skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle title="Skills" />
      <FlexWrapper
        direction="row"
        wrap="wrap"
        justify="space-between"
        content="center"
        gapItem="20px"
      >
        <Skill iconId={"html5Svg"} title={"HTML"}/>
        <Skill iconId={"css3Svg"} title={"CSS"}/>
        <Skill iconId={"sassSvg"} title={"SCSS"}/>
        <Skill iconId={"tailwindCssSvg"} title={"TailwindCss"}/>
        <Skill iconId={"javascriptSvgrepoCom"} title={"JavaScript"}/>
        <Skill iconId={"TypeScript"} title={"TypeScript"}/>
        <Skill iconId={"reactSvg"} title={"React"}/>
        <Skill iconId={"reduxSvg"} title={"Redux"}/>
        <Skill iconId={"styledComponentsSvg"} title={"Styled Component"}/>
        <Skill iconId={"vscodeSvg"} title={"VS Code"}/>
        <Skill iconId={"webstormSvg2"} title={"Webstorm"}/>
        <Skill iconId={"webpackSvg"} title={"Webpack"}/>
        <Skill iconId={"AISvg"} title={"Artificial Intelligence"}/>
        <Skill iconId={"NPM"} title={"npm"}/>
        <Skill iconId={"BemMetodology"} title={"BEM Metodology"}/>
        <Skill iconId={"githubSvg"} title={"GitHub"}/>
        <Skill iconId={"gitSvg"} title={"Git"}/>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  max-width: 100%;
  max-height: 100%;
  padding: 20px 0;
`;
