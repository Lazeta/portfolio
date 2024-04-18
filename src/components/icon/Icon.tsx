import iconsSprite from "../assets/images/icons/icons-sprite.svg";
import React from "react";

type IconPropsType = {
  iconId: string;
  width: string;
  height: string;
  viewBox?: string;
};

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
  // const { iconId, ...rest } = props;
  const { iconId, width, height, viewBox } = props;
  return (
    <svg
      width={width || "50px"}
      height={height || "50px"}
      viewBox={viewBox || "0 0 40 40"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // {...rest} // spred operator
    >
      <use xlinkHref={`${iconsSprite}#${iconId}`} />
    </svg>
  );
};
