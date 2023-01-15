import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton1 = ({ children, setSelectedPage }: Props) => {
  return (
    <div className="group relative w-[200px] ">
      <div className="absolute -inset-1 animate-tilt  rounded-md bg-gradient-to-r from-purple-main to-blue-alt1 opacity-75 blur-md transition duration-100 group-hover:opacity-100 group-hover:duration-200 xs:w-[200px]"></div>{" "}
      <AnchorLink
        className="relative rounded-md bg-black-90 px-10 py-2 text-white"
        onClick={() => setSelectedPage(SelectedPage.Contactos)}
        href={`#${SelectedPage.Contactos}`}
      >
        {children}
      </AnchorLink>
    </div>
  );
};

export default ActionButton1;
