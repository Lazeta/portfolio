import React from "react";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import S from "./AboutMe.styles";


const AboutMe: React.FC = () => {
  return (
    <S.AboutMe id={"about"}>
      <SectionTitle title="About me" />
      <S.VerticalLine>
        <S.Paragraph>
          I have been developing web applications since 2019. Previously, I was
          interested in algorithmic trading in C#, then Python and the
          development of simple pixel games in Unity. I study front-end from
          layout markdown to JavaScript frameworks and various stack
          technologies. I approach a task creatively and bring the task to
          completion, i have a sense of style and believe that logic should not
          only work, but also be pleasing to the eye.
        </S.Paragraph>
      </S.VerticalLine>
    </S.AboutMe>
  );
};


export default AboutMe