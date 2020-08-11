import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeefilter'
})
export class EmployeefilterPipe implements PipeTransform {

  transform(value: any, searchterm:any): any {
    // if(value.length === 0){
    //   return value;
    // }
    return value.filter(function(search){
      return search.empname.toLowerCase().indexOf(searchterm.toLowerCase()) > -1
    })
  }

}
// ...args: any[]
