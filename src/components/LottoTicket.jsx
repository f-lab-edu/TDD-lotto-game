import React from 'react';
import styles from '../styles/LottoTicket.module.css';

const LottoTicket = ({ numbers, isSwiped }) => {
    if (isSwiped) {
        return <div className={styles.numbers}>🎟️ {numbers.join(', ')}</div>;
    }

    return <div className={styles.lotto}>🎟️</div>;
};

export default LottoTicket;
