import { S } from "./Button.styles";

type ButtonPropsType = {
  title: string
  width?: string
  font?: string
};


export const Button = (props: ButtonPropsType) => {
  const { title} = props; // Извлекаем title из props
  return (
    <>
      <S.Button width={props.width} font={props.font}>
        {title}
      </S.Button>
    </>
  );
};