import { useState, useCallback } from 'react';
import { PRIZES } from '../constants';

const useLottoResult = () => {
    const [winningNumbers, setWinningNumbers] = useState(['', '', '', '', '', '']);
    const [bonusNumber, setBonusNumber] = useState('');

    const handleInputChange = useCallback((index, value) => {
        setWinningNumbers((prevNumbers) => {
            const newNumbers = [...prevNumbers];
            newNumbers[index] = value;
            return newNumbers;
        });
    }, []);

    const handleBonusChange = useCallback((value) => {
        setBonusNumber(value);
    }, []);

    const handleSubmit = useCallback(
        (event, onResult) => {
            event.preventDefault();

            const numbers = winningNumbers.map((num) => parseInt(num, 10));
            const bonus = parseInt(bonusNumber, 10);

            const allNumbersValid = numbers.every((num) => !isNaN(num) && num >= 1 && num <= 45);
            const bonusValid = !isNaN(bonus) && bonus >= 1 && bonus <= 45;

            if (!allNumbersValid || !bonusValid) {
                alert('모든 번호는 1부터 45 사이의 숫자여야 합니다.');
                return;
            }

            const uniqueNumbers = new Set(numbers);
            if (uniqueNumbers.size !== numbers.length) {
                alert('당첨 번호는 중복될 수 없습니다.');
                return;
            }

            if (numbers.includes(bonus)) {
                alert('보너스 번호는 당첨 번호와 중복될 수 없습니다.');
                return;
            }

            if (onResult && typeof onResult === 'function') {
                onResult({ winningNumbers: numbers, bonusNumber: bonus });
            }
        },
        [winningNumbers, bonusNumber]
    );

    const generateRakingResult = useCallback((result, tickets) => {
        const { winningNumbers, bonusNumber } = result;

        const prizes = {
            '1등': { count: 0, prize: PRIZES['6개'].prize },
            '2등': { count: 0, prize: PRIZES['5개 + 보너스볼'].prize },
            '3등': { count: 0, prize: PRIZES['5개'].prize },
            '4등': { count: 0, prize: PRIZES['4개'].prize },
            '5등': { count: 0, prize: PRIZES['3개'].prize },
        };

        tickets.forEach((ticket) => {
            const matchedNumbers = ticket.filter((num) => winningNumbers.includes(num)).length;
            const hasBonus = ticket.includes(bonusNumber);

            if (matchedNumbers === 6) {
                prizes['1등'].count += 1;
            } else if (matchedNumbers === 5 && hasBonus) {
                prizes['2등'].count += 1;
            } else if (matchedNumbers === 5) {
                prizes['3등'].count += 1;
            } else if (matchedNumbers === 4) {
                prizes['4등'].count += 1;
            } else if (matchedNumbers === 3) {
                prizes['5등'].count += 1;
            }
        });

        const totalPrize = Object.values(prizes).reduce((acc, { count, prize }) => acc + count * prize, 0);

        const totalSpent = tickets.length * 1000;

        const roi = totalSpent > 0 ? ((totalPrize / totalSpent) * 100).toFixed(2) : '0.00';

        return { prizes, roi };
    }, []);

    return {
        winningNumbers,
        bonusNumber,
        handleInputChange,
        handleBonusChange,
        handleSubmit,
        generateRakingResult,
    };
};

export default useLottoResult;
