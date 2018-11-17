import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filtroPipe'
})
export class FiltroPipe implements PipeTransform {

	transform(value: Array<{}>, filtro: string, campo: string): Array<{}> {
		return value.filter(item => item[campo].toUpperCase().indexOf(filtro.toUpperCase()) >= 0 ? true : false)
	}

}
