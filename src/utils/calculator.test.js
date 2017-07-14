import assert from 'assert';
import Calculator from './calculator';

describe('Calculator', () => {
  describe('multiple', () => {
    it('should return 4 when 2 * 2', () => {
      assert.equal(Calculator.multiply(2, 2), 4);
    });
  });
});
