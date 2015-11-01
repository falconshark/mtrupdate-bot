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

var twitterConsumerKey = nconf.get('twitter').consumer_key;
var twitterConsumerSecret = nconf.get('twitter').consumer_key;
var twitterAccessToken = nconf.get('twitter').access_token_key;
var twitterAccessTokenSecret = nconf.get('twitter').access_token_secret;

var twitterClient = new twitter({
	consumer_key: twitterConsumerKey,
	consumer_secret: twitterConsumerSecret,
	access_token_key: twitterAccessToken,
	access_token_secret: twitterAccessTokenSecret
});

var awsAccessKeyId = nconf.get('database')['dynamo'].access_key_id;
var awsSecretAccessKey = nconf.get('database')['dynamo'].secret_access_key;
var dyDBRegion = nconf.get('database')['dynamo'].region;
var dyDBTable = nconf.get('database')['dynamo'].table;

aws.config.update({
	accessKeyId: awsAccessKeyId,
	secretAccessKey: awsSecretAccessKey,
	region: dyDBRegion
});

var dyDB = new aws.DynamoDB();

twitterClient.get('search/tweets', {q: 'node.js'}, function(error, tweets, response){
   console.log(tweets);
});

bot.on('message', function(msg) {

	if (msg.text === '/register') {

		var userId = msg.chat.id;

		database.updateUserList(dyDB, dyDBTable, userId, function(err, result) {

			if (err) {
				logger.error(err);
				return;
			}

			logger.debug('Added new user: ', result.userId);
		});
	}
});
