import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  
  uri='http://localhost:3000';
	login=function(user){
  	console.log("login")
  	return this.http.post(this.uri+'/login/',user).subscribe(data=>{
  		// this.setUser(data);
      console.log(data)
      if(data){
        localStorage.setItem("isLoggedIn","true");
        localStorage.setItem("id",data._id);
      }
      console.log(localStorage.getItem("id"))
  	});
	}
	signup=function(user){
		console.log("sign up");
		return this.http.post(this.uri+'/signup/',user);
	}  	

  constructor(private http:HttpClient){} 

}