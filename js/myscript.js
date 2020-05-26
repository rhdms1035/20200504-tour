
// 스크롤을 내리면 탑버튼이 보이고 안보이고
$(window).scroll(function(){
    var sct = $(this).scrollTop();
        if ( $("html").hasClass("mobile")){
            if (sct > 50) {
                $("to_top").show()
            } else {
                $("to_top").hide()
            }
        } else {
            $("to_top").show()
        }
})

// 탑버튼을 누르면 자연스럽게 위로 
$(".to_top").on("click", function(){
    $("body, html").animate({scrollTop:"0px"}, 600)
})

// 화면사이즈가799커지면 클래스가 민티드
function init() {
    var winWidth = $(window).width()
    if ( winWidth > 799 ) {
        $("#header").removeClass("on")
        $("html").addClass("minTb").removeClass("mobile")

// 화면사이즈가 799보다 작아지면 클래스가 모바일로 됨
    } else {
        $("html").addClass("mobile").removeClass("minTb")
    }
}

// function init()에 담은 값을 여기에서 불러서 출력
$(window).resize(function(){
    init()
})

$(window).resize(function(){
    init()
})

$(window).load(function(){
    $(this).width()
})

$(".depth1 > li > a").on("mouseover focus", function(){
    if ( $(this).parents("#header").hasClass("on")) {
        $(this).next().fadeOut(0)
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