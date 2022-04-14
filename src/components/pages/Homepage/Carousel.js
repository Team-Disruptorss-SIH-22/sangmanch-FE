import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import carousel1 from "assets/home/carousel1.jpg";
import carousel2 from "assets/home/carousel2.jpg";
import styles from "../../../styles/Home/home.module.css";

const CarouselSlider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      transitionTime={2000}
      interval={5000}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
    >
      <div>
        <img alt="" />
        <div className={styles.slide__container}>
          <div className={styles.left}>
            <div className={styles.showcase__text}>
              <div className={styles.heading}>
                <p className={styles.text__secondary}>
                  Drug Analysis and Alerting System
                </p>
                <p className={styles.text__primary}>
                  Creating India’s First Durg Supply Chain Tracking and Prescription
                  Management System
                </p>
              </div>
              <div className={styles.info}>
                A secure web interface allows NCB in end-to-end supply chain tracking from
                manufacturer to medical store. Patient prescription management by doctors
                facilitates smooth and tracked drug sales from registered medical stores
                after prescription verification. User identification and registration from
                secure identities issued by the Government of India.
              </div>
            </div>
            <div className={styles.button}>Learn More</div>
          </div>
          <div className={styles.right}>
            <img src={carousel1} alt="Carousel2" />
          </div>
        </div>
      </div>
      <div>
        <img src={carousel2} />
      </div>
    </Carousel>
  );
};

export default CarouselSlider;
