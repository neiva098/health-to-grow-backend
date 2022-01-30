"use strict";
exports.__esModule = true;
var express_1 = require("express");
var routes = (0, express_1.Router)();
routes.get('/', function (req, res) {
    res.send('Health to Grow Service 1.0.0');
});
exports["default"] = routes;
