///*global alert:true*/
/*global event:true*/
/*global $:true*/

$("ul").on("click", "li", function () {
    'use strict';
    $(this).toggleClass("completed");
});


$("ul").on("click", "span", function (event) {
    'use strict';
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});


$("input[type='text']").keypress(function (event) {
    'use strict';
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

//$(".fa-minus").click(function(){
//    $("input[type='text']").fadeOut();
//});

$("h1").on("click", "i", function (event) {
    'use strict';
    if ($("i").hasClass('fa fa-minus')) {
        $("input[type='text']").fadeOut();
        $(this).remove();
        $("h1").append("<i class='fa fa-plus'></i>");
    } else {
        $("input[type='text']").fadeIn();
        $(this).remove();
        $("h1").append("<i class='fa fa-minus'></i>");
    }
    
});

