import React, { useState } from 'react';
import styles from './style.module.css';
import { Footer, Header, LottoTicket, Modal, PriceInput, ResultForm, SwipeButton } from './components/index';
import useLotto from './hooks/useLotto.js';

function App() {
  const { tickets, addLotto } = useLotto();
  const [isSwiped, setIsSwiped] = useState(false);

  const handleToggleSwipe = () => {
    setIsSwiped((prev) => !prev);
  };

  const handleLottoPurchase = (count) => {
    addLotto(count);
  };

  return (
    <div className={styles.appDiv}>
      <Header/>
      <PriceInput onPurchase={handleLottoPurchase}/>
      <div className={styles.lottoIconsContainer}>
        {tickets.length !== 0 && (
          <>
            <div className={styles.lottoCountDiv}>
              <p>총 {tickets.length}개를 구매하였습니다.</p>
              <div className={styles.swipeDiv}>
                <p>번호 보기</p>
                <SwipeButton isActive={isSwiped} onToggle={handleToggleSwipe}/>
              </div>
            </div>
            <div className={styles.lottoContainer}>
              {tickets.map((ticket, index) => (
                <LottoTicket key={index} numbers={ticket} isSwiped={isSwiped}/>
              ))}
            </div>
            <ResultForm tickets={tickets} />
          </>
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
