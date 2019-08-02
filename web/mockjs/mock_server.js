let express = require('express');
let Mock = require('mockjs');

let app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'x-requested-with, x-ui-request, token');
    next();
});

app.get('email', function(req, res){
    res.send(Mock.mock({
        'status': 200,
        'email': '@email',
    }))
})

app.put('/user/password', function(req, res){
    res.send(Mock.mock({
        'status': 200,
        'email': '@email',
    }))
})

app.listen('8090', () => {
    console.log('listening port: 8090')
})
