export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export const colorCode = (color?: string): number | string[] => {
  if (!color) {
    return COLORS;
  } else {
    return COLORS.indexOf(color);
  }
};
