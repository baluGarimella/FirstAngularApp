import { Component, OnInit } from '@angular/core';

import { JavaResponse } from './java-response.model';
import { Observable, of, throwError } from 'rxjs';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BasecExample';
   
   javares: JavaResponse;
 
   constructor(private studentservice:StudentService){

  }
  ngOnInit(){

  }
  restCall(value){

    
    this.studentservice.getMicroServiceDetails(value)  
    .subscribe(  
      data => {  
       this.javares=data;
       console.log(this.javares.response);
      },  
      error => console.log(error));  
      
   
    
  }
}
