import React from "react";
import { linksData } from "../../data/Data";
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
  code: string; // типизация пропса code который отвечает за рендер элементов ссылок 
  href: string; // типизация пропса href который отвечает за рендер элементов ссылок
  text?: string;
  skills?: string[];
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
            {linksData.map((linkData) => ( // проходимся по каждому элементу (объекту) массива linksData с полями name, urlKey и создаём для каждого объекта linkData компонент NavLink.
              <NavLink key={linkData.name} // ключ key используется для оптимизации рендеринга списков. Используется name из объекта в качестве ключа.
                title={linkData.name}      // передаём поле name из текущего объекта linkData в свойство title. Будет текстом ссылки.
                href={linkData.urlKey === 'href' ? props.href : props.code} // передаём в href URL для этой ссылки, но проверяется равно ли urlKey строке href || code, если равно то присваивается props.href (ссылка на демо), иначе props.code (ссылка на исходный код).
                shouldUnderline={linkData.name === "demo"} // проверяем равно ли имя ссылки demo если да, то добавляем свойство shouldUnderline что подчеркивает все наши demo, как дефолтные, так как проект по дефолту демонстрирует проект.
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