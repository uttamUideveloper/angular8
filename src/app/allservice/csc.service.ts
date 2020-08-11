import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CscService {
  countryurl :string = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";

  constructor(private http:HttpClient) { }
  

  allCountries(): Observable<any>{
    return this.http.get(this.countryurl);
  }
}
