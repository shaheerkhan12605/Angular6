var express=require('express')
var mongoose=require('mongoose')
var User=require('./Models/user')
var cors = require('cors')
var app=express();
app.use(cors())
app.use(express.urlencoded());
app.use(express.json());

db=mongoose.connect('mongodb://shaheerkhan:weKlZoUtgEcmDB7NqXLHlGIItGJTDjevJkNY0vtJKWMhzTgeRBZFzdTVpgwxT9uPGRIbc1FkZgtM70dB2Hy1jw%3D%3D@shaheerkhan.documents.azure.com:10255/?ssl=true');

app.get('/',function(req,res){
	res.send("hi there working");
})
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
