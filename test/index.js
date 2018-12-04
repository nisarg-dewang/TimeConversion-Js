import assert from 'assert';

// eslint-disable-next-line object-curly-newline
const { ConvertMstoTimeString, ConvertTimeStringtoMs, ConvertSecondstoTimeString, ConvertTimeStringtoSeconds } = require('../src/index');

const numErr = 'Please enter numeric Value.';
const stringErr = 'TimeString is not valid. please enter TimeString in (hh:mm:ss) format.';

const testSamples1 = [
  { input: 'abc', expectedResult: numErr, description: 'should return error message when receiving "abc"' },
  { input: 'abc1234567', expectedResult: numErr, description: 'should return error message when receiving "abc1234567"' },
  { input: '127438@#', expectedResult: numErr, description: 'should return error message when receiving "127438@#"' },
  { input: '1234567', expectedResult: '00:20:35', description: 'should return 00:20:35' },
  { input: '23456733', expectedResult: '06:30:57', description: 'should return 06:30:57' },
  { input: '21684000', expectedResult: '06:01:24', description: 'should return 06:30:57' },
];

const testSamples2 = [
  { input: 'abc', expectedResult: stringErr, description: 'should return error message when receiving "abc"' },
  { input: 'abc1234567', expectedResult: stringErr, description: 'should return error message when receiving "abc1234567"' },
  { input: '127438@#', expectedResult: stringErr, description: 'should return error message when receiving "127438@#"' },
  { input: '12:01:30', expectedResult: '43290000', description: 'should return 00:20:35' },
  { input: '06:30:24', expectedResult: '23424000', description: 'should return 06:30:57' },
  { input: '30:24', expectedResult: '1824000', description: 'should return 06:30:57' },
  { input: '24', expectedResult: '24000', description: 'should return 06:30:57' },
];

const testSamples3 = [
  { input: 'abc', expectedResult: numErr, description: 'should return error message when receiving "abc"' },
  { input: 'abc1234567', expectedResult: numErr, description: 'should return error message when receiving "abc1234567"' },
  { input: '127438@#', expectedResult: numErr, description: 'should return error message when receiving "127438@#"' },
  { input: '123456', expectedResult: '34:17:36', description: 'should return 00:20:35' },
  { input: '24567', expectedResult: '06:49:27', description: 'should return 06:49:27' },
  { input: '54164', expectedResult: '15:02:44', description: 'should return 15:02:44' },
];

const testSamples4 = [
  { input: 'abc', expectedResult: stringErr, description: 'should return error message when receiving "abc"' },
  { input: 'abc1234567', expectedResult: stringErr, description: 'should return error message when receiving "abc1234567"' },
  { input: '127438@#', expectedResult: stringErr, description: 'should return error message when receiving "127438@#"' },
  { input: '06:17:36', expectedResult: '22656', description: 'should return 22656' },
  { input: '10:49:27', expectedResult: '38967', description: 'should return 38967' },
  { input: '16:34:00', expectedResult: '59640', description: 'should return 59640' },
  { input: '54:00', expectedResult: '3240', description: 'should return 3240' },
  { input: '50', expectedResult: '50', description: 'should return 50' },
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

describe('Array', () => {
  testSamples3.forEach((sample) => {
    it(sample.description, () => {
      assert.equal(ConvertSecondstoTimeString(sample.input), sample.expectedResult);
    });
  });
});

describe('Array', () => {
  testSamples4.forEach((sample) => {
    it(sample.description, () => {
      assert.equal(ConvertTimeStringtoSeconds(sample.input), sample.expectedResult);
    });
  });
});
