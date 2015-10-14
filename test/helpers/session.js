global.signIn = function(user, done) {
  var fakeAuth = stub(User, "findOne");
    fakeAuth.yields(null, user);

  function callback(err, success) {
    fakeAuth.restore();
    done(err, success);
  }

  request ? request.post("/login")
    .send(user)
    .end(function(err, result) {
      if (err) {
        callback(err, false);
      } else {
        callback(null, true);
      }
    }) : callback(true, false);
}
