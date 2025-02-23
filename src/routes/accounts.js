const express = require('express');
const router = express.Router();

const {accounts} = require('../data');

router.get('/savings',function(req, res){
	res.render('account',{account: accounts.savings });
})

router.get('/checking',function(req, res){
	res.render('account',{account: accounts.checkings });
})

router.get('/credit',function(req, res){
	res.render('account',{account: accounts.credit });
})

module.exports = router