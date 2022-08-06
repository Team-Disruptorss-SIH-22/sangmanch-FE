import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import India from "assets/home/carousel/India.png";
import banner from "assets/home/carousel/banner2.jpg";
import styles from "../../../styles/Home/carousel.module.css";

const CarouselSlider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      transitionTime={2000}
      interval={4000}
      showThumbs={false}
      showArrows={false}
      swipeable={false}
      showStatus={false}
      dynamicHeight={false}
    >
      <div>
        <img alt="" />
        <div className={styles.slide__container}>
          <div className={styles.left}>
            <div className={styles.showcase__text}>
              <div className={styles.heading}>
                <p className={styles.text__secondary}>
                  Sangmanch: Realtime Monitoring and Evaluation System
                </p>
                <p className={styles.text__primary}>
                  Creating an Automated and Unified Platform for ICCR Event Management
                </p>
              </div>
              <div className={styles.info}>
                Using a secure online interface, ICCR can administer and verify events and
                distribute cash for hosted events. ICCR Cultural Centers input event
                information, budget, attendance, and bills. The finance manager validates
                the uploaded bills, transmits the report to the Governing Body for
                approval, and requests that the finance manager release the cash to the
                cultural center. The General Assembly operates as a super-administrator
                with the authority to approve sub-authorities' reports, invoices, and
                feedback.
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <img src={India} alt="Carousel2" />
          </div>
        </div>
      </div>
      <div className={styles.bgImage}>
        <img src={banner} alt="Carousel2" />
      </div>
    </Carousel>
  );
};

export default CarouselSlider;
