var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: '登录' });
});
router.post('/req', function(req, res, next) {
    let logindata = [
        {name: 'admin', password: 'zhangaobolilei'},
        {name: 'admin1', password: 'zhangaobo'},
        {name: 'admin2', password: 'lilei'},
        {name: 'admin3', password: 'ceshi'},
    ];
    let data;
    for(let i=0; i<logindata.length; i++){
        if(logindata[i].name === req.body.name && logindata[i].password === req.body.password){
            data = {
                code:200,
                msg:"登录成功"
            };
            req.session.loginInfo = {
                name: req.body.name,
                password: req.body.password,
                states:1
            };
            break;
        }else{
            data = {
                code:500,
                msg:"用户名或密码错误"
            };
        }
    }
    res.send(JSON.stringify(data));
});

module.exports = router;
