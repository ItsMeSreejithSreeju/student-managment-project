import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
url='http://localhost:3000/posts';
  constructor(private http:HttpClient) { }
  getAllStudent(){
    return this.http.get( this.url );
  }
  saveStudentData(data:any){
    console.log(data);
    return this.http.post(this.url,data);
  }
  deleteStudent(id:any){
    return this.http.delete(`${this.url}/${id}`); 
  }
  getStudentById(id:number){
    return this.http.get(`${this.url}/${id}`);
  }
  updateStudentData(id:number,data:any){
    return this.http.get(`${this.url}/${id}`,data);
  }
}
