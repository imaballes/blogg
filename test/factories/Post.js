module.exports = function(factory) {
  factory.define("post")
    .attr("id", "1")
    .attr("title", "Hello World")
    .attr("body", "sample body here!");

  factory.define("active_post").parent("post")
    .attr("id", "1");

  factory.define("edit_post")
    .attr("id", "1")
    .attr("title", "HELLO WORLD")
    .attr("body", "Updated sample body here yo!")
    .attr("author", "ima")
    .attr("authorid", "3353ad9375e28a");
}
