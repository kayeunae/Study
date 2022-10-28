//모바일 햄버거 버튼 클릭 시
$(".hamburger").click(function(){
    $(".mobile.hamburger").hide()  //hide: 해당 요소의 display 속성이 none으로
    $(".mobile.close").show() //display 요소를 block으로 바꿔줌
    
    $("#mobile_menu").empty() //#mobile_menu 하위 태그 초기화

    var nav = $(".nav").clone()

    $("#mobile_menu").append(nav)  //append: 내가 선택한 요소의 하위에 nav를 넣는다.
    $("#mobile_menu").show()
})

//모바일 햄버거 버튼 닫기
$(".close").click(function(){
    $(".mobile.hamburger").show()
    $(".mobile.close").hide()
    $("#mobile_menu").hide()
})

//브라우저 리사이징 될 때 모바일 메뉴 보이는 버그 방지

$(window).resize(function(){
    var width = $(window).width()

    if(width >= 767) {
        if($("#mobile_menu").is(":visible")) {
            $(".mobile.hamburger").show()
            $(".mobile.close").hide()
            $("#mobile_menu").hide()
        }
    }
})