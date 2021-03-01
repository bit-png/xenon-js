var UglifyJS = require("uglify-js");
var fs = require('fs');
codeString = fs.readFileSync('xenon.js').toString();
var result = UglifyJS.minify(codeString, {});

if (result.error) console.log(result.error); // runtime error, or `undefined` if no error
//const replace1 = result.code.replace(/\$\.new=\((.*?)\),\$\.all/, '$.new=$1,$.all');
//const replace2 = replace1.replace(/\$\.all=\((.*)\);$/, '$.all=$1');
fs.writeFileSync('xe.js', result.code);
