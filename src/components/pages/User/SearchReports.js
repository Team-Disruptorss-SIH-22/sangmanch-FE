import React, { useState, useEffect } from "react";
import Select from "react-select";
import { monthOptions, countryOptions, typeOptions } from "components/Utils/constant";
import styles from "../../../styles/user/searchReport.module.css";
import axios from "axios";
import { format } from "date-fns";

const SearchReports = () => {
  const [name, setName] = useState("");
  const [month, setMonth] = useState(null);
  const [country, setCountry] = useState(null);
  const [type, setType] = useState(null);
  const [stats, setStats] = useState({
    expenses: 102392,
    peopleReached: 100,
    budget: 24500,
    events: []
  });

  const onSearch = async (e) => {
    e.preventDefault();
    const queryParams = {
      search: name,
      month: month?.value,
      country: country?.value,
      type: type?.value
    };
    const { data } = await axios.get(
      `https://sangmanch-be.onrender.com/api/event/filter/`,
      {
        params: queryParams
      }
    );
    setStats(data.data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <p>Search</p>
      </div>
      <div className={styles.wrapper}>
        <form className={styles.formContainer} onSubmit={onSearch}>
          <div>
            <div className={`${styles.row} ${styles.inputContainer}`}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Event Name"
                onChange={(e) => setName(e.target.value)}
              />
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

        {stats.events.length > 0 ? (
          <>
            <div className={styles.stats_container}>
              <div className={styles.stats}>
                <p className={styles.clrGrey}>Total Expenses</p>
                <p className={styles.stats_number}>{stats.expenses}</p>
              </div>

              <div className={styles.stats}>
                <p className={styles.clrGrey}>People Reached</p>
                <p className={styles.stats_number}>{stats.peopleReached}</p>
              </div>

              <div className={styles.stats + " " + styles.clrGreen}>
                <p>Budget</p>
                <p className={styles.stats_number}>{stats.budget}</p>
              </div>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Country</th>
                    <th>Date</th>
                    <th>Expense</th>
                    <th>People Reached</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.events.map((event) => (
                    <tr key={event.id}>
                      <td>{event.name}</td>
                      <td>{event.type}</td>
                      <td>{event.country}</td>
                      <td>{format(new Date(event.date), "dd-MM-yyyy")}</td>
                      <td>{event.expenses}</td>
                      <td>{event.peopleReached}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className={styles.no_result}>
            <p>No Data To Show</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchReports;
