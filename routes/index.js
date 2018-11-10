const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.render('home',{title : 'home'});
});

router.get('/about-me',(req,res) => {
    res.render('about-me',{title : 'about me'});
});

module.exports = router;