import { motion } from "framer-motion";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import ModalBenefit3 from "./ModalBenefit3";

type Props = {
  showModal: (value: any) => void;
  isShowModal: boolean;
};

const Benefit3 = ({ showModal, isShowModal }: Props) => {
  return (
    <>
      <div className="mx-auto w-[60vw]">
        <motion.div
          className="border-gray-100  mt-5 whitespace-normal rounded-md border-2 px-5 py-16 text-center "
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="mb-4 flex justify-center">
            <div className="border-gray-100 rounded-full border-2 bg-black-70 p-4">
              <HomeModernIcon className="h-6 w-6" />
            </div>
          </div>
          <h4 className="font-bold">Aulas de Dança</h4>
          <p className="text-wrap my-3">
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <button
            className="hover:text-purple-lighter1-500 text-sm font-bold text-purple-lighter1 underline"
            onClick={showModal}
          >
            Sabe Mais
          </button>
        </motion.div>
      </div>
      {isShowModal ? <ModalBenefit3 showModal={showModal} /> : null}
    </>
  );
};

export default Benefit3;
