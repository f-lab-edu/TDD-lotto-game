import React from 'react';
import styles from '../styles/Priveinput.module.css';
import useLottoSeller from '../hooks/useLottoSeller';

const PriceInput = ({ onPurchase }) => {
    const { price, handleInputChange, handleSubmit } = useLottoSeller(onPurchase);

    return (
        <div className={styles.priceInputDiv}>
            <p>구입할 금액을 입력해주세요.</p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="구입 금액" value={price} onChange={handleInputChange} />
                <button type="submit">확인</button>
            </form>
        </div>
    );
};

export default PriceInput;
