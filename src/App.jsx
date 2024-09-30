import React, { useState } from 'react';
import styles from './style.module.css';
import { Header, Footer, PriceInput, LottoTicket, SwipeButton, ResultForm, Modal } from './components/index';
import useLotto from './hooks/useLotto';
import useLottoResult from './hooks/useLottoResult';

function App() {
    const { tickets, addLotto } = useLotto();
    const { generateRakingResult } = useLottoResult();
    const [isSwiped, setIsSwiped] = useState(false);
    const [ranking, setRanking] = useState({});
    const [hasModal, setHasModal] = useState(false);

    const handleToggleSwipe = () => {
        setIsSwiped((prev) => !prev);
    };

    const handleLottoPurchase = (count) => {
        addLotto(count);
    };

    const handleResult = (result) => {
        setRanking(generateRakingResult(result, tickets));
        setHasModal(true);
    };

    const handleCloseModal = () => {
        setHasModal(false);
    };

    return (
        <div className={styles.appDiv}>
            <Header />
            <PriceInput onPurchase={handleLottoPurchase} />
            <div className={styles.lottoIconsContainer}>
                {tickets.length !== 0 && (
                    <>
                        <div className={styles.lottoCountDiv}>
                            <p>총 {tickets.length}개를 구매하였습니다.</p>
                            <div className={styles.swipeDiv}>
                                <p>번호 보기</p>
                                <SwipeButton isActive={isSwiped} onToggle={handleToggleSwipe} />
                            </div>
                        </div>
                        <div className={styles.lottoContainer}>
                            {tickets.map((ticket, index) => (
                                <LottoTicket key={index} numbers={ticket} isSwiped={isSwiped} />
                            ))}
                        </div>
                        <ResultForm onResult={handleResult} />
                    </>
                )}
            </div>

            <Footer />
            {hasModal && <Modal ranking={ranking} onClose={handleCloseModal} />}
        </div>
    );
}

export default App;
