$("a").click(function () {

    $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top -20+ "px"}, 500);

    return false;//不要这句会有点卡顿

});

//滚动加class
// $(function(){
//         $(window).scroll(function() {
//             if($(window).scrollTop() >= 100) {
//                 $(".navbar").addClass("nav_bg");
//             }else{
//                 var current = $(".navbar");
//                 current.removeClass("nav_bg");
//                 current = $(this);
//             }
//         })
//     }
// );

//滚动改变透明度
function topNavScroll(){
    //获取当前窗口滚动条顶部所在的像素值 并取整
    var topScroll = Math.floor($(window).scrollTop());
    //设置滚动多少像素后透明度变为1
    var scrollDist = 180;
    //定义滚动条在向下滚动180像素后 变成完全不透明
    if(topScroll <= scrollDist){
        //通过浏览器标题栏显示并检查数据
        //document.title = topScroll + '-' + opacity;
        //计算当前透明度 当前所在的像素 除 180(topScroll的最大值 因为透明度的值是0-1之间的小数)
        $('.nav_bg').css('opacity',topScroll/scrollDist);
    }
    else{
        $('.nav_bg').css('opacity',1);
    }
}
$(window).on('scroll',function() {
    topNavScroll();
});
