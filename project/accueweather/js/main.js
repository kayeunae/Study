
var cityList = ["seoul", "incheon", "busan", "gwangju", "jeju", "jeonju"]

//자바스크립트의 foreach와 같은 기능. (여기서는 jquery 사용)
$(".temp").each(function(i){
    var temp = getCurrentTemp(cityList[i])
    var iconURL = "https://openweathermap.org/img/wn/"
    //this: 현재 이벤트가 발생하는 요소 (여기서는 각 지역의 temp)
    $(this).text(temp.celsius + "℃")
    $(this).prev().children().attr("src", iconURL + temp.icon + ".png")
})

$(".location").on({
    "click" : function() {
        var q = $(this).children(".q").attr("id")
        var redirectURL = "pages/weather_location.html?q=" + q
        location.href = redirectURL
    }
})