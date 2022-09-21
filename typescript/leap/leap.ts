export function isLeap(year: number): boolean {
  let response = true;
  if (year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)) {
    response = false;
  }

  return response;
}
