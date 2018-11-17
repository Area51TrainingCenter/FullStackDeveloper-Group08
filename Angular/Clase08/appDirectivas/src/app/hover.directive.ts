import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
	selector: '[appHover]'
})
export class HoverDirective {
	@Input("appHover") colorOriginal: string = "lime"
	@Input() colorHover: string = "yellow"

	@HostBinding("style.backgroundColor") color: string

	constructor(private elementRef: ElementRef) { }

	ngOnInit() {
		this.saleMouse()
		//this.elementRef.nativeElement.style.backgroundColor = this.colorOriginal
	}

	@HostListener("mouseenter") entraMouse() {
		this.color = this.colorHover
		//this.elementRef.nativeElement.style.backgroundColor = this.colorHover
	}

	@HostListener("mouseleave") saleMouse() {
		this.color = this.colorOriginal
		//this.elementRef.nativeElement.style.backgroundColor = this.colorOriginal
	}

}
