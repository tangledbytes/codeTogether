const request = require('request');
const crypto = require('crypto');

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

const generateFilename = language => {
    return crypto.createHash('md5') + fileExtension(language);
}

const evaluate = (language, code, input, cb) => {
    console.log(input);
    const req = { "stdin": input, "files": [{ "name": generateFilename(language), "content": code }] };
    console.log(req);
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
        if (err) cb(err);
        else cb(err, body);
    });
}

module.exports = evaluate




















