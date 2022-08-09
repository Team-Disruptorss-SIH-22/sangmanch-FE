import React, { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { AiOutlinePlus } from "react-icons/ai";

import styles from "styles/admin/adminDashboard.module.css";

const AdminDashboard = () => {
  // Stats
  const [totalExpenditure, setTotalExpenditure] = useState(610000);
  const [pendingReports, setPendingReports] = useState(500);
  const [approvedReports, setApprovedReports] = useState(443);
  const [anamoliesDetected, setAnamoliesDetected] = useState(57);

  // Charts
  const [charts, setCharts] = useState({
    consignmentsReceived: 4490,
    approvedReports: 426,
    anamoliesDetected: 33,
    anamoliesForwarded: 3,
    anamoliesDiscarded: 8
  });

  const [tasks, setTasks] = useState([
    "Escalate Report Number 234 to Finance Team",
    "Check the report status of today",
    "Check the deadlines for events"
  ]);

  const [task, setTask] = useState("");

  const data = [
    {
      date: 0,
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      date: 2,
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      date: 4,
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      date: 6,
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      date: 8,
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      date: 10,
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      date: 12,
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];

  const handleAddTasks = () => {
    if (task.length !== 0) {
      setTasks((prev) => [...prev, task]);
      setTask("");
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.stats_container}>
        <div className={styles.stats}>
          <p className={styles.clrGrey}>Total Expenditure</p>
          <p className={styles.stats_number}>{totalExpenditure}</p>
        </div>

        <div className={styles.stats}>
          <p className={styles.clrGrey}>Pending Reports</p>
          <p className={styles.stats_number}>{pendingReports}</p>
        </div>

        <div className={styles.stats + " " + styles.clrGreen}>
          <p>Approved Reports</p>
          <p className={styles.stats_number}>{approvedReports}</p>
        </div>

        <div className={styles.stats + " " + styles.clrRed}>
          <p>Anamolies Detected</p>
          <p className={styles.stats_number}>{anamoliesDetected}</p>
        </div>
      </div>

      <div className={styles.graphs_charts_Container}>
        <div className={styles.graphContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.titleSubtitle}>
              <p className={styles.sectionTitle}>Today's Trends</p>
              <p className={styles.sectionSubTitle + " " + styles.clrGrey}>
                As of 25 May 2019, 09:41 PM
              </p>
            </div>

            <div className={styles.graphLineHelper + " " + styles.clrGrey}>
              <div className={styles.singleLineHelper}>
                <div className={styles.blueLine}></div>
                <p>Expenses</p>
              </div>

              <div className={styles.singleLineHelper}>
                <div className={styles.greenLine}></div>
                <p>Attendees</p>
              </div>
            </div>
          </div>

          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
              <AreaChart
                width="100%"
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="10%" stopColor="#99d9d9" stopOpacity={0.2} />
                    <stop offset="90%" stopColor="#99d9d9" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#147eb7" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#147eb7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#99d9d9"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
                <Area
                  type="monotone"
                  dataKey="pv"
                  stroke="#147eb7"
                  fillOpacity={1}
                  fill="url(#colorPv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.unresolved_alerts_Container}>
          <div className={styles.sectionHeader}>
            <div className={styles.titleSubtitle}>
              <p className={styles.sectionTitle}>Tasks</p>
              <p className={styles.sectionSubTitle + " " + styles.clrGrey}>Today</p>
            </div>
          </div>

          <div className={styles.otherDetailsContent}>
            <div className={styles.newTaskForm}>
              <input
                className={styles.newTaskInput}
                placeholder="Create new task"
                value={task}
                required
                onChange={(e) => setTask(e.target.value)}
              />
              {console.log(task)}
              <button className={styles.addTaskButton} onClick={handleAddTasks}>
                <AiOutlinePlus />
              </button>
            </div>

            <div className={styles.content_container}>
              {tasks.map((task, index) => {
                return (
                  <div className={styles.task} key={index}>
                    <input type="checkbox"></input>
                    <p>{task}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
