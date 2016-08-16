var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  global.log.debug("routes/users.js router.get('/') is run");
  res.send('respond with a resource');
});

router.get('/:userId', function(req, res, next) {
  var userId = req.params.userId;
  global.log.debug("routes/users.js router.get('/userid=" + userId + "') is run");
  if (userId == 'admin') {
    return res.json({
      userId: 'admin',
      userName: '管理员',
      userPwd: 'wtit'
    });
  } else {
    return res.json({
      userId: userId,
      userName: userId,
      userPwd: 'wms'
    });
  }
});

router.post('/', function(req, res) {
  global.log.debug("routes/users.js router.post('/') is run");
  global.log.debug("routes/users.js router.post('/'" + req.body.userId + ";req.body.userName:" + req.body.userName + ";req.body.userPwd:" + req.body.userPwd + "') is run");
  return res.json({
    status: 'OK'
  });
});

router.put('/:userId', function(req, res) {
  global.log.debug("routes/users.js router.put('/userId:" + req.body.userId + ";req.params.userId:" + req.params.userId + ";req.body.userName:" + req.body.userName + ";req.body.userPwd:" + req.body.userPwd + "') is run");
  return res.json({
    status: 'OK'
  });
});

router.delete('/:userId', function(req, res) {
  global.log.debug("routes/users.js router.delete('/userId:" + req.body.userId + ";req.params.userId:" + req.params.userId + ";req.body.userName:" + req.body.userName + ";req.body.userPwd:" + req.body.userPwd + "') is run");
  return res.json({
    status: 'OK'
  });
});

module.exports = router;
