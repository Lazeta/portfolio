import S from "./Button.styles";


type TabButtonPropsType = {
  title: string;
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

const TabButton = (props: TabButtonPropsType) => {
  const {title, isActive, onClick} = props;
  
  return (
    <S.TabButton
      active={isActive}
      onClick={onClick}
      width={"100px"}
    >
      {title}
    </S.TabButton>
  );
};


export default TabButton