$(document).ready(function(){
  
    let imgLinks = ["TestImages/Signatures/1800whatever.png", "TestImages/Signatures/addyTheInstaBoy.png", "TestImages/Signatures/ampilfur.png", "TestImages/Signatures/arvlo.png", "TestImages/Signatures/BugzDrawz.png", "TestImages/Signatures/cocoaJord.png", "TestImages/Signatures/colonyBees.png", "TestImages/Signatures/demoncamile.png", "TestImages/Signatures/Doodle.png", "TestImages/Signatures/doodleNoodle.png", "TestImages/Signatures/dorkyfries.png", "TestImages/Signatures/Drawz.png", "TestImages/Signatures/evichuArt.png", "TestImages/Signatures/galchy.png", "TestImages/Signatures/hobbitCole.png", "TestImages/Signatures/paigelikesdoodles.png", "TestImages/Signatures/PinkSinsila.png", "TestImages/Signatures/posiTVT.png", "TestImages/Signatures/railyTate.png", "TestImages/Signatures/theSaylor.png", "TestImages/Signatures/tinsley.png", "TestImages/Signatures/tiredStevenArt.png"];
    
    function printitems(array, where){
        array.forEach(function(element){
            $(where).append(element);
            
        });
    }
    
    function addImgTags(link){
        return(`<img class="signature" src="` + link + `">`);
    }
    
    function addPTags(text){
        return(`<p class="awardText">` + text + `<p>`);
    }
    
    function addImgTagstoArray(arr){
        arr.forEach(function(element, index, array){
        array[index] = addImgTags(element);
            
});
    }

    addImgTagstoArray(imgLinks)
    printitems(imgLinks, "#appendee")
    /*
    console.log(addImgTags(imgLinks[0]));
    */
});