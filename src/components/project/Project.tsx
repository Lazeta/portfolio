import { links, UseTechnologysData } from "../data/Data";
import { SectionTitle } from "../sectiontitle/SectionTitle";
import { FlexWrapper } from "../wrapper/FlexWrapper";
import { Button } from "../buttons/Button";
import { Link } from "../link/Link";
import { S } from "./Project.styles";
import React from "react";

type ProjectPropsType = {
  src: string;
  title: string;
  skill?: string;
  text?: string;
  values?: () => void;
  currentIndex: number;
};

export const Project: React.FC<ProjectPropsType> = (
  props: ProjectPropsType
) => {
  const { currentIndex } = props;
  const currentItem = Object.values(UseTechnologysData)[currentIndex - 1];

  return (
    <S.Project>
      <S.Image src={props.src} alt="bad way" />
      <S.ProjectDescription>
        <FlexWrapper
          justify="space-between"
          wrap="wrap"
          align="center"
          gapItem="40px"
        >
          <SectionTitle title={"Projects"} />
          <ul>
            {links.map((link) => (
              <Link
                title={link.title}
                href={link.href}
                shouldUnderline={link.title === "demo"}
              />
            ))}
          </ul>
        </FlexWrapper>
        <S.UseTechnologys>
          <FlexWrapper
            key={`object_${currentIndex}`}
            justify="space-between"
            align="center"
            gapItem="10px"
          >
            {currentItem.map((skill, skillIndex) => (
              <Button
                key={`skill-${currentIndex}-${skillIndex}`}
                title={skill.title}
              />
            ))}
          </FlexWrapper>
        </S.UseTechnologys>
        <S.Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
          sequi deserunt quibusdam amet, harum repellendus laborum ea minima
          quidem neque, quaerat voluptatem eum. Placeat laudantium sapiente illo
          velit, officia perspiciatis.
        </S.Paragraph>
      </S.ProjectDescription>
    </S.Project>
  );
};
