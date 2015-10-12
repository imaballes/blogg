/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var Post = {
    connection: 'BlogMongodbServer',
    schema: true,
    tableName: 'posts',
    attributes: {
        uuid      : {type:'string', primaryKey: true, required:true},
        title     : {type:'string', required: true},
        body      : 'string',
        author    : 'string',
        userid    : 'string'
    }
};

module.exports = Post;