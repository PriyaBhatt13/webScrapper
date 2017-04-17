'use strict';

let express = require('express');
let app = express();
let routes = require('./routes');
app.use(express.static('frontend'));

routes(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'));