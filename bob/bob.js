//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (str) => {
  if (isEmpty(str)) return "Fine. Be that way!";
  if (isAQuestion(str) && isAllCaps(str)) return "Calm down, I know what I'm doing!";
  if (isAllCaps(str)) return "Whoa, chill out!";
  if (isAQuestion(str)) return "Sure.";
  return "Whatever.";
};

const isEmpty = (str) => str.trim().length === 0;
const isAQuestion = (str) => str.trim().slice(-1) === "?";
const isAllCaps = (str) => str === str.toUpperCase() && str !== str.toLowerCase();