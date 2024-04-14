import { links, UseTechnologysData } from "../data/Data";
import { SectionTitle } from "../sectiontitle/SectionTitle";
import { FlexWrapper } from "../wrapper/FlexWrapper";
import { Button } from "../buttons/Button";
import { Link } from "../link/Link";
import { S } from "./Project.styles";
import React from "react";


// export const Links = [
//   { 
//   type: 'demo',
//   href: "/demo", 
//   title: "demo",
//   },
//   { 
//   type: 'code',
//   href: "https://github.com/Lazeta?tab=repositories", 
//   title: "code",
//   },
// ];

type ProjectPropsType = {
  src: string;
  title: string;
  skill?: string;
  text?: string;
};


export const Project:React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
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
              <Link title={link.title} href={link.href}/>
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