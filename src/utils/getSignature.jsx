function getSignature() {
  const signatureNote = {
    flat: 0.5,
    neutral: 0,
    sharp: 0.5,
  };

  // const signatureNote1 = {
  //   flat: 0.5,
  //   neutral: 0,
  //   sharp: -0.5,
  // };

  // const signatureNote2 = {
  //   flat: -0.5,
  //   neutral: 0,
  //   sharp: 0.5,
  // };

  // Get a random signature key
  const randomSignatureKey = Object.keys(signatureNote)[Math.floor(Math.random() * 3)];

  // Get the signature value
  const randomSignatureValue = signatureNote[randomSignatureKey];

  return {
    randomSignatureKey,
    randomSignatureValue,
  };
}

export default getSignature;
