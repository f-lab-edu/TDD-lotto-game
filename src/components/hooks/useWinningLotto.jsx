import { useCallback, useState } from 'react';

const useWinningLotto = () => {
  const [winningNumbers, setWinningNumbers] = useState(['', '', '', '', '', '']);
  const [bonusNumber, setBonusNumber] = useState('');

  const changeWinningNumber = useCallback((index, value) => {
    setWinningNumbers((prevNumbers) => {
      const newNumbers = [...prevNumbers];
      newNumbers[index] = value;
      return newNumbers;
    });
  }, []);

  const changeBonsNumber = useCallback((value) => {
    setBonusNumber(value);
  }, []);

  return {
    bonusNumber: {
      value: bonusNumber,
      change: changeBonsNumber,
    },
    winningNumbers: {
      value: winningNumbers,
      change: changeWinningNumber,
    },
  };
};

export default useWinningLotto;
