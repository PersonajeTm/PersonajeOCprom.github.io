$(document).ready(function(){
  
    let imgLinks = ["TestImages/Signatures/1800whatever.png", "TestImages/Signatures/addyTheInstaBoy.png", "TestImages/Signatures/ampilfur.png", "TestImages/Signatures/arvlo.png", "TestImages/Signatures/BugzDrawz.png", "TestImages/Signatures/cocoaJord.png", "TestImages/Signatures/colonyBees.png", "TestImages/Signatures/demoncamile.png", "TestImages/Signatures/Doodle.png", "TestImages/Signatures/doodleNoodle.png", "TestImages/Signatures/dorkyfries.png", "TestImages/Signatures/Drawz.png", "TestImages/Signatures/evichuArt.png", "TestImages/Signatures/galchy.png", "TestImages/Signatures/hobbitCole.png", "TestImages/Signatures/paigelikesdoodles.png", "TestImages/Signatures/posiTVT.png", "TestImages/Signatures/railyTate.png", "TestImages/Signatures/theSaylor.png", "TestImages/Signatures/tinsley.png", "TestImages/Signatures/tiredStevenArt.png", "TestImages/Signatures/yysdrmz.png", "TestImages/Signatures/herriochi.png", "TestImages/Signatures/gothamGirlSketches.png", "TestImages/Signatures/izzyfied.png", "TestImages/Signatures/rukasoks.png", "TestImages/Signatures/artistaTe.png", "TestImages/Signatures/PinkSinsila.png", "TestImages/Signatures/stormiikkt.png", "TestImages/Signatures/lolimvgaydraws.png", "TestImages/Signatures/misttox.png", "TestImages/Signatures/chwerrii.png", "TestImages/Signatures/seviche.png", "TestImages/Signatures/chayse.png", "TestImages/Signatures/mayinjune.png", "TestImages/Signatures/smaem.png"];
    
    let instaUsers = ["_1.800.whatever_", "addy_the_instaboi","ampilfur","arvl.o","bugz_drawz","cocoa_jord","colonybees","demoncamile","doodledoobug","doodle_noodle.png","dorkyfries","drawz_0319","evichuart","keruhbero","hobbitcole","paigelikesdoodles","posi_tvt","railytate","the__saylor","tin.sl3y","tired.steven_art","yoyos.dreamz", "herriochi", "gotham.girl.sketches", "izzyfied", "rukasoks_", "artista__te", "pink_sinsila", "stormii.kkt", "lol.im.very.gay.draws", "misttox", "chwerrii", "seviche.d", "cha_1233_", "mayinjune_77", "smaem_"];
    
    let instagramLink = "https://www.instagram.com/";
    
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
    
    function addAnchors(user, imgtag){      
           return(`<a target='_blank' href=` + instagramLink + user + `>` + imgtag +`</a>`);

    }
    
    function addingAtags(arr, user){
        let i = 0;
        arr.forEach(function(element, index, array){
        array[index] = addAnchors(user[i], element);
        i++;
        });
    }
    
//    let dummyArray = ["a", "b", "c", "d"];
//    addingAtags(dummyArray, instaUsers);
//   console.log(dummyArray);
    
    addImgTagstoArray(imgLinks);
    addingAtags(imgLinks, instaUsers);
    printitems(imgLinks, "#appendee");

    $('img').on('dragstart', function(event) { event.preventDefault(); });
$("body").on("contextmenu", "img", function(e) {
  return false;
});
});
