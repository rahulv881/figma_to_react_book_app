import React from "react";

const variantClasses = {
  h1: "font-extrabold text-[8px]",
  h2: "font-extrabold sm:text-[48px] md:text-[48px] text-[70px]",
  h3: "text-[7px]",
  h4: "font-bold sm:text-[48px] md:text-[48px] text-[65px]",
  h5: "font-bold sm:text-[41px] md:text-[47px] text-[55px]",
  h6: "font-bold sm:text-[40px] md:text-[46px] text-[50px]",
  body1: "font-normal text-[5px]",
  body2: "font-bold sm:text-[35px] md:text-[41px] text-[45px]",
  body3: "font-bold sm:text-[36px] md:text-[38px] text-[40px]",
  body4: "font-bold text-[4px]",
  body5: "sm:text-[31px] md:text-[33px] text-[35px]",
  body6: "font-bold sm:text-[28px] md:text-[30px] text-[32px]",
  body7: "font-bold sm:text-[26px] md:text-[28px] text-[30px]",
  body8: "font-bold sm:text-[24px] md:text-[26px] text-[28px]",
  body9: "sm:text-[21px] md:text-[23px] text-[25px]",
  body10: "sm:text-[20px] md:text-[22px] text-[24px]",
  body11: "font-bold sm:text-[18px] md:text-[20px] text-[22px]",
  body12: "text-[20px]",
  body13: "font-light sm:text-[1px] text-[2.5px]",
  body14: "text-[19px]",
  body15: "text-[18px]",
  body16: "text-[17px]",
  body17: "font-normal text-[16px]",
  body18: "font-bold text-[15px]",
  body19: "text-[14px]",
  body20: "font-normal text-[13px]",
  body21: "text-[12px]",
  body22: "text-[10px]",
} as const;

export type TextProps = Partial<{
  className: string;
  variant: keyof typeof variantClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className,
  variant,
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
