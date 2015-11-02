function updateUserList(dyDB, table, userId, cb) {

	dyDB.putItem({
		"TableName": table,
		"Item": {
			"user_id": {"S": userId.toString()}
		}
	}, function(err, result) {

		if(err){
			cb(err, null);
			return;
		}

		result['userId'] = userId;

		cb(null, result);
	});
}

function getUserList(dyDB, table, cb){


}

module.exports = {
	updateUserList: updateUserList
	getUserList: getUserList
}
