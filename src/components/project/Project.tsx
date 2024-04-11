import { Link } from "../link/Link";
import { FlexWrapper } from "../wrapper/FlexWrapper";
import { SectionTitle } from "../sectiontitle/SectionTitle";
import { Button } from "../buttons/Button";
import { S } from "./Project.styles";
import { links, UseTechnologysData } from "../data/Data";
import React, { useState } from "react";

type ProjectPropsType = {
  src: string;
  title: string;
  skill?: string;
  text?: string;
};

export const Project:React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
  // const [currentFilterStatus, setCurrentFilterStatus] = useState("demo")
  // let filteredLinks = links
  
  // if (currentFilterStatus === "demo"){
  //   filteredLinks = links.filter(link => link.type === "demo")
  // }
  // if (currentFilterStatus === "code"){
  //   filteredLinks = links.filter(link => link.type === "code")
  // }

  // const changeFilterStatus = (value: ProjectLinksPropsType) => {
  //   setCurrentFilterStatus(value)
  // }

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
              <Link href={link.href} title={link.title}/>
            ))}
          </ul>
        </FlexWrapper>
        <S.UseTechnologys>
          {UseTechnologysData.map((item) => {
            return (
              <S.ButtonUseTechnologys>
                <Button title={item.title} />
              </S.ButtonUseTechnologys>
            );
          })}
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