import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Menu } from "../../../components/menu/Menu";
import { Project } from "../../../components/project/Project";
import { SectionTitle } from "../../../components/sectiontitle/SectionTitle";
import libraryImage from "../../../components/assets/images/library_project-min.webp";
import plantsImage from "../../../components/assets/images/plants_project-min.webp";
import travelImage from "../../../components/assets/images/travel_project-min.webp";
import audioPlayerImage from "../../../components/assets/images/audio-player_project-min.webp";
import { S } from "../../../components/project/Project.styles";

const SortItems = ["All", "Landing page", "React", "SPA"];
const ObjectProjects = [
  {
    title: "Library",
    src: libraryImage,
    skill: "",
    text: "",
  },
  {
    title: "Plants",
    src: plantsImage,
    skill: "",
    text: "",
  },
  {
    title: "Travel",
    src: travelImage,
    skill: "",
    text: "",
  },
  {
    title: "Audio-player",
    src: audioPlayerImage,
    skill: "",
    text: "",
  },
];

export const Projects = () => {
  return (
    <S.Projects>
      <SectionTitle title="Projects" />
      <S.Sort>
        <Menu menuItems={SortItems} />
      </S.Sort>
      <FlexWrapper
        direction="row"
        wrap="wrap"
        justify="space-between"
        content="center"
        gapItem="20px"
      >
        {ObjectProjects.map((item, index) => (
          <Project key={index} src={item.src} title={item.title}
            // text={""} // добавить сюда какое то описание навыков
            // skill={""} // добавить сюда навыки
          />
        ))}
      </FlexWrapper>

      {/* <Button title={"See All Projects"}/> */}
    </S.Projects>
  );
};