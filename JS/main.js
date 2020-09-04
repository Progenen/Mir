
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
            slideShadows : false,
        },
        breakpoints: {
            300: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: 200,
                    depth: 150,
                    slideShadows : false,
                },
            },
            400: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: 200,
                    depth: 150,
                    slideShadows : false,
                },
            },
            500: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: 300,
                    depth: 150,
                    slideShadows : false,
                },
            },
            600: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: 300,
                    depth: 150,
                    slideShadows : false,
                },
            },
            700: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: 400,
                    depth: 150,
                    slideShadows : false,
                },
            },
            800: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: 350,
                    depth: 150,
                    slideShadows : false,
                },
            },
            1300: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: 300,
                    depth: 150,
                    slideShadows : false,
                },
            },
            1500: {
                coverflowEffect: {
                    rotate: 0,
                    stretch: 300,
                    depth: 150,
                    slideShadows : false
                },
            }
        }
    });