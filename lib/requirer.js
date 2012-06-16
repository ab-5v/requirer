var fs = require('fs');

module.exports = {
    do: function(src, dest) {
        var dir = src.split('/').slice(0, -1).join('/') || '.';
        var data = fs.readFileSync(src, 'utf8');
        var result = data.replace(/require\(['"]([^'"]*)['"]\);?/g, function(all, src) {
            if (src) {
                var data = fs.readFileSync(dir + '/' + src, 'utf8');
                return data;
            } else {
                return '';
            }
        });

        fs.writeFileSync(dest, result, 'utf8');
    }
};
