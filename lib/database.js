var log4js = require('log4js');
var logger = log4js.getLogger('BOT-LOG');

function updateUserList(dyDb, userId, cb){

	dydb.listTables({}, function(err, result){

		if(err){
			logger.error(err);
			cb(err, null);
			return;
		}

	});
}

module.exports = {
	updateUserList:updateUserList
}
