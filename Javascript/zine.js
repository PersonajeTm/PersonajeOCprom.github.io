$(document).ready(function(){
    
    var width = $(window).width(); 
    var height = $(window).height(); 
    
    let pageHTML = `<div>
                    <img class="piece" src="TestImages/Pages/herriochi.png">
                    <img class="artist" src="TestImages/Signatures/herriochi.png">
                  </div>`;
    let images = ["TestImages/Pages/herriochi.png", "TestImages/Pages/drawz.png", "TestImages/Pages/DoodleNbluJay.png", "TestImages/Pages/Doodle.jpeg", "TestImages/Pages/galchy.png", "TestImages/Pages/seviche.png", "TestImages/Pages/chayse.png", "TestImages/Pages/tina.png", "TestImages/Pages/artistaTe.png"];
    let artists = [];
    let max = 9;
    
    if ((height > width) || (height >= (width - 200))) {
        var position = 0;
        // CSS SHIT
        $("body").css("background-color", "yellowgreen");
        $(".rightPage").remove();
        $(".leftPage").remove();
        $("#placeholder").html(pageHTML);
        
        $(".container").css("background-image", "url(/TestImages/bgtest3.png)"); 
        $(".container").css("padding", "2%");
        $(".piece").css("max-width", "80%");
        $(".piece").css("min-width", "75%");
        $(".piece").css("display", "block");
        $(".piece").css("margin", "auto");
        /// CSS END
        
        function updateSite(){
            $(".piece").attr("src", images[position]);   
        }
        

        $("#next").click(function(){
            if (position === max){
                position = max;
                }else{
                    position++; 
                }
            console.log(position);
            updateSite();
        });
        
        $(".previous").click(function(){
           
            if (position === 0){
                position = 0;
            }else {
                position--; 
            }
            console.log(position);
            updateSite();
        });
        
        
        
        
        
        
        
    }
    else {
           let position = 0;
    
    
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