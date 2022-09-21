export function toRna(dna: string): string {
  const dnaArray = dna.split("");
  const rnaArray: string[] = [];

  for (let i = 0; i < dnaArray.length; i++) {
    switch (dnaArray[i]) {
      case "G":
        rnaArray.push("C");
        break;
      case "C":
        rnaArray.push("G");
        break;
      case "T":
        rnaArray.push("A");
        break;
      case "A":
        rnaArray.push("U");
        break;
      default:
        throw new Error("Invalid input DNA.");
    }
  }

  return rnaArray.join("");
}
