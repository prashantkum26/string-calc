import { expect } from "chai";
import { add } from "../stringCalc.js";

describe('String Calculator', () => {
    it('should throw on non string input.', () => {
        expect(() => add([])).to.throw('Input must be a string.');
    });

    it('should handle for empty string', () => {
        expect(add("")).to.equal(0);
    });

    it('should return a number for a number string', () => {
        expect(add("1")).to.equal(1);
        expect(add("2")).to.equal(2);
        expect(add("3")).to.equal(3);
        expect(add("4")).to.equal(4);
    });

    it('should return the sum of two numbers', () => {
        expect(add("1,2")).to.equal(3);
    });

    it('should return the sum of unknown length of numbers', () => {
        expect(add('1,2,3,4,5,6,7,8,9')).to.equal(45);
    });

    it('should handle new lines between numbers', () => {
        expect(add('1\n2,3')).to.equal(6);
    });
    
    it('should handle customized delimiters', () => {
        expect(add('//;\n1;2')).to.equal(3);
    });

    it('should throw an error for negative numbers', () => {
        expect(() => add('1,-2,3,-4')).to.throw('Negatives not allowed: -2, -4');
    });
    
    it('should throw an error for negative numbers', () => {
        expect(() => add('1,-2')).to.throw('Negatives not allowed: -2');
    });

    it('should handle delimiters can be of any length', () => {
        expect(add('//[***]\n1***2***3')).to.equal(6);
    });

    it('should handle multiple delimiters with length longer than one char', () => {
        expect(add('//[*][%]\n1*2%3')).to.equal(6);
    });
});