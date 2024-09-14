import { describe, test, expect } from 'vitest';
import Lotto from '../Lotto.js';

// [x] 로또 1장의 가격은 1,000원이다.
// [x] 각 로또는 랜덤의 서로 다른 1이상 45이하의 정수 6개로 이루어져있다.
// [x] 로또를 발행할 때 로또를 구입한 금액 이하의 발급할 수 있는 최대 개수의 로또를 발행한다.

test('로또 1장의 가격은 1,000원이다.', () => {
    expect(Lotto.PRICE).toBe(1000);
});

test('각 로또는 랜덤의 서로 다른 1이상 45이하의 정수 6개로 이루어져있다.', () => {
    const value = new Lotto().value;
    expect(new Set(value).size).toBe(6);
    expect(value.every((v) => v >= 1 && v <= 45)).toBe(true);
});

describe('로또를 발행할 때 로또를 구입한 금액 이하의 발급할 수 있는 최대 개수의 로또를 발행한다.', () => {
    test.each([999, 0, -1000])(
        '지불한 가격이 1000원 미만일 때는 "로또 한 장의 가격은 1000원 입니다." 라는 오류가 발생한다.',
        (value) => {
            expect(() => Lotto.buy(value)).toThrow('로또 한 장의 가격은 1000원 입니다.');
        }
    );

    test.each([1001, 1999, 1500])(
        '로또를 %d원으로 구매하려고 했을 때, "로또는 1000원 단위의 가격으로 구매할 수 있습니다."라는 오류가 발생한다.',
        (value) => {
            expect(() => Lotto.buy(value)).toThrow('로또는 1000원 단위의 가격으로 구매할 수 있습니다.');
        }
    );

    test.each([
        { price: 1000, expected: 1 },
        { price: 2000, expected: 2 },
        { price: 10000, expected: 10 },
    ])('로또를 $price원으로 구매하려고 했을 때, $expected 개의 로또가 구매된다.', ({ price, expected }) => {
        const lottos = Lotto.buy(price);
        expect(Lotto.buy(price).length).toBe(expected);
        console.log(lottos);
    });
});
