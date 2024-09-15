import { describe, test, expect } from 'vitest';
import LottoResult from './../LottoResult';
import Lotto from './../Lotto';

// [x] 로또 당첨 결과를 파악하기 위해서는 로또 번호와 당첨 번호가 일치하는 갯수를 구해야 한다.
// [x] 로또 당첨 결과를 파악하기 위해서는 로또 번호와 보너스 번호가 일치하는지 여부를 구해야 한다.
// [x] 로또 당첨 1등은 6개의 번호가 일치해야 한다.
// [x] 로또 당첨 1등일 때 상금은 2,000,000,000원이다.
// [x] 로또 당첨 2등은 5개의 번호와 보너스 번호가 일치해야 한다.
// [x] 로또 당첨 2등일 때 상금은 30,000,000원 이다.
// [x] 로또 당첨 3등은 5개의 번호가 일치해야 한다.
// [x] 로또 당첨 3등일 때 상금은 1,500,000원이다.
// [x] 로또 당첨 4등은 4개의 번호가 일치해야 한다.
// [x] 로또 당첨 4등일 때 상금은 50,000원이다.
// [x] 로또 당첨 5등은 3개의 번호가 일치해야 한다.
// [x] 로또 당첨 5등일 때 상금은 5,000원이다.

import { describe, test, expect } from 'vitest';
import Lotto from './Lotto';
import LottoResult from './LottoResult';

describe('로또 당첨 결과 테스트', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    test('로또 당첨 결과 파악', () => {
        const lottos = [
            new Lotto([10, 11, 12, 13, 14, 15]), // 0개 맞춤
            new Lotto([1, 11, 12, 13, 14, 15]), // 1개 맞춤
            new Lotto([1, 2, 12, 13, 14, 15]), // 2개 맞춤
            new Lotto([1, 2, 3, 13, 14, 15]), // 3개 맞춤
            new Lotto([1, 2, 3, 4, 14, 15]), // 4개 맞춤
            new Lotto([1, 2, 3, 4, 5, 15]), // 5개 맞춤
            new Lotto([1, 2, 3, 4, 5, 7]), // 5개 + 보너스 맞춤
            new Lotto([1, 2, 3, 4, 5, 6]), // 6개 맞춤
        ];

        const lottoResult = new LottoResult(lottos, winningNumbers, bonusNumber);
        const results = lottoResult.checkResults();

        expect(results[0]).toBe('꽝'); // 0개 맞춘 경우
        expect(results[1]).toBe('꽝'); // 1개 맞춘 경우
        expect(results[2]).toBe('꽝'); // 2개 맞춘 경우
        expect(results[3]).toBe('5등'); // 3개 맞춘 경우
        expect(results[4]).toBe('4등'); // 4개 맞춘 경우
        expect(results[5]).toBe('3등'); // 5개 맞춘 경우
        expect(results[6]).toBe('2등'); // 5개 + 보너스 맞춘 경우
        expect(results[7]).toBe('1등'); // 6개 맞춘 경우
    });
});
