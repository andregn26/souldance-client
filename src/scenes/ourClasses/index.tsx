import { SelectedPage, ClassType } from "@/shared/types";
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "lorem",
    description: "Lorem",
    image: image1,
  },
  {
    name: "lorem",
    description: "Lorem",
    image: image2,
  },
  {
    name: "lorem",
    description: "Lorem",
    image: image3,
  },
  {
    name: "lorem",
    description: "Lorem",
    image: image4,
  },
  {
    name: "lorem",
    description: "Lorem",
    image: image5,
  },
  {
    name: "lorem",
    description: "Lorem",
    image: image6,
  },
];

type Props = { setSelectedPage: (value: SelectedPage) => void };

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="modalidades" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Modalidades)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 70 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>ESPECIALIZA-TE NOS ESTILOS QUE MAIS GOSTAS...</HText>
          <p className="py-5 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi illum
            eligendi consectetur iste! Ullam sint accusamus reprehenderit,
            tenetur blanditiis quas quae veniam asperiores delectus nisi ratione
            corporis a deleniti iste.
          </p>
        </motion.div>

        <div className="mt-10 h-[100%] w-[screen] overflow-x-auto overflow-y-hidden">
          {/* CARROUSSEL */}
          <ul className="w-[1500px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
      <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 70 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <HText>...COM OS MELHORES COREÓGRAFOS</HText>
        <p className="py-5 text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi illum
          eligendi consectetur iste! Ullam sint accusamus reprehenderit, tenetur
          blanditiis quas quae veniam asperiores delectus nisi ratione corporis
          a deleniti iste.
        </p>
      </motion.div>
    </section>
  );
};

export default OurClasses;
