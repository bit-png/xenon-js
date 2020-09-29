var UglifyJS = require("uglify-es");
var fs = require('fs');
codeString = fs.readFileSync('xenon.js').toString();
var result = UglifyJS.minify(codeString,
    // {
    //     "mangle": false, //true,
    //     "compress": {
    //         arrows: true,
    //         "sequences": true,
    //         "properties": true,
    //         "dead_code": true,
    //         "drop_debugger": true,
    //         "unsafe": true,
    //         "unsafe_comps": true,
    //         unsafe_arrows: true,
    //         unsafe_methods: true,
    //         "unsafe_Function": true,
    //         "conditionals": true,
    //         "comparisons": true,
    //         "evaluate": true,
    //         "booleans": true,
    //         "loops": true,
    //         "unused": true,
    //         "hoist_funs": true,
    //         "keep_fargs": true,
    //         "keep_fnames": true,
    //         "hoist_vars": false,
    //         "if_return": true,
    //         "join_vars": true,
    //         "collapse_vars": true,
    //         "reduce_vars": true,
    //         "side_effects": true,
    //         "pure_getters": true,
    //         "pure_funcs": null,
    //         "negate_iife": true,
    //         "drop_console": true,
    //         "passes": 1,
    //         "global_defs": {}
    //     },
    //     "output": {
    //         "ascii_only": false,
    //         "inline_script": false,
    //         "max_line_len": 32000,
    //         // "braces": false,
    //         "semicolons": false,
    //         "comments": false,
    //         "shebang": true,
    //         "preamble": null,
    //         "quote_style": "best",
    //         "wrap_iife": false
    //     }
    // }
);

if (result.error) console.log(result.error); // runtime error, or `undefined` if no error
const replace1 = result.code.replace(/\$\.new=\((.*?)\),\$\.all/, '$.new=$1,$.all');
const replace2 = replace1.replace(/\$\.all=\((.*)\);$/, '$.all=$1');
fs.writeFileSync('xe.js', replace2);