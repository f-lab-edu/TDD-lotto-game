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

describe('로또 당첨 결과 테스트', () => {
    const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]); // 당첨 번호
    const bonusNumber = 7; // 보너스 번호

    test('로또 당첨 결과 파악', () => {
        expect(LottoResult.checkResults(new Lotto([10, 11, 12, 13, 14, 15]), winningLotto, bonusNumber)).toBe('꽝'); // 0개 맞춤
        expect(LottoResult.checkResults(new Lotto([1, 11, 12, 13, 14, 15]), winningLotto, bonusNumber)).toBe('꽝'); // 1개 맞춤
        expect(LottoResult.checkResults(new Lotto([1, 2, 12, 13, 14, 15]), winningLotto, bonusNumber)).toBe('꽝'); // 2개 맞춤
        expect(LottoResult.checkResults(new Lotto([1, 2, 3, 13, 14, 15]), winningLotto, bonusNumber)).toBe('5등'); // 3개 맞춤
        expect(LottoResult.checkResults(new Lotto([1, 2, 3, 4, 14, 15]), winningLotto, bonusNumber)).toBe('4등'); // 4개 맞춤
        expect(LottoResult.checkResults(new Lotto([1, 2, 3, 4, 5, 15]), winningLotto, bonusNumber)).toBe('3등'); // 5개 맞춤
        expect(LottoResult.checkResults(new Lotto([1, 2, 3, 4, 5, 7]), winningLotto, bonusNumber)).toBe('2등'); // 5개+보너스 맞춤
        expect(LottoResult.checkResults(new Lotto([1, 2, 3, 4, 5, 6]), winningLotto, bonusNumber)).toBe('1등'); // 6개 맞춤
    });

    test('당첨 결과에 따른 상금 파악', () => {
        expect(LottoResult.getLottoPrize(new Lotto([1, 2, 12, 13, 14, 15]), winningLotto, bonusNumber)).toBe(0); // 꽝
        expect(LottoResult.getLottoPrize(new Lotto([1, 2, 3, 13, 14, 15]), winningLotto, bonusNumber)).toBe(5000); // 5등상금 (5,000원)
        expect(LottoResult.getLottoPrize(new Lotto([1, 2, 3, 4, 14, 15]), winningLotto, bonusNumber)).toBe(50000); // 4등상금 (50,000원)
        expect(LottoResult.getLottoPrize(new Lotto([1, 2, 3, 4, 5, 15]), winningLotto, bonusNumber)).toBe(1500000); // 3등상금 (1,500,000원)
        expect(LottoResult.getLottoPrize(new Lotto([1, 2, 3, 4, 5, 7]), winningLotto, bonusNumber)).toBe(30000000); // 2등상금 (30,000,000원)
        expect(LottoResult.getLottoPrize(new Lotto([1, 2, 3, 4, 5, 6]), winningLotto, bonusNumber)).toBe(2000000000); // 1등상금(2,000,000,000원)
    });
});
