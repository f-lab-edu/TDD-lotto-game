import { useState } from 'react';
import { generateRandomNumbers } from "./utils/generateRandomNumbers.js";

const useLotto = (generator = generateRandomNumbers) => {
  const [tickets, setTickets] = useState([]);

  const addLotto = (count) => {
    const newTickets = Array.from({ length: count }, generator);
    setTickets((prevTickets) => [...prevTickets, ...newTickets]);
  };

  return { tickets, addLotto };
};

export default useLotto;
