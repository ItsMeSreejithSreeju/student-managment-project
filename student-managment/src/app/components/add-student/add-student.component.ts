import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {StudentsService} from '../../students.service'; 
@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent implements OnInit {
removeMessage() {
throw new Error('Method not implemented.');
}
  constructor(private student:StudentsService) { }
  addStudent=new FormGroup({
  name:new FormControl(' '),
  email:new FormControl( ' ')
});
  message: boolean=false
 ngOnInit(): void {
   
 }
 SaveData(){

  // console.log(this.addStudent.value);
  this.student.saveStudentData(this.addStudent.value).subscribe((result)=>{
    // console.log(result );
    this.message=true;
    this.addStudent.reset( {} );
  });
}

  
}

