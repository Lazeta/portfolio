import { F } from "../../layout/footer/Footer.styles";
import { Icon } from "../icon/Icon";


export const SocialLists = () => {
    return (
      <F.SocialList>
        <F.SocialItem>
          <F.SocialLink>
            <Icon height="40px" width="40px" viewBox="0 0 40 40" iconId={"telegram"}/>
          </F.SocialLink>
        </F.SocialItem>
        <F.SocialItem>
          <F.SocialLink>
            <Icon height="40px" width="40px" viewBox="0 0 40 40" iconId={"linkedinSvg"}/>
          </F.SocialLink>
        </F.SocialItem>
        <F.SocialItem>
          <F.SocialLink>
            <Icon height="40px" width="40px" viewBox="0 0 40 40" iconId={"githubSvg"}/>
          </F.SocialLink>
        </F.SocialItem>
        <F.SocialItem>
          <F.SocialLink>
            <Icon height="40px" width="40px" viewBox="0 0 40 40" iconId={"gmailSvg"}/>
          </F.SocialLink>
        </F.SocialItem>
      </F.SocialList>
    )
}