var expect = require('expect.js');
var compare = require('../util/compare');

describe('requirer', function() {

    it('should require one file', function(done) {
        compare('test1.js', function(err, src, res) {
            expect(src).to.eql(res);
            done();
        });
    });

    it('should require one file with dots in path', function(done) {
        compare('test3.js', function(err, src, res) {
            expect(src).to.eql(res);
            done();
        });
    });

    it('should require files recursively', function(done) {
        compare('test2.js', function(err, src, res) {
            expect(src).to.eql(res);
            done();
        });
    });

    it('should ignore not existing files', function(done) {
        compare('test4.js', function(err, src, res) {
            expect(src).to.eql(res);
            done();
        });
    });
});
