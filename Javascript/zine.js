$(document).ready(function(){
    
    var width = $(window).width(); 
    var height = $(window).height(); 

    if (height > width) {
    console.log("mobile");
        $("body").remove();
    }
    else {
        
    let position = 0;
    let images = ["TestImages/Pages/herriochi.png", "TestImages/Pages/drawz.png", "TestImages/Pages/DoodleNbluJay.png", "TestImages/Pages/Doodle.jpeg", "TestImages/Pages/galchy.png", "TestImages/Pages/seviche.png", "TestImages/Pages/chayse.png"];
    let artists = [];
    let max = 7;
    
    $("#next").click(function(){
 // CHANGE IF MAX IS AN EVEN NUMBER
        if (position < max - 1){
            position+= 2;
        }
            updateSite();
    
    });
    
    $("#prButton").click(function(){

        if (position > 0){
            position-= 2;
        }
            updateSite();
        
    });
    
    function updateSite(){
        $(".rightPage .piece").attr("src", images[position +1]);
        $(".leftPage .piece").attr("src", images[position]);
        
            if (position == max - 1){
            $(".rightPage .piece").hide();
            $(".rightPage .artist").hide();
            }
        else {
            $(".rightPage .piece").show();
            $(".rightPage .artist").show();
        }
    }
        
    }
    
    
        
    
    
    
});