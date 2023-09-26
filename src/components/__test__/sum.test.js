import { sum } from "../sum";
test("test the sum function", () => {
  let result = sum(3, 4);
  expect(result).toBe(7);
});
