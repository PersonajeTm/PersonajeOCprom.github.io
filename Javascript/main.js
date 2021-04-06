$(document).ready(function(){

$(".taboff").mouseover(function(){
   $(".tagAlong").addClass("grow");
    var tabColor = $(this).data("color");
    $(".tagAlong").css("background-color", tabColor);
    
});

$(".taboff").mouseout(function(){
   $(".tagAlong").removeClass("grow");
    $(".tagAlong").css("background-color", "black");
});
    
$("#onTab").mouseover(function(){
   $(".still").addClass("grow2");
});
    
$("#onTab").mouseout(function(){
   $(".still").removeClass("grow2");
});
    

    
});