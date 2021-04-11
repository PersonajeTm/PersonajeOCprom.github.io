$(document).ready(function(){
    
    var width = $(window).width(); 
    var height = $(window).height(); 
    
    let pageHTML = `<div>
                    <img class="piece" src="TestImages/Pages/herriochi.png">
                    <img class="artist" src="TestImages/Signatures/herriochi.png">
                  </div>`;
    
    let images = ["TestImages/Pages/herriochi.png", "TestImages/Pages/drawz.png", "TestImages/Pages/DoodleNbluJay.png", "TestImages/Pages/Doodle.jpeg", "TestImages/Pages/galchy.png", "TestImages/Pages/seviche.png", "TestImages/Pages/chayse.png", "TestImages/Pages/tina.png", "TestImages/Pages/artistaTe.png", "TestImages/Pages/tinsley.jpg", "TestImages/Pages/cocoajord.png", "TestImages/Pages/yysdrmz.png", "TestImages/Pages/demonCamille.png", "TestImages/Pages/misttox.png", "TestImages/Pages/chwerrii.png", "TestImages/Pages/arvlo.png", "TestImages/Pages/thesaylor.jpg", "TestImages/Pages/mayInJune.png", "TestImages/Pages/pinkSinsila.png", "TestImages/Pages/gothamGirl1.jpg", "TestImages/Pages/gothamGirl2.jpg", "TestImages/Pages/smaem.png", "TestImages/Pages/1800whatever.png", "TestImages/Pages/cocoCereal.png", "TestImages/Pages/geluk.png", "TestImages/Pages/izzyfied.jpeg", "TestImages/Pages/dorkyfries.png", "TestImages/Pages/railytate1.jpg", "TestImages/Pages/railytate2.jpg", "TestImages/Pages/railytate3.jpg", "TestImages/Pages/dragontonic.png", "TestImages/Pages/magicgirlobsessed.jpeg", "TestImages/Pages/slntbutterfly.png", "TestImages/Pages/fluffyhobbit1.png", "TestImages/Pages/fluffyhobbit2.jpg", "TestImages/Pages/broccolityme.png", "TestImages/Pages/kreamesodapop.jpg", "TestImages/Pages/evichu.jpg", "TestImages/Pages/ampilfur.jpg", "TestImages/Pages/mk.jpg", "TestImages/Pages/colonybees.png", "TestImages/Pages/soulbird.png", "TestImages/Pages/miimaas.jpg", "TestImages/Pages/miimaas2.jpg"];
    let artists = ["TestImages/Labels/herriochi.png", "TestImages/Labels/Drawz.png", "TestImages/Labels/doodlelolimvgaydraws.png", "TestImages/Labels/Doodle.png", "TestImages/Labels/galchy.png", "TestImages/Labels/seviche.png", "TestImages/Labels/chayse.png", "TestImages/Labels/stormiikktyysdrmz.png", "TestImages/Labels/artistaTe.png", "TestImages/Labels/tinsley.png", "TestImages/Labels/cocoaJord.png", "TestImages/Labels/yysdrmz.png", "TestImages/Labels/demoncamile.png", "TestImages/Labels/misttox.png", "TestImages/Labels/chwerrii.png", "TestImages/Labels/arvlo.png", "TestImages/Labels/theSaylor.png", "TestImages/Labels/mayinjune.png", "TestImages/Labels/PinkSinsila.png", "TestImages/Labels/gothamGirlSketches.png", "TestImages/Labels/gothamGirlSketches.png", "TestImages/Labels/smaem.png", "TestImages/Labels/1800whatever.png", "TestImages/Labels/cococerealyysdrmz.png", "TestImages/Labels/geluk.png", "TestImages/Labels/Izzyfied.png", "TestImages/Labels/dorkyfries.png", "TestImages/Labels/railytate.png", "TestImages/Labels/railytate.png", "TestImages/Labels/railytate.png", "TestImages/Labels/geluk.png", "TestImages/Labels/magicgirlobsessed.png", "TestImages/Labels/slntbutterfly.png", "TestImages/Labels/hobbitcole.png", "TestImages/Labels/hobbitcole.png", "TestImages/Labels/broccolityme.png", "TestImages/Labels/kreamesodapop.png", "TestImages/Labels/evichuArt.png", "TestImages/Labels/ampilfur.png", "TestImages/Labels/mk.png", "TestImages/Labels/colonybees.png", "TestImages/Labels/soulbird.png", "TestImages/Labels/enisthemenace.png", "TestImages/Labels/enisthemenace.png"];
    let max = 44;
    
    if ((height > width) || (height >= (width - 200))) {
        var position = 0;
        // CSS SHIT
        $("body").css("background-color", "yellowgreen");
        $(".rightPage").remove();
        $(".leftPage").remove();
        $("#holding").remove();
        $("#holderDiv").remove();
        $("#placeholder").html(pageHTML);
        $("body").append(`<div style=" width: 100%; display: flex; justify-content: center; position: fixed; top: 5%;" id="homeHolder"><a href="main.html"><button style="height:50px;width:50px;"><img style="width:100%;" src="TestImages/home.png"></button></a></div>`);
        
        $(".container").css("background-image", "url(/TestImages/bgtest3.png)"); 
        $(".container").css("background-color", "transparent");
        $(".container").css("border-radius", "0");
        $(".container").css("padding", "2%");
        $(".piece").css("max-width", "80%");
        $(".piece").css("min-width", "75%");
        $(".piece").css("display", "block");
        $(".piece").css("margin", "auto");
        /// CSS END
        
        function updateSite(){
            $(".piece").attr("src", images[position]);  
            $(".artist").attr("src", artists[position]);
            
            
        }
        

        $("#next").click(function(){
            if (position === max){
                position = max;
                }else{
                    position++; 
                }
            updateSite();
            
        });
        
        $(".previous").click(function(){
           
            if (position === 0){
                position = 0;
            }else {
                position--; 
            }
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
        $(".rightPage .artist").attr("src", artists[position +1]);
        $(".leftPage .piece").attr("src", images[position]);
        $(".leftPage .artist").attr("src", artists[position]);
        
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
    
    function changeBG(number){
        
        let firstbg = `url("TestImages/sky3.png")`;
        let secondbg = `url("TestImages/sky.png")`;
        let thirdbg = `url("TestImages/sky2.png")`;
        
        if (number === 1){
            $("body").css("background-img", firstbg);
            }
        else if (number === 2){
            $("body").css("background-img", secondbg);
        }
        else if (number === 3){
              $("body").css("background-img", thirdbg);   
                 }
    }
        
    
    // rerender

});

