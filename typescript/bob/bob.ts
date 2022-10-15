export function hey(message: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  message = message.trim();

  const isSilence = message === "";

  const isAtLeastOneLetter = message
    .toLowerCase()
    .split("")
    .some((letter) => alphabet.split("").includes(letter));

  const isAllUpper = message === message.toUpperCase();

  const isQuestion = message.charAt(message.length - 1) === "?";

  if (isSilence) {
    return "Fine. Be that way!";
  } else if (isAtLeastOneLetter && isAllUpper && isQuestion) {
    return "Calm down, I know what I'm doing!";
  } else if (isAtLeastOneLetter && isAllUpper) {
    return "Whoa, chill out!";
  } else if (isQuestion) {
    return "Sure.";
  } else {
    return "Whatever.";
  }
}
