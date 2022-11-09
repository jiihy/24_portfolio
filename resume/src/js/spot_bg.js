$(document).ready(function() {

var html = '';
for (var i = 1; i <= 50; i ++) {
    html += '<div class="shape-container--'+i+' shape-animation"><div class="random-shape"></div></div>';
}
  
document.querySelector('.shape').innerHTML += html;

var $allShapes = $("[class*='shape-container--']");
$('.button').click(function (event) {
    $allShapes.toggleClass("stop-shape");
    var $this = $(this);
    $this.toggleClass('.button');
    if($this.hasClass('.button')){
        $this.text('You made my day');         
    } else {
        $this.text('Open this resume');
    }
    event.preventDefault();
});



});

// 

// scroll
var scrollTopRatio;
function getScrollTop() {
    if (document.scrollingElement && document.scrollingElement.scrollHeight) {
        scrollTopRatio = $(document).height() / document.scrollingElement.scrollHeight;
    } else {
        scrollTopRatio = 1;
    }
    return $(window).scrollTop() * scrollTopRatio;
}

// motion
function aniChecker() {
    $('.motion, .underline').each(function(index){
        var pos = $(this).offset(), wY = getScrollTop(), wH = $(window).height(), oH = $(this).outerHeight();
        var posTop = pos.top;
        if (posTop >= wY && oH + posTop <= wY + wH ){
            $(this).addClass('on');
        } else if ((posTop <= wY && posTop + oH > wY) || (posTop  >= wY && posTop  <= wY + wH - 200)){
            $(this).addClass('on');
        }
    });
}

$(window).scroll(function(){
    aniChecker();
});


// spot click

