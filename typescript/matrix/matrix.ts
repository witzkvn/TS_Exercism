export class Matrix {
  private _columns: Array<number[]> = [];
  private _rows: Array<number[]> = [];

  constructor(matrix: string) {
    const rowsSplit = matrix.split("\n"); // ["1 2", "3 4"]

    rowsSplit.forEach(() => this._columns.push([])); // initialise as many columns as rows

    rowsSplit.forEach((strRow) => {
      const splitNumberRow = strRow
        .split(" ")
        .map((strNumber) => parseInt(strNumber)); // [1, 2]

      this._rows.push(splitNumberRow); // add row

      // dispatch row values inside columns
      for (let i = 0; i < splitNumberRow.length; i++) {
        this._columns[i].push(splitNumberRow[i]);
      }
    });
  }

  get rows(): Array<number[]> {
    return this._rows;
  }

  get columns(): Array<number[]> {
    return this._columns;
  }
}
