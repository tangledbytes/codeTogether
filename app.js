const { cpp, c, python, node } = require('compile-run');
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
    let func;
    const code = req.body.code;
    const params = req.body.inputs;
    if (req.body.language === 'cpp') {
        func = cpp;
    }
    else if (req.body.language === 'python') {
        func = python;
    }
    else if (req.body.language === 'c') {
        func = c;
    }
    else if (req.body.language === 'javascript') {
        func = node;
    }
    func.runSource(code, { stdin: params })
        .then(data => {
            console.log(data);
            if (!data.stderr) {
                res.send(data.stdout);
            }
            else {
                res.status(200).send(data.stderr);
            }
        })
        .catch(err => res.status(500).send(err));
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// SERVER==================================================
app.listen(5000, () => {
    console.log('Server listening on 5000');
});