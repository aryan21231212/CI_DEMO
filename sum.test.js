import sum from "./sum.js";

describe("sum",()=>{
    test("adds 1 + 2 to equal 3", () => {
        expect(sum(1,2)).toBe(3);
    })
    test("adds -3 + 5 to equal 2", () => {
        expect(sum(-3,5)).toBe(2);
    })
})

