export function decodedResistorValue(colors: string[]): string {
  const codes: { [key: string]: string } = {
    black: "0",
    brown: "1",
    red: "2",
    orange: "3",
    yellow: "4",
    green: "5",
    blue: "6",
    violet: "7",
    grey: "8",
    white: "9",
  };

  // get first two numbers
  const selectedColors = colors.slice(0, 2);
  const firstTwoValues = selectedColors.reduce(
    (acc, current) => acc + codes[current],
    ""
  );

  // get third color and set all 0
  let nbOfZeros = parseInt(codes[colors[2]]) || 0;
  let zerosString = "";
  for (let i = 1; i <= nbOfZeros; i++) {
    zerosString += "0";
  }

  // create whole number
  let resNumber = parseInt(firstTwoValues + zerosString);

  // check if more than 1000 to convert in kiloohms
  let unit = "ohms";
  if (resNumber > 1000) {
    unit = "kiloohms";
    resNumber = resNumber / 1000;
  }

  return `${resNumber} ${unit}`;
}
