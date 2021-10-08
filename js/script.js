$(function () {
    var btn = $('.nav__burger');
    $(window).on('resize', function () {
        var width = $(window).width();
        if (width >= 768) {
            console.log('bolshe');
            $('.lang-cart__lang').removeClass('lang-fix');
            $('.lang-cart__cart').removeClass('cart-fix');
            $('.nav__logo__inner').removeClass('logo-fix');
            $('.nav__burger').addClass('not-active-burger');
            $('.nav__burger').removeClass('active-burger');
            $('.nav__burger-menu').removeClass('active_nav_burger');
            $('body').removeClass('body-overflow');
        }
        if (width <= 768) {
            console.log('menshe');
        }
        // else {
        //     console.log('menshe els');
        // }
    });
    btn.on('click', function () {

        $(this).toggleClass('active-burger');
        $(this).toggleClass('not-active-burger');
        if ($(this).hasClass('active-burger')) {
            $('.nav__burger-menu').addClass('active_nav_burger');
            $('body').addClass('body-overflow')
            $('.lang-cart__lang').addClass('lang-fix')
            $('.lang-cart__cart').addClass('cart-fix')
            $('.nav__logo__inner').addClass('logo-fix')
        }
        if ($(this).hasClass('not-active-burger')) {
            $('.nav__burger-menu').removeClass('active_nav_burger')
            $('body').removeClass('body-overflow')
            $('.lang-cart__lang').removeClass('lang-fix')
            $('.lang-cart__cart').removeClass('cart-fix')
            $('.nav__logo__inner').removeClass('logo-fix')
        }
    });
});