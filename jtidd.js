(function(global) {
    'use strict';

    if (typeof jQuery === 'undefined') {
        console.error('jQuery is required for JTIDD library but not found. Please include jQuery before this script.');
        return;
    }

    var $ = jQuery;

    var JTIDD = function() {};

    JTIDD.prototype.init = function() {
        var elements = $('.jtidd[class*="jt-"], .jtidd.jt-auto');

        elements.each(function() {
            var element = $(this);
            var duplicateClass = element.attr('class').match(/jt-(\d+)/);
            var isAuto = element.hasClass('jt-auto');

            if (isAuto) {
                var randomCount = Math.floor(Math.random() * 21) + 1;
                duplicateClass = ['jt-', randomCount].join('');
            }

            if (duplicateClass) {
                var duplicateCount = parseInt(duplicateClass.match(/\d+/)[0], 10);

                if (isNaN(duplicateCount) || duplicateCount < 2) {
                    console.warn('Invalid duplication count (must be a number and greater than or equal to 2):', element);
                    return;
                }

                for (var i = 1; i < duplicateCount; i++) {
                    element.after(element.clone());
                }
            } else {
                console.warn('Element does not have a valid jt- class:', element);
            }
        });
    };

    global.jtidd = new JTIDD();

}(window));
