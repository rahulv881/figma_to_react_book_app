import React from "react";

const variants = {
  icbOutlineAmberA200: "border-[1px] border-amber_A200 border-solid",
  icbFillWhiteA700: "bg-white_A700",
  icbFillIndigo900: "bg-indigo_900",
  FillAmberA200: "bg-amber_A200 text-indigo_900",
  OutlineAmberA200:
    "bg-white_A700 border-[1px] border-amber_A200 border-solid text-indigo_900",
  OutlineAmberA200_1: "border-[1px] border-amber_A200 border-solid",
  FillIndigo900: "bg-indigo_900 text-white_A700",
  OutlineIndigo51:
    "bg-gray_50 border-[1px] border-indigo_51 border-solid text-indigo_900",
} as const;
const sizes = {
  smIcn: "p-[12px]",
  mdIcn: "p-[16px]",
  sm: "p-[12px]",
  md: "p-[19px]",
  lg: "pr-[19px] py-[19px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;

    variant: keyof typeof variants;
    size: keyof typeof sizes;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  variant = "icbOutlineAmberA200",
  size = "mdIcn",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
