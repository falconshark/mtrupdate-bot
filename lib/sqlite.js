function updateUserList(db, userId, table) {

	db.serialize(function() {
		var stmt = db.prepare("INSERT INTO" + table + "VALUES (?)");
		stmt.run(userId);
	}

	stmt.finalize();

	return db;

}


function getUserList(db, userId, table, cb) {

}

module.exports = {
	updateUserList: updateUserList,
	getUserList: getUserList
}
