import { PopoButton } from "../button/popoButton";
import { BackButton } from "../button/BackButton";
import clsx from "clsx";
import { NoteButton } from "../button/noteButton";

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
    <header className={clsx("relative flex justify-between items-center mb-8 w-full ", className)} onClick={onClick}>
      <BackButton onClick={backButtonOnClick} />
      <h4 className="text-xl font-bold">{title}</h4>
      <PopoButton onClick={popoButtonOnClick}>{children}</PopoButton>
    </header>
  );
};

interface ChatBotHeaderProps {
  children?: React.ReactNode;
  title: string;
  onClick?: () => void;
  backButtonOnClick?: () => void;
  noteButtonOnClick?: () => void;
  className?: string;
}

export const ChatBotHeader = ({
  children,
  title,
  onClick,
  backButtonOnClick,
  noteButtonOnClick,
  className = "",
}: ChatBotHeaderProps) => {
  return (
    <header className={clsx("relative flex justify-between items-center mb-8 w-full ", className)} onClick={onClick}>
      <BackButton onClick={backButtonOnClick} />
      <h4 className="text-xl font-bold">{title}</h4>
      <NoteButton onClick={noteButtonOnClick}>{children}</NoteButton>
    </header>
  );
};
