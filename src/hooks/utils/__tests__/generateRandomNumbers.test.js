import {describe, it, expect } from "vitest";
import { generateRandomNumbers } from "../generateRandomNumbers.js";

const isContain = n => 1 <= n && n <= 45;

describe('generateRandomNumbers > ', () => {
  it('심플 테스트', () => {
    expect(generateRandomNumbers().filter(isContain).length).toBe(6);
  })
})
