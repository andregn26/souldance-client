import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.svg";
import HomePageGraphic from "@/assets/HomePageGraphic1.svg";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import ScheduleModal from "@/shared/ScheduleModal";
import { CSSProperties, useState } from "react";

import useScrollLock from "@/hooks/useScrollLock";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Home = ({ setSelectedPage }: Props) => {
  const [locked, setLocked] = useScrollLock(false, "root");

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(!isShowModal);
    setLocked(!locked);
  };

  return (
    <section
      id="início"
      className=" gap-16 bg-light-secondary py-6 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Início)}
      >
        {/*MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
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
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm md:text-start">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          {/*ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Junta-te a Nós
            </ActionButton>
            <button
              className="hover:text-secondary-60-500 text-sm font-bold text-secondary-60 underline"
              onClick={showModal}
            >
              Horários 22/23
            </button>
          </motion.div>
        </div>

        {/*IMAGE */}
        <div className="flex basis-3/5 justify-center  md:ml-40 md:mt-16 md:justify-items-end">
          <img
            className="mt-16 md:h-[500px]"
            src={HomePageGraphic}
            alt="home-pageGraphic"
          />
        </div>
      </motion.div>
      {/*USP */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-10 py-10">
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
        <ScheduleModal
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          title="Horários 22/23"
        />
      ) : null}
    </section>
  );
};

export default Home;
