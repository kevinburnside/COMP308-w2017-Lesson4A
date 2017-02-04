let express = require('express');
let router = express.Router();

// Global Route Variables
let currentDate = new Date();
  currentDate = currentDate.toLocaleTimeString();

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
 
   });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('index', {
    title: 'About'
   });
});

/* GET services page. */
router.get('/services', (req, res, next) => {
  res.render('index', {
    title: 'Services'
   });
});

/* GET about page. */
router.get('/contact', (req, res, next) => {
  res.render('index', {
    title: 'Contact'
   });
});

module.exports = router;
