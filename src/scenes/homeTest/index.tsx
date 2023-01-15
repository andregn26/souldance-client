import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText-01.svg";
import image05 from "@/assets/image05.png";
import HomePageGraphic from "@/assets/HomePageGraphic1.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import ScheduleModal from "@/shared/ScheduleModal";
import { useState } from "react";
import ActionButton1 from "@/shared/ActionButton1";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  showModal: (value: any) => void;
  isShowModal: boolean;
};

const HomeTest = ({ setSelectedPage, showModal, isShowModal }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <>
      {/* ROOT BOX */}
      <section
        id="início"
        className=" grid min-h-screen w-full grid-rows-[100%_0] bg-gradient-to-br from-black-90 to-black-60 md:grid-rows-[85%_15%]"
      >
        {/* MAIN BOX */}
        <div className="mx-auto mt-36 w-5/6 self-center md:mt-28  ">
          <motion.div
            className=" grid h-full flex-col  gap-8 md:grid-cols-[50%_50%] md:flex-row md:gap-24 xl:gap-24 "
            onViewportEnter={() => setSelectedPage(SelectedPage.Início)}
          >
            {/* LEFT SIDE */}
            <div className=" flex basis-3/5 flex-col justify-center ">
              {/*HEADINGS*/}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -70 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <div className="relative">
                  <div className="before:absolute before:-right-[-50px] before:-top-20 before:z-[-1] before:w-[100%] md:before:content-evolvetext">
                    <img
                      className="ml-[-10px] w-[90%] "
                      src={HomePageText}
                      alt="home-page-text"
                    />
                  </div>
                </div>
              </motion.div>
              {/*ACTIONS */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -70 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <div className="mt-10 flex flex-col gap-7 md:flex-row">
                  <div className=" w-[200px]">
                    <ActionButton1 setSelectedPage={setSelectedPage}>
                      Junta-te a Nós
                    </ActionButton1>
                  </div>
                  <div>
                    <button onClick={showModal}>Horários 22/23</button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE */}
            <div className=" z-10 basis-2/5  ">
              <img src={HomePageGraphic} alt="homePageGraphic" />
            </div>
          </motion.div>
        </div>

        {/*BOTTOM BAR */}
        {isAboveMediumScreens && (
          <>
            {/* BAR BOX */}
            <div className=" flex w-full items-center bg-black-100 ">
              {/* BAR INSIDE BOX CENTERED AND RESIZED */}
              <div className="mx-auto w-5/6 ">
                <motion.div
                  className="flex w-3/5  justify-between"
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.2 },
                    },
                  }}
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                  >
                    <span className="text-5xl font-bold">18</span> <br />
                    MODALIDADES
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                  >
                    <span className="text-5xl font-bold">15</span> <br />
                    PROFESSORES
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                  >
                    <span className="text-5xl font-bold">200</span> <br />
                    ALUNOS
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </>
        )}
        {/* MODAL */}
        {isShowModal && (
          <ScheduleModal showModal={showModal} title="Horários 22/23" />
        )}
      </section>
    </>
  );
};

export default HomeTest;
