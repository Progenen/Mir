
function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();

    const gratitudes = new Swiper('.gratitude_slider ', {
        pagination: {
          el: '.gratitude_pager',
          clickable: true,
        },
        effect: 'coverflow',
        centeredSlides: true,
        // loop: true,
        initialSlide: 3,
        slidesPerView: 3,
        coverflowEffect: {
            rotate: 0,
            stretch: 700,
            depth: 150,
            slideShadows : false
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    slideShadows : false
                },
            },
            550: {
                slidesPerView: 1,
            },
            1240: {
                slidesPerView: 2,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 700,
                    depth: 150,
                    slideShadows : false
                },
            }
        },
    });