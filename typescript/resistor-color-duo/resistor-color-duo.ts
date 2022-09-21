export function decodedValue(colors: string[]): number {
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

  const selectedColors = colors.slice(0, 2);
  const resValue = selectedColors.reduce(
    (acc, current) => acc + codes[current],
    ""
  );
  return parseInt(resValue);
}
