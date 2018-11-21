var express=require('express')
var mongoose=require('mongoose')
var User=require('./Models/user')
var Post=require('./Models/post')
var cors = require('cors')
var app=express();
app.use(cors())
// app.use(express.urlencoded());
app.use(express.json());


db=mongoose.connect('mongodb://localhost:27017/angular',{ useNewUrlParser: true });


app.post('/login',function(req,res){
	// console.log("nodeJS "+req.body)
	user=User.Login(req.body);
	res.send(user);
});
app.post('/signup',function(req,res){
	user=User.Signup(req.body);
	res.send(user);
});
app.post('/post',function(req,res){
	Post.upload(req.body, function(err, post){
		res.send(post);
	})
});
app.get('/post',function(req,res){
	Post.getPost(function(err,post){
		res.send(post)
	});
});
app.post('/post/delete/:id',function(req,res){
	let id=req.params.id;
	Post.deletePost(id,function(err,post){
		res.send(post)
	});
})
app.post('/post/update/:id',function(req,res){
	let id=req.params.id;
	Post.updatePost(id,req.body,function(err,post){
		res.send(post)
	});
})
app.post('/comment',function(req,res){
	post=Post.uploadComment(req.body,function(err,comment){
		res.send(comment)
	})
});
app.get('/get/comments/:id',function(req,res){
	let id=req.params.id;
	post=Post.getComments(id,function(err,comments){
		console.log("Index.JS")
		console.log(comments)
		res.send(comments)
	})
});
app.listen(3000,function(){
	console.log("server is Running")
})
