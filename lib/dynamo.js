
/**
 * Insert user id to DynamoDB.
 *
 * @Param {Object} dyDB
 * @Param {String} table
 * @Param {String} userId
 * @Param {function} cb
 */

function updateUserList(dyDB, table, userId, cb) {

	dyDB.putItem({
		"TableName": table,
		"Item": {
			"user_id": {
				"S": userId.toString()
			}
		}
	}, function(err, result) {

		if (err) {
			cb(err, null);
			return;
		}

		result['userId'] = userId;

		cb(null, result);
	});
}

/**
 * Get user list from DynamoDB.
 *
 * @Param {Object} dyDB
 * @Param {String} table
 * @Param {function} cb
 */

function getUserList(dyDB, table, cb) {

	dyDB.scan({
		"TableName": table
	}, function(err, result) {

		if(err){
			cb(err, null);
			return;
		}

		cb(null, result);
	});
}

module.exports = {
	updateUserList: updateUserList,
	getUserList: getUserList
}
