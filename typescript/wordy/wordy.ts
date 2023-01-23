const doOperation = (numA: number, operation: string, numB: number): number => {
  switch (operation) {
    case "plus":
      return numA + numB;
    case "minus":
      return numA - numB;
    case "multiplied by":
      return numA * numB;
    case "divided by":
      return numA / numB;
    default:
      throw new Error("Unknown operation");
  }
};

export const answer = (query: string): number => {
  // handle side by side operation or numbers errors
  const twoNumbersBySideRegex = new RegExp(/\b\d+\s\d+\b/g);
  const twoOperationsBySideRegex = new RegExp(
    /\b(plus|minus|multiplied\sby|divided\sby)\b\s\b(plus|minus|multiplied\sby|divided\sby)\b/g
  );

  if (
    query.match(twoNumbersBySideRegex) ||
    query.match(twoOperationsBySideRegex)
  ) {
    throw new Error("Syntax error");
  }

  // get numbers and operations
  const numbersRegex = new RegExp(/-?\d+/g);
  const operationsRegex = new RegExp(
    /\b(plus|minus|multiplied by|divided by)\b/g
  );
  const endingWithNumberRegex = new RegExp(/\d+\?$/g);

  const numbers = query.match(numbersRegex);
  const operations = query.match(operationsRegex);

  // handle possibilities
  if (!numbers) {
    if (query.includes("What is") && !operations) {
      throw new Error("Syntax error");
    } else {
      throw new Error("Unknown operation");
    }
  }

  if (!query.match(endingWithNumberRegex)) {
    if (operations) {
      throw new Error("Syntax error");
    } else {
      throw new Error("Unknown operation");
    }
  }

  let result: number = parseInt(numbers[0]);

  if (numbers.length > 1 && operations) {
    // always one operation less than numbers, otherwise it's a syntax error
    if (numbers.length !== operations?.length + 1) {
      throw new Error("Syntax error");
    }

    for (let i = 0; i < numbers.length - 1; i++) {
      result = doOperation(result, operations[i], parseInt(numbers[i + 1]));
    }
  }

  if (numbers.length === 1 && !operations) {
    return result;
  }

  return result;
};
