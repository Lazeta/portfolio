import { S } from "./Button.styles";

type TabButtonPropsType = {
  title: string;
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

export const TabButton = (props: TabButtonPropsType) => {
  const {title} = props;
  return (
    <S.TabButton
      active={props.isActive}
      onClick={props.onClick}
      width={"100px"}
    >
      {title}
    </S.TabButton>
  );
};