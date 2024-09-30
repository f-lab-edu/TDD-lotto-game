import React from 'react';
import styles from '../styles/ResultForm.module.css';
import ResultInput from './ResultInput';
import useLottoResult from '../hooks/useLottoResult';

const ResultForm = ({ onResult }) => {
    const { winningNumbers, bonusNumber, handleInputChange, handleBonusChange, handleSubmit } = useLottoResult();

    return (
        <form className={styles.result} onSubmit={(e) => handleSubmit(e, onResult)}>
            <div className={styles.resultCommentContainer}>
                <div className={styles.resultNumbersComment}>당첨 번호</div>
                <div className={styles.resultBonusComment}>보너스 번호</div>
            </div>
            <div className={styles.resultContainer}>
                <div className={styles.resultNumbersDiv}>
                    {winningNumbers.map((num, index) => (
                        <ResultInput key={index} value={num} onChange={(value) => handleInputChange(index, value)} />
                    ))}
                </div>
                <div className={styles.resultBonusDiv}>
                    <ResultInput value={bonusNumber} onChange={handleBonusChange} />
                </div>
            </div>

            <button type="submit" className={styles.submitButton}>
                결과 확인하기
            </button>
        </form>
    );
};

export default ResultForm;
