export default class Lotto {
    static PRICE = 1000;
    static MIN = 1;
    static MAX = 45;
    static SIZE = 6;
    static LOTTO_NUMBERS = Array.from({ length: Lotto.MAX }).map((_, index) => index + 1);

    #value;

    constructor(numbers = null) {
        if (numbers) {
            this.#value = numbers;
        } else {
            this.#value = [...Lotto.LOTTO_NUMBERS]
                .sort(() => Math.random() - 0.5)
                .slice(0, Lotto.SIZE)
                .sort((a, b) => a - b);
        }
    }

    get value() {
        return [...this.#value];
    }

    static buy(price) {
        if (price < Lotto.PRICE) {
            throw new Error('로또 한 장의 가격은 1000원 입니다.');
        }
        if (price % Lotto.PRICE !== 0) {
            throw new Error('로또는 1000원 단위의 가격으로 구매할 수 있습니다.');
        }

        return Array.from({ length: price / Lotto.PRICE }).map(() => new Lotto());
    }

    contains(lottoNumber) {
        return this.#value.includes(lottoNumber);
    }

    matchCount(lotto) {
        return this.#value.filter(lottoNumber => lotto.contains(lottoNumber)).length
    }
}