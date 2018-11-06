var mongoose=require('mongoose');

var userSchema =new mongoose.Schema({ 
	name:String,
	email:String,
	username:String,
	password:String,
	phone:String 
});
users=mongoose.model("users",userSchema);

	var user='';
exports.Login=function(req){
	users.findOne({"email":req.email,"password":req.password} ,function(err,data){
		user=data;
	});
	return user;
}
exports.Signup=function(req){
	var user=new users(req);
	// user=req;
	console.log(user)
	user.save(function(err){
		if(!err){
			console.log('saved');
		}else{
			console.log(err)
		}
	})
}