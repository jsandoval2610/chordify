export const chordShapes = {
  "C": [
    { chord: [[1, 0], [2, 1], [3, 0], [4, 2], [5, 3], [6, 'x']], position: 1 }, // Open C
    { chord: [[1, 3], [2, 5], [3, 5], [4, 5], [5, 3], [6, 'x']], position: 3 },  // C shape on the 3rd fret
    { chord: [[1, 1], [2, 1], [3, 2], [4, 3], [5, 3], [6, 1]], position: 8 }    // C shape on the 8th fret, adjusted from 8
  ],
  "G": [
    { chord: [[1, 3], [2, 3], [3, 0], [4, 0], [5, 2], [6, 3]], position: 1 },  // Open G
    { chord: [[1, 1], [2, 2], [3, 1], [4, 3], [5, 4], [6, 1]], position: 7 },  // G shape on the 7th fret, adjusted from 7
    { chord: [[1, 1], [2, 3], [3, 3], [4, 3], [5, 1], [6, 1]], position: 10 }  // G shape on the 10th fret, adjusted from 10
  ],
  "D": [
    { chord: [[1, 2], [2, 3], [3, 2], [4, 0], [5, 'x'], [6, 'x']], position: 1 }, // Open D
    { chord: [[1, 1], [2, 3], [3, 3], [4, 3], [5, 1], [6, 'x']], position: 5 },   // D shape on the 5th fret, adjusted from 5
    { chord: [[1, 1], [2, 1], [3, 2], [4, 3], [5, 3], [6, 1]], position: 10 }     // D shape on the 10th fret, adjusted from 10
  ],
  "A": [
    { chord: [[1, 0], [2, 2], [3, 2], [4, 2], [5, 0], [6, 'x']], position: 1 }, // Open A
    { chord: [[1, 1], [2, 1], [3, 2], [4, 3], [5, 3], [6, 1]], position: 5 },   // A shape on the 5th fret, adjusted from 5
    { chord: [[1, 1], [2, 2], [3, 1], [4, 3], [5, 4], [6, 1]], position: 9 }    // A shape on the 9th fret, adjusted from 9
  ],
  "E": [
    { chord: [[1, 0], [2, 0], [3, 1], [4, 2], [5, 2], [6, 0]], position: 1 }, // Open E
    { chord: [[1, 1], [2, 3], [3, 3], [4, 3], [5, 1], [6, 1]], position: 7 },  // E shape on the 7th fret, adjusted from 7
    { chord: [[1, 1], [2, 1], [3, 2], [4, 3], [5, 3], [6, 1]], position: 12 }  // E shape on the 12th fret, adjusted from 12
  ],
  "F": [
    { chord: [[1, 1], [2, 1], [3, 2], [4, 3], [5, 3], [6, 1]], position: 1 }, // Barre F
    { chord: [[1, 1], [2, 3], [3, 3], [4, 3], [5, 1], [6, 1]], position: 8 },  // F shape on the 8th fret, adjusted from 8
    { chord: [[1, 1], [2, 1], [3, 2], [4, 3], [5, 3], [6, 1]], position: 13 }  // F shape on the 13th fret, adjusted from 13
  ],
  "Bm": [
    { chord: [[1, 2], [2, 3], [3, 4], [4, 4], [5, 2], [6, 'x']], position: 1 }, // Bm shape
    { chord: [[1, 1], [2, 1], [3, 1], [4, 3], [5, 3], [6, 1]], position: 7 },   // Bm shape on the 7th fret, adjusted from 7
    { chord: [[1, 1], [2, 1], [3, 1], [4, 3], [5, 3], [6, 1]], position: 12 }   // Bm shape on the 12th fret, adjusted from 12
  ],
  "Dm": [
    { chord: [[1, 1], [2, 3], [3, 2], [4, 0], [5, 'x'], [6, 'x']], position: 1 }, // Dm shape
    { chord: [[1, 1], [2, 2], [3, 3], [4, 3], [5, 1], [6, 'x']], position: 5 },   // Dm shape on the 5th fret, adjusted from 5
    { chord: [[1, 1], [2, 1], [3, 1], [4, 3], [5, 3], [6, 1]], position: 10 }     // Dm shape on the 10th fret, adjusted from 10
  ],
  "Am": [
    { chord: [[1, 0], [2, 1], [3, 2], [4, 2], [5, 0], [6, 'x']], position: 1 }, // Am shape
    { chord: [[1, 1], [2, 1], [3, 1], [4, 3], [5, 3], [6, 1]], position: 5 },   // Am shape on the 5th fret, adjusted from 5
    { chord: [[1, 1], [2, 1], [3, 1], [4, 3], [5, 3], [6, 1]], position: 10 }   // Am shape on the 10th fret, adjusted from 10
  ],
  "Em": [
    { chord: [[1, 0], [2, 0], [3, 0], [4, 2], [5, 2], [6, 0]], position: 1 }, // Em shape
    { chord: [[1, 1], [2, 2], [3, 3], [4, 3], [5, 1], [6, 1]], position: 7 },  // Em shape on the 7th fret, adjusted from 7
    { chord: [[1, 1], [2, 1], [3, 1], [4, 3], [5, 3], [6, 1]], position: 12 }  // Em shape on the 12th fret, adjusted from 12
  ],
  "Gm": [
    { chord: [[1, 1], [2, 1], [3, 1], [4, 3], [5, 3], [6, 1]], position: 3 },  // Gm shape on the 3rd fret, adjusted from 3
    { chord: [[1, 1], [2, 2], [3, 3], [4, 3], [5, 1], [6, 1]], position: 10 }, // Gm shape on the 10th fret, adjusted from 10
    { chord: [[1, 1], [2, 1], [3, 1], [4, 3], [5, 3], [6, 1]], position: 15 }  // Gm shape on the 15th fret, adjusted from 15
  ],
  "C#m": [
    { chord: [[1, 1], [2, 2], [3, 3], [4, 3], [5, 1], [6, 'x']], position: 4 }, // C#m shape on the 4th fret, adjusted from 4
    { chord: [[1, 1], [2, 1], [3, 1], [4, 3], [5, 3], [6, 1]], position: 9 },   // C#m shape on the 9th fret, adjusted from 9
    { chord: [[1, 1], [2, 1], [3, 1], [4, 3], [5, 3], [6, 1]], position: 14 }   // C#m shape on the 14th fret, adjusted from 14
  ],
  "F#m": [
    { chord: [[1, 1], [2, 1], [3, 1], [4, 3], [5, 3], [6, 1]], position: 2 },  // F#m shape on the 2nd fret, adjusted from 2
    { chord: [[1, 1], [2, 2], [3, 3], [4, 3], [5, 1], [6, 1]], position: 9 },  // F#m shape on the 9th fret, adjusted from 9
    { chord: [[1, 1], [2, 1], [3, 1], [4, 3], [5, 3], [6, 1]], position: 14 }  // F#m shape on the 14th fret, adjusted from 14
  ],
  "E7": [
    { chord: [[1, 0], [2, 0], [3, 1], [4, 0], [5, 2], [6, 0]], position: 1 },  // Open E7
    { chord: [[1, 1], [2, 2], [3, 1], [4, 3], [5, 1], [6, 1]], position: 7 },  // E7 shape on the 7th fret, adjusted from 7
    { chord: [[1, 1], [2, 1], [3, 2], [4, 1], [5, 3], [6, 1]], position: 12 }  // E7 shape on the 12th fret, adjusted from 12
  ],
  "A7": [
    { chord: [[1, 0], [2, 2], [3, 0], [4, 2], [5, 0], [6, 'x']], position: 1 }, // Open A7
    { chord: [[1, 1], [2, 1], [3, 2], [4, 1], [5, 3], [6, 1]], position: 5 },   // A7 shape on the 5th fret, adjusted from 5
    { chord: [[1, 1], [2, 1], [3, 2], [4, 1], [5, 3], [6, 1]], position: 10 }   // A7 shape on the 10th fret, adjusted from 10
  ],
  "D7": [
    { chord: [[1, 2], [2, 1], [3, 2], [4, 0], [5, 'x'], [6, 'x']], position: 1 }, // Open D7
    { chord: [[1, 1], [2, 3], [3, 1], [4, 3], [5, 1], [6, 'x']], position: 5 },   // D7 shape on the 5th fret, adjusted from 5
    { chord: [[1, 1], [2, 1], [3, 2], [4, 1], [5, 3], [6, 1]], position: 10 }     // D7 shape on the 10th fret, adjusted from 10
  ]
};
