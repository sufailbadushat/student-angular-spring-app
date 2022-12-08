import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addStudents=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/add",dataToSend);
  }

  fetchData=()=>{
    return this.http.get("http://localhost:8080/view");
  }

  searchStudents=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/search",dataToSend);
  }
}
