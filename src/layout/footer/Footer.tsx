import styled from "styled-components";
import { myTheme } from "../../components/global/MyTheme.styled";
import { Icon } from "../../components/icon/icon";
import { FlexWrapper } from "../../components/menu/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction="column" align="center">
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                height="40px"
                width="40px"
                viewBox="0 0 40px 40px"
                iconId={"telegram"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height="40px"
                width="40px"
                viewBox="0 0 40px 40px"
                iconId={"linkedinSvg"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height="40px"
                width="40px"
                viewBox="0 0 40px 40px"
                iconId={"githubSvg"}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height="40px"
                width="40px"
                viewBox="0 0 40px 40px"
                iconId={"gmailSvg"}
              />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>Developed by Stanislav Chekh in 2024</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  min-height: 20vh;
  margin-top: 20px;
`;

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 20px;
  list-style-type: none;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  display: inline-flex;
  gap: 50px;
`;

const Copyright = styled.small`
  color: ${myTheme.colors.secondary};
  text-align: center;
`;
