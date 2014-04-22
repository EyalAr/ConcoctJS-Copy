var should = require('should');

describe("ConcoctJS - Copy plugin test", function() {

    var Concoction = require('concoct'),
        options = {
            templates: [],
            contexts: [],
            plugins: [{
                name: 'concoct-copy',
                handler: require('../../'),
                params: {
                    src: './test/source',
                    dest: './test/dest'
                }
            }]
        },
        c;

    before(function(done) {

        // erase everything is the dest directory

        var rimraf = require('rimraf'),
            fs = require('fs');

        rimraf('./test/dest', function(err) {

            if (err) return done(err);

            fs.mkdir('./test/dest', done);

        });

    });

    before(function(done) {

        c = new Concoction(options);
        c.concoct(done);

    });

    it('should copy two files', function(done) {

        var fs = require('fs');

        fs.readdir('./test/dest', function(err, list) {

            if (!err) {
                list.should.be.length(2);
            }

            done(err);

        });

    });

});