$(document).ready(function(){
  
    let imgLinks = ["a", "b", addImgTags("http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Ribbon-Badge-PNG-Transparent-Image-500x686.png")];
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

    $("#prcrImg").css("align-self", "center")
  /*  printitems(imgLinks, leftAppend);
    
    console.log(addImgTags(imgLinks[0]));
    */
});

