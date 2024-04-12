import { ListItem } from "../listItem/ListItem";
import {S} from "../headerMenu/HeaderMenu.styles"

export const Menu = (props: { menuItems: Array<string> }) => {
  // const [currentFilterStatus, setCurrentFilterStatus] = useState("demo")
  // let filteredLinks = Links
  
  // if (currentFilterStatus === "demo"){
  //   filteredLinks = Links.filter(link => link.type === "demo")
  // }
  // if (currentFilterStatus === "code"){
  //   filteredLinks = Links.filter(link => link.type === "code")
  // }

  // const changeFilterStatus = (value: "demo" | "code") => {
  //   setCurrentFilterStatus(value)
  // }

  return (
    <S.Menu>
      <ListItem menuItems={props.menuItems}/>
    </S.Menu>
  );
};