const errors = require('../src/errors');
const fibonacci = require('../src/fibonacci');

describe('Fibonacci numbers', () => {
  describe('"Input Validation"', () => {
    it("throws an error if the input is not a number", () => {
      try {
        fibonacci('Hello');
      } catch (error) {
        expect(error).toEqual(jasmine.any(Error));
        expect(error.message).toBe(errors.NOT_A_NUMBER);
      }
    });

    it("throws an error for non-positive inputs", () => {
      try {
        fibonacci(-1);
      } catch (error) {
        expect(error).toEqual(jasmine.any(Error));
        expect(error.message).toBe(errors.NOT_POSITIVE);
      }
    });
  });

  describe('"Sequence"', () => {
    it("returns the 0th number on a Fibonacci sequence", () => {
      const actual = fibonacci(0);
      const expected = 0;
      expect(actual).toBe(expected);
    });

    it("returns the 1st number on a Fibonacci sequence", () => {
      const actual = fibonacci(1);
      const expected = 1;
      expect(actual).toBe(expected);
    });

    it("returns the 2nd number on a Fibonacci sequence", () => {
      const actual = fibonacci(2);
      const expected = 1;
      expect(actual).toBe(expected);
    });

    it("returns the 10th number on a Fibonacci sequence", () => {
      const actual = fibonacci(10);
      const expected = 55;
      expect(actual).toBe(expected);
    });
  });
});
