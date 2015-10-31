var telegramBot = require('node-telegram-bot-api');
var twitter = require('twitter');
var aws = require('aws-sdk');
var nconf = require('nconf');
var log4js = require('log4js');

nconf.file('config', __dirname + '/config/config.json');

var botToken = nconf.get('telegram').bot_token;
var bot = new TelegramBot(botToken, {
	polling: true
});

var awsAccessKeyId = nconf.get('database')['aws'].access_key_id;
var awsSecretAccessKey = nconf.get('database')['aws'].secret_access_key;

aws.config.update{accessKeyId: awsAccessKeyId, secretAccessKey: awsSecretAccessKey, region: 'ap-southeast-1'};
