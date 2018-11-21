var mongoose=require('mongoose')
var PostSchema=new mongoose.Schema({
	user:String,
	time:String,
	post:String,
	comments:[{comment:String ,time:String ,user:String}]
});

posts=mongoose.model("posts",PostSchema);

var all_posts='';
exports.upload=function(data, callback){
	post=new posts(data);
	// console.log(post)
	post.save(function(err,data){
		if (err) {
			return callback(err);
		}
		callback(err, post);
		// posts.find({},function(err,data){
		// // all_posts=data;
		//    callback(err, data);
		// });
	 });
	
	// return all_posts;
}
exports.uploadComment=function(data,callback){
	posts.findOneAndUpdate({_id:data._id},
		{
			$push:{
				comments:{
					"comment":data.comment ,
					"time":data.time ,
					"user":data.user
				}
			}
		},{new:true},function(err,data){
		if(err){
			return callback(err)
		}
		// console.log(succ);
		callback(err,data);
	});
}

exports.getPost=function(callback){
	posts.find({},function(err,data){
		if(err){
			return callback(err)
		}
		callback(err,data);
	})
}
exports.deletePost=function(data,callback){
	posts.deleteOne({_id:data},function(err,data){
		if(err){
			return callback(err)
		}
		callback(err,data)
	})
}
exports.updatePost=function(id,data,callback){
	posts.findOneAndUpdate({_id:id},
			{
				$set:{
				 post:data.post,
				 time:data.time
				}
			},function(err,data){
				if(err){
					return callback(err)
				}
				callback(err,data);
		});
}
exports.getComments=function(id,callback){
	posts.find({_id:id},{_id:false,comments:true},function(err,data){
		if(err){
			return callback(err);
		}
		// console.log(data)
		callback(err,data);
	})
}