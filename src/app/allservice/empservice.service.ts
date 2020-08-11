import { Injectable } from '@angular/core';
import { Employee } from '../emp/employee';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  employee:Employee[];
  // isStarted()
  constructor(private http:HttpClient) { }

  getAllemp():Observable<Employee[]>{
    return this.http.get<Employee[]>(environment.api_url+'/employee')
  }

  Addemp(emp:Employee): Observable<Employee>{
    return this.http.post<Employee>(environment.api_url+'/employee', emp)
  }
  deleteEmp(id:number):Observable<Employee>{
  return this.http.delete<Employee>(environment.api_url+'/employee'+  '/' + id)
  }
  

  updateEmp(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(environment.api_url+'/employee'+ '/' + employee.id, employee);
  }

}
