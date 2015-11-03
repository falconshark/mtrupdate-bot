#mtrupdate-bot

mtrupdate-bot is a project which build a telegram bot for receive news from @mtrupdate twitter immediately.

##Usage
In order to open a chat with the bot, you should search user: @mtrupdate_bot at your telegram, and send '/start' first.

After open the chat, you should send '/register' command to the bot, 
than it will add you to user list automatically.

##How to build
Note: This requires Node.js v0.10 to run. If you had not install it , you can download it at http://nodejs.org/download/ .

1.Download the mtrupdate-bot source or clone the git repository.

2.Switch to the project root directory:

```bash
$ cd mtrupdate-bot
```

3.Install the dependencies:

```bash
$ npm install
```

##Configuration

mtrupdate-bot using AWS DynamoDB to storge the user list, Twitter api to stream user, and telegram bot to send recevied message to user. If you want to build your own mtrupdate-bot, you will need the api key of these three services.

Moreover, you should create a table with hash keys: user_id for storge user list on DynamoDB too

Before start mtrupdate-bot, you should copy and edit the  configuration file: 

```bash
$ cp config.example.json config.json
```

You can found all of the config file in config folder.

```json
{
	"twitter":{
		"consumer_key":"Your twitter consumer key",
		"consumer_secret":"Your twitter consumer secret",
		"access_token_key":"Your twitter access token key",
		"access_token_secret":"Your twitter access token secret"
	},
	"telegram":{
		"bot_token":"Your telegram bot token"
	},
	"database":{
		"dynamo":{
			"access_key_id":"Your aws access key id",
			"secret_access_key":"Your aws secret key",
			"table":"mtrbot_users"
		}
	}
}
```

##License
mtrupdate-bot is published under the GPLv3 License.

