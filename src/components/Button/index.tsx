import { FC, ReactElement } from "react";

type ButtonProps = {
  teks: string;
  className: string;
  onClick: VoidFunction;
};

const Button: FC<ButtonProps> = ({
  teks,
  className,
  onClick,
}): ReactElement => {
  return (
    <button className={className} onClick={onClick}>
      {teks}
    </button>
  );
};

export default Button;
