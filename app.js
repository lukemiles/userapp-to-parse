fs = require('fs');
var moment = require('moment');

// this reads files from users.json in the same directory
// that the script is running from, and saves data into
// parse.json. 
fs.readFile('users.json', function (err, data) {
  if (!err) {
  	// parse JSON
  	users = JSON.parse(data);

  	// create new array for data
  	parse = {}
  	parse.results = [];

  	// loop through users
  	for (i = 0; i < users.length; i++) {
  		current = {};

  		// boilerplate attributes you will likely need
  		current['username'] = users[i].login;
  		current['bcryptPassword'] = users[i]['password']['value'];
  		// Time is converted to ISO 8601 format for Parse
  		current['createdAt'] = moment(users[i].created_at, 'X').format();

  		// custom features and properties specific to my app
  		// be sure to customize this section for your own needs
  		current['push'] = users[i]['features']['push'];
  		current['refresh_push'] = users[i]['features']['refresh_push'];
  		current['ss_2014'] = users[i]['features']['refresh_push'];
  		current['endpoint_arn'] = users[i]['properties']['endpoint_arn'];
  		current['iap_receipt'] = users[i]['properties']['iap_receipt'];
  		current['push_token'] = users[i]['properties']['push_token'];
  		current['push_token_arn'] = users[i]['properties']['push_token_arn'];
  		current['region'] = users[i]['properties']['region'];
  		current['sub_expire'] = parseInt(users[i]['properties']['sub_expire']);

  		parse.results[i] = current;
  	}

  	console.log("Processed " + users.length + " entries successfully.");

  	//convert object to json
	json = JSON.stringify(parse);

	fs.writeFile("parse.json", json, function(err) {
	    if(err) {
	        console.log(err);
	    } else {
	    	console.log("Saved parsed data to parse.json.");
	    }
	}); 



  } 
});