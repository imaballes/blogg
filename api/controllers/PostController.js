/**
 * PostController
 *
 * @description :: Server-side logic for managing Posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var PostController = {
	dashboard: function(req, res) {
        if(!req.session.email){
            res.redirect('login');
        }

        Post.find(function(err, posts) {
            if(err || posts == null) {
                console.log("Error retrieving posts?!");
                console.log(err);
                res.view('dashboard', {user:req.session, entry:{}});
            }
            else {
                res.view('dashboard', {user:req.session, entry:posts});
            }
        });
    },


	post: function(req, res) {
        if(!req.session.email) {
            res.redirect('login');
        }
        
        res.view('post', {user: req.session, msg:''});
    },

    createPost: function(req, res) {
        var post    = req.body;
        var postid  = (1e4*(Date.now()+Math.random())).toString(16);
        post.uuid   = postid;
        post.userid = req.session.uuid;
        post.author = req.session.firstName;
        console.log(post);

        Post.create(post, function(err, entry){
        	if(err) {
                console.log("Posting error?!");
                var err_msg = "Oops! Something went wrong. Please try again.";
                res.view('post', {user:req.session, msg:err_msg});
            }
            else {
                console.log("You were just a dream that I once knew!\n");
                res.redirect('dashboard');
            }
        });
    },

    getPost: function(req, res) {
        if(!req.session.email) {
            res.redirect('login');
        }

        console.log("Getting post by id....");
        console.log(req.params);
        var params = {uuid:req.params.id};

        Post.findOne(params, function(err, entry){
            if(err || !entry) {
                console.log("ERROR:: Post not existing");
                console.log(err.message);
            }
            else {
                console.log("+++++");
                console.log(entry);
                console.log("+++++");
                res.view('edit', {result: entry, user:req.session});
            }
        });
    },

    editPost: function(req, res) {
        var params = {uuid:req.params.id};
        console.log(params);
        console.log("=====");
        
        var q = req.query;
        var query = {"title":q.title, "author":q.author, "userid":q.authorid, "body":q.body};
        console.log(query);

        Post.update(params, query, function(err, result) {
            if(err || !result) {
                callback_data = {msg:"Error updating post.."};
                console.log(callback_data);
                console.log(err);
            }
            else {
                callback_data = {msg:"ID: " + req.params.id + ", updated successfully!"};
                console.log(callback_data);
                console.log(result);
                res.send("Successfully updated record!");
            }
        });
    },

    deletePost: function(req, res) {
        console.log("deleting...");

        var params = {uuid:req.params.id};
        console.log(params);
        
        Post.findOne(params, function(err, result) {
            if(err || !result){
                callback_msg = "Post not existing..";
                console.log(callback_msg);
            }
            else {
                console.log("deleting.......");

                Post.destroy(params, function(err, deleted){       
                    if(err || !deleted) {
                        console.log("Error deleting..");
                        console.log(err);
                    }
                    else {
                        console.log("Post Deleted!");
                        res.send("Post Deleted!");
                    }
                });
            }
    });
    },
};

module.exports = PostController;