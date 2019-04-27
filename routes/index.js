var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
     title: 'Express',
     layout: 'layout.ejs'
   });
});


router.get('/about', function(req, res){
  res.render('about', {
    title: 'About'
  });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});

  router.get('/login', function(req, res){
    res.render('login', {
      title: 'Login'
    });
   });
   router.get('/pay',function(req,res){
     res.render('pay', {
       title: 'Pay'
     });
   });
    router.get('/register', function(req, res){
      res.render('register', {
        title: 'Register'
      });
});
router.get('/booking', function(req, res){
    res.render('booking', {
      title: 'Booking'
    });
  });
  router.get('/event', function(req, res){
    res.render('event', {
      title: 'Event Registration'
    });
  });

module.exports = router;
