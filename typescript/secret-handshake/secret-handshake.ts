export function commands(number: number): string[] | [] {
  const num = number.toString(2);
  const actions: string[] = [];

  const lastInd = num.length - 1;

  if (num[lastInd] === "1") {
    actions.push("wink");
  }
  if (num[lastInd - 1] === "1") {
    actions.push("double blink");
  }
  if (num[lastInd - 2] === "1") {
    actions.push("close your eyes");
  }
  if (num[lastInd - 3] === "1") {
    actions.push("jump");
  }
  if (num[lastInd - 4] === "1") {
    actions.reverse();
  }
  return actions;
}
