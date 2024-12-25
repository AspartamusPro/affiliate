$(document).ready(function(){
    $('.trust__slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:2.9,
        slidesToScroll:2,
        speed:1000,
        easing:'ease',
        infinite:false,
        initialSlide:0,
        responsive:[
            {
                breakpoint:870,
                settings:{
                    slidesToShow:1
                }
                },{
                    breakpoint:730,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1

                }
            }

         /*mobileFirst:false  */
           
        ]
     /*   autoplay:true,
        autoplaySpeed:1500
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggable:false,
        swipe:false,
        touchThreshold:5,
        touchMove:false
        waitForAnimate:true,
        centerMode:true,
        centerMode:false,
        variableWidth:false,
        rows:2,
        slidesperRow:2,
         vertical:false,
         verticalSwiping:false,
         fade:false,
        */
      
       


        

    });

});