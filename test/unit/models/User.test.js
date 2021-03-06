var sailsHelper = require("sails-test-helper");

describe(TEST_NAME, function() {

  // ================== ERROR VALIDATION ================== //
  var invalidUser;

  beforeEach(function() {
    invalidUser = {};
  });

  describe("***** user error validation *****", function() {
    // UUID
    describe("#uuid", function() {
      it("is invalid uuid", function(done) {
        User.create(invalidUser, function(err, user) {
          expect(user).to.not.exist;
          expect(err).to.exist;
          expect(err).to.validate("uuid", "required");
        });
        done();
      });
    });

    // EMAIl
    describe("#email", function() {
      it("is invalid email", function(done) {
        User.create(invalidUser, function(err, user) {
          expect(user).to.not.exist;
          expect(err).to.exist;
          expect(err).to.validate("email", "email");
          expect(err).to.validate("email", "required");
        });
        done();
      });
    });

    // PASSWORD
    describe("#password", function() {
      it("is missing password", function(done) {
        User.create(invalidUser, function(err, user) {
          expect(user).to.not.exist;
          expect(err).to.exist;
          expect(err).to.validate("password", "string");
          expect(err).to.validate("password", "required");
        });
        done();
      });
    });

    // FIRST_NAME
    describe("#first_name", function() {
      it("is invalid first_name", function(done) {
        User.create(invalidUser, function(err, user) {
          expect(user).to.not.exist;
          expect(err).to.exist;
          expect(err).to.validate("first_name", "string");
          expect(err).to.validate("first_name", "required");
        });
        done();
      });
    });

    // LAST_NAME
    describe("#Last_name", function() {
      it("is invalid last_name", function(done) {
        User.create(invalidUser, function(err, user) {
          expect(user).to.not.exist;
          expect(err).to.exist;
          expect(err).to.validate("last_name", "string");
          expect(err).to.validate("last_name", "required");
        });
        done();
      });
    });

    // CREATE USER
    describe(".create()", function() {
      it("should be user creation error", function(done) {
        User.create(invalidUser, function(err, user) {
          expect(err).to.exist;
          expect(user).to.not.exist;
        });
        done();
      });
    });
  });

  // ================== SUCCESS VALIDATION ================== //
  var validUser;

  beforeEach(function() {
    validUser = {
      uuid       : (1e4*(Date.now()+Math.random())).toString(16),
      email      : "test@voyagerinnovation.com",
      password   : "test123",
      first_name : "test_ima",
      last_name  : "balles"
    };
  }); // created 6x test@voyagerinnovation.com

  describe("***** user success validation *****", function() {
    // UUID
    describe("#uuid", function() {
      it("is valid uuid", function(done) {
        User.create(validUser, function(err, user) {
          expect(user).to.not.exist;
          expect(err).to.exist;
          expect(err).to.validate("uuid", "required");
        });
        done();
      });
    });

    // EMAIl
    describe("#email", function() {
      it("is valid email", function(done) {
        User.create(validUser, function(err, user) {
          expect(user).to.exist;
          expect(err).to.not.exist;
          expect(err).to.validate("email", "email");
          expect(err).to.validate("email", "required");
        });
        done();
      });
    });

    // PASSWORD
    describe("#password", function() {
      it("is required password", function(done) {
        User.create(validUser, function(err, user) {
          expect(user).to.exist;
          expect(err).to.not.exist;
          expect(err).to.validate("password", "string");
          expect(err).to.validate("password", "required");
        });
        done();
      });
    });

    // FIRST_NAME
    describe("#first_name", function() {
      it("is valid first_name", function(done) {
        User.create(validUser, function(err, user) {
          expect(user).to.not.exist;
          expect(err).to.exist;
          expect(err).to.validate("first_name", "string");
          expect(err).to.validate("first_name", "required");
        });
        done();
      });
    });

    // LAST_NAME
    describe("#last_name", function() {
      it("is valid last_name", function(done) {
        User.create(validUser, function(err, user) {
          expect(user).to.not.exist;
          expect(err).to.exist;
          expect(err).to.validate("last_name", "string");
          expect(err).to.validate("last_name", "required");
        });
        done();
      });
    });

    // CREATE USER
    describe(".create()", function() {
      it("should be successful user creation", function(done) {
        User.create(validUser, function(err, user) {
          expect(err).to.not.exist;
          expect(user).to.exist;
          console.log("\n===== USER =====");
          console.log(user);
          console.log("===========\n");
        });
        done();
      });
    });
  }); // END USER SUCCESS VALIDATION
}); // END TEST_NAME
