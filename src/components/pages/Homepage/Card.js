import React from "react";
import styles from "styles/Home/card.module.css";

const Card = ({ num, heading, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <img
            alt="card background"
            className={styles.cardImage}
            src="https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/basic-types-of-html-tags/cover.jpg"
          />
        </div>

        <div className={styles.infoContainer}>
          <div>
            <p className={styles.cardId}>{num}</p>
          </div>
          <div>
            <div>
              <h1 className={styles.cardHeading} title={heading}>
                {heading}
              </h1>
            </div>
            <div>
              <p className={styles.cardDescription} title={description}>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
