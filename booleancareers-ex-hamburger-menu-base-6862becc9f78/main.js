/**
 * Mostrare / nascondere il menu principale
 */

// Parte JS e jQuery
var hamburger = $('.header-right > a');
var menu = $('.header-right > ul');

// Compare menu
hamburger.dblclick(function () {
    menu.fadeIn(300);
});

// Scompare menu
hamburger.click(function() {
    menu.fadeOut();
});
