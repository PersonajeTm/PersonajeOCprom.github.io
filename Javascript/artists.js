$(document).ready(function(){
  
    let imgLinks = ["TestImages/Signatures/arvlo.png",];
    
    function printitems(array, where){
        array.forEach(function(element){
            $(where).append(element);
            
        });
    }
    
    function addImgTags(link){
        return(`<img class="awardImg" src="` + link + `">`);
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
    printitems(imgLinks, "body")
    /*
    console.log(addImgTags(imgLinks[0]));
    */
});