import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { SelectedPage, BenefitType } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic1.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Aulas de Dança",
    description: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere odio ex, sed feugiat lorem tristique nec. Proin id laoreet turpis. Mauris tincidunt vel mi euismod facilisis. Curabitur fermentum, dolor et vestibulum semper, velit lorem tincidunt risus. `,
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Aulas para Noivos",
    description: `
Um dos momentos mais marcantes de um casamento é aquele no qual o casal expressa o seu amor e felicidade através da dança. Para que esse instante seja inesquecível, será melhor coreografar os passos a serem dados com uma equipa profissional, criativa e dedicada.`,
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Eventos Corporativos",
    description: `
Fortalecer ou criar laços num Team Building ou dar um toque de magia e glamour a festas temáticas - Conheça as variadas formas de utilizar a dança como uma forma de agregar valor a eventos corporativos e cativar a sua audiência. Conheça as nossas ofertas!`,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Beneficts = ({ setSelectedPage }: Props) => {
  return (
    <div className="w-full bg-light-alt">
      <section id="história" className="mx-auto min-h-full w-5/6  py-20">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.História)}
        >
          {/* HEADER */}
          <motion.div
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText>MAIS QUE UMA ESCOLA DE DANÇA</HText>
            <p className="my-5 text-sm">
              Em 2018, a SoulDance foi fundada com uma simples missão: Fazer da
              dança uma parte integrante da vida de todos nós. Com a entrega e
              dedicação dos mais conceituados professores do mercado,
              trabalhamos para construir um lugar onde os nossos alunos são
              estimulados a descobrir, sem receios, todo o seu potencial e a
              criar uma comunidade assente na diversidade e inclusão ligada pela
              dança.
            </p>
          </motion.div>
          {/* BENEFITS */}
          <motion.div
            className="mt-5 items-center justify-between gap-8 md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {benefits.map((benefit: BenefitType) => (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>
          {/* GRAPHICS AND DESCRIPTION */}
          <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* GRAPHIC */}
            <img
              className="mx-auto "
              src={BenefitsPageGraphic}
              alt="benefits-page-graphic"
            />
            {/* DESCRIPTION */}
            <div>
              {/* TITLE */}
              <div className="relative">
                <div className="before:-lef-20 before:absolute before:-top-20 before:z-[-1] before:content-abstractwaves">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                      hidden: { opacity: 0, x: 70 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <HText>
                      DANÇA AO RITMO DA TUA{" "}
                      <span className="text-secondary-60">ALMA</span>
                    </HText>
                  </motion.div>
                </div>
              </div>
              {/* DESCRIPTION */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: 70 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="my-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias eaque nesciunt fuga praesentium nisi officia iure enim
                  aliquid dolorem dicta eius, vero perferendis atque rerum
                  blanditiis ab. Quam, natus illum!
                </p>
                <p className="mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias eaque nesciunt fuga praesentium nisi officia iure enim
                  aliquid dolorem dicta eius, vero perferendis atque rerum
                  blanditiis ab. Quam, natus illum!
                </p>
              </motion.div>
              {/* BUTTON */}
              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Junta-te a Nós
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Beneficts;
