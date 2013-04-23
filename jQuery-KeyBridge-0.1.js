/* jQuery Key Bridge - Developed by Harry Lawrence - hazbo.github.com */
(function( $ ){
    $.fn.keyBridge = function(key) {
        jQuery(this).trigger({ type: 'keypress', which: key.charCodeAt(0) });
    };
})( jQuery );