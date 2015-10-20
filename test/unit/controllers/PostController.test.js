require("sails-test-helper");

describe(TEST_NAME, function() {
  var user = {
    email      : "imatest@yahoo.com",
    password   : "imatest123",
    uuid       : "3353ad9375e28a",
    first_name : "imatest"
  };

  before(function(done) {
    signIn(user, done);
  });

  afterEach(function() {
    console.log("\n=========\n");
  });

  //CREATE POST
  describe("POST create", function() {
    it("should be successful creation of post [302]", function(done) {
      var post = factory.build("post");
      expect(post).to.exist;

      request.post("/post")
        .send(post)
        .expect(302)
        .end(function(err, res) {
          expect(err).to.not.exist;
          expect(res.headers.location).to.eql("/dashboard");
          console.log("REDIRECT TO: " + res.headers.location);
          done();
        });
    });
  });

  //DASHBOARD
  describe("GET dashboard", function(){
    it("should successful display of dashboard [200]", function(done) {
      request.get("/dashboard")
        .expect(200)
        .end(function(err, res) {
          expect(err).to.not.exist;
          done();
        });
    });
  });

  //RENDER POST FORM
  describe("GET create", function(){
    it("should display post form [200]", function(done) {
      request.get("/post")
        .expect(200)
        .end(function(err, res) {
          expect(err).to.not.exist;
          done();
        });
    });
  });

  //QUERY POST BY ID
  describe("GET post", function() {
    it("should be successful query of post [200]", function(done) {
      var post = factory.build("active_post");
      expect(post).to.exist;

      request.get("/post/"+post.id+"/edit")
        .send(post)
        .expect(200)
        .end(function(err, res) {
          expect(err).to.not.exist;
          done();
        });
    });
  });

  //EDIT POST BY ID
  describe("PUT post by id", function() {
    it("should be successful post edit [200]", function(done) {
      var post  = factory.build("edit_post");
      var query = "?title=" + post.title + "&author=" + post.author + "&authorid=" + post.authorid + "&body=" + post.body
      expect(post).to.exist;

      request.put("/post/"+post.id+query)
        .send(post)
        .expect(200)
        .end(function(err, res) {
          expect(err).to.not.exist;
          done();
        });
    });
  });

  //EDIT POST BY ID (EXPECT ERROR)
  describe("PUT post by id", function() {
    it("should be successful edit error [500]", function(done) {
      var post  = factory.build("error_post");
      var query = "?title=" + post.title + "&author=" + post.author + "&authorid=" + post.authorid + "&body=" + post.body
      expect(post).to.exist;

      request.put("/post/"+post.id+query)
        .send(post)
        .expect(500)
        .end(function(err, res) {
          expect(err).to.not.exist;
          done();
        });
    });
  });

  //DELETE POST
  describe("DELETE post", function() {
    it("should be succesful deletion [200]", function(done) {
      var post = factory.build("active_post");
      expect(post).to.exist;

      request.delete("/post/"+post.id)
        .expect(200)
        .end(function(err, res) {
          expect(err).to.not.exist;
          done();
        });
    });
  });

  //DESTROY SESSION
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
  describe("GET route error post", function() {
    it("should be successful errcatch [404]", function(done) {
      request.get("/error_post")
      .expect(404)
      .end(function(err, res) {
         expect(err).to.not.exist;
         done();
       });
    });
  });
});
