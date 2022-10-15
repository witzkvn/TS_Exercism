interface IRoster {
  [key: number]: string[];
}

export class GradeSchool {
  private _roster: IRoster = {};
  private static _students: string[] = [];

  private deletePreviousGradeForStudent(name: string) {
    for (let [grade, names] of Object.entries(this._roster)) {
      for (let i = 0; i < names.length; i++) {
        if (names[i] === name) {
          names.splice(i, 1);
        }
      }
    }
  }

  roster() {
    const prevent = JSON.parse(JSON.stringify(this._roster));
    return prevent;
  }

  add(name: string, grade: number) {
    if (GradeSchool._students.includes(name)) {
      this.deletePreviousGradeForStudent(name);
    }

    const existingGrades = Object.keys(this._roster);
    if (existingGrades.some((rosterGrade) => parseInt(rosterGrade) === grade)) {
      this._roster[grade].push(name);
    } else {
      this._roster[grade] = [name];
    }

    GradeSchool._students.push(name);
    this._roster[grade].sort();
  }

  grade(grade: number) {
    let value = this._roster[grade];
    return value === undefined ? [] : [...value];
  }
}
