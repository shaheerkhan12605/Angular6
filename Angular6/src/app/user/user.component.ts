import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  url='profile';	
  ngOnInit() {
  }

  link=function (argument) {
  	this.url=argument;
  	console.log(this.url);
  }

}
