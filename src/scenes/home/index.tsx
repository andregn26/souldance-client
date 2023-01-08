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

const Home = ({ setSelectedPage, showModal, isShowModal }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="início"
      className=" gap-16 bg-gradient-to-br from-black-90 to-black-60 py-6 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Início)}
      >
        {/*MAIN HEADER */}
        <div className="z-10 mt-24 md:mt-32 md:basis-3/5">
          {/*HEADINGS*/}
          <motion.div
            className="md:-mt-20"
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
                  className="ml-[-10px] w-[90%] max-w-[580px]"
                  src={HomePageText}
                  alt="home-page-text"
                />
              </div>
            </div>
          </motion.div>
          {/*ACTIONS */}
          <motion.div
            className="mt-8 items-center gap-8 xs:flex sm:mt-16 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="mb-5 w-[200px]">
              <ActionButton1 setSelectedPage={setSelectedPage}>
                Junta-te a Nós
              </ActionButton1>
            </div>
            <div className="mb-5">
              <button
                className="hover:text-purple-lighter1-500 text-sm font-bold text-purple-lighter1 underline xs:w-auto"
                onClick={showModal}
              >
                Horários 22/23
              </button>
            </div>
          </motion.div>
        </div>

        {/*IMAGE */}
        <div className="flex basis-2/5 justify-center   md:mt-8 md:justify-items-end">
          <img
            className="mt-16  "
            src={HomePageGraphic}
            alt="homePageGraphic"
          />
        </div>
      </motion.div>
      {/*USP */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-black-70 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              {/* <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} /> */}
            </div>
          </div>
        </div>
      )}
      {isShowModal ? (
        <ScheduleModal showModal={showModal} title="Horários 22/23" />
      ) : null}
    </section>
  );
};

export default Home;
