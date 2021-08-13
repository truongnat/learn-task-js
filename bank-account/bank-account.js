//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const STATUS = {
  open: "opened",
  close: 'closed'
}

export class BankAccount {
  constructor() {
    this.statusAccount = STATUS.close
  }

  open() {
    if (this.statusAccount === STATUS.open) throw new ValueError();
    else {
      this.statusAccount = STATUS.open;
      this.money = 0
    }
  }

  close() {
    if (this.statusAccount === STATUS.close) throw new ValueError();
    else this.statusAccount = STATUS.close
  }

  deposit(money) {
    if (this.statusAccount === STATUS.close || money < 0) throw new ValueError();
    else this.money += money;
  }

  withdraw(draw) {
    let calAfter = this.money - draw
    if (this.statusAccount === STATUS.close || calAfter < 0 || draw < 0) throw new ValueError();
    this.money = calAfter;
  }

  get balance() {
    if (this.statusAccount === STATUS.close) throw new ValueError();
    else return this.money
  }

}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
