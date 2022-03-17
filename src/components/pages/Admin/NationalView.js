import { useState } from "react";
import styles from "styles/admin/nationalView.module.css";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import ReactTooltip from "react-tooltip";
import map from "assets/map.json";
import data from "assets/data.json";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const NationalView = () => {
	const [content, setContent] = useState("");
	const [page, setPage] = useState(1);

	const chunkData = [data.slice(0, 19), data.slice(19)];

	const COLOR_RANGE = [
		"#ffedea",
		"#ffcec5",
		"#ffad9f",
		"#ff8a75",
		"#ff5533",
		"#e2492d",
		"#be3d26",
		"#9a311f",
		"#782618"
	];
	const DEFAULT_COLOR = "#EEE";

	const geographyStyle = {
		default: {
			outline: "none",
			stroke: "#990000",
			strokeWidth: "1px"
		},
		hover: {
			transition: "all 250ms",
			outline: "none",
			stroke: "green",
			strokeWidth: "2px"
		},
		pressed: {
			outline: "none"
		}
	};

	const colorScale = scaleQuantile()
		.domain(data.map((d) => d.value))
		.range(COLOR_RANGE);

	return (
		<div>
			<div className={styles.flex}>
				<div className={styles.map_container}>
					<ComposableMap
						data-tip=""
						projection="geoMercator"
						projectionConfig={{
							scale: 1024,
							rotate: [-82.5, -3, 0],
							center: [0, 17.5]
						}}
						height={600}
					>
						<Geographies geography={map}>
							{({ geographies }) =>
								geographies.map((geo) => {
									const current = data.find((s) => s.id === geo.id);
									return (
										<Geography
											key={geo.rsmKey}
											geography={geo}
											fill={current ? colorScale(current.value) : DEFAULT_COLOR}
											onMouseEnter={() =>
												setContent(`${geo.properties.name}-${current?.value}`)
											}
											onMouseLeave={() => setContent("")}
											style={geographyStyle}
										/>
									);
								})
							}
						</Geographies>
					</ComposableMap>
					<ReactTooltip>{content}</ReactTooltip>
				</div>
				<div className={styles.table_container}>
					<table>
						<thead>
							<tr>
								<th>State Code</th>
								<th>State Name</th>
								<th>Alert Count</th>
							</tr>
						</thead>
						<tbody>
							<>
								{chunkData?.[page - 1]?.map((row) => (
									<tr key={row.id}>
										<td>{row.id}</td>
										<td>{row.state}</td>
										<td>{row.value}</td>
									</tr>
								))}
							</>
							<tr>
								<td>
									<GrFormPreviousLink onClick={() => setPage(1)} size={30} />
								</td>
								<td></td>
								<td>
									<GrFormNextLink onClick={() => setPage(2)} size={30} />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default NationalView;
