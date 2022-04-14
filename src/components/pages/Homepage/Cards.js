import React from "react";
import { FaChevronRight } from "react-icons/fa";
import styles from "styles/Home/cards.module.css";
import Card from "./Card";

const data = [
  {
    num: 1,
    heading: "Prescription Verification",
    description: "Verify Prescription From Registered Medical Store"
  },
  {
    num: 2,
    heading: "Drug Sale",
    description: "The Medical store sells the drugs based on the prescription presented"
  },
  {
    num: 3,
    heading: "Prescription Updation",
    description:
      "The Data is updated in the prescription and medical store database after submitting the sales report."
  }
];

const Cards = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.galleryContainer}>
        <h1 className={styles.galleryHeading}>How can we help you? </h1>
        <div className={styles.cardsContainer}>
          <Card {...data[0]} />
          <FaChevronRight size={40} color={"#4444dd"} />
          <Card {...data[1]} />
          <FaChevronRight size={40} color={"#4444dd"} />
          <Card {...data[2]} />

          {/* {data.map((item, index) => (
            <Card key={index} {...item} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
