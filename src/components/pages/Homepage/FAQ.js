import React, { useState, Fragment } from "react";
import styles from "styles/Home/faq.module.css";

const faq = [
  {
    question: "How can I sign up as an ICCR Cultural Center Administrator?",
    answer:
      "Use the Sign-Up form and provide your credentials and ICCR Unique ID to register. After submitting the form, you will get a verification code by email. It typically takes seven days for the ICCR General Assembly to approve a new user."
  },
  {
    question:
      "My event invoice was denied, and I believe it was due to an error. What should I do?",
    answer:
      "Occasionally, the Finance Manager and Governing Body may reject bills owing to report mistakes. If you believe that the invoice was accurate, you may file an appeal with the ICCR General Assembly. The General Assembly's decision will be final and binding."
  },
  {
    question: "How long does it typically take to get compensation for a hosted event?",
    answer:
      "Prior to approval for reimbursement, the invoice is sent via two hierarchical departments. We anticipate one week per department; thus, it may take three weeks for the money to be reimbursed for the event hosted."
  },
  {
    question: "Can we expedite the process of reimbursement?",
    answer:
      "The ICCR has a small staff dedicated to promoting Indian culture and assisting the Cultural Centres in achieving their objective. It is difficult for us to expedite the procedure, however The Cultural Centre Admins may approach the ICCR General Assembly to resolve the matter directly in exceptional circumstances."
  }
];

const FAQ = () => {
  const [activeAnswer, setActiveAnswer] = useState(null);

  const questionClickHandler = (index) => {
    if (activeAnswer === index) setActiveAnswer(null);
    else setActiveAnswer(index);
  };

  return (
    <div id="faq" className={styles.faq}>
      <div className={styles.faqContainer}>
        <h1 className={styles.faqHeading}>Frequently Asked Questions</h1>
        <div className={styles.faqContent}>
          {faq.map((item, idx) => (
            <Fragment key={idx}>
              <div
                className={`${styles.faq_item} ${
                  activeAnswer === idx ? styles.active : ""
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
