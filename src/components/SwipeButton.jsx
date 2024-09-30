import React from 'react';
import styles from '../styles/SwipeButton.module.css';

const SwipeButton = ({ isActive, onToggle }) => {
    return (
        <div className={styles.switch} onClick={onToggle}>
            <div className={`${styles.slider} ${isActive ? styles.active : ''}`}></div>
        </div>
    );
};

export default SwipeButton;
