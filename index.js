#! /usr/bin/env node
// ABOVE, allows us to run code globally as well as from the command line.
const fs = require('fs')

fs.readFile(__dirname + '/info.json', 'utf-8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        return data;
    }
});

