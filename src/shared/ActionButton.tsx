import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-gradient-to-tl  from-blue-darker to-purple-darker1 bg-size-200 bg-pos-0 px-10 py-2 text-white transition-all duration-500 hover:bg-pos-100 "
      onClick={() => setSelectedPage(SelectedPage.Contactos)}
      href={`#${SelectedPage.Contactos}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
