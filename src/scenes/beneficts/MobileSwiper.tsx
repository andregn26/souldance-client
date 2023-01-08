import React from "react";
import ModalBenefit3 from "./ModalBenefit3";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Benefit3 from "./Benefit3";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

type Props = { showModal: (isShow: any) => void; isShowModal: boolean };

const MobileSwiper = ({ showModal, isShowModal }: Props) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <Benefit3 showModal={showModal} isShowModal={isShowModal} />
      </SwiperSlide>
      <SwiperSlide>
        <Benefit3 showModal={showModal} isShowModal={isShowModal} />
      </SwiperSlide>
      <SwiperSlide>
        <Benefit3 showModal={showModal} isShowModal={isShowModal} />
      </SwiperSlide>
    </Swiper>
  );
};

export default MobileSwiper;
