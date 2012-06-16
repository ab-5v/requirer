var should = require('should');
var compare = require('./util/compare');

describe('basic require', function() {

    it('should require one file', function(done) {
        compare('test1.js', function(err, src, res) {
            should.not.exist(err);
            src.should.equal(res);
            done();
        });
    });
});
