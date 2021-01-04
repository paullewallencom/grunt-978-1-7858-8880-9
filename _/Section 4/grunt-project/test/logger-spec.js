define(function (require) {
    'use strict';

    var logger = require('modules/logger');

    describe('the #log(input) method', function () {
        var console = window.console;

        beforeEach(function () {
            spyOn(console, 'log');
        });

        it('logs the input to the console', function () {
            var testString = 'test';

            logger.log(testString);

            expect(console.log).toHaveBeenCalledWith(testString);
        });
    });
});
