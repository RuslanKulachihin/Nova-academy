let isMobile = window.innerWidth < 768;

window.addEventListener('load', () => {
    initMobileMenu();
    scrollNav();
    scrollA();
    cf7Popup();
    headerScroll();
});

function initMobileMenu() {
    const mobileMenu = document.querySelector('.header-menu__mobile');
    const burger = document.querySelector('.header-burger');

    if (mobileMenu) {
        burger.addEventListener('click', function () {
            if (!mobileMenu.classList.contains('mobile-menu--active')) {
                mobileMenu.classList.add('mobile-menu--active');
                burger.classList.add('header-burger--active');
            } else {
                mobileMenu.classList.remove('mobile-menu--active');
                burger.classList.remove('header-burger--active');
            }
        });
    }
}

function headerScroll() {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 1) {
            $('header').addClass('header-fixed');
        } else {
            $('header').removeClass('header-fixed');
        }
    });
}

// плавность якорей
function scrollNav() {
    jQuery('.header-menu a').click(function () {
        jQuery('.active').removeClass('active');
        jQuery(this).addClass('active');

        jQuery('html, body')
            .stop()
            .animate(
                {
                    scrollTop: jQuery(jQuery(this).attr('href').replace('/', '')).offset().top - 160,
                },
                500
            );
        return false;
    });
}

function scrollA() {
    jQuery('.btnA').click(function () {
        jQuery('.active').removeClass('active');
        jQuery(this).addClass('active');

        jQuery('html, body')
            .stop()
            .animate(
                {
                    scrollTop: jQuery(jQuery(this).attr('href').replace('/', '')).offset().top - 160,
                },
                500
            );
        return false;
    });
}

function cf7Popup() {
    document.addEventListener(
        'wpcf7mailsent',
        function (event) {
            let id = event.detail.contactFormId;
            if (id == 11 || id == 80) {
                document.querySelector('.popup-success').style.display = 'flex';
            }
        },
        false
    );

    $('.popup-success__close').on('click', function () {
        document.querySelector('.popup-success').style.display = 'none';
    });
}

$("input[type='tel']").mask('+7(999) 999-9999');

document.querySelectorAll('.wpcf7-textarea').forEach((el) => {
    el.addEventListener('input', () => {
        if (el.value !== '' && el.value !== null) {
            el.style.minHeight = '200px';
        }
    });
});
