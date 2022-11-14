export function find(haystack: number[], needle: number): number | never {
  let left: number = 0;
  let right: number = haystack.length - 1;

  while (left <= right) {
    const mid: number = Math.floor((left + right) / 2);

    if (haystack[mid] === needle) {
      // element found
      return mid;
    }

    if (needle < haystack[mid]) {
      // set new max to search only in left
      right = mid - 1;
    } else {
      // set new min to search only in right
      left = mid + 1;
    }
  }

  throw new Error("Value not in array");
}
