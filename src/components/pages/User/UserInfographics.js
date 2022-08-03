import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  AreaChart,
  Area
} from "recharts";

import styles from "../../../styles/admin/infographics.module.css";

const data = [
  {
    name: 1,
    uv: 7000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 2,
    uv: 3000,
    pv: 7398,
    amt: 2210
  },
  {
    name: 3,
    uv: 4000,
    pv: 8800,
    amt: 2290
  },
  {
    name: 4,
    uv: 6780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 5,
    uv: 7890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 6,
    uv: 4390,
    pv: 7800,
    amt: 2500
  },
  {
    name: 7,
    uv: 3490,
    pv: 2300,
    amt: 2100
  }
];

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 }
];

const UserInfographics = () => {
  return (
    <div className={styles.container}>
      <div className={styles.monthly_exp_container}>
        <p className={styles.graph_header}>Monthly Expenditure</p>
        <div className={styles.chart_container}>
          <ResponsiveContainer width="100%" aspect={2 / 1}>
            <BarChart
              width={300}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 20,
                left: -20,
                bottom: 0
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              {/* <Legend /> */}
              <Bar dataKey="pv" fill="#233781" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className={styles.monthly_aud_reach_container}>
        <p className={styles.graph_header}>Monthly Audience Reach</p>
        <div className={styles.chart_container}>
          <ResponsiveContainer width="100%" aspect={2 / 1}>
            <BarChart
              width={300}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 20,
                left: -20,
                bottom: 0
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              {/* <Legend /> */}
              <Bar dataKey="pv" fill="#0077B6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className={styles.event_type_container}>
        <p className={styles.graph_header}>Event Type Reach</p>
        <div className={styles.chart_container}>
          <ResponsiveContainer width="100%" aspect={2 / 1}>
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data01}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#5696B8"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className={styles.event_type2_container}>
        <p className={styles.graph_header}>Event Type Distribution</p>
        <div className={styles.chart_container}>
          <ResponsiveContainer width="100%" aspect={2 / 1}>
            <AreaChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 20,
                left: -20,
                bottom: 0
              }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#B919C7" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#B919C7" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0077B6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#0077B6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area dataKey="pv" stroke="#B919C7" fillOpacity={1} fill="url(#colorUv)" />
              <Area dataKey="uv" stroke="#0077B6" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default UserInfographics;
