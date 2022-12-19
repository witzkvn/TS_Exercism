const CIPHER = {
  a: "z",
  b: "y",
  c: "x",
  d: "w",
  e: "v",
  f: "u",
  g: "t",
  h: "s",
  i: "r",
  j: "q",
  k: "p",
  l: "o",
  m: "n",
  n: "m",
  o: "l",
  p: "k",
  q: "j",
  r: "i",
  s: "h",
  t: "g",
  u: "f",
  v: "e",
  w: "d",
  x: "c",
  y: "b",
  z: "a",
};

const getCipherLetter = (letter: string): string => {
  const key = letter as keyof typeof CIPHER;
  const replacedCharacter = CIPHER[key] ?? letter;
  return replacedCharacter;
};

export function encode(plainText: string): string {
  // keep only letters and numbers as an array
  const lettersArray = plainText
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, "")
    .split("");

  const encodedString = [];

  for (let i = 0; i < lettersArray.length; i++) {
    // insert space to form groups of 5 characters
    if (i !== 0 && i % 5 === 0) {
      encodedString.push(" ");
    }

    const replacedCharacter = getCipherLetter(lettersArray[i]);
    encodedString.push(replacedCharacter);
  }

  return encodedString.join("");
}

export function decode(cipherText: string): string {
  const cipherArray = cipherText.replace(/ /g, "").split("");
  const decodedString = [];

  for (let i = 0; i < cipherArray.length; i++) {
    const replacedCharacter = getCipherLetter(cipherArray[i]);
    decodedString.push(replacedCharacter);
  }

  return decodedString.join("");
}
