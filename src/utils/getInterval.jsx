import { notes } from '../config';

function getTotalNotes(index1, index2) {
  let totalNotes = [];

  for (let item of notes.slice(index1, index2 + 1)) {
    totalNotes.push(item);
  }

  return totalNotes;
}

function getInterval(note1, note2) {
  const index1 = notes.indexOf(note1);
  const index2 = notes.indexOf(note2);

  // if (index1 === -1 || index2 === -1) {
  //   throw new Error('Invalid note name');
  // }
  if (index2 > index1) {
    const notesRange = getTotalNotes(index1, index2);
    const interval = index2 - index1 + 1;
    return {
      notesRange,
      interval,
    };
  } else if (index1 === index2) {
    const interval = (Math.random() >= 0.5 ? 0 : 7) + 1;
    const notesRange = [''];
    return {
      notesRange,
      interval,
    };
  } else {
    // notes = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
    // b -> c has bug returns ['c'] , 2

    // possibly notesRange is wrong here
    // let notesRange = getTotalNotes(index1, notes.length - 1);
    // notesRange = getTotalNotes(0, index2);

    const noteRange1 = getTotalNotes(index1, notes.length - 1);
    const noteRange2 = getTotalNotes(0, index2);
    const notesRange = [...noteRange1, ...noteRange2];

    const interval = notes.length - index1 + index2 + 1;
    return {
      notesRange,
      interval,
    };
  }
}

export default getInterval;

// console.log(getInterval('c', 'd')); // Output: 1
// console.log(getInterval('d', 'f')); // Output: 2
// console.log(getInterval('g', 'd')); // Output: 4
// console.log(getInterval('c', 'c'));
// console.log(getInterval('e', 'e'));
// console.log(getInterval('b', 'f')); // Output: 4
// console.log(getInterval('a', 'c')); // Output: 4
// console.log(getInterval('f', 'd')); // Output: 2
// console.log(getInterval('b', 'c')); // Output: 1
// console.log(getInterval('e', 'd')); // Output: 6
// console.log(getInterval('g', 'c')); // Output: 3
