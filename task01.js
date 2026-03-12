class BankAccount {
  constructor(ownerName, balance) {
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0 && amount <= 5000) {
      this.balance += amount;
      return this.balance;
    } else {
      console.log("Ви вказали невірне значення для депозиту коштів");
    }
  }

  withdraw(amount) {
    if (amount > 0 && this.balance >= amount) {
      this.balance -= amount;
      return this.balance;
    } else {
      console.log("Ви вказали невірне значення для зняття коштів");
    }
  }

  getBalance() {
    return this.balance;
  }
}

const person = new BankAccount("Stepan", 475);

person.deposit(300);
person.withdraw(100);
person.deposit(200);
person.withdraw(50);

console.log(`Balance of ${person.ownerName}: ${person.getBalance()}`);
console.log(person);
