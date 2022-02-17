import { Injectable } from '@angular/core';
import { from, observable } from 'rxjs';
import {HttpClient ,HttpHeaders,HttpClientModule} from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Pipe, PipeTransform} from '@angular/core'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl="https://vast-shore-74260.herokuapp.com/banks";
  public myCity= "MUMBAI"

  constructor(private http:HttpClient) { 
    
  }
  // private handleError(err: HttpErrorResponse){
  //   console.log(err.message);
  //   return Observable.(err.message);
  // }

  public getBankBranches():any {
    let myResponse =this.http.get(this.baseUrl + '?city'+this.myCity)
    console.log(myResponse);
    return myResponse
    
  }
}
