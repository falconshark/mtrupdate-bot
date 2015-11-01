var log4js = require('log4js');
var logger = log4js.getLogger('BOT-LOG');

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

module.exports = {
	updateUserList: updateUserList
}
