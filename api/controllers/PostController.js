/**
 * PostController
 *
 * @description :: Server-side logic for managing Posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var PostController = {
	dashboard: function(req, res) {
    if (!req.session.email){
      res.redirect('login');
			//return;
    }

    Post.find(function(err, posts) {
      if (err || posts == null) {
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
    if (!req.session.email) {
      res.redirect('login');
			return;
    }

    res.view('post', {user: req.session, msg:''});
  },

  createPost: function(req, res) {
    var post    = req.body;
    var postid  = (1e4*(Date.now()+Math.random())).toString(16);
    //post.uuid   = postid;
		post.uuid   = req.body.id;
		post.userid = req.session.uuid;
    post.author = req.session.first_name;
    console.log(post);

    Post.create(post, function(err, entry){
	  	if (err) {
	      console.log("Posting error?!");
	      var err_msg = "Oops! Something went wrong. Please try again.";
	      res.view('post', {user:req.session, msg:err_msg});
	    }
      else {
        res.redirect('dashboard');
      }
    });
  },

  getPost: function(req, res) {
    if (!req.session.email) {
      res.redirect('login');
			return;
    }

    console.log("Getting post by id....");
    console.log(req.params);
    var params = {uuid:req.params.id};

    Post.findOne(params, function(err, entry){
      if (err || !entry) {
          console.log("ERROR:: Post not existing");
          console.log(err.message);
					return;
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
    var q      = req.query;
    var query  = {"title":q.title, "author":q.author, "userid":q.authorid, "body":q.body};

    Post.update(params, query, function(err, result) {
      if (err || !result) {
				var err_msg = "Please add a title.";
        console.log(err_msg);
        res.json(500, {err:err_msg});
      }
      else {
        callback_data = {msg:"ID: " + req.params.id + ", updated successfully!"};
        console.log(result);
        res.send("Successfully updated record!");
      }
    });
  },

  deletePost: function(req, res) {
    var params = {uuid:req.params.id};

    Post.findOne(params, function(err, result) {
      if (err || !result){
        callback_msg = "Post not existing..";
        console.log(callback_msg);
      }
      else {
        Post.destroy(params, function(err, deleted){
          if (err || !deleted) {
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
