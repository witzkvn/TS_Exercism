export class Robot {
  private static _names: string[] = [];
  private _name = "";

  constructor() {
    const newName = this.generateValidName();
    this._name = newName;
    Robot._names.push(newName);
  }

  private generateValidName(): string {
    let newName = this.generateOneUniqueName();
    while (Robot._names.some((name) => name === newName)) {
      newName = this.generateOneUniqueName();
    }
    return newName;
  }

  private generateOneUniqueName(): string {
    return `${this.getRandomLetter()}${this.getRandomLetter()}${this.getRandomNumberBetween(
      0,
      9
    )}${this.getRandomNumberBetween(0, 9)}${this.getRandomNumberBetween(0, 9)}`;
  }

  private getRandomNumberBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private getRandomLetter(): string {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet[this.getRandomNumberBetween(0, alphabet.length - 1)];
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    Robot._names.filter((name) => name !== this._name);
    const newName = this.generateValidName();
    this._name = newName;
    Robot._names.push(newName);
  }

  public static releaseNames(): void {
    Robot._names = [];
  }
}
