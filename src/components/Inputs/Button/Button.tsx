import { ButtonHTMLAttributes, ReactNode } from "react";

type TProps = {
  children: ReactNode;
  type: "submit" | "reset" | "button" | undefined;
  disable?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, type, disable, className }: TProps) {
  return (
    <button
      type={type}
      disabled={disable}
      className={`
      ${className}
      py-2 px-4 font-lilita text-2xl text-yellow-bb-300 uppercase bg-gray-bb-400 rounded drop-shadow-bb-2
      `}
    >
      <span className="drop-shadow-bb-2">{children}</span>
    </button>
  );
}
