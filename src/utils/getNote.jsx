import { notes } from '../config';

function getNote() {
  // Get a random note
  const randomNote = notes[Math.floor(Math.random() * notes.length)];
  // const randomNoteIndex = notes.indexOf(randomNote);

  // return {
  //   randomNote,
  //   randomNoteIndex,
  // };
  console.log(randomNote);
  return randomNote;
}

export default getNote;
