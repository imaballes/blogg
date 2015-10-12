/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var User = {
	connection : "BlogMongodbServer",
	schema     : true,
	tableName  : "users",
	attributes : {
		/*uuid: {
			type:"string",
			primaryKey: true,
			required:true
		},*/

		email: {
			type: "email",
			unique: true,
			required: true
		},

		password: {
			type: "string",
			required: true
		},

		first_name: {
			type: "string",
			required: true
		},

		last_name: {
			type:"string",
			required: true
		},

		/*updatedAt: {
			type: "datetime",
			columnName: "updated_at"
		},*/

    /*createdAt: {
			type: "datetime",
			columnName: "created_at"
		},*/
	}
};

module.exports = User;
