module.exports = function(factory) {
  factory.define("user")
    //.attr("uuid", (1e4*(Date.now()+Math.random())).toString(16))
    .attr("email", "ima@yahoo.com")
    .attr("password", "ima123")
    .attr("first_name", "ima")
    .attr("last_name", "balles");

  factory.define("active_user").parent("user")
    .attr("id", "33548eea21aac2");

  factory.define("edit_user")
    .attr("id", "33548eea21aac2")
    .attr("email", "ima@yahoo.com")
    .attr("password", "ima12345")
    .attr("first_name", "ima")
    .attr("last_name", "ganda");

  factory.define("error_user")
    .attr("id", "33548eea21aac2")
    .attr("email", "ima@yahoo.com")
    .attr("password", "")
    .attr("first_name", "ima")
    .attr("last_name", "");
}
