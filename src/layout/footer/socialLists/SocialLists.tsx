import S from "../Footer.styles";
import Icon from "../../../components/icon/Icon";
import { socialIcons } from "../../../data/Data";


const SocialLists = () => {
  return (
    <S.SocialList>
      {socialIcons.map((icon, index) => (
        <S.SocialItem key={index}>
          <S.SocialLink>
            <a href={icon.href}>
              <Icon iconId={icon.iconId} />
            </a>
          </S.SocialLink>
        </S.SocialItem>
      ))}
    </S.SocialList>
  );
};


export default SocialLists;