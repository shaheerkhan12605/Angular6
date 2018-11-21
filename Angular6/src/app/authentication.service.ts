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
      if(data){
        localStorage.setItem("isLoggedIn","true");
        localStorage.setItem("id",data._id);
        // console.log(data)
      }
      console.log(localStorage.getItem("id"))
  	});
	}
	signup=function(user){
		console.log("sign up");
		return this.http.post(this.uri+'/signup/',user);
	}  	
  // createPost=function(data){
  //   console.log(data)
  //   var post={
  //     "user":localStorage.getItem('id'),
  //     "time":Date.now(),
  //     "post":data
  //   };

  //   return this.http.post(this.uri+'/post',post);
  // }

  constructor(private http:HttpClient){} 

}