/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var UserController = {

    login: function(req, res) {
        if(req.session.email) {
            res.redirect('dashboard');
        }
        else {
            res.view('login', {msg:''});
        }
    },
   
    processLogin : function(req, res) {
        var sesh = req.session;

        console.log("Logging user..\n");
        if(req.body.email == '' || req.body.password == '') {
            var err_msg = "Please fill-up all fields.";
            res.view('login', {msg:err_msg});
        }
        else {
           console.log(req.body);
               
            // logUser
            var obj = {"email":req.body.email, "password":req.body.password};
          
            User.findOne(obj, function(err, entry) {
                if(err || entry == null) {
                    console.log("Why you gotta be so rude?!");
                    var err_msg = "Invalid login. Please try again.";
                    res.view('login', {msg:err_msg});
                }
                else {
                    console.log("Got to believe in magic!\n");
                    console.log("Welcome, " + entry.firstName + "!");
                    
                    //set session variables & re-direct
                    sesh.firstName = entry.firstName;
                    sesh.email     = entry.email;
                    sesh.uuid        = entry.uuid;
                    console.log(sesh);
                    res.redirect('dashboard');
                }
            });
        }
    },
   
    register: function(req, res) {
        if(req.session.email) {
            res.redirect('dashboard');
        }
        else {
            res.view('register', {msg:''});
        }
    },
   
    processRegister : function(req, res) {
        console.log("Registering user..\n");
        if(req.body.email == '' || req.body.first_name == '' || req.body.last_name == '' || req.body.password == '') {
            var err_msg = "Please fill-up all fields.";
            res.view('register', {msg:err_msg});
        }
        else {
            console.log(req.body);
            var user   = req.body;
            var userid = (1e4*(Date.now()+Math.random())).toString(16);
            user.uuid  = userid;
            console.log(user);

            User.create(user, function(err, entry) {
                if(err) {
                    console.log(err);
                    console.log("Registration error?!");
                    var err_msg = "Oops! Something went wrong. Please try again.";
                    res.view('register', {msg:err_msg});
                }
                else {
                    console.log("User created!");
                    res.view('success');
                }
            });
        }
    },
   
    getUser: function(req, res) {
        if(!req.session.email) {
            res.redirect('login');
        }

        var params = {uuid:req.params.id};
        console.log(params);

        User.findOne(params, function(err, entry){
            if(err || !entry) {
                console.log("ERROR:: User not existing");
                console.log(err.message);
                res.notFound();
            }
            else {
                console.log("+++++");
                console.log(entry);
                console.log("+++++");
                res.view('editProfile', {result:entry, user:req.session});
            }
        });

    },

    editUser: function(req, res) {
        var params = {uuid:req.params.id};
        console.log(params);
        
        var q     = req.query;
        var query = {"email":q.email, "password":q.password, "firstName":q.firstName, "lastName":q.lastName};
        console.log(query);

        User.update(params, query, function(err, result) {
            if (err || !result) {
                console.log("Error updating user..");
                console.log(err);

            }
            else {
                console.log("User updated!");
                console.log(result);

                //setting updated session values
                var sesh = req.session;
                sesh.firstName = q.firstName;
                sesh.email = q.email;

                res.send("Successfully updated record!");
            }
        });
    },

    logout: function(req, res) {
        if (!req.session.email) {
            res.redirect('login');
        }
        //destroy session
        req.session.destroy(function(err){
            if(err) {
                res.serverError();
            }
            else {
                res.redirect('login');
            }
        });
    }
};

module.exports = UserController;