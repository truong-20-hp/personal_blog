$ (document).ready(function(){
    $(".event__content__img--slick") .slick ({
        slidesToShow: 2,
        prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;" fdprocessedid="s57fd8"><i class="slick-arrow fa-solid fa-chevron-left"></i></button>',
        nextArrow:'<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;" fdprocessedid="w6hm7m"><i class="slick-arrow fa-solid fa-chevron-right"></i></button>'
    })
})

$ (document).ready(function(){
    $(".create-blog-img") .slick ({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:false,
        nextArrow:false,
        dots:true,
        
    })
})

$ (document).ready(function(){
    $(".container__adventure__img__big-slick") .slick ({
        slidesToShow: 1,
        prevArrow:false,
        nextArrow:false,
        fade: true,
        asNavFor: '.container__adventure__img-slick'
        
        
    })
})
$ (document).ready(function(){
    $(".container__adventure__img-slick") .slick ({
        slidesToShow: 5,
        centerPadding: '30px',
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:false,
        nextArrow:false,
        dots:true,
        asNavFor: '.container__adventure__img__big-slick',
        focusOnSelect: true
    })
})