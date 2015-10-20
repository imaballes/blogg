module.exports = function(factory) {
  factory.define("post")
    .attr("id", "1")
    .attr("title", "TEST TITLE")
    .attr("body", "TEST BODY!");

  factory.define("active_post").parent("post")
    .attr("id", "1");

  factory.define("edit_post")
    .attr("id", "1")
    .attr("title", "TEST UPDATE - HELLO WORLD")
    .attr("body", "TEST BODY - Updated sample body here yo!")
    .attr("author", "test_ima")
    .attr("authorid", "3353ad9375e28a");

    factory.define("error_post")
      .attr("id", "1")
      .attr("title", "")
      .attr("body", "Updated sample body here yo!")
      .attr("author", "ima")
      .attr("authorid", "3353ad9375e28a");
}
