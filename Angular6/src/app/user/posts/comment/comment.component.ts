import { Component, OnInit,Input } from '@angular/core';
import {PostService} from '../../../post.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  // template:'{{bankName}}'
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

	comments=[];
	@Input() postId: string;
	// base:Base;
	
	constructor(private postService:PostService) {
  		// console.log("get")
  		// postService.getComments();
  	}
	ngOnInit() {
        //your service cal
        console.log("on init")
        console.log("postId");
        this.uploadComment(this.postId);
  		
	}
	
	uploadComment=function(arg){
  	}
	viewComment=function(arg){
  		this.comments.push(postService.getComments(arg));
  		postService.arr=[];
	}
}