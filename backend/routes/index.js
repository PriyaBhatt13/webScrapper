'use strict';

let heartbeat = require('../controller/heartbeat');
let analyzePage = require('../controller/analyzePage');

module.exports = (app) => {
    app.get('/api/heartbeat', heartbeat);
    app.post('/api/analyzePage', analyzePage);
};
