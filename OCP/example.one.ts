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
  private type: string;

  getOwnerName() {
    return this.firstname + " " + this.lastname;
  }

  getExpirationDate() {
    return this.expirationDate;
  }

  getMonthlyDiscount(): number {
    if (this.type == 'Silver') {
      return this.monthlyCost * 0.05;
    }
    if (this.type == 'Gold') {
      return this.monthlyCost * 0.07;
    }
    if (this.type == 'Platinum') {
      return this.monthlyCost * 0.10;
    }
    return this.monthlyCost * 0.02;
  }
}
