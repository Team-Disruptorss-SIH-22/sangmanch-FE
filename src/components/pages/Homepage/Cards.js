import React from "react";
import { FaChevronRight } from "react-icons/fa";
import styles from "styles/Home/cards.module.css";
import Card from "./Card";
import First from "assets/home/cards/First.jpg";
import Second from "assets/home/cards/Second.jpg";
import Third from "assets/home/cards/Third.jpg";

const data = [
  {
    num: 1,
    heading: "Upload Event Details",
    description: "",
    img: First
  },
  {
    num: 2,
    heading: "Get approval from Team",
    description: "",
    img: Second
  },
  {
    num: 3,
    heading: "Get Paid for the Event",
    description: "",
    img: Third
  }
];

const Cards = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.galleryContainer}>
        <h1 className={styles.galleryHeading}>
          Logistic Management in Three Simple Steps
        </h1>
        <div className={styles.cardsContainer}>
          <Card {...data[0]} />
          <FaChevronRight size={40} color={"#147EB7"} />
          <Card {...data[1]} />
          <FaChevronRight size={40} color={"#147EB7"} />
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
