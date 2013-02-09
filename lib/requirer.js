var fs = require('fs');
var path = require('path');

var replace = function(data, dir) {

    var result = data.replace(/require\(['"]([^'"]*)['"]\);?/g, function(all, src) {
        var full = dir + '/' + src;
        if (full && fs.existsSync(full)) {
            var data = fs.readFileSync(full, 'utf8');
            return replace(data, dir);
        } else {
            return '';
        }
    });

    return result;
}

module.exports = {
    do: function(src, dest) {
        var dir = path.normalize(src.split('/').slice(0, -1).join('/') || '.');
        var data = fs.readFileSync(src, 'utf8');
        var result = replace(data, dir);
        fs.writeFileSync(dest, result, 'utf8');
    }
};
