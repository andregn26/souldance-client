import { SelectedPage, ClassType, ProfessorType } from "@/shared/types";
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import Class from "./Class";
import useMediaQuery from "@/hooks/useMediaQuery";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";

// import required modules
import { Pagination } from "swiper";
import { EffectCards } from "swiper";
import { EffectCreative } from "swiper";
import Professor from "./Professor";
import ActionButton1 from "@/shared/ActionButton1";

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
const professors: Array<ProfessorType> = [
  {
    name: "Renato Nobre",
    modality: "Latinas",
    image: image1,
  },
  {
    name: "Ana Cardoso",
    modality: "Latinas Kids",
    image: image1,
  },
  {
    name: "Pedro",
    modality: "Latinas",
    image: image1,
  },
];

type Props = { setSelectedPage: (value: SelectedPage) => void };

const OurClasses = ({ setSelectedPage }: Props) => {
  const isNonMobile = useMediaQuery("(min-width: 1060px)");
  return (
    <>
      {/* SECTION BOX */}
      <section id="modalidades" className="w-full bg-black-70 py-20">
        {/* DIV FOR THE ROUTER */}
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Modalidades)}
        >
          {/* CLASSES SECTION */}
          <div>
            {/* CLASSES - EFFECT DIV FOR THE TEXT */}
            <motion.div
              className="mx-auto my-10 w-5/6"
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
            </motion.div>{" "}
            {/* CLASSES - CARROUSSEL BOX */}
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              grabCursor={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                480: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1060: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {classes.map((item: ClassType, index) => (
                <SwiperSlide key={`${item.name}-${index}`}>
                  <Class
                    name={item.name}
                    description={item.description}
                    image={item.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* PROFESSORS SECTION */}
          <div className="mt-16 w-full md:mt-24">
            {isNonMobile ? (
              <div className="mx-auto  flex w-5/6 items-center justify-between gap-24">
                <motion.div
                  className="w-3/5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.4, duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, x: 70 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {/* PROFESSORS - EFFECT DIV FOR THE TEXT */}{" "}
                  <HText>...COM OS MELHORES PROFESSORES</HText>
                  <p className="py-5 text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nisi illum eligendi consectetur iste! Ullam sint accusamus
                    reprehenderit, tenetur blanditiis quas quae veniam
                    asperiores delectus nisi ratione corporis a deleniti iste.
                  </p>
                  <p className="text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nisi illum eligendi consectetur iste! Ullam sint accusamus
                    reprehenderit, tenetur blanditiis quas quae veniam
                    asperiores delectus nisi ratione corporis a deleniti iste.
                  </p>
                  <div className="mt-16">
                    <ActionButton1 setSelectedPage={setSelectedPage}>
                      {" "}
                      Junta-te a Nós
                    </ActionButton1>
                  </div>
                </motion.div>
                {/* SWIPER NON MOBILE */}
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="w-[25%]"
                >
                  {professors.map((item: ProfessorType, index) => (
                    <SwiperSlide key={`${item.name}-${index}`}>
                      <Professor
                        name={item.name}
                        modality={item.modality}
                        image={item.image}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : (
              <>
                {/* PROFESSORS - EFFECT DIV FOR THE TEXT */}{" "}
                <div className="mx-auto w-5/6">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    variants={{
                      hidden: { opacity: 0, x: 70 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <HText>...COM OS MELHORES PROFESSORES</HText>
                    <p className="py-5 text-sm">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nisi illum eligendi consectetur iste! Ullam sint accusamus
                      reprehenderit, tenetur blanditiis quas quae veniam
                      asperiores delectus nisi ratione corporis a deleniti iste.
                    </p>
                  </motion.div>
                </div>
                {/* SWIPER MOBILE */}
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  grabCursor={true}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    480: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 0,
                    },
                  }}
                  modules={[Pagination]}
                  className="mySwiper "
                >
                  {professors.map((item: ProfessorType, index) => (
                    <SwiperSlide key={`${item.name}-${index}`}>
                      <Professor
                        name={item.name}
                        modality={item.modality}
                        image={item.image}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="mx-auto mt-12 w-5/6">
                  <ActionButton1 setSelectedPage={setSelectedPage}>
                    {" "}
                    Junta-te a Nós
                  </ActionButton1>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default OurClasses;

//  <div className="mt-10 h-[100%] w-[100%] overflow-x-auto overflow-y-hidden">
//    {/* CARROUSSEL */}
//    <ul className="w-[1500px] whitespace-nowrap">
//      {classes.map((item: ClassType, index) => (
//        <Class
//          key={`${item.name}-${index}`}
//          name={item.name}
//          description={item.description}
//          image={item.image}
//        />
//      ))}
//    </ul>
//  </div>;
