import { S } from "./Button.styles";

type ButtonPropsType = {
  title: string;
  width?: string;
  font?: string;
  onClick?: () => void;
};

export const Button = (props: ButtonPropsType) => {
  const { title, width, font } = props; // Деструктуризация объекта из пропсов
  return (
    <S.Button width={width} font={font} onClick={props.onClick}>
      {title}
    </S.Button>
  );
};