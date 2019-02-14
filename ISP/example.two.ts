interface Printer {
	printDocument(document: Document);
}

interface Staple {
	stapleDocument(document: Document, tray: Number);
}

interface Copier {
	copyDocument();
}

interface All extends Printer, Staple {
	Something();
}

class SimplePrinter implements Printer {
	public printDocument(document: Document) {
		//...
	}
}

class ComplexPrinter implements Printer, Staple {
	public printDocument(document: any) {
		// ...
	}
	public stapleDocument(document: Document, tray: Number) {
		//...
	}
}

class SuperPrinter implements Printer, Staple, Copier {
	public printDocument(document: Document) {
		//...
	}

	public stapleDocument(document: Document, tray: number) {
		//...
	}

	public copyDocument() {
		//...
	}
}