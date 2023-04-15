import { useEffect, useState } from 'react';
import getNoteData from './utils/getNoteData';

const Stave = () => {
  // 1. get notes distance initially (example -> 3 -> 3T)
  // 2. check if distance has e-f, or b-c by notes indeces
  // 3. for Perfect Intervals (1-4-5-8) additionally check if distances are f-g or b-f
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

  // const initialNoteData = getNoteData();

  const [noteData, setNoteData] = useState({});
  // const [noteData, setNoteData] = useState(initialNoteData);

  console.log(`Note 1: ${noteData.note1}`);
  console.log(`Note 2: ${noteData.note2}`);

  function handleSubmit() {
    const newNoteData = getNoteData();
    setNoteData(newNoteData);
  }

  const { note1, note2 } = noteData;
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
      <button onClick={handleSubmit}>Reset Notes</button>
    </div>
  );
};

export default Stave;
