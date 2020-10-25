import React from 'react';
import Title from '../../Title/Title';
import styles from './Home.module.scss';
import ISSMap from '../../ISSMap/ISSMap';

const Home = () => {
    return (
        <div className={styles.homePage}>
            <Title>Home</Title>
            <ISSMap markers={[{lat: 0.0, lng: 0.0}]}></ISSMap>
        </div>
    );
}

export default Home;