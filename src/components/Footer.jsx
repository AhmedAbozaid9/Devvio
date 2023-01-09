import React from "react";

import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
import { logo } from "../assets";

const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="devvio"
          className="w-[200px] h-[100px] object-contain mb-6"
        />
        <p className={styles.paragraph}>
          The fastest and most secure software you can ever dream of and rely on
          for your business needs.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.name}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, idx) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    idx !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#4f4e45]">
      <p className="font-poppins font-normal text-[18px] leading-[27px] text-white text-center">
        {" "}
        2023 Devvio. All Rights Reserved
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, idx) => (
          <img
            src={social.icon}
            alt={social}
            key={social.id}
            className={`w-[21px] h-[21px object-contain cursor-pointer ${
              idx !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          />
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
