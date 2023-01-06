import React from "react";
import { time } from "../assets";
import styles, { layout } from "../style.js";
import Button from "./Button";

const Time = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        A deadline <br className="sm:block hidden" /> that suits you
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, dolores
        eveniet? Corporis sed hic sint voluptatum deserunt eaque, dignissimos
        tempore est rerum blanditiis asperiores aperiam perferendis laboriosam
        iste quae eum!
      </p>
      <Button styles="mt-10" />
    </div>
    <img src={time} alt="time management" />
  </section>
);

export default Time;
