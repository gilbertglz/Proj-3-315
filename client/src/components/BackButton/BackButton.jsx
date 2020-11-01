import React from 'react'
import { Link } from 'react-router-dom'
import styles from './BackButton.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const BackButton = ({route}) => {
    return (
        <Link className={styles.iconButton} to={route}>
            <div>
                <FontAwesomeIcon className={styles.icon} icon={faArrowLeft}/>
            </div>
        </Link>
    )
}

export default BackButton;