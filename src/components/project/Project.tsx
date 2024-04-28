import React from "react";
import { links } from "../../data/Data";
import myTheme from "../../styles/global/MyTheme.styled";
import SectionTitle from "../sectiontitle/SectionTitle";
import FlexWrapper from "../wrapper/FlexWrapper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import NavLink from "../link/Link";
import S from "./Project.styles";


type ProjectPropsType = {
  src: string;
  title: string;
  href: string;
  text?: string;
  skills?: string[];
  values?: () => void;
  id?: number;
};

const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
  return (
    <S.Project key={props.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
    >
      <S.ImageWrapper href={props.href}>
        <S.Image src={props.src} alt="bad way" />
        <S.StyledButton>View project</S.StyledButton>
      </S.ImageWrapper>
      
      <S.ProjectDescription>
        <FlexWrapper justify="space-between" wrap="wrap" align="center" gapItem={myTheme.media.mobile ? "0" : "40px"}>
          <SectionTitle title={props.title} />
          <S.DescriptionLinks>
            {links.map((link) => (
              <NavLink key={link.title}
                title={link.title}
                href={link.href}
                shouldUnderline={link.title === "demo"}
              />
            ))}
          </S.DescriptionLinks>
        </FlexWrapper>
        <S.UseTechnologys>
          {props.skills && props.skills.map((skill) => (
            <li>
              <Stack>
                <Button key={skill} variant="outlined">
                  {skill}
                </Button>
              </Stack>
            </li>
          ))}
        </S.UseTechnologys>
        <S.Paragraph>{props.text}</S.Paragraph>
      </S.ProjectDescription>
    </S.Project>
  );
};


export default Project