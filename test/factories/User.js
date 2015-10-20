module.exports = function(factory) {
  factory.define("user")
    //.attr("uuid", (1e4*(Date.now()+Math.random())).toString(16))
    .attr("id", "1234567890")
    .attr("email", "imatest@yahoo.com")
    .attr("password", "imatest123")
    .attr("first_name", "test_ima")
    .attr("last_name", "balles");

  factory.define("active_user").parent("user")
    .attr("id", "1234567890");

  factory.define("edit_user")
    .attr("id", "1234567890")
    .attr("email", "imalala@yahoo.com")
    .attr("password", "imatest12345")
    .attr("first_name", "test_imaganda")
    .attr("last_name", "ganda");

  factory.define("error_user")
    .attr("id", "1234567890")
    .attr("email", "imatest@yahoo.com")
    .attr("password", "")
    .attr("first_name", "test_ima")
    .attr("last_name", "");
}
