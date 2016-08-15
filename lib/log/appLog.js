var bunyan = require('bunyan');

function AppLog() {
  var log = bunyan.createLogger({
    name: 'bunyanweb', // Required
    streams: [{
        level: 'debug',
        path: 'D:/nodejsdemo/bunyanweblogs/debug.log',
      }, {
        level: 'info',
        path: 'D:/nodejsdemo/bunyanweblogs/info.log'
      }, {
        level: 'warn',
        path: 'D:/nodejsdemo/bunyanweblogs/warn.log'
      }, {
        level: 'error',
        path: 'D:/nodejsdemo/bunyanweblogs/error.log'
      }, {
        level: 'fatal',
        path: 'D:/nodejsdemo/bunyanweblogs/fatal.log'
      }]
      /*
        level: < level name or number > , // Optional, see "Levels" section
        stream: < node.js stream > , // Optional, see "Streams" section
        streams: [ < bunyan streams > , ...], // Optional, see "Streams" section
        serializers: < serializers mapping > , // Optional, see "Serializers" section
        src: < boolean > , // Optional, see "src" section

        // Any other fields are added to all log records as is.
        foo: 'bar',
        ...*/
  });
  this.getLog = function() {
    log.debug("appLog.js getLog is run");
    return log;
  };
}
module.exports = AppLog;
