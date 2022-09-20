import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterSTring: string, propName: string): any[] {
    const result:any =[];
    if(!value || filterSTring === ""|| propName ===""){
      return value;
    }

    value.forEach((a:any) =>{
      if(a[propName].trim().toLowerCase().includes(filterSTring.toLowerCase())){
        result.push(a);
      }
    })
    return result;
  }

}
