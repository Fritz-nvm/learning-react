import { type ReactNode } from "react";

interface ButtonProps {
  // Define any props you want to pass to the Button component
  children: ReactNode;
  color: string;
  onClick: () => void;
}
const Button = ({ children, onClick, color }: ButtonProps) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
