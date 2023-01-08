import ActionButton1 from "@/shared/ActionButton1";
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
import useMediaQuery from "@/hooks/useMediaQuery";
import MobileSwiper from "./MobileSwiper";

const benefits: Array<BenefitType> = [
  {
    index: 1,
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Aulas de Dança",
    description: `
Lorem ipsum dolor sit amet,  `,
  },
  {
    index: 2,
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Aulas para Noivos",
    description: `
Um dos momentos mais marcantes de um casamento é aquele no qual o casal expressa o seu amor e felicidade através da dança. Para que esse instante seja inesquecível, será melhor coreografar os passos a serem dados com uma equipa profissional, criativa e dedicada.`,
  },
  {
    index: 3,
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Eventos Corporativos",
    description: `
Fortalecer ou criar laços num Team Building ou dar um toque de magia e glamour a festas temáticas - Conheça as variadas formas de utilizar a dança como uma forma de agregar valor a eventos corporativos e cativar a sua audiência. Conheça as nossas ofertas!`,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Beneficts = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="w-full bg-black-80">
      <section id="serviços" className="mx-auto min-h-full w-5/6  py-20">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Serviços)}
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
            <HText>OS NOSSOS SERVIÇOS</HText>
          </motion.div>

          {/* BENEFITS */}
          {isAboveMediumScreens ? (
            <>
              {" "}
              <motion.div
                className="mt-5 flex items-start justify-between gap-8"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.2 },
                  },
                }}
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
            </>
          ) : (
            <>
              <MobileSwiper
                benefits={benefits}
                setSelectedPage={setSelectedPage}
              />
            </>
          )}

          {/* GRAPHICS AND DESCRIPTION */}
          <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* GRAPHIC */}
            <img
              className="mx-auto "
              src={BenefitsPageGraphic}
              alt="benefits-page-graphic"
            />
            {/* DESCRIPTION */}
            <motion.div
              id="história"
              onViewportEnter={() => setSelectedPage(SelectedPage.História)}
            >
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
                      MAIS QUE UMA ESCOLA DE
                      <span className="text-purple-lighter1"> DANÇA</span>
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
                  Na SoulDance acreditamos que a dança é para todos e
                  esforçamo-nos por criar um ambiente acolhedor e inclusivo onde
                  os nossos alunos possam crescerir da rotina.
                </p>
                <p className="mb-5">
                  Mais do que apenas um hobby, a dança é uma forma de nos
                  expressarmos através do movimento. Quer estejas apenas a
                  começar ou tenhas experiência, os nossos alunos e professores
                  irá apoiar-te na tua viagem para desenvolveres a tua paixão
                  pela dança. <br /> <br /> <b>Quem dança é mais feliz...</b>
                </p>
              </motion.div>
              {/* BUTTON */}
              <div className=" mt-16 ">
                <ActionButton1 setSelectedPage={setSelectedPage}>
                  Junta-te a Nós
                </ActionButton1>
              </div>{" "}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Beneficts;
