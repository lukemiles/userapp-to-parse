# userapp-to-parse
Node.js script that converts UserApp JSON export files into Parse-ready json files.

## Usage

* Get a Userapp-provided users.json with bcrypt password hashes.

Then, run something like this.

`git clone https://github.com/lukemiles/userapp-to-parse`

`cp users.json userapp-to-parse`

`cd userapp-to-parse`

`npm install`

You may need to open up `app.js` and modify the properties exported. You're most likely going to need to change [lines 28-36](https://github.com/lukemiles/userapp-to-parse/blob/f16d0f6b49cf5c64e2c98cf39676e6cce8bf749d/app.js#L28) to fit whatever data you were storing on Userapp. After you've modified the script, run it.

 `node app.js`

The script will create a new file called `parse.json` in the directory. Upload this to Parse, and you're set!
