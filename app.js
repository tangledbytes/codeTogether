const evaluate = require('./eval');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// Initialise express ========================================================
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'build')));
const PORT = process.env.PORT || 5000;

// ============================================================================
// ROUTES =====================================================================
// @route POST /eval
// @desc handles the requests to evaluate/compile the codes
// @access PUBLIC
app.post('/eval', (req, res) => {
    const code = req.body.code;
    const input = req.body.input;
    const language = req.body.language;
    evaluate(language, code, input, (err, data) => {
        if (err)
            res.status(500).send({ "msg": "Some error occured" });
        else {
            if (!data.stderr) res.send(data.stdout);
            else res.status(200).send(data.stderr);
        }
    })
});

// @route GET /*
// @desc Serves React enriched static content 
// @access PUBLIC
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// ================================================================================
// SERVER =========================================================================
app.listen(PORT, () => {
    console.log('Server listening on', PORT);
});