import { myTheme } from "../../styles/global/MyTheme.styled";
import { SectionTitle } from "../sectiontitle/SectionTitle";
import { FlexWrapper } from "../wrapper/FlexWrapper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { links } from "../../data/Data";
import { NavLink } from "../link/Link";
import { S } from "./Project.styles";
import React from "react";

type ProjectPropsType = {
  src: string;
  title: string;
  href: string;
  text?: string;
  skills?: string[];
  values?: () => void;
  id?: number;
};

export const Project: React.FC<ProjectPropsType> = (
  props: ProjectPropsType
) => {
  const { title, ...rest } = props;

  return (
    <S.Project
      key={rest.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
    >
      <S.ImageWrapper href={rest.href}>
        <S.Image src={rest.src} alt="bad way" />
        <S.StyledButton>View project</S.StyledButton>
      </S.ImageWrapper>
      <S.ProjectDescription>
        <FlexWrapper
          justify="space-between"
          wrap="wrap"
          align="center"
          gapItem={myTheme.media.mobile ? "0" : "40px"}
        >
          <SectionTitle title={title} />
          <S.DescriptionLinks>
            {links.map((link) => (
              <NavLink
                key={link.title}
                title={link.title}
                href={link.href}
                shouldUnderline={link.title === "demo"}
              />
            ))}
          </S.DescriptionLinks>
        </FlexWrapper>
        <S.UseTechnologys>
          <S.UseTechnologysItem>
            {rest.skills &&
              rest.skills.map((skill) => (
                <Stack spacing={2} direction="row">
                  <Button key={skill} variant="outlined">
                    {skill}
                  </Button>
                </Stack>
              ))}
          </S.UseTechnologysItem>
        </S.UseTechnologys>
        <S.Paragraph>{rest.text}</S.Paragraph>
      </S.ProjectDescription>
    </S.Project>
  );
};
