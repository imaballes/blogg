require("sails-test-helper");

describe(TEST_NAME, function() {
  afterEach(function(){
    console.log("\n=========\n");
  });

  //VIEW LOGIN
  describe("GET login", function() {
    it("should be successful login view [200]", function(done) {
      request.get("/")
      .expect(200)
      .end(function(err, res) {
        expect(err).to.not.exist;
        done();
      });
    });
  });

  //REGISTER
  describe("GET register", function() {
    it("should be successful signup view [200]", function(done) {
      request.get("/register")
      .expect(200)
      .end(function(err, res) {
        expect(err).to.not.exist;
        done();
      });
    });
  });

  //PROCESS REGISTER
  describe("POST register", function() {
    it("should be successful signup [200]", function(done) {
      var user = factory.build("user");
      expect(user).to.exist;

      request.post("/register")
      .send(user)
      .expect(200)
      .end(function(err, res) {
        expect(err).to.not.exist;
        done();
      });
    });
  });

  //PROCESS LOGIN
  describe("POST login", function() {
    it("should be successful login [302]", function(done) {
      var user = factory.build("user");
      expect(user).to.exist;

      request.post("/login")
      .send(user)
      .expect(302)
      .end(function(err, res) {
        expect(err).to.not.exist;
        expect(res.headers.location).to.eql("/dashboard");
        console.log("REDIRECT TO: " + res.headers.location);
        done();
      });
    });
  });

  //QUERY USER BY ID
  describe("GET user by id", function() {
    it("should be successful query [200]", function(done) {
      var user = factory.build("active_user");
      expect(user).to.exist;

      request.get("/user/"+user.id+"/edit")
      .send(user)
      .expect(200)
      .end(function(err, res) {
        expect(err).to.not.exist;
        done();
      });
    });
  });

  //EDIT USER BY ID
  describe("PUT user by id", function() {
    it("should be successful user update [200]", function(done) {
      var user  = factory.build("edit_user");
      var query = "?first_name="+user.first_name+"&last_name="+user.last_name+"&email="+user.email+"&password="+user.password
      expect(user).to.exist;

      request.put("/user/"+user.id+query)
      .send(user)
      .expect(200)
      .end(function(err, res) {
        expect(err).to.not.exist;
        done();
      });
    });
  });

  //EDIT POST BY ID (EXPECT ERROR)
  describe("PUT user by id", function() {
    it("should be successful edit error [500]", function(done) {
      var user  = factory.build("error_post");
      var query = "?first_name="+user.first_name+"&last_name="+user.last_name+"&email="+user.email+"&password="+user.password
      expect(user).to.exist;

      request.put("/user/"+user.id+query)
        .send(user)
        .expect(500)
        .end(function(err, res) {
          console.log(res.status);
          expect(err).to.not.exist;
          done();
        });
    });
  });

  //REGISTER
  describe("GET register", function() {
    it("should respond to session redirect to dashboard [302]", function(done) {
      request.get("/register")
      .expect(302)
      .end(function(err, res) {
        expect(err).to.not.exist;
        expect(res.headers.location).to.eql("/dashboard");
        console.log("REDIRECT TO: " + res.headers.location);
        done();
      });
    });
  });

  //LOGOUT
  describe("GET logout", function() {
    it("should be successful logout [302]", function(done) {
      request.get("/logout")
      .expect(302)
      .end(function(err, res) {
        expect(err).to.not.exist;
        expect(res.headers.location).to.eql("/login");
        console.log("REDIRECT TO: " + res.headers.location);
        done();
       });
    });
  });

  //404 -- NON-EXISTING ROUTE
  describe("GET route error user", function() {
    it("should be successful errcatch [404]", function(done) {
      request.get("/error_user")
      .expect(404)
      .end(function(err, res) {
         expect(err).to.not.exist;
         done();
       });
    });
  });
});
