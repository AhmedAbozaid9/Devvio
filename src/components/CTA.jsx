import React from "react";
import Button from "./Button";
import styles from "../style";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow`}
  >
    <div>
      <h2 className={`${styles.heading2}`}>Let's try our Apps</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Voluptatibus ullam nam odit deserunt commodi fuga at expedita in
        nostrum, perferendis aut assumenda corrupti voluptate consectetur eius
        natus! Earum, ullam a.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
