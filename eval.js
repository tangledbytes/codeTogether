/************************************************************

 * @title eval.js
 * @access PRIVATE
 * @description Module handles the task to call the glot API
 
*************************************************************/

const request = require('request');
const crypto = require('crypto');

// Handles the task to assign extensions to the file
const fileExtension = language => {
    if (language === 'c')
        return '.c';
    else if (language === 'cpp')
        return '.cpp';
    else if (language === 'javascript')
        return '.js';
    else if (language === 'python')
        return '.py';
}

// Generate hashes to randomise the filenames
const generateFilename = language => {
    // Using md5 algorithm
    return crypto.createHash('md5') + fileExtension(language);
}

// Main function evaluate --Here code compile requests here sent to the glot api
const evaluate = (language, code, input, cb) => {
    const req = { "stdin": input, "files": [{ "name": generateFilename(language), "content": code }] };
    const config = {
        "url": `https://run.glot.io/languages/${language}/latest`,
        headers: {
            "Content-type": "application/json",
            "Authorization": "Token 73dcda85-656a-4cd3-b3ec-ec26a9820d92"
        },
        "body": JSON.stringify(req)
    }
    request.post(config, (err, httpres, body) => {
        console.log(body);
        body = JSON.parse(body);
        cb(err, body)
    });
}

module.exports = evaluate




















