import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
class Bird {
  fly() {
    console.log('I can fly!');
  }
}

class Kingfisher extends Bird {

  constructor() {
    super()
  }

}

class Ostrich extends Bird {
  constructor() {
    super()
  }
}

let kingfisherBird: Bird = new Kingfisher();

let ostrichBird: Bird = new Ostrich();

kingfisherBird.fly(); // kingfisher can fly.

ostrichBird.fly()// ostrich can fly ?!