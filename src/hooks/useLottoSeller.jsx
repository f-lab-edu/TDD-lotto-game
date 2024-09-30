import { useState } from 'react';

const useLottoSeller = (onPurchase) => {
    const [price, setPrice] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setPrice(value);
        } else {
            alert('숫자만 입력 가능합니다.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const numericPrice = parseInt(price, 10);

        if (isNaN(numericPrice) || numericPrice <= 0) {
            alert('유효한 금액을 입력해주세요.');
            return;
        }

        const ticketCount = Math.floor(numericPrice / 1000);

        if (ticketCount <= 0) {
            alert('1000원 이상 입력해주세요.');
            return;
        }

        if (numericPrice % 1000 !== 0) {
            alert('로또는 1000원 단위로 구매가 가능합니다.');
            return;
        }

        console.log(`구입한 로또 티켓 수: ${ticketCount}장`);

        if (onPurchase) {
            onPurchase(ticketCount);
        }
    };

    return {
        price,
        handleInputChange,
        handleSubmit,
    };
};

export default useLottoSeller;
