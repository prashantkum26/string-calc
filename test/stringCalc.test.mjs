import { expect } from "chai";
import { add } from "../stringCalc.js";

describe('String Calculator', () => {
    it('should throw on non string input.', () => {
        expect(() => add([])).to.throw('Input must be a string.');
    });
});