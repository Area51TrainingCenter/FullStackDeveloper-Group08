import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { DriverProvider } from 'protractor/built/driverProviders';

@Directive({
	selector: '[appArchivo]'
})
export class ArchivoDirective {

	@Output() onOver = new EventEmitter()
	@Output() onLeave = new EventEmitter()
	@Output() onSeleccion = new EventEmitter()

	constructor() { }

	@HostListener("dragover", ["$event"]) dragover($event) {
		$event.preventDefault()
		this.onOver.emit()
	}

	@HostListener("dragleave", ["$event"]) dragleave($event) {
		$event.preventDefault()
		this.onLeave.emit()
	}

	@HostListener("drop", ["$event"]) drop($event) {
		$event.preventDefault()
		const data = $event.dataTransfer
		this.onSeleccion.emit(data.files)
		this.onLeave.emit()
	}

}
