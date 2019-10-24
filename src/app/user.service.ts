import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  success: any;
  private url = "http://localhost:8080/";
  constructor(private http:HttpClient) {
    
   }
   public  addUser(user:User){
     
    return this.http.post<User>(this.url+"users/add",user).subscribe(response => this.success =response);
   }
}
