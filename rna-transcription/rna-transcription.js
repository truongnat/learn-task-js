//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (input = '') => {
  let convertArr = input.split("");
  let output = [];
  convertArr.map((el) => {
    Object.keys(obj).map((k) => {
      if (k === el) {
        output.push(obj[el]);
      }
    });
  });
  return output.join('')
};

const obj = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
};