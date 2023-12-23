import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

type TProps = {
  children: ReactNode;
  type: "submit" | "reset" | "button" | undefined;
  disable?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  type,
  disable,
  className,
  onClick,
}: TProps) {
  return (
    <button
      type={type}
      disabled={disable}
      onClick={onClick}
      className={`
      ${className}
        bb-button py-2 px-4
      `}
    >
      <span className="drop-shadow-bb-2">{children}</span>
    </button>
  );
}
