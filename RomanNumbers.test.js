//import { toRomanNumbers } from './RomanNumbers.js';
const toRomanNumbers = require('./RomanNumbers.js')
describe("toRomanNumbers", () => {
    it("should return XII if valid input as number", () => {
        expect(toRomanNumbers(12)).toBe("XII");
    });

    it("should return “M” when 1000", () => {
        expect(toRomanNumbers(1000)).toBe("M");
    });

    it("should return “D” when 500", () => {
        expect(toRomanNumbers(500)).toBe("D");
    });

    it("should return “C” when 100", () => {
        expect(toRomanNumbers(100)).toBe("C");
    });

    it("should return “L” when 50", () => {
        expect(toRomanNumbers(50)).toBe("L");
    });

})