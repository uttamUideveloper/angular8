import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  confirmEmailUrl= 'http://localhost:4200/confirm-emial'; // 'http://localhost/confirm-email
  changepasswordUrl ='http://localhost:4200/changepassword' // change passwordurl example
  constructor(private http: HttpClient) { }

  login(model:any){
  return this.http.post(environment.api_url+'/employee', model).pipe(
  map((Response:any) => {
   const user = Response;
   if(user.result.succeeded){
     localStorage.setItem('token', user.token)
   }
  })
)
  }

  register(model:any){
    let headers = new HttpHeaders({
      'confirmEmailUrl' : this.confirmEmailUrl
    });
    let options = {headers: headers}
    return this.http.post(environment.api_url+'/employee', model,options)
  }



  resetPassword(model:any){
    let headers = new HttpHeaders({
      'changepasswordUrl' : this.changepasswordUrl
    });
    let options = {headers: headers}
    return this.http.post(environment.api_url+'/resetpassword', model,options)
  }



  confirmEmail(model:any){
return this.http.post(environment.api_url+'/employee', model)// employee login url insted  confirmemail api will come
  }

  changePassword(model:any){
    return this.http.post(environment.api_url+'/changepassword', model)// employee login url insted  confirmemail api will come
      }
}
