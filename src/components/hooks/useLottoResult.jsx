import { useCallback, useMemo, useState } from 'react';
import validateWinningLotto from "./utils/validateWinningLotto.js";
import generateRakingResult from "./utils/generateRankingResult.js";

const useLottoResult = (tickets) => {
  const [result, setResult] = useState(null);

  const createRanking = useCallback(
    (winningNumbers, bonusNumber) => {
      const { numbers, bonus } = validateWinningLotto(winningNumbers, bonusNumber);

      setResult({ winningNumbers: numbers, bonusNumber: bonus });
    },
    []
  );

  const ranking = useMemo(() => result ? generateRakingResult(result, tickets) : null, [result, tickets])

  return { ranking, createRanking };
};

export default useLottoResult;
