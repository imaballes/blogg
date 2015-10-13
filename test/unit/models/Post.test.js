var sailsHelper = require("sails-test-helper");

describe(TEST_NAME, function() {

  // ================== ERROR VALIDATION ================== //
  var invalidPost;

  beforeEach(function() {
    invalidPost = {};
  });

  describe("***** post error validation *****", function() {
    // UUID
    describe("#uuid", function() {
      it("is valid uuid", function(done) {
        Post.create(invalidPost, function(err, post) {
          expect(post).to.not.exist;
          expect(err).to.exist;
          expect(err).to.validate("uuid", "required");
        });
        done();
      });
    });

    // TITLE
    describe("#title", function() {
      it("is required title", function(done) {
        User.create(invalidPost, function(err, post) {
          expect(post).to.not.exist;
          expect(err).to.exist;
          expect(err).to.validate("title", "string");
          expect(err).to.validate("title", "required");
        });
        done();
      });
    });

    // USERID
    describe("#userid", function() {
      it("is required userid", function(done) {
        User.create(invalidPost, function(err, post) {
          expect(post).to.not.exist;
          expect(err).to.exist;
          expect(err).to.validate("userid", "string");
          expect(err).to.validate("userid", "required");
        });
        done();
      });
    });

    // BODY
    describe("#body", function() {
      it("is valid body", function(done) {
        User.create(invalidPost, function(err, post) {
          expect(post).to.not.exist;
          expect(err).to.exist;
          expect(err).to.validate("body", "string");
        });
        done();
      });
    });

    // LAST_NAME
    describe("#author", function() {
      it("is valid author", function(done) {
        User.create(invalidPost, function(err, post) {
          expect(post).to.not.exist;
          expect(err).to.exist;
          expect(err).to.validate("author", "string");
        });
        done();
      });
    });

    // CREATE POST
    describe(".create()", function() {
      it("should be successful invalid post", function(done) {
        User.create(invalidPost, function(err, post) {
          expect(err).to.exist;
          expect(post).to.not.exist;
          console.log("\n===== ERROR =====");
          console.log(err.invalidAttributes);
          console.log("===========\n");
        });
        done();
      });
    });
  });

  // ================== SUCCESS VALIDATION ================== //
  var validPost;

  beforeEach(function() {
    validPost = {
      uuid   : (1e4*(Date.now()+Math.random())).toString(16),
      title  : "Sample Post",
      userid : (1e4*(Date.now()+Math.random())).toString(16),
      body   : "Sample body hahahahha",
      author : "ima balles"
    };
  });

  describe("***** post success validation *****", function() {
    // UUID
    describe("#uuid", function() {
      it("is valid uuid", function(done) {
        Post.create(validPost, function(err, post) {
          expect(post).to.not.exist;
          expect(err).to.exist;
          expect(err).to.validate("uuid", "required");
        });
        done();
      });
    });

    // TITLE
    describe("#title", function() {
      it("is required title", function(done) {
        User.create(validPost, function(err, post) {
          expect(post).to.exist;
          expect(err).to.not.exist;
          expect(err).to.validate("title", "string");
          expect(err).to.validate("title", "required");
        });
        done();
      });
    });

    // USERID
    describe("#userid", function() {
      it("is required userid", function(done) {
        User.create(validPost, function(err, post) {
          expect(post).to.exist;
          expect(err).to.not.exist;
          expect(err).to.validate("userid", "string");
          expect(err).to.validate("userid", "required");
        });
        done();
      });
    });

    // BODY
    describe("#body", function() {
      it("is valid body", function(done) {
        User.create(validPost, function(err, post) {
          expect(post).to.exist;
          expect(err).to.not.exist;
          expect(err).to.validate("body", "string");
        });
        done();
      });
    });

    // LAST_NAME
    describe("#author", function() {
      it("is valid author", function(done) {
        User.create(validPost, function(err, post) {
          expect(post).to.exist;
          expect(err).to.not.exist;
          expect(err).to.validate("author", "string");
        });
        done();
      });
    });

    // CREATE POST
    describe(".create()", function() {
      it("should be successful valid post", function(done) {
        Post.create(validPost, function(err, post) {
          expect(err).to.not.exist;
          expect(post).to.exist;
          console.log("\n===== POST =====");
          console.log(post);
          console.log("===========\n");
        });
        done();
      });
    });
  }); // END USER SUCCESS VALIDATION
}); // END TEST_NAME
