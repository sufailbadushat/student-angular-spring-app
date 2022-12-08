import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  constructor(private api: ApiService) { }

  name = ""
  admNo = ""
  rollNo = ""
  collegeName = ""


  readValue = () => {
    let data: any = {
      "name": this.name,
      "admNo":this.admNo,
      "rollNo":this.rollNo,
      "collegeName":this.collegeName
    }
    console.log(data);

    this.api.addStudents(data).subscribe(
      (response:any)=>{
        if (response.status == "success") {
          alert("Student added successfully!");
          this.name = ""
          this.admNo = ""
          this.rollNo = ""
          this.collegeName = ""
        
        }
        else{
          alert("something went wrong!");
        }
      }
    )
  }
}
