function getIntervalTypeMinorMajorRelated(notesRange, interval) {
  const hasHalfNoteFE = notesRange.includes('f') && notesRange.includes('e');
  const hasHalfNoteCB = notesRange.includes('c') && notesRange.includes('b');
  if (interval === 2 || interval === 3) {
    console.log('run in 3');
    if (hasHalfNoteFE || hasHalfNoteCB) {
      return interval + 'm';
    }
    return interval + 'M';
  }

  if (interval === 6 || interval === 7) {
    if (hasHalfNoteFE && hasHalfNoteCB) {
      return interval + 'm';
    } else {
      return interval + 'M';
    }
  }
}

function getIntervalTypePerfectRelated(interval, note1, note2) {
  if (interval === 4 && note1 === 'f' && note2 === 'g') {
    return '4a';
  }
  if (interval === 5 && note1 === 'b' && note2 === 'f') {
    return '5d';
  }
  return interval + 'k';
}

function getIntervalBySizeAndType(interval, note1, note2, notesRange) {
  console.log(interval, note1, note2, notesRange);
  switch (interval) {
    case 1:
    case 4:
    case 5:
    case 8:
      return getIntervalTypePerfectRelated(interval, note1, note2);
    case 2:
    case 3:
    case 6:
    case 7:
      return getIntervalTypeMinorMajorRelated(notesRange, interval);
    default:
      console.log('invalid interval');
      return 'invalid interval';
  }
}

export default getIntervalBySizeAndType;
