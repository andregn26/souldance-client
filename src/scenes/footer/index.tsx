import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import InstagramSVG from "@/shared/InstagramSVG";
import FacebookSVG from "@/shared/FacebookSVG";
import HText from "@/shared/HText";
import { PhoneIcon } from "@heroicons/react/24/solid";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Footer = ({ setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <footer className={` h-48 w-full items-center bg-black-90 py-10 pt-40`}>
      <div className={`md:${flexBetween} mx-auto w-5/6 md:place-items-start`}>
        <div className="w-1/3 ">logo</div>
        {/* SOCIAL */}
        <div className="w-1/3 ">
          <div className="mb-5 flex justify-center">
            <h4 className="text-xl font-bold">Junta-te à comunidade</h4>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/souldance.anacardoso/"
              target="_blank"
            >
              <InstagramSVG fillColor="red" width={35} height={35} />
            </a>
            <a
              href="https://www.facebook.com/souldance.anacardoso/"
              target="_blank"
            >
              <FacebookSVG fillColor="red" width={35} height={35} />
            </a>
          </div>
        </div>

        {/* CONTACTS */}
        <div className=" flex w-1/3 flex-col items-end gap-3 font-bold ">
          {/* CELLPHONE */}

          <div className={`flex flex-row gap-7`}>
            <p className=" align-middle ">926954747</p>
            <div className=" flex w-6 items-center">
              <PhoneIcon />
            </div>
          </div>

          {/* ADDRESS */}
          <div className={`flex h-1/2 gap-7`}>
            <p className=" text-right align-middle ">
              Rua da Bica nº 8,
              <br /> 2735-999 Agualva-Cacém
            </p>
            <div className=" flex w-6 items-center">
              <PhoneIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
