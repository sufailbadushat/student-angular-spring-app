import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
    constructor(private api:ApiService){
      api.fetchData().subscribe(
        (response:any)=>{
          this.students=response
        }
      )
    }

    students:any=[]
}
