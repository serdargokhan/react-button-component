import React from "react";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  label: string;
  title?: string;
  disabled?: boolean;
  px?: number | string;
  py?: number | string;
  w?: number | string;
  h?: number | string;
  rounded?: number | string;
  bg?: string;
  color?: string;
}

const Button = (props: ButtonProps) => {
  const {
    onClick,
    label,
    title,
    disabled = false,
    px = "1rem",
    py = "0.5rem",
    rounded = "6px",
    bg = "black",
    color = "white",
    w,
    h,
  } = props;

  return (
    <button
      style={{
        paddingInline: `${px}`,
        paddingBlock: `${py}`,
        borderRadius: `${rounded}`,
        backgroundColor: `${bg}`,
        color: `${color}`,
        width: `${w}`,
        height: `${h}`,
      }}
      disabled={disabled}
      title={title}
      onClick={(e) => onClick!(e)}>
      {label}
    </button>
  );
};

export default Button;
