import getInterval from './getInterval';
import getIntervalBySizeAndType from './getIntervalBySizeAndType';
import getIntervalWithSignatures from './getIntervalWithSignatures';
import getNote from './getNote';
import getSignature from './getSignature';

export default function getNoteData() {
  let note1 = getNote();
  let note2 = getNote();

  console.log(note1, note2);

  let { notesRange, interval } = getInterval(note1, note2);

  console.log(notesRange, interval);

  let intervalBySizeAndType = getIntervalBySizeAndType(interval, note1, note2, notesRange);

  console.log(intervalBySizeAndType);

  let { randomSignatureKey: signatureKey1, randomSignatureValue: signatureValue1 } = getSignature();
  if (signatureKey1 === 'sharp' && interval !== 1) {
    signatureValue1 *= -1;
  }

  let { randomSignatureKey: signatureKey2, randomSignatureValue: signatureValue2 } = getSignature();
  if (signatureKey2 === 'flat') {
    signatureValue2 *= -1;
  }

  let finalInterval = getIntervalWithSignatures(intervalBySizeAndType, signatureValue1, signatureValue2);

  console.log(finalInterval);

  return {
    note1,
    note2,
    finalInterval,
  };
}
