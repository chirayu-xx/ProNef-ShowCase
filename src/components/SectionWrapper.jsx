import React from "react";
import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";
const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImage,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${banner}
      ${reverse ? styles.bgWhite : styles.bgPrimary}
      `}
    >
      <div
        className={`flex items-center  w-11/12 sm:w-full minmd:w-3/4
      ${reverse ? styles.boxReverseClass : styles.boxClass}
      `}
      >
        <div
          className={`${styles.descDiv}
        ${reverse ? "fadeRightMini" : "fadeLeftMini"}
        ${reverse ? styles.textRight : styles.textLeft}
        `}
        >
          <h1
            className={`${styles.h1Text}
          ${reverse ? styles.blackText : styles.whiteText}
          `}
          >
            {title}
          </h1>
          <p
            className={`${styles.descriptionText}
          ${reverse ? styles.blackText : styles.whiteText}
          `}
          >
            {description}
          </p>
          {showBtn && (
            <Button
              assestUrl={assets.expo}
              link="https://expo.dev/@chirayu-xx/react_native?sserviceType=classic&distribution=expo-go"
            />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img src={mockupImage} alt="mockup" className={`styles.sectionImg
        ${reverse ? "fadeRightMini" : "fadeLeftMini"}
          `} />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
