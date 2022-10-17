export class Clock {
  private _hours = 0;
  private _minutes = 0;

  constructor(hour: number, minute: number = 0) {
    this._hours = hour;
    this._minutes = minute;
    this.processAll();
  }

  private processAll(): void {
    this.formatMinutes();
    this.formatHours();
  }

  private formatMinutes(): void {
    const hoursFromMinutes = Math.floor(this._minutes / 60);
    const minutesLeft = this._minutes % 60;

    this._hours += hoursFromMinutes;
    this._minutes = minutesLeft;

    if (this._minutes < 0) {
      this._minutes = 60 + this._minutes;
    }
  }

  private formatHours(): void {
    const isPositive = this._hours >= 0 ? true : false;
    const hoursAbs = Math.abs(this._hours);
    if (hoursAbs >= 24) {
      this._hours = this._hours % 24;
    }
    if (!isPositive && this._hours !== 0) {
      this._hours = 24 + this._hours;
    }
  }

  private formatTwoDigits(value: number): string {
    if (value < 10) {
      return `0${value}`;
    } else {
      return value.toString();
    }
  }

  public toString(): string {
    return `${this.formatTwoDigits(this._hours)}:${this.formatTwoDigits(
      this._minutes
    )}`;
  }

  public plus(minutes: number): Clock {
    this._minutes += minutes;
    this.processAll();
    return this;
  }

  public minus(minutes: number): Clock {
    this._minutes -= minutes;
    this.processAll();
    return this;
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString();
  }
}
