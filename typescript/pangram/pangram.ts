export function isPangram(phrase: string): boolean {
  const phraseLowerCase = phrase.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (!phraseLowerCase.includes(char)) {
      return false;
    }
  }
  return true;
}
