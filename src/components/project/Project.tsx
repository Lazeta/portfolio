import { links } from "../data/Data";
import { SectionTitle } from "../sectiontitle/SectionTitle";
import { FlexWrapper } from "../wrapper/FlexWrapper";
import { Button } from "../buttons/Button";
import { Link } from "../link/Link";
import { S } from "./Project.styles";
import React from "react";

type ProjectPropsType = {
  src: string
  title: string
  href: string
  text?: string
  skills?: string[]
  values?: () => void
};

export const Project: React.FC<ProjectPropsType> = (
  props: ProjectPropsType
) => {
  const { title, text, src, href, skills } = props;

  return (
    <S.Project>
      <a href={href}>
        <S.Image src={src} alt="bad way" />
      </a>
      <S.ProjectDescription>
        <FlexWrapper
          justify="space-between"
          wrap="wrap"
          align="center"
          gapItem="40px"
        >
          <SectionTitle title={title} />
          <ul>
            {links.map((link) => (
              <Link
                key={link.title}
                title={link.title}
                href={link.href}
                shouldUnderline={link.title === "demo"}
              />
            ))}
          </ul>
        </FlexWrapper>
        <S.UseTechnologys>
          <S.UseTechnologysItem>
            {skills && skills.map((skill) => 
            <Button key={skill} title={skill} width="8rem"/>)}
          </S.UseTechnologysItem>
        </S.UseTechnologys>
        <S.Paragraph>{text}</S.Paragraph>
      </S.ProjectDescription>
    </S.Project>
  );
};
