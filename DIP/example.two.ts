
interface ILightBulb {
	turnOn();

	turnOff();
}

class LightBulb implements ILightBulb {
	public turnOn() {
		//... 
	}

	public turnOff() {
		//...
	}
}

class LightSwitch {
	private isOn = false;

	constructor(private bulb: ILightBulb) {

	}

	onPress() {

		this.isOn = this.turn(!this.isOn);

		// if (this.isOn) {
		// 	this.bulb.turnOn();
		// 	this.isOn = false;
		// } else {
		// 	this.bulb.turnOff();
		// 	this.isOn = true;
		// }
	}
}