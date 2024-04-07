import iconsSprite from "../assets/images/icons/icons-sprite.svg";
import React from "react";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon:React.FC<IconPropsType> = (props: IconPropsType) => {
  return (
    <a href="https://github.com/Lazeta">
      <svg
        width={props.width || "50px"}
        height={props.height || "50px"}
        viewBox={props.viewBox || "0 0 40 40"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
      </svg>
    </a>
  );
};
