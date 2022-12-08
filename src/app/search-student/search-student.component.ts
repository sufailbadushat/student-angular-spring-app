import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent {

  searchValue:any=[]
  constructor(private api:ApiService){}

  admNo=""
  
  readValue = () => {
    let data: any = { "admNo": this.admNo }

    console.log(data);

    this.api.searchStudents(data).subscribe(
      (response: any) => {
        console.log(response)
        if (response.length == 0) {
          alert("invalid patient id");
        }
        else {
          this.searchValue = response;
        }
      }
    )

  }

}
