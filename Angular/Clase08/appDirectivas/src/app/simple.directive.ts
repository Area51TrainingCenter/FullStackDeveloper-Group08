import { Directive, ElementRef } from "@angular/core";

@Directive({
	selector: "[simple]"
})
export class SimpleDirective {
	constructor(private elementRef: ElementRef) {
	}

	ngOnInit() {
		this.elementRef.nativeElement.style = "background-color: yellow"
	}
}