$(document).ready(function(){
    
    let position = 0;
    let images = ["TestImages/Signatures/1800whatever.png", "TestImages/Signatures/addyTheInstaBoy.png", "TestImages/Signatures/ampilfur.png", "TestImages/Signatures/arvlo.png", "TestImages/Signatures/BugzDrawz.png"];
    let artists = [];
    let max = 5;
    
    $("#next").click(function(){
        
        if (position >= max){
            position = max-1;
            }
        position++;
        console.log(position);
    });
    
    $("#previous").click(function(){
        if (position === 0) {
            position = 1;
            }
        position--;
        console.log(position)
    });
    
    function updateSite(){
        $(".leftPage.piece").attr("source", images[position]);
    }
    
    $("button").click(function(){
        updateSite;
    });
    
    
});