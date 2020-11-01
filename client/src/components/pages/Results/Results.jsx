import React from 'react';
import Title from '../../Title/Title';
import ISSMap from '../../ISSMap/ISSMap';
import BackButton from '../../BackButton/BackButton';
import styles from './Results.module.scss';

const Results = (props) => {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <BackButton route={'/'}></BackButton>
                <Title>Results</Title>
            </div>
            <ISSMap center={props.location} markers={[props.location]}/>
        </div>
    );
}

export default Results;