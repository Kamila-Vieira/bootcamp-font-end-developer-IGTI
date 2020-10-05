import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cep'
})
export class CepPipe implements PipeTransform {

    transform(cep: string) {
        if (cep.length == 8) {
            return cep.substring(0, 5) + '-' + cep.substring(5);
        } else {
            return cep;
        }
    }

}