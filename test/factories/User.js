factory.define("user")
  .attr("email", "ima@yahoo.com")
  .attr("password", "ima123")
  .attr("first_name", "ima")
  .attr("last_name", "balles");

factory.define("active_user").parent("user")
  .attr("active", true);
