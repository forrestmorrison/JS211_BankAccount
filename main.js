// Bank Account



// create two classes: BankAccount & Transactions

// BankAccount has 3 fields: accountNumber, owner, transactions
// the constructor function in BankAccount takes 2 inputs: accountNumber, owner 

class BankAccount {
    constructor (accountNumber, owner) {
      this.accountNumber = accountNumber;
      this.owner = owner;
      this.transactions = [];
    }

    // BankAccount has 3 methods:
    
    // balance() - takes no input, returns current balance on account
    // balance is computed by summing up amounts in transactions array
    balance() {
        let sum = 0;
        for (let i = 0; i < this.transactions.length; i++) {
            let element = this.transactions[i];
            sum = sum + element.amount;
        }
        return sum;
    };

    // deposit(amt) - takes single input: the deposit amount, creates new transaction & adds it to transactions array
    deposit(amt) {
        let newDeposit = new Transaction (amt, this.owner);
        this.transactions.push(newDeposit);
    };

    // charge(payee, amount) - takes 2 inputs: payee, amount creates new transaction with payee & amount, adds it to transaction array
    charge(payee, amt) {
        let newCharge = new Transaction (amt, payee);
        this.transactions.push(newCharge);
    };
}

// Transaction has 3 fields: date, amount, payee
// the constructor function in Transaction takes 2 inputs: amount, payee

class Transaction {
    constructor (amount, payee) {
        this.date = new Date();
        this.amount = amount;
        this.payee = payee;
    }
}

let toddCarter = new BankAccount(001, "Todd Carter");

toddCarter.deposit(55);
toddCarter.deposit(35);
toddCarter.charge("Chipotle", -20);

console.log(toddCarter.balance());
console.log(toddCarter.transactions);

class SavingsAccount extends BankAccount {
    constructor(accountNumber, owner, interestRate){
      super(accountNumber, owner);
      this.interestRate = interestRate;
    }

    // uses balance() to get current balance & add new transaction representiong deposit of appropriate amount
    accrueInterest() {
        let currentBalance = this.balance();
        let newDeposit = currentBalance * this.interestRate + this.balance();
        this.deposit(newDeposit);
        return this.balance();
    }
  }

let toddCarterSavings = new SavingsAccount(011, "Todd Carter", 0.05);

console.log(toddCarterSavings.deposit(750));

toddCarterSavings.accrueInterest();

console.log(toddCarterSavings.balance());