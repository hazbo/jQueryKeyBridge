(function( $ ){
    $.fn.keyBridge = function(key) {
        jQuery(this).trigger({ type: 'keypress', which: key.charCodeAt(0) });
    };
})( jQuery );