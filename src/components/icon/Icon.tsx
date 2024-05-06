import React from "react";
import iconsSprite from "../../assets/images/icons/icons-sprite.svg";


type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
  const { iconId, width, height, viewBox } = props;

  return (
    <svg
      width={width || "40px"}
      height={height || "40px"}
      viewBox={viewBox || "0 0 40 40"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${iconId}`} />
    </svg>
  );
};


export default Icon