import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <>
      {/* ROOT BOX */}
      <motion.div
        className="mt-5 flex min-h-[480px] flex-col justify-between whitespace-normal rounded-md bg-black-70 px-5 py-10 text-center sm:min-h-[380px] md:min-h-[500px] md:w-1/3"
        variants={childVariant}
      >
        {/* ICON BOX */}
        <div className="mt-5 flex justify-center">
          {/* ICON */}
          <div className="rounded-full bg-gradient-to-tl  from-blue-darker to-purple-darker1 p-4">
            {icon}
          </div>
        </div>
        <div>
          {/* TITLE */}
          <h4 className="text-lg font-bold">{title}</h4>
          {/* DESCRIPTION */}
          <p className="my-5 mx-7 text-sm">{description}</p>
        </div>
        {/* ACTION BUTTON */}
        <AnchorLink
          className="hover:text-purple-lighter1-500 text-sm font-bold text-purple-lighter1 underline"
          onClick={() => setSelectedPage(SelectedPage.Contactos)}
          href={`#${SelectedPage.Contactos}`}
        >
          <p>Learn More</p>
        </AnchorLink>
      </motion.div>
    </>
  );
};

export default Benefit;
