require("sails-test-helper");

describe(TEST_NAME, function() {
  describe("GET index", function() {
    it("should be successful", function(done) {
      request.get("/")
      .expect(200)
      .end(function(err, res) {
         expect(err).to.not.exist;
         done();
       });
    });
  });

  describe("GET logout error", function() {
    it("should be successful", function(done) {
      request.get("/error_route")
      .expect(404)
      .end(function(err, res) {
         expect(err).to.not.exist;
         done();
       });
    });
  });

  describe("GET logout success", function() {
    it("should be successful", function(done) {
      request.get("/logout")
      .expect(404)
      .end(function(err, res) {
        console.log(err);
         expect(err).to.exist;
         done();
       });
    });
  });
});
