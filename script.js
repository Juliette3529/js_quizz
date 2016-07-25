$(document).ready(function () {
     var score = 0;
$(".false").click(function () {
    $(this).css("background", '#B26755');
});
$(".good").click(function () {
    $(this).css("background", '#55B270');
    score ++
});
$("Felicitations").html('Vous avez'+ score +'/10');
});



function questionSuivante1() {
    $("#question2").css("display", "block");
}
function questionSuivante2() {
    $("#question3").css("display", "block");
}
function questionSuivante3() {
    $("#question4").css("display", "block");
}
function questionSuivante4() {
    $("#question5").css("display", "block");
}
function questionSuivante5() {
    $("#question6").css("display", "block");
}
function questionSuivante6() {
    $("#question7").css("display", "block");
}
function questionSuivante7() {
    $("#question8").css("display", "block");
}
function questionSuivante8() {
    $("#question9").css("display", "block");
}
function questionSuivante9() {
     $("#question10").css("display", "block");
}
function questionPrecedente2() {
    $("#question1").css("display", "block");
}
function questionPrecedente3() {
    $("#question2").css("display", "block");
}
function questionPrecedente4() {
    $("#question3").css("display", "block");
}
function questionPrecedente5() {
    $("#question4").css("display", "block");
}
function questionPrecedente6() {
    $("#question5").css("display", "block");
}
function questionPrecedente7() {
    $("#question6").css("display", "block");
}
function questionPrecedente8() {
    $("#question7").css("display", "block");
}
function questionPrecedente9() {
    $("#question8").css("display", "block");
}
function questionPrecedente10() {
    $("#question9").css("display", "block");
}
