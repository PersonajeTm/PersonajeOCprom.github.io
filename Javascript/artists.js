$(document).ready(function(){
  
    let imgLinks = [addImgTags("https://i.imgur.com/XF92hHn.png"), addImgTags("https://i.imgur.com/Cp8O5ND.png"), addImgTags("https://i.imgur.com/1FRaA8L.png"), addImgTags("https://i.imgur.com/cRRMrIA.png"), addImgTags("https://i.imgur.com/TYEvYxY.png"), addImgTags(""), addImgTags(""), addImgTags(""), addImgTags(""), addImgTags(""), addImgTags("")];
    let leftAppend = ".appendLeft";
    let rightAppend = ".appendRight";
    
    function printitems(array, where){
        let i = 0;
        array.forEach(function(){
            $(where).append(array[i]);
            i++;
        });
    }
    
    function addImgTags(link){
        return(`<img class="awardImg" src="` + link + `">`);
    }
    
    function addPTags(text){
        return(`<p class="awardText">` + text + `<p>`);
    }

    printitems(imgLinks, "body");
    /*
    console.log(addImgTags(imgLinks[0]));
    */
});