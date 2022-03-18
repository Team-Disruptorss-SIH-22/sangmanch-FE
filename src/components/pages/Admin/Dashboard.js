import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlinePlus } from "react-icons/ai";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer
} from "recharts";

import styles from "styles/admin/adminDashboard.module.css";

const Dashboard = () => {
	// Stats
	const [drugsInPipeline, setDrugsInPipeline] = useState(610);
	const [deliveredDrugs, setDeliveredDrugs] = useState(500);
	const [safeDeliveries, setSafeDeliveries] = useState(443);
	const [anamoliesDetected, setAnamoliesDetected] = useState(57);

	// Charts
	const [charts, setCharts] = useState({
		consignmentsReceived: 4490,
		safeDeliveries: 426,
		anamoliesDetected: 33,
		anamoliesForwarded: 3,
		anamoliesDiscarded: 8
	});

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

	return (
		<div className={styles.dashboardContainer}>
			<div className={styles.stats_container}>
				<div className={styles.stats}>
					<p className={styles.clrGrey}>Drugs In-Pipeline</p>
					<p className={styles.stats_number}>{drugsInPipeline}</p>
				</div>

				<div className={styles.stats + " " + styles.clrBlue}>
					<p>Delivered Drugs</p>
					<p className={styles.stats_number}>{deliveredDrugs}</p>
				</div>

				<div className={styles.stats + " " + styles.clrGreen}>
					<p>Safe Deliveries</p>
					<p className={styles.stats_number}>{safeDeliveries}</p>
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
								<div className={styles.redLine}></div>
								<p>Today</p>
							</div>

							<div className={styles.singleLineHelper}>
								<div className={styles.greyLine}></div>
								<p>Yesterday</p>
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
								<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
									<stop offset="5%" stopColor="gray" stopOpacity={0.1} />
									<stop offset="95%" stopColor="gray" stopOpacity={0} />
								</linearGradient>
								<linearGradient id="colorPv" x1="0" y1="0" x2="1" y2="0">
									<stop offset="5%" stopColor="red" stopOpacity={0.1} />
									<stop offset="95%" stopColor="red" stopOpacity={0} />
								</linearGradient>
							</defs>
							<XAxis dataKey="date" />
							<YAxis />
							<Tooltip />
							<Area
								type="monotone"
								dataKey="uv"
								stroke="gray"
								fillOpacity={1}
								fill="url(#colorUv)"
							/>
							<Area
								type="monotone"
								dataKey="pv"
								stroke="red"
								fillOpacity={1}
								fill="url(#colorPv)"
							/>
						</AreaChart>
						</ResponsiveContainer>
					</div>
				</div>

				<div className={styles.line}></div>
				<div className={styles.graphChartsContainer}>
					<div className={styles.chart + " " + styles.noTopBorder}>
						<p className={styles.chartTitle + " " + styles.clrGrey}>
							Consignments Received
						</p>
						<p className={styles.chart_number}>{charts.consignmentsReceived}</p>
					</div>

					<div className={styles.chart}>
						<p className={styles.chartTitle + " " + styles.clrGrey}>Safe Deliveries</p>
						<p className={styles.chart_number + " " + styles.clrGreen}>
							{charts.safeDeliveries}
						</p>
					</div>

					<div className={styles.chart}>
						<p className={styles.chartTitle + " " + styles.clrGrey}>Anamolies Detected</p>
						<p className={styles.chart_number + " " + styles.clrRed}>
							{charts.anamoliesDetected}
						</p>
					</div>

					<div className={styles.chart}>
						<p className={styles.chartTitle + " " + styles.clrGrey}>
							Anamolies Forwarded
						</p>
						<p className={styles.chart_number + " " + styles.clrRed}>
							{charts.anamoliesForwarded}
						</p>
					</div>

					<div className={styles.chart}>
						<p className={styles.chartTitle + " " + styles.clrGrey}>
							Anomalies Discarded
						</p>
						<p className={styles.chart_number + " " + styles.clrLightGreen}>
							{charts.anamoliesDiscarded}
						</p>
					</div>
				</div>
			</div>

			<div className={styles.otherInfoContainer}>
				<div className={styles.unresolved_alerts_Container}>
					<div className={styles.sectionHeader}>
						<div className={styles.titleSubtitle}>
							<p className={styles.sectionTitle}>Unresolved Alerts</p>
							<p className={styles.sectionSubTitle}>
								<span className={styles.clrGrey}>Group:</span> Support
							</p>
						</div>

						<Link to="/" className={styles.viewMore + " " + styles.clrBlue}>
							View Details
						</Link>
					</div>

					<div className={styles.otherDetailsContent}>
						<div className={styles.alert}>
							<p>Escalated to Raid Team</p>
							<p className={styles.clrGrey}>2</p>
						</div>

						<div className={styles.alert}>
							<p>Forwarded for Follow-up</p>
							<p className={styles.clrGrey}>9</p>
						</div>

						<div className={styles.alert}>
							<p>Awaiting Descisions</p>
							<p className={styles.clrGrey}>10</p>
						</div>

						<div className={styles.alert}>
							<p>Pending</p>
							<p className={styles.clrGrey}>42</p>
						</div>
					</div>
				</div>

				<div className={styles.unresolved_alerts_Container}>
					<div className={styles.sectionHeader}>
						<div className={styles.titleSubtitle}>
							<p className={styles.sectionTitle}>Tasks</p>
							<p className={styles.sectionSubTitle + " " + styles.clrGrey}>Today</p>
						</div>

						<Link to="/" className={styles.viewMore + " " + styles.clrBlue}>
							View All
						</Link>
					</div>

					<div className={styles.otherDetailsContent}>
						<div className={styles.newTaskForm}>
							<input
								className={styles.newTaskInput}
								placeholder="Create new task"
							></input>
							<button className={styles.addTaskButton}>
								<AiOutlinePlus />
							</button>
						</div>

						<div className={styles.task}>
							<div className={styles.taskMain}>
								<input type="checkbox"></input>
								<p>Escalated to Raid Team</p>
							</div>
							<p className={styles.taskPriority + " " + styles.taskClrYellow}>URGENT</p>
						</div>

						<div className={styles.task}>
							<div className={styles.taskMain}>
								<input type="checkbox"></input>
								<p>Escalated to Raid Team</p>
							</div>
							<p className={styles.taskPriority + " " + styles.taskClrGreen}>NEW</p>
						</div>

						<div className={styles.task}>
							<div className={styles.taskMain}>
								<input type="checkbox"></input>
								<p>Escalated to Raid Team</p>
							</div>
							<p className={styles.taskPriority + " " + styles.taskClrDefault}>DEFAULT</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
