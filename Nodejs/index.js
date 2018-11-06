var express=require('express')
var mongoose=require('mongoose')
var User=require('./Models/user')
var cors = require('cors')
var app=express();
app.use(cors())
app.use(express.urlencoded());
app.use(express.json());

db=mongoose.connect('mongodb://localhost:27017/angular', { useNewUrlParser: true });

app.post('/login',function(req,res){
	// console.log("nodeJS "+req.body)
	user=User.Login(req.body);
	res.send(user);
});
app.post('/signup',function(req,res){
	user=User.Signup(req.body);
	res.send(user);
});
app.listen(3000,function(){
	console.log("server is Running")
})