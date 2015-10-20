/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var UserController = {

  login: function(req, res) {
    if (req.session.email) {
      res.redirect("dashboard");
    }
    else {
      res.view("login", {msg:""});
    }
  },

  processLogin : function(req, res) {
    var sesh = req.session;

    if (req.body.email == "" || req.body.password == "") {
      var err_msg = "Please fill-up all fields.";
      res.view("login", {msg:err_msg});
    }
    else {
      // logUser
      var obj = {"email":req.body.email, "password":req.body.password};

      User.findOne(obj, function(err, entry) {
        if (err || entry == null) {
          var err_msg = "Invalid login. Please try again.";
          console.log(err_msg);
          res.view("login", {msg:err_msg});
        }
        else {
          console.log("LOGGED IN! ----");
          //console.log("Welcome, " + entry.first_name + "!");
          //set session variables & re-direct
          sesh.first_name = entry.first_name;
          sesh.email     = entry.email;
          sesh.uuid      = entry.uuid;
          //console.log(sesh);
          res.redirect("dashboard");
        }
      });
    }
  },

  register: function(req, res) {
    if (req.session.email) {
      res.redirect("dashboard");
      return;
    }
    else {
      res.view("register", {msg:""});
      return;
    }
  },

  processRegister : function(req, res) {
    if (req.body.email == "" || req.body.first_name == "" || req.body.last_name == "" || req.body.password == "") {
      var err_msg = "Please fill-up all fields.";
      res.view("register", {msg:err_msg});
    }
    else {
      var user   = req.body;
      var userid = (1e4*(Date.now()+Math.random())).toString(16);
      //user.uuid  = userid;
      user.uuid   = req.body.id;
      console.log(user);

      User.create(user, function(err, entry) {
        if (err) {
          console.log(err);
          var err_msg = "Oops! Something went wrong. Please try again.";
          res.view("register", {msg:err_msg});
        }
        else {
          console.log("User created!");
          res.view("success");
        }
      });
    }
  },

  getUser: function(req, res) {
    if (!req.session.email) {
      res.redirect("login");
      return;
    }

    var params = {uuid:req.params.id};

    User.findOne(params, function(err, entry){
      if (err || !entry) {
        console.log("ERROR:: User not existing");
        console.log(err.message);
        res.notFound();
      }
      else {
        console.log(entry);
        res.view("editProfile", {result:entry, user:req.session, msg:""});
      }
    });
  },

  editUser: function(req, res) {
    var params = {uuid:req.params.id};
    console.log(params); //uuid
    console.log("\n-------");

    var q      = req.query;
    var query  = {"email":q.email, "password":q.password, "first_name":q.first_name, "last_name":q.last_name};
    console.log(query);

    User.update(params, query, function(err, result) {
      if (err || !result) {
        //console.log(err);
        var err_msg = "All fields are required. Please try again.";
        console.log(err_msg);
        res.json(500, {err:err_msg});
      }
      else {
        console.log("User updated!");
        console.log(result);

        //setting updated session values
        var sesh = req.session;
        sesh.first_name = q.first_name;
        sesh.email = q.email;

        res.send("Successfully updated record!");
      }
    });
  },

  logout: function(req, res) {
    if (!req.session.email) {
      res.redirect("login");
      return;
    }
    //destroy session
    req.session.destroy(function(err) {
      if (err) {
        res.serverError();
      }
      else {
        res.redirect("login");
      }
    });
  }
};

module.exports = UserController;
