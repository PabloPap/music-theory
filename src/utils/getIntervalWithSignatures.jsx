import { intervalMap } from '../config';

function getIntervalWithSignatures(intervalBySizeAndType, signatureValue1, signatureValue2) {
  const intervalValue = intervalMap[intervalBySizeAndType];
  console.log('intervalValue', intervalValue);
  const afterChange = intervalValue + signatureValue1 + signatureValue2;
  console.log('afterChange', afterChange);

  // Find the first key in intervalMap whose value matches afterChange and starts with the same number as intervalSizeAndType
  const matchingKey = Object.keys(intervalMap).find((key) => {
    const value = intervalMap[key];
    return value === afterChange && key[0] === intervalBySizeAndType[0];
  });

  if (!matchingKey) {
    return null;
  }

  return matchingKey;
}

export default getIntervalWithSignatures;
