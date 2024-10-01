import React from 'react';
import styles from '../styles/Modal.module.css';
import { createPortal } from "react-dom";

const Modal = ({ ranking, onClose }) => {
  const { prizes, roi } = ranking;

  return createPortal(<div className={styles.modalOverlay}>
    <div className={styles.modalContent}>
      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
      <h2>🏆 당첨 통계 🏆</h2>
      <table className={styles.resultTable}>
        <thead>
        <tr>
          <th>일치 갯수</th>
          <th>당첨금</th>
          <th>당첨 갯수</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>3개</td>
          <td>5,000</td>
          <td>{prizes['5등'].count}개</td>
        </tr>
        <tr>
          <td>4개</td>
          <td>50,000</td>
          <td>{prizes['4등'].count}개</td>
        </tr>
        <tr>
          <td>5개</td>
          <td>1,500,000</td>
          <td>{prizes['3등'].count}개</td>
        </tr>
        <tr>
          <td>5개 + 보너스 볼</td>
          <td>30,000,000</td>
          <td>{prizes['2등'].count}개</td>
        </tr>
        <tr>
          <td>6개</td>
          <td>2,000,000,000</td>
          <td>{prizes['1등'].count}개</td>
        </tr>
        </tbody>
      </table>
      <p className={styles.roiText}>
        당신의 총 수익률은 <strong>{roi}%</strong> 입니다.
      </p>
      <button className={styles.restartButton} onClick={onClose}>
        다시 시작하기
      </button>
    </div>
  </div>, document.body);
};

export default Modal;
