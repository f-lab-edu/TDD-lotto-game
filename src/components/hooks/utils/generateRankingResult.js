import { PRIZES } from "../../constants.jsx";

const generateRakingResult = (result, tickets) => {
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
}

export default generateRakingResult;
