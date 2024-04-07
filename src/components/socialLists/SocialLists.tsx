import { S } from "../../layout/footer/Footer.styles";
import { Icon } from "../icon/Icon";


export const SocialLists = () => {
    return (
      <S.SocialList>
        <S.SocialItem>
          <S.SocialLink>
            <Icon height="40px" width="40px" viewBox="0 0 40 40" iconId={"telegram"}/>
          </S.SocialLink>
        </S.SocialItem>
        <S.SocialItem>
          <S.SocialLink>
            <Icon height="40px" width="40px" viewBox="0 0 40 40" iconId={"linkedinSvg"}/>
          </S.SocialLink>
        </S.SocialItem>
        <S.SocialItem>
          <S.SocialLink>
            <Icon height="40px" width="40px" viewBox="0 0 40 40" iconId={"githubSvg"}/>
          </S.SocialLink>
        </S.SocialItem>
        <S.SocialItem>
          <S.SocialLink>
            <Icon height="40px" width="40px" viewBox="0 0 40 40" iconId={"gmailSvg"}/>
          </S.SocialLink>
        </S.SocialItem>
      </S.SocialList>
    )
}