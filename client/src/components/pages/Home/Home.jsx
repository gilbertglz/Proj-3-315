import Title from '../../Title/Title';
import styles from './Home.module.scss';
import ISSMap from '../../ISSMap/ISSMap';
import React from 'react';
import {Link} from 'react-router-dom';
import AddressSearchBar from '../../AddressSearchBar/AddressSearchBar';
import { useEffect } from 'react';

const center = {lat: 0, lng: 0};

const Home = ({onLocationSelect, location}) => {
  useEffect(() => {
    center.lng = JSON.parse(JSON.stringify(location.lng));
    center.lat = JSON.parse(JSON.stringify(location.lat));
  }, []);
  return (
    <div className={styles.page}>
      <div className={styles.header}>

      </div>
      <div>
        <Title>Home</Title>
        <ISSMap
            center={center}
            markers={[location]}
            allowMarkerMovement={true}
            onClick={(event) => {console.log(event); onLocationSelect({lat: event.latLng.lat(), lng: event.latLng.lng()});}}
        />

      </div>
      <Link to="/results">Results</Link>
    </div>
  );
}

export default Home;