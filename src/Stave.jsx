import { useEffect } from 'react';
import { useState } from 'react';

const Stave = () => {
  const [note1, setNote1] = useState('');
  const [note2, setNote2] = useState('');

  // 1. get notes distance initially (example -> 3 -> 3T)
  // 2. check if distance has f-e, or ch-b by notes indeces
  // 3. for Perfect Intervals additionally check if distances are f-g or b-f (1st, 8th)
  // 4. add signatures for notes and re-estimate the distance

  // Major or Minor Intervals
  // m and M exists on 2-3-6-7 dist
  // 2nd: if f-e || ch-b -> m , else -> M
  // 3rd: if f-e || ch-b -> m , else -> M
  // 6th if both f-e and ch-b -> m , if one of these 2 true -> M
  // 7th if both f-e and ch-b -> m , if one of these 2 true -> M

  // Perfect Intervals
  // K exists on 1-4-5-8 dist
  // 1st: all without signature are K
  // 4th: if f-g -> 4A , else 4K
  // 5th: if b-f -> 5E , else 5K
  // 8th: all without signature are K

  function getIntervalType(signature) {
    if (signature === 'flat') {
    } else if (signature === 'sharp') {
    } else {
    }
  }

  function getIntervalSize(note1, note2, noteIndex1, noteIndex2) {
    const intervalSize = noteIndex2 - noteIndex1 + 1;
    switch (intervalSize) {
      case 1:
        console.log('note1');
        getIntervalType();
        break;
      default:
        console.log('default');
    }
  }

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
      randomSignatureValue,
      randomSignatureKey,
    };
  }

  function getNote() {
    const notesArr = ['c', 'd', 'e', 'f', 'g', 'a', 'b', 'ch'];

    // Get a random note
    const randomNote = notesArr[Math.floor(Math.random() * notesArr.length)];
    const randomNoteIndex = notesArr.indexOf(randomNote);

    // const result = randomNote + randomSignatureKey1;
    // console.log(randomSignatureValue);
    console.log('randomNoteIndex', randomNoteIndex);

    return {
      // result,
      // randomSignatureValue,
      randomNote,
      randomNoteIndex,
    };
  }

  useEffect(() => {
    let note1 = getNote().randomNote;
    let signature1 = getSignature();
    if (signature1.randomSignatureKey === 'sharp') {
      signature1.randomSignatureValue *= -1;
    }

    let note2 = getNote().randomNote;
    let signature2 = getSignature();
    if (signature2.randomSignatureKey === 'flat') {
      signature2.randomSignatureValue *= -1;
    }

    // if (note1Index > note2Index) {
    //   const tempIndex = note1Index;
    //   note1Index = note2Index;
    //   note2Index = tempIndex;
    // }

    setNote1(note1);
    setNote2(note2);

    console.log(`Note 1: ${note1}`);
    console.log(`Note 2: ${note2}`);
  }, []);

  const entityCode1 = '&#x1D15D;';
  const entityCode2 = '&#x266F';
  const combinedCode = entityCode1 + ' ' + entityCode2;

  return (
    <div className="container">
      <div className="stave">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        {/* <span className="note1" style={{}} dangerouslySetInnerHTML={{ __html: combinedCode }}></span> */}
        <span className="note1" style={{}}>
          {note1}
        </span>
        <span className="note2" style={{}}>
          {note2}
        </span>
      </div>
    </div>
  );
};

export default Stave;
