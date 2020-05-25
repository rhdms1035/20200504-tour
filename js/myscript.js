
var flag = true;
$(window).resize(function(){
    var winWidth = $(this).width()
    if ( winWidth > 799 && flag ) {
        $("#header").removeClass("on")
        flag = false
        console.log("강고은")

    }
})



$(".depth1 > li > a").on("mouseover focus", function(){
    if ( $(this).parents("#header").hasClass("on")) {
        $(this).next().css({display:"none"})
    } else {
        $(this).next().stop().slideDown(200)
        $(this).parent().siblings().children(".dep2box")
        .stop().slideUp(200)
    }
})

$(".depth1 > li").on("mouseleave", function(){
    $(this).children(".dep2box").stop().slideUp(400)
})

$("depth1 > li:last .depth2 > li:last > a").on("blur", function(){
    $(this).parents(".dep2box").stop().slideUp(400)
})

// 작은화면에서 햄버거모양 누르면 메뉴가나옴
$("#header .openMOgnb").on("click", function(){
    if ( !$(this).parents("#header").hasClass("on") ) {
        $(this).parents("#header").addClass("on")
    }
})

$("#header .closeMOgnb").on("click", function(){
    $(this).parents("#header").removeClass("on")
})