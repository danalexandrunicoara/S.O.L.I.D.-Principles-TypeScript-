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

  private persistence: Persistence;

  constructor(firstname: string, lastname: string, expirationDate: Date, monthlyCost: number) {
    this.persistence = Persistence.connect("admin:password@fakedb");

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

  save() {
    this.persistence.saveCreditCard(this);
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
