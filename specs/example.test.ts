import { describe, expect, test, beforeEach } from "@jest/globals";
import { sum } from "~/example";

describe("sum function", () => {
  let paramA: number, paramB: number;
  /**
   * beforeEach sera appelé avant chaque test
   */
  beforeEach(() => {
    paramA = 1;
    paramB = 2;
  });
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(paramA, paramB)).toBe(3);
  });

  test("adds -1 + 2 to equal 1", () => {
    paramA = -1;
    expect(sum(paramA, paramB)).toBe(3);
  });

  test("1 + 2 should not be equal 4", () => {
    expect(sum(paramA, paramB)).not.toBe(4);
  });
  test("`number` + null should be `number`", () => {
    paramB = null as unknown as number; // on force une valeur null en tant que number
    // on peut affirmer plusieurs choses dans un test, pour qu'il soit valide, il faut que toutes les affirmations soient vraies ✅
    expect(sum(paramA, paramB)).toBe(1);
    expect(sum(paramB, paramA)).toBe(1);
  });

  test.skip("null + NaN should be NaN", () => {
    expect(sum(null as unknown as number, NaN)).toBe(NaN);
  });
});
