import useWinningLotto from "./useWinningLotto.jsx";
import useLottoResult from "./useLottoResult.jsx";
import { useState } from "react";

export default function useResultForm(tickets) {
  const {
    winningNumbers,
    bonusNumber,
  } = useWinningLotto();

  const {
    ranking,
    createRanking,
  } = useLottoResult(tickets);

  const [hasModal, setHasModal] = useState(false);

  const closeModal = () => {
    setHasModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      createRanking(winningNumbers.value, bonusNumber.value)
      setHasModal(true);
    } catch (e) {
      alert(e.message);

    }
  }

  return {
    winningNumbers,
    bonusNumber,
    ranking,
    hasModal,
    closeModal,
    handleSubmit,
  }
}
