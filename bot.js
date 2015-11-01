var telegramBot = require('node-telegram-bot-api');
var twitter = require('twitter');
var aws = require('aws-sdk');
var nconf = require('nconf');
var log4js = require('log4js');
var database = require(__dirname + '/lib/database');

nconf.file('config', __dirname + '/config/config.json');

var logger = log4js.getLogger('BOT-LOG');

var botToken = nconf.get('telegram').bot_token;
var bot = new telegramBot(botToken, {
	polling: true
});

var awsAccessKeyId = nconf.get('database')['dynamo'].access_key_id;
var awsSecretAccessKey = nconf.get('database')['dynamo'].secret_access_key;
var awsRegion = nconf.get('database')['dynamo'].region;

aws.config.update({
	accessKeyId: awsAccessKeyId,
	secretAccessKey: awsSecretAccessKey,
	region: awsRegion
});

var dyDb = new aws.DynamoDB();

bot.on('message', function(msg) {

	if (msg.text === '/register') {

		var userId = msg.chat.id;

		database.updateUserList(dyDb, userId, function(err, result) {

		});
	}
});
