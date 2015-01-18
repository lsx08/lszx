/**
 * 配置路由规则
 */
var express = require('express');
var router = express.Router();

var redirect_welcome = require('../redirect/redirect_welcome');

var handler_welcome = require('../handlers/handler_welcome');

//ui
router.get('/', redirect_welcome);//welcome

//data
router.get("/data/welcome", handler_welcome);//welcome

module.exports = router;
