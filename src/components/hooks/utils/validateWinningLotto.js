export default function validateWinningLotto(winningNumbers, bonusNumber) {
  const numbers = winningNumbers.map((num) => parseInt(num, 10));
  const bonus = parseInt(bonusNumber, 10);

  const allNumbersValid = numbers.every((num) => !isNaN(num) && num >= 1 && num <= 45);
  const bonusValid = !isNaN(bonus) && bonus >= 1 && bonus <= 45;

  if (!allNumbersValid || !bonusValid) {
    throw new Error('모든 번호는 1부터 45 사이의 숫자여야 합니다.')
  }

  const uniqueNumbers = new Set(numbers);
  if (uniqueNumbers.size !== numbers.length) {
    throw new Error('당첨 번호는 중복될 수 없습니다.');
  }

  if (numbers.includes(bonus)) {
    throw new Error('보너스 번호는 당첨 번호와 중복될 수 없습니다.');
  }
  return { numbers, bonus };
}
