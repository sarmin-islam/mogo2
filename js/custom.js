$(function(){
    var scrollTop =$('.back-to-up');

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > 600){
            scrollTop . fadeIn();
        }else{
            scrollTop . fadeOut();
        }
        
    if(scrolling >600){
        $('.menu-bg').addClass('fixed-nav');
    }else{
        $('.menu-bg').removeClass('fixed-nav');
    }

    });
    scrollTop. click(function(){
        $('html,body') .animate({
            scrollTop:0,
        } ,1500);
    });

});