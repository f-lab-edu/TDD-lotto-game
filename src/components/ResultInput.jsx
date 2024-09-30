import React from 'react';
import styles from '../styles/ResultInput.module.css';

const ResultInput = ({ value, onChange }) => {
    return (
        <div className={styles.resultInputDiv}>
            <input
                type="text"
                min="1"
                max="45"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={styles.input}
            />
        </div>
    );
};

export default ResultInput;
