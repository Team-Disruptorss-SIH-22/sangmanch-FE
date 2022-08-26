import React, { useState, useEffect } from "react";
import Select from "react-select";
import { monthOptions, countryOptions, typeOptions } from "components/Utils/constant";
import styles from "../../../styles/user/searchReport.module.css";

const SearchReports = () => {
  const [month, setMonth] = useState(null);
  const [country, setCountry] = useState(null);
  const [type, setType] = useState(null);
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <p>Search</p>
      </div>
      <div className={styles.wrapper}>
        <form className={styles.formContainer}>
          <div>
            <div className={`${styles.row} ${styles.inputContainer}`}>
              <input type="text" name="name" id="name" placeholder="Enter Event Name" />
              <button type="submit" className={styles.submit}>
                Search
              </button>
            </div>
          </div>

          <div className={styles.row}>
            <div>
              <label htmlFor="month">Month</label>
              <Select
                className={styles.select}
                options={monthOptions}
                value={month}
                onChange={(value) => {
                  setMonth(value);
                }}
                name="month"
                id="month"
                placeholder="Select Month"
                required
              />
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <Select
                className={styles.select}
                options={countryOptions}
                value={country}
                onChange={(value) => {
                  setCountry(value);
                }}
                name="country"
                id="country"
                placeholder="Select Country"
                required
              />
            </div>
            <div>
              <label htmlFor="type">Type</label>
              <Select
                className={styles.select}
                options={typeOptions}
                value={type}
                onChange={(value) => {
                  setType(value);
                }}
                name="type"
                id="type"
                placeholder="Select Type"
                required
              />
            </div>
          </div>
        </form>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <p className={styles.clrGrey}>Total Expense</p>
            <p className={styles.stats_number}>102392</p>
          </div>

          <div className={styles.stats}>
            <p className={styles.clrGrey}>People Reached</p>
            <p className={styles.stats_number}>100</p>
          </div>

          <div className={styles.stats + " " + styles.clrGreen}>
            <p>Budget</p>
            <p className={styles.stats_number}>24500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchReports;
