//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(props) {
    this._arr = props || [];
    this.values = [];
  }

  append(args) {
    this.values = [...this._arr, ...args._arr];
    return this;
  }

  concat(args) {
    const output = [...this._arr];
    for (let i = 0; i < args._arr.length; i++) {
      output.push(...args._arr[i]._arr);
    }
    this.values = output;
    return this;
  }

  filter(fn) {
    const output = [];
    this._arr.forEach((i) => {
      if (fn(i)) {
        output.push(i);
      }
    });
    this.values = output;
    return this;
  }

  map(fn) {
    const output = [];
    this._arr.forEach((i) => {
      output.push(fn(i));
    });

    this.values = output;
    return this;
  }

  length() {
    return this._arr.length;
  }
  foldl(fn, current = 0) {
    this._arr.forEach((i) => {
      current = fn(current, i);
    });
    return current;
  }

  foldr(fn, current = 0) {
    this._arr.reverse().forEach((i) => {
      current = fn(current, i);
    });
    return current;
  }

  reverse() {
    const output = [];
    for (let i = this._arr.length - 1; i >= 0; i--) {
      output.push(this._arr[i]);
    }
    this.values = output;
    return this;
  }
}
