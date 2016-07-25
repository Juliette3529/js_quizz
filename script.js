$(document).ready(function () {
            /*function echec() {
                if ($(this).hasClass("false")) {
                    $(this).css("border", "1px solid red");
                } else {
                    $(this).css("border", "1px solid green");
                }

            };*/
  /*  function green () {
        if($("button").hasClass("good")){
        $(".Reponse_true").css("border", "2px solid green");
    }
    };
    function red (){
        if($("button").hasClass("false")){
        $(".Reponse").css("border", "1px solid red");
    }
    };
                  
    $("button").click(function(){
        green(); red();
});*/
$(".false").click(function () {
    $(this).css("background", '#B26755');
    $(".good").css("background", '#55B270');
});

$(".good").click(function () {
    $(this).css("background", '#55B270');
    $(".false").hide();
});
});
