class LightBulb {
	turnOn() {
		//... 
	}

	turnOff() {
		//...
	}
}

class LightSwitch {
	private isOn = false;

	constructor(private bulb: LightBulb) {

	}

	onPress() {
		if (this.isOn) {
			this.bulb.turnOn();
			this.isOn = false;
		} else {
			this.bulb.turnOff();
			this.isOn = true;
		}
	}
}