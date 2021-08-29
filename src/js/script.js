$(document).ready(function() {
    
    $('.slider__inner').owlCarousel({
        items: 1,
        center: true,
        loop: true,
        nav: true,
        navText: ["<img src='../images/icons/arrow-left.svg'>","<img src='../images/icons/arrow-right.svg'>"],
        responsive: {
            0: {
                nav: false
            },
            768: {
                nav: true
            }
        }
    });
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('section.catalog').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    toggleItem('.catalog-item__link');
    toggleItem('.catalog-item__back');

    $('[data-modal=consult]').on("click", function() {
        $('.overlay, #consult').fadeIn();
    });
    $('.modal__close').on("click", function() {
        $('.overlay, #consult, #buy, #thanks').fadeOut('slow');
    });


    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#buy .modal__desc').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #buy').fadeIn();
        })
    });
}); 

function toggleItem(link) {
    $(link).each(function(i) {
        $(this).on("click", function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass("catalog-item__content_active");
            $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
        })
    });
}