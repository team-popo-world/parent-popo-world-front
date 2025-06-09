import { PopoButton } from "../button/popoButton";
import { BackButton } from "../button/BackButton";
import clsx from "clsx";

interface HeaderProps {
  children?: React.ReactNode;
  title: string;
  onClick?: () => void;
  backButtonOnClick?: () => void;
  popoButtonOnClick?: () => void;
  className?: string;
}

export const Header = ({
  children,
  title,
  onClick,
  backButtonOnClick,
  popoButtonOnClick,
  className = "",
}: HeaderProps) => {
  return (
    <header className={clsx("relative flex justify-between items-center mb-8 w-full", className)} onClick={onClick}>
      <BackButton onClick={backButtonOnClick} />
      <h4 className="text-xl font-bold">{title}</h4>
      <PopoButton onClick={popoButtonOnClick}>{children}</PopoButton>
    </header>
  );
};
