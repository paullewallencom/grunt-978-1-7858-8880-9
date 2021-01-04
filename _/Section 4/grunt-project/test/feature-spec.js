define(function (require) {
    'use strict';

    var feature = require('modules/feature');

    describe('the #version property', function () {

        it('contains a version string', function () {
            var version = feature.version;

            // a simple test
            expect(typeof version).toBe('string');
        });

    });
});
