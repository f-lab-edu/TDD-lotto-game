import React, { useState } from 'react';
const MAX = 45;
const SIZE = 6;
const LOTTO_NUMBERS = Array.from({ length: MAX }).map((_, index) => index + 1);

const generateRandomNumbers = () => {
    const shuffled = [...LOTTO_NUMBERS].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, SIZE).sort((a, b) => a - b);
};

const useLotto = () => {
    const [tickets, setTickets] = useState([]);

    const addLotto = (count) => {
        const newTickets = Array.from({ length: count }, () => generateRandomNumbers());
        setTickets((prevTickets) => [...prevTickets, ...newTickets]);
    };

    return { tickets, addLotto };
};

export default useLotto;
