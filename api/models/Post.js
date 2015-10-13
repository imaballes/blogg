/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var Post = {
  connection : "BlogMongodbServer",
  schema     : true,
  tableName  : "posts",
  attributes : {
      uuid: {
        primaryKey: true,
        type:"string",
        required:true
      },

      title: {
        type:"string",
        required: true
      },

      userid : {
        type:"string",
        required: true
      },
      
      body   : "string",
      author : "string",

  }
};

module.exports = Post;
