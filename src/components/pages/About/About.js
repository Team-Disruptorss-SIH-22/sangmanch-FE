import React from "react";
import styles from "styles/Home/about.module.css";
import Footer from "../Footer";
import HomeNavbar from "../Navbar/HomeNavbar";

const About = () => {
  return (
    <>
      <HomeNavbar />
      <div className={styles.about}>
        <div className={styles.about_container}>
          <div className={styles.about_heading}>
            <h1>About Sangmanch</h1>
          </div>
          <div className={styles.about_content}>
            <p>
              The proposed solution is intended to be used as an interactive web interface
              by Indian Council for Cultural Relations (ISSR). The programme managers &
              finance managers initiate the entry of details into the activities
              management chain. The programme management committee forms an intermediate
              node between the admin and the finance body. They operate under the three
              statutory bodies - General Assembly and Finance Committee. The solution's
              objective is to monitor and evaluate each event and activity conducted by
              the Indian Cultural Centres (ICCs) abroad. Admin will be able to view,
              analyse, and monitor all the activities abroad under different centers.
              There will be different views available for the admin to manage and evaluate
              in a much easier and effective way.
            </p>
            <p>
              All the programme and finance managers will need authorisation before
              sharing any details. They will be providing the data of each event and its
              expenditure accordingly mentioned in the user portal according to the
              monthly report. After that, this data will be passed through the logical
              layer where all the side calculations and result finance figures will be
              calculated. For an in-depth analysis of the data collected from these
              managers, we use an intelligent clustering algorithm to detect anomalies in
              the financial expenditure in the arrangement of the activities if they are
              not getting matched with the physical report sent by the council. The
              feedback system provided to the admin will be used to provide reinforcements
              to the model and will be coupled with a portal to escalate the alters to the
              team for follow-ups. Various types of plots and heat maps are used in the
              admin portal for better visualisations and feedback based on human
              baselines. They can use the daily reports and available views to keep track
              of the events, finance expenditure, and country-wise management for clarity
              during follow-ups (by ISSR-Agents during anomaly escalation). We provide
              various alert priorities based on the severity. The severity is decided
              based on the strength of the logical checks and the restrictions of initial
              AI alerts.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
