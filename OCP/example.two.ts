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

class Silver extends CreditCard {
  getMonthlyDiscount(): number {
    return this.monthlyCost * 0.05;
  }
}

class Gold extends CreditCard {
  getMonthlyDiscount(): number {
    return this.monthlyCost * 0.07;
  }
}
