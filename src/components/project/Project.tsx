import { Link } from "../link/Link";
import { FlexWrapper } from "../wrapper/FlexWrapper";
import { SectionTitle } from "../sectiontitle/SectionTitle";
import { Button } from "../buttons/Button";
import { S } from "./Project.styles";
import { links, UseTechnologysData } from "../data/Data";

type ProjectPropsType = {
  src: string;
  title: string;
  skill?: string;
  text?: string;
};

export const Project = (props: ProjectPropsType) => {
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
              <Link key={link.href} href={link.href} title={link.title} />
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
