import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
	uri='http://localhost:3000';
	USER=null;
  	login=function(user){
	  	console.log("login")
	  	return this.http.post(this.uri+'/login/',user).subscribe(data=>{
	  		this.setUser(data);
	  	});
  	}
  	setUser=function(data){
  		this.USER=data;
  		console.log("user");
  		console.log(this.USER);

  	}
  	signup=function(user){
  		console.log("sign up");
  		return this.http.post(this.uri+'/signup/',user);
  	}  	

  constructor(private http:HttpClient){} 

}