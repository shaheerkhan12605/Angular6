import { Component,OnInit,Input } from '@angular/core';
import { PostService } from '../../post.service';
import { CommentComponent} from './comment/comment.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:[PostService]
})
export class PostsComponent implements OnInit {
	loggedin='';
	coment=false;
	setcoment=true;
	allpost=[];
	update=false;
	
	ngOnInit() {
	}
	constructor(private service:PostService){
		// console.log("this")
		this.loggedin=localStorage.getItem('id');
		this.getPosts();
	}

	getPosts=function(){
		service.getPosts().subscribe(data=>{
			this.allpost=data;
		})
	}
	upload=function(d){
	  	if(d){
		  	console.log(d)
		  	service.createPost(d).subscribe(data=>{
		      this.allpost.push(data);
		      // console.log(data);
		    });
	  	}
	}
	
	comment=function(post,d){
		// post.push({comment:d});
		// let index = this.allpost.indexOf(post._id);
		post["comment"]=d;
		service.createComment(post).subscribe(data=>{
		})
	}
	deletePost=function(post){
		service.deletePost(post._id).subscribe(data=>{
			// for(var i=0;i<this.allpost.length;i++){
			// 	if(this.allpost[i]._id==post._id){
			// 		delete(this.allpost[i])
			// 	}
			// }
		});
	}
	editPost=function(){
		this.update=true;
	}
	updatePost=function(post){
		this.update=false;
		post.time=Date.now();
		service.updatePost(post).subscribe(data=>{
			console.log(data);
		});
		console.log(post)
	}
	setComments=function(id,){
		this.coment=true;
		this.setcoment=false;
		service.setComments(id,function(data){
			service.pushComments(data);
		});
	
	}
}
