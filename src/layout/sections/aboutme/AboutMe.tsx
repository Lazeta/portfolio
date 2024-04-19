import React from "react";
import { SectionTitle } from "../../../components/sectiontitle/SectionTitle";
import { S } from "./AboutMe.styles";

export const AboutMe: React.FC = () => {
  return (
    <S.AboutMe id={'about'}>
      <SectionTitle title="About me"/>
      <S.VerticalLine>
        <S.Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          maiores consequuntur dolore quos in. Doloribus blanditiis aspernatur
          dignissimos provident, vitae dicta placeat sint nemo repudiandae ex,
          mollitia quaerat aperiam temporibus.
        </S.Paragraph>
      </S.VerticalLine>
    </S.AboutMe>
  );
};