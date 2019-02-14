import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

class CreditCard {
  private firstname: string;
  private lastname: string;
  private expirationDate: Date;
  protected monthlyCost: number;

  constructor(firstname: string, lastname: string, expirationDate: Date, monthlyCost: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.expirationDate = expirationDate;
    this.monthlyCost = monthlyCost;
  }

  getOwnerName() {
    return this.firstname + " " + this.lastname;
  }

  getExpirationDate() {
    return this.expirationDate;
  }

  getMonthlyDiscount(): number {
    return this.monthlyCost * 0.02;
  }
}

class CreditCardRepository {
  private persistence: Persistence;

  constructor() {
    this.persistence = Persistence.connect("admin:password@fakedb");
  }

  save(creditCard: CreditCard) {
    this.persistence.saveCreditCard(creditCard);
  }
}

class Persistence {
  static connect(connectionString: string): Persistence {
    throw new Error("Method not implemented.");
  }

  saveCreditCard(creditCard: CreditCard) {
    throw new Error("Method not implemented.");
  }
}
