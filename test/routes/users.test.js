var app = require('../../app');
var request = require('supertest')(app);
var should = require("should");

describe('test/users.test.js', function() {

  describe('sign up', function() {
    it('get /users is not return 200', function(done) {
      request.get('/users').end(function(err, res) {
        should.not.exist(err);
        res.status.should.equal(200);
        done(err);
      });
    });

    it('get /users/:userId is not return admin', function(done) {
      request.get('/users/admin')
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          console.log("get /users/:userId res:" + res.body);
          console.log("get /users/:userId res.body.userId:" + res.body.userId + ";res.body.userName:" + res.body.userName + ";res.body.userPwd:" + res.body.userPwd);
          if (err) return done(err);
          res.body.userId.should.equal('admin');
          res.body.userName.should.equal('管理员');
          res.body.userPwd.should.equal('wtit');
          done();
        });
    });

    it('post / is not return admin', function(done) {
      var body = {
        userId: 'lb',
        userName: '刘波',
        userPwd: '123'
      };
      request.post('/users')
        .send(body)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          console.log("post / res.body:" + res.body);
          console.log("post / res.status:" + res.status);
          console.log("post / res.body.status:" + res.body.status);
          if (err) return done(err);
          res.body.status.should.equal('OK');
          done();
        });
    });

    it('put /:userId is not return admin', function(done) {
      var body = {
        userId: 'lb',
        userName: '刘波',
        userPwd: '123'
      };
      request.put('/users/admin')
        .send(body)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          console.log("put / res.body:" + res.body);
          console.log("put / res.status:" + res.status);
          console.log("put / res.body.status:" + res.body.status);
          if (err) return done(err);
          res.body.status.should.equal('OK');
          done();
        });
    });

    it('del /:userId is not return admin', function(done) {
      var body = {
        userId: 'lb',
        userName: '刘波',
        userPwd: '123'
      };
      request.del('/users/admin')
        .send(body)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          console.log("del / res.body:" + res.body);
          console.log("del / res.status:" + res.status);
          console.log("del / res.body.status:" + res.body.status);
          if (err) return done(err);
          res.body.status.should.equal('OK');
          done();
        });
    });

  });
});
