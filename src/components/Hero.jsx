import React from "react";

import styles from "../style";
import { discount, devices } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span>
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppin font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Best <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Software</span>
        </h1>
        <div className="ss:flex hidden md:mr4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className=" font-poppin font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
        Development Team.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        asperiores quibusdam possimus suscipit consectetur, odit laboriosam
        quisquam vero itaque provident expedita dolores natus doloribus? Aut
        labore est animi ea quisquam.
      </p>
    </div>
    <div className="relative">
      <img
        src={devices}
        alt="devices"
        className="w-[700px] relative z-5 object-contain"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
);

export default Hero;
