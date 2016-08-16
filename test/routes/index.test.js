var app = require('../../app');
var request = require('supertest')(app);
var should = require("should");

describe('test/index.test.js', function() {
  // describe声明了一个TestSuit(测试集合)，而且测试集合可以嵌套管理
  var loginname = 'yuanzm' + Math.random(1);
  var password = 'password';

  describe('sign up', function() {
    it('get / is not return 200', function(done) {
      // it声明定义了一个具体的测试用例
      // .query 方法用来传 querystring，.send 方法用来传 body。
      // 它们都可以传 Object 对象进去。
      // 在这里，我们等于访问的是 /fib?n=10
      request.get('/').end(function(err, res) {
        // 由于 http 返回的是 String，所以我要传入 '55'。
        // console.log("res:" + res.status);
        // console.log("res.text:" + res.text);
        should.not.exist(err);
        res.status.should.equal(200);
        // done(err) 这种用法写起来很鸡肋，是因为偷懒不想测 err 的值
        // 如果勤快点，这里应该写成
        /*
        should.not.exist(err);
        res.text.should.equal('55');
        */
        done(err);
      });
    });
  });
});
