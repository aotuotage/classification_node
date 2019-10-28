var express = require('express');
var router = express.Router();


router.all('*', function (req, res, next) {
  let mustLogin = !/^\/login|\/userinfo/.test(req.baseUrl);
  //console.log(req.session)
  let isLogin = req.session && req.session.loginInfo;
  if (!isLogin && mustLogin) {
    res.redirect('/login');
  }

  return next();
});

module.exports = router;