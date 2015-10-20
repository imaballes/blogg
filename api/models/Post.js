/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var Post = {
  tableName  : "posts",
  attributes : {
      uuid: {
        primaryKey: true,
        type:"string",
        required:true,
      },

      title: {
        type:"string",
        required: true,
      },

      userid : {
        type:"string",
        required: true,
      },

      body   : {
        type: "string",
        required: true,
      },
      author : {
        type: "string",
        required: true,
      },

  }
};

module.exports = Post;
