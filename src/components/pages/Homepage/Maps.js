import React from "react";
import GoogleMapReact from "google-map-react";
import { MdLocationPin } from "react-icons/md";
import styles from "styles/Home/maps.module.css";

import data from "assets/ICCR_centres_location.json";

export const Marker = ({ name }) => {
  return (
    <div className={styles.marker}>
      <MdLocationPin size={30} color={"#f46"} />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

const Maps = () => {
  const defaultProps = {
    center: {
      lat: 22.770416,
      lng: 78.024934
    },
    zoom: 1
  };
  return (
    <div className={styles.maps_container}>
      <h1 className={styles.map_heading}>Indian Cultural Centers Abroad</h1>
      <div className={styles.map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD7T84NejT_97g8OH2BDIPl8O0F0CyQlwY" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {data.map((marker) => (
            <Marker {...marker} />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Maps;
