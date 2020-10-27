/**
 * Menu hamburger
 */

// Parte JS e jQuery
var hamburgerIcon = $('.header-right > a');
var menu = $('.hamburger-menu');
var closeIcon = $('.hamburger-menu .close');

// Compare menu
hamburgerIcon.click(function () {
    menu.addClass('active');
});

// Scompare menu
closeIcon.click(function() {
    menu.removeClass('active');
});
