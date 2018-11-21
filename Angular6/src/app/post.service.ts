import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostService {
	uri='http://localhost:3000';
	arr=[];

  	constructor(private http:HttpClient) { }

	createPost=function(data){
	    console.log(data)
	    var post={
	      "user":localStorage.getItem('id'),
	      "time":Date.now(),
	      "post":data
	    };

	    return this.http.post(this.uri+'/post',post);
	}
	
	createComment=function(data){
		return this.http.post(this.uri+'/comment',data);

	}
	getPosts=function(){
		return this.http.get(this.uri+'/post');
	}
	check=function(){
		return "hi";
	}
	deletePost=function(post){
		console.log(post)
		return this.http.post(this.uri+'/post/delete/'+post);
	}
	updatePost=function(post){
		console.log(post)
		return this.http.post(this.uri+'/post/update/'+post._id,post);
	}
	getComments=function(){
		console.log("get")
		console.log(this.arr)
		return this.arr;

	}
	setComments=function(arg,callback){
		console.log('set'+arg)
		// var comments=[];
		return this.http.get(this.uri+'/get/comments/'+arg).subscribe(data=>{
			callback(data);
		});;
	}
	pushComments=function(arg){
		this.arr=arg;
		console.log("push")
		console.log(this.arr)
	}
}

