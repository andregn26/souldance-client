import { motion } from "framer-motion";
import WeddingIcon from "@/assets/wedding-icon.png";

type Props = {};

const Benefit3 = ({}: Props) => {
  return (
    <>
      <div className="mx-auto w-[100%]">
        <motion.div
          className="mt-5  whitespace-normal rounded-md   bg-black-70 px-5 py-16 text-center "
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="mb-4 flex justify-center">
            <div className=" rounded-full bg-gradient-to-tl  from-blue-darker to-purple-darker1 p-4">
              <img src={WeddingIcon} alt="Dance-Icon" className="h-6 w-6" />
            </div>
          </div>
          <h4 className=" text-lg font-bold">Aulas para Noivos</h4>
          <p className="text-wrap my-3 text-sm">
            Um dos momentos mais marcantes de um casamento é aquele no qual o
            casal expressa o seu amor e felicidade através da dança. Para que
            esse instante seja inesquecível, será melhor coreografar os passos a
            serem dados com uma equipa profissional, criativa e dedicada.
          </p>
          <button className="hover:text-purple-lighter1-500 text-sm font-bold text-purple-lighter1 underline">
            Sabe Mais
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default Benefit3;
