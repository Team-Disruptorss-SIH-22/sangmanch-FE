import React, { useState } from "react";
import styles from "styles/Home/faq.module.css";

const data = [
  {
    entity: "Patient",
    questions: [
      {
        ques: "How can we procure medicines/drugs from a prescription?",
        ans: "You will have to present your unique government id (Aadhar, ABHA, UHID, etc.) given to the doctor while generating the prescription. The medical store will verify the drug's dosage, time, and potency from the prescription linked to your government id. The sales report of the drug will be updated as the medical store sells the medicine."
      },
      {
        ques: "Do I have to fill out any form or make an account to procure medications/drugs?",
        ans: "No, You don’t have to make an account on DAAS or fill out any form to obtain medications from the store. The store in charge of the person of contact in the medical store will verify the prescription associated with your ID and update it after the medicine is sold."
      },
      {
        ques: "Do I have to show the same ID to the doctor and the medical store?",
        ans: "Yes, You can show any of the following Identities to the doctor (Aadhar, ABHA, UHID, etc.). And you will have to show the same identity to the medical store to procure the drugs mentioned in the prescription."
      },
      {
        ques: "Can I check the drugs I procured or linked to my government ids?",
        ans: "No, Currently, we don’t offer features for the Patients to check the details of drugs procured or listed for the user. But the ABHA (Ayushman Bharat Health Account) portal contains the details of prescriptions associated with any check-ups done by presenting the ABHA ID as the user identity."
      }
    ]
  },
  {
    entity: "Medical Store",
    questions: [
      {
        ques: "How can I register as a Medical Store to sell prescription-based drugs?",
        ans: "Sign-Up as a seller on DAAS (ncbdass.me). You will need an email-id, username, password, and FSSAI number, which the admin will verify from the government databases before you can start accessing your Account."
      },
      {
        ques: "What are the forms available to me? How to use them?",
        ans: "Two forms are provided to the Medical Stores registered on DAAS, Received Receipt: It is filled by the medical store to report the consignment details received by the medical store from a warehouse or the manufacturer. Sales Report Form: Filled by the medical store after verifying the prescription linked to the user's unique ID. This form will update the prescription based on the number of drugs sold to the user. "
      }
    ]
  },
  {
    entity: "Warehouse",
    questions: [
      {
        ques: "How can I register as a Warehouse to forward the consignments to the next node?",
        ans: "Sign-Up as a warehouse on DAAS (ncbdass.me). You will need an email-id, username, password, and Warehouse ID number (Provided by the Manufacturer), which the admin will verify from the Manufacturer's databases before you can start accessing your DAAS Account."
      },
      {
        ques: "What are the forms available to me? How to use them?",
        ans: "One form is provided to the Warehouse registered on DAAS, Consignment Forwarding Form: It is filled by the warehouse to report the number of drugs, time of dispatch, and the lot id of the forwarded consignment."
      }
    ]
  },
  {
    entity: "Manufacturer",
    questions: [
      {
        ques: "How can I register as a Manufacturer to initiate the entry of drug consignment to the drug supply chain?",
        ans: "Sign-Up as a manufacturer on DAAS (ncbdass.me). You will need an email-id, username, password, and Drug License Number (Provided by the Government of India), which the admin will verify from the Government databases before you can start accessing your DAAS Account."
      },
      {
        ques: "What are the forms available to me? How to use them?",
        ans: "One form is provided to the Manufacturer registered on DAAS, Drug Initiation Report: It is filled by the manufacturer to initiate the entry of the drug into the supply chain. The details in the form include the name, potency, and amount of the drug. These details are included with the lot id of the drug consignment."
      }
    ]
  }
];

const FAQ = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [currentItem, setCurrentItem] = useState(null);

  const tabClickHandler = (index) => {
    if (index !== currentTab) setCurrentItem(null);
    setCurrentTab(index);
  };

  const itemClickHandler = (item) => {
    if (item === currentItem) setCurrentItem(null);
    else setCurrentItem(item);
  };

  const isActive = (itemIdx) => {
    return itemIdx === currentItem;
  };

  return (
    <div id="faq" className={styles.faq}>
      <div className={styles.faqContainer}>
        <h1 className={styles.faqHeading}>Frequently Asked Questions</h1>
        <div className={styles.faqContent}>
          <div className={styles.tabsContainer}>
            {data.map((item, index) => (
              <div
                key={index}
                className={`${styles.tab} ${currentTab === index ? styles.active : ""}`}
                onClick={() => tabClickHandler(index)}
              >
                {item.entity}
              </div>
            ))}
          </div>
          <div className={styles.questionsContainer}>
            {data[currentTab].questions.map((item, index) => (
              <div
                key={index}
                className={styles.question}
                onClick={() => itemClickHandler(index)}
              >
                <div className={styles.questionHeading}>
                  {index + 1}.&ensp;<span className={styles.questionOnly}>{item.ques}</span>
                </div>
                <div
                  className={`${styles.questionAnswer} ${
                    isActive(index) && styles.activeAnswer
                  }`}
                >
                  {item.ans}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
