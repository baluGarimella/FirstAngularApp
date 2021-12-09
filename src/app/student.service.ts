import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from 'rxjs'; 
import { JavaResponse } from './java-response.model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  private secondMicroservice = 'http://localhost:8080/consumer/message';  
  private firstMicroservice = 'http://localhost:8080/employee/message';  

  getMicroServiceDetails(value:any): Observable<any> { 
   
    if(value=='first'){
      return this.http.get(`${this.firstMicroservice}`); 
    }else if(value='second'){
      return this.http.get(`${this.secondMicroservice}`); 
    }
     
  }  
}
