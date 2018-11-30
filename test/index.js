import assert from 'assert';

const { ConvertMstoTimeString, ConvertTimeStringtoMs } = require('../src/index');

const numErr = 'Please enter numeric Value.';
const stringErr = 'TimeString is not valid. please enter TimeString in (hh:mm:ss) format.';

const testSamples1 = [
  { input: 'abc', expectedResult: numErr, description: 'should return error message when receiving "abc"' },
  { input: 'abc1234567', expectedResult: numErr, description: 'should return error message when receiving "abc1234567"' },
  { input: '127438@#', expectedResult: numErr, description: 'should return error message when receiving "127438@#"' },
  { input: '1234567', expectedResult: '00:20:35', description: 'should return 00:20:35' },
  { input: '23456733', expectedResult: '06:30:57', description: 'should return 06:30:57' },
];

const testSamples2 = [
  { input: 'abc', expectedResult: stringErr, description: 'should return error message when receiving "abc"' },
  { input: 'abc1234567', expectedResult: stringErr, description: 'should return error message when receiving "abc1234567"' },
  { input: '127438@#', expectedResult: stringErr, description: 'should return error message when receiving "127438@#"' },
  { input: '12:01:30', expectedResult: '43290000', description: 'should return 00:20:35' },
  { input: '06:30:24', expectedResult: '23424000', description: 'should return 06:30:57' },
];

describe('Array', () => {
  testSamples1.forEach((sample) => {
    it(sample.description, () => {
      assert.equal(ConvertMstoTimeString(sample.input), sample.expectedResult);
    });
  });
});

describe('Array', () => {
  testSamples2.forEach((sample) => {
    it(sample.description, () => {
      assert.equal(ConvertTimeStringtoMs(sample.input), sample.expectedResult);
    });
  });
});
