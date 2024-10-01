import { describe, test, expect } from "vitest";
import validateWinningLotto from '../validateWinningLotto';

describe('validateWinningLotto > ', () => {
  test('유효한 입력에 대해 올바른 결과를 반환한다', () => {
    const result = validateWinningLotto(['1', '2', '3', '4', '5', '6'], '7');
    expect(result).toEqual({ numbers: [1, 2, 3, 4, 5, 6], bonus: 7 });
  });

  test('숫자가 아닌 입력에 대해 에러를 던진다', () => {
    expect(() => validateWinningLotto(['1', '2', '3', '4', '5', 'a'], '7')).toThrow('모든 번호는 1부터 45 사이의 숫자여야 합니다.');
    expect(() => validateWinningLotto(['1', '2', '3', '4', '5', '6'], 'b')).toThrow('모든 번호는 1부터 45 사이의 숫자여야 합니다.');
  });

  test('범위를 벗어난 번호에 대해 에러를 던진다', () => {
    expect(() => validateWinningLotto(['1', '2', '3', '4', '5', '46'], '7')).toThrow('모든 번호는 1부터 45 사이의 숫자여야 합니다.');
    expect(() => validateWinningLotto(['1', '2', '3', '4', '5', '6'], '0')).toThrow('모든 번호는 1부터 45 사이의 숫자여야 합니다.');
  });

  test('중복된 당첨 번호에 대해 에러를 던진다', () => {
    expect(() => validateWinningLotto(['1', '2', '3', '4', '5', '5'], '7')).toThrow('당첨 번호는 중복될 수 없습니다.');
  });

  test('보너스 번호가 당첨 번호와 중복될 경우 에러를 던진다', () => {
    expect(() => validateWinningLotto(['1', '2', '3', '4', '5', '6'], '6')).toThrow('보너스 번호는 당첨 번호와 중복될 수 없습니다.');
  });
});
