//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (count = []) => {
  let output = [];
  if (count === 0) return output;
  for (let i = 0; i < count; i++) {
    output[i] = [];
    output[i][0] = 1;
    for (let j = 1; j < i; j++) {
      output[i][j] = output[i - 1][j - 1] + output[i - 1][j];
    }
    output[i][i] = 1;
  }
  return output;
};
