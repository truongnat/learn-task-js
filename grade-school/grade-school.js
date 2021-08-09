//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.db = {};
  }
  roster() {
    return JSON.parse(JSON.stringify(this.db));
  }

  add(name, grade) {
    const hasGrade = this.db[grade];
    this.checkStudentIdentity(name, grade);
    if (hasGrade && !hasGrade.includes(name)) {
      this.db[grade] = [...hasGrade, name].sort();
    } else {
      this.db[grade] = [name];
    }
  }

  grade(val) {
    return JSON.parse(JSON.stringify(this.db[val] ? this.db[val].sort() : []));
  }

  checkStudentIdentity(name, grade) {
    Object.keys(this.db).forEach((g) => {
      const source = this.db[g];
      if (
        source.length > 0 &&
        source.includes(name) &&
        Number(g) > Number(grade)
      ) {
        this.db[g] = this.db[g].filter((t) => t !== name);
      }
    });
  }
}
