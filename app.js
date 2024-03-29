const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const evaluate = require('./lib/eval');

// Initialise express ========================================================
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
        if (err) res.status(500).send({ "msg": "Some error occured" });
        else res.send(data);
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
server.listen(PORT, () => {
    console.log('Server listening on', PORT);
});