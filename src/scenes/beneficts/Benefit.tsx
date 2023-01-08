import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ScheduleModal from "@/shared/ScheduleModal";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  showModal: (value: any) => void;
  isShowModal: boolean;
};

const Benefit = ({
  icon,
  title,
  description,
  showModal,
  isShowModal,
}: Props) => {
  return (
    <motion.div
      className="text border-gray-100 mt-5 rounded-md border-2 px-5 py-16 text-center"
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="border-gray-100 rounded-full border-2 bg-black-70 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <button
        className="hover:text-purple-lighter1-500 text-sm font-bold text-purple-lighter1 underline"
        onClick={showModal}
      >
        Sabe Mais
      </button>
      {isShowModal ? (
        <ScheduleModal title={"teste"} showModal={showModal} />
      ) : null}
    </motion.div>
  );
};

export default Benefit;
