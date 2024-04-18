import { S } from "../Footer.styles";
import { Icon } from "../../../components/icon/Icon";

export const SocialLists = () => {
  return (
    <S.SocialList>
      <S.SocialItem>
        <S.SocialLink>
          <a href="https://github.com/Lazeta">
            <Icon
              height="40px"
              width="40px"
              viewBox="0 0 40 40"
              iconId={"telegram"}
            />
          </a>
        </S.SocialLink>
      </S.SocialItem>
      <S.SocialItem>
        <S.SocialLink>
          <a href="https://github.com/Lazeta">
            <Icon
              height="40px"
              width="40px"
              viewBox="0 0 40 40"
              iconId={"linkedinSvg"}
            />
          </a>
        </S.SocialLink>
      </S.SocialItem>
      <S.SocialItem>
        <S.SocialLink>
          <a href="https://github.com/Lazeta">
            <Icon
              height="40px"
              width="40px"
              viewBox="0 0 40 40"
              iconId={"githubSvg"}
            />
          </a>
        </S.SocialLink>
      </S.SocialItem>
      <S.SocialItem>
        <S.SocialLink>
          <a href="https://github.com/Lazeta">
            <Icon
              height="40px"
              width="40px"
              viewBox="0 0 40 40"
              iconId={"gmailSvg"}
            />
          </a>
        </S.SocialLink>
      </S.SocialItem>
    </S.SocialList>
  );
};
