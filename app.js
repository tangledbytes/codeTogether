// const { cpp, c, python, node } = require('compile-run');
const evaluate = require('./eval');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// Initialise express ===================================
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'build')));

// ======================================================

app.post('/eval', (req, res) => {
    const code = req.body.code;
    const input = req.body.input;
    const language = req.body.language;
    evaluate(language, code, input, (err, data) => {
        if (err)
            res.status(500).send({ "msg": "Some error occured" });
        else {
            console.log(data);
            if (!data.stderr) res.send(data.stdout);
            else res.status(200).send(data.stderr);
        }
    })
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// SERVER==================================================
app.listen(5000, () => {
    console.log('Server listening on 5000');
});