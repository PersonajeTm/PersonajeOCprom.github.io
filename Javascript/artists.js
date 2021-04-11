$(document).ready(function(){
  
    let imgLinks = ["TestImages/Signatures/1800whatever.png", "TestImages/Signatures/addyTheInstaBoy.png", "TestImages/Signatures/ampilfur.png", "TestImages/Signatures/arvlo.png", "TestImages/Signatures/cocoaJord.png", "TestImages/Signatures/colonyBees.png", "TestImages/Signatures/demoncamile.png", "TestImages/Signatures/Doodle.png", "TestImages/Signatures/dorkyfries.png", "TestImages/Signatures/Drawz.png", "TestImages/Signatures/evichuArt.png", "TestImages/Signatures/galchy.png", "TestImages/Signatures/hobbitCole.png", "TestImages/Signatures/railyTate.png", "TestImages/Signatures/theSaylor.png", "TestImages/Signatures/tinsley.png", "TestImages/Signatures/yysdrmz.png", "TestImages/Signatures/herriochi.png", "TestImages/Signatures/gothamGirlSketches.png", "TestImages/Signatures/izzyfied.png", "TestImages/Signatures/artistaTe.png", "TestImages/Signatures/PinkSinsila.png", "TestImages/Signatures/stormiikkt.png", "TestImages/Signatures/lolimvgaydraws.png", "TestImages/Signatures/misttox.png", "TestImages/Signatures/chwerrii.png", "TestImages/Signatures/seviche.png", "TestImages/Signatures/chayse.png", "TestImages/Signatures/mayinjune.png", "TestImages/Signatures/smaem.png", "TestImages/Signatures/cocoCereal.png", "TestImages/Signatures/geluk.png", "TestImages/Signatures/broccolityme.png", "TestImages/Signatures/kreamesodapop.png", "TestImages/Signatures/slntbutterfly.png", "TestImages/Signatures/enisthemenace.png", "TestImages/Signatures/magicgirlobsessed.png", "TestImages/Signatures/soulbird.png", "TestImages/Signatures/dino.png", "TestImages/Signatures/mk.png"];
    
    let instaUsers = ["_1.800.whatever_", "addy_the_instaboi","ampilfur","arvl.o","cocoa_jord","colonybees","demoncamile","doodledoobug","dorkyfries","drawz_0319","evichuart","keruhbero","hobbitcole","railytate","the__saylor","tin.sl3y", "yoyos.dreamz", "herriochi", "gotham.girl.sketches", "izzyfied", "artista__te", "pink_sinsila", "stormii.kkt", "lol.im.very.gay.draws", "misttox", "chwerrii", "seviche.d", "cha_1233_", "mayinjune_77", "smaem_", "co.cocereal", "geluk_425","broccoli.tyme","kreamesodapop","slnt_butterfly", "enisthemenace", "magicgirlobsessed", "soulbird", "theedinonugget", "mk___doodles"];
    
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

 
});
