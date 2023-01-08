import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SelectedPage, BenefitType } from "@/shared/types";
import Benefit from "./Benefit";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

type Props = {
  benefits: Array<BenefitType>;
  setSelectedPage: (value: SelectedPage) => void;
};

const MobileSwiper = ({ benefits, setSelectedPage }: Props) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      style={{
        "--swiper-navigation-color": "#fff",
      }}
    >
      <SwiperSlide>
        {benefits
          .filter((benefit) => benefit.index === 1)
          .map((filteredBenefit) => (
            <Benefit
              key={filteredBenefit.title}
              icon={filteredBenefit.icon}
              title={filteredBenefit.title}
              description={filteredBenefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
      </SwiperSlide>
      <SwiperSlide>
        {benefits
          .filter((benefit) => benefit.index === 2)
          .map((filteredBenefit) => (
            <Benefit
              key={filteredBenefit.title}
              icon={filteredBenefit.icon}
              title={filteredBenefit.title}
              description={filteredBenefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
      </SwiperSlide>
      <SwiperSlide>
        {benefits
          .filter((benefit) => benefit.index === 3)
          .map((filteredBenefit) => (
            <Benefit
              key={filteredBenefit.title}
              icon={filteredBenefit.icon}
              title={filteredBenefit.title}
              description={filteredBenefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
      </SwiperSlide>
    </Swiper>
  );
};

export default MobileSwiper;
