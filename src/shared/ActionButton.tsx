import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-alt px-10 py-2 hover:bg-secondary-60 hover:text-light-alt"
      onClick={() => setSelectedPage(SelectedPage.Contactos)}
      href={`#${SelectedPage.Contactos}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
