import React from 'react';
import styles from '../styles/ResultForm.module.css';
import ResultInput from './ResultInput';
import Modal from "./Modal.jsx";
import useResultForm from "./hooks/useResultForm.jsx";

const ResultForm = ({ tickets }) => {
  const {
    winningNumbers,
    bonusNumber,
    ranking,
    hasModal,
    closeModal,
    handleSubmit,
  } = useResultForm(tickets);

  return (
    <>
      <form className={styles.result} onSubmit={handleSubmit}>
        <div className={styles.resultCommentContainer}>
          <div className={styles.resultNumbersComment}>당첨 번호</div>
          <div className={styles.resultBonusComment}>보너스 번호</div>
        </div>
        <div className={styles.resultContainer}>
          <div className={styles.resultNumbersDiv}>
            {winningNumbers.value.map((num, index) => (
              <ResultInput key={index} value={num} onChange={(value) => winningNumbers.change(index, value)}/>
            ))}
          </div>
          <div className={styles.resultBonusDiv}>
            <ResultInput value={bonusNumber.value} onChange={bonusNumber.change}/>
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          결과 확인하기
        </button>
      </form>
      {hasModal && ranking && <Modal ranking={ranking} onClose={closeModal}/>}
    </>
  );
};

export default ResultForm;
