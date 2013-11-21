/*jslint node: true, unparam: true, nomen: true */
/*global exec */

'use strict';

var fs = require("fs"),
    express = require("express"),
    app = express();

app.use(express.static(__dirname));

app.listen(8110);
console.log("Server running at http://localhost:8110 - get app.html or app-built.html");