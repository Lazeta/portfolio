import S from "./Button.styles";


type ButtonPropsType = {
  title: string;
  width?: string;
  font?: string;
  onClick?: () => void;
};

const Button = (props: ButtonPropsType) => {
  const { title, width, font, onClick } = props;

  return (
    <S.Button width={width} font={font} onClick={onClick}>
      {title}
    </S.Button>
  );
};


export default Button