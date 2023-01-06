import React from "react";
import { server} from "../assets";
import styles, { layout } from "../style";

const Database = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={server}
          alt="server"
          className="w-[100%] h-[100%] relative z-5"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily manage your <br className="sm:block hidden" /> Databases
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          sed totam officiis maiores ipsam minus soluta, quam architecto? Culpa,
          minima quis aliquid perferendis eligendi fuga alias amet nostrum optio
          dolores!
        </p>
      </div>
    </section>
  );
};

export default Database;
