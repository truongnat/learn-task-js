//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(str) {
    this.mx = str
  }

  get rows() {
    let arrRows = []
    this.mx.split('\n').map(el => {
      let r = el.split(' ').map(i => i.trim()).filter(v => v !== '').map(d => Number(d));
      arrRows.push(r)
    });
    return arrRows;
  }

  get columns() {
    let arrCol = [];
    const lengthOneRows = this.rows[0].length;
    for (let v = 0; v < lengthOneRows; v++) {
      let t = [];
      this.rows.forEach(x => {
        t.push(x[v])
      })
      arrCol.push(t)
    }
    return arrCol;
  }
}
