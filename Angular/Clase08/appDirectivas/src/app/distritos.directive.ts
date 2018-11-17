import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appDistritos]'
})
export class DistritosDirective {

	@Input("appDistritos") lista: Array<string> = []

	constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

	ngOnInit() {
		console.log(this.lista)
		this.lista.forEach((item, indice) => {
			const option = this.renderer.createElement("option")
			option.value = indice
			const texto = this.renderer.createText(item)

			this.renderer.appendChild(option, texto)

			this.renderer.appendChild(this.elementRef.nativeElement, option)
		})

	}

}
