import { describe, it, expect } from "vitest";
import useLotto from "../useLotto";
import { act, renderHook } from "@testing-library/react";

const initRickets = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
]

describe('useLotto > ', () => {
  it('심플 테스트', () => {
    const { result } = renderHook(() => useLotto(() => initRickets.pop()))

    expect(result.current.tickets).toEqual([])

    act(() => {
      result.current.addLotto(2);
    })

    console.log(result.current.tickets);

    expect(result.current.tickets).toEqual([
      [7, 8, 9, 10, 11, 12],
      [1, 2, 3, 4, 5, 6],
    ])

    expect(initRickets).toEqual([]);
  })
})
