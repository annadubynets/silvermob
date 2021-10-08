var NavbarTools = NavbarTools || {}

NavbarTools.startScrollTracking = function() {
    var $nav = $(".main-navbar");
    if ($nav.length > 0) {
        $(window).on('scroll', function() {
            markNavbarScrolledIfNeeded();
        });

        markNavbarScrolledIfNeeded();
    }

    function markNavbarScrolledIfNeeded() {
        $nav.toggleClass('scrolled', $(this).scrollTop() != 0);
    }
}

$(function() {
    NavbarTools.startScrollTracking();
})