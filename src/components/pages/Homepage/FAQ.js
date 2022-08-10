import React, { useState, Fragment } from "react";
import styles from "styles/Home/faq.module.css";

const faq = [
  {
    question: "Can I choose my meals?",
    answer:
      " Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget."
  },
  {
    question: "When will I receive my order?",
    answer:
      " Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget."
  },
  {
    question: "Can I skip a delivery?",
    answer:
      " Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget."
  },
  {
    question: "Can I add Extras to my delivery?",
    answer:
      " Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget."
  }
];

const FAQ = () => {
  const [activeAnswers, setactiveAnswers] = useState([]);

  const questionClickHandler = (index) => {
    if (activeAnswers.includes(index)) {
      setactiveAnswers(activeAnswers.filter((item) => item !== index));
    } else {
      setactiveAnswers([...activeAnswers, index]);
    }
  };

  return (
    <div id="faq" className={styles.faq}>
      <div className={styles.faqContainer}>
        <h1 className={styles.faqHeading}>Frequently Asked Questions</h1>
        <div className={styles.faqContent}>
          {faq.map((item, idx) => (
            <Fragment>
              <div
                className={`${styles.faq_item} ${
                  activeAnswers.includes(idx) ? styles.active : ""
                }`}
                key={idx}
              >
                <div
                  className={styles.faq_item_question}
                  onClick={() => questionClickHandler(idx)}
                >
                  <p>{item.question}</p>
                  <div className={styles.faq_item_question_icon}></div>
                </div>
                <div className={styles.faq_item_answer}>
                  <p>{item.answer}</p>
                </div>
              </div>
              {idx != faq.length - 1 && <div className={styles.divider}></div>}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
