import React, { ReactNode } from "react";

import SButton from "./Button.styles";

interface ButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  children?: ReactNode | string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  className,
  type = "button",
  children,
  onClick,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <SButton
      className={className}
      type={type}
      {...props}
      onClick={onClick}
      disabled={disabled}
      name="button"
    >
      {children}
    </SButton>
  );
};

export default Button;
