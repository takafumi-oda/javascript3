$(function(){
    $("#search-text").on("input", function(){
        let searchWord = $("#search-text").val();
        if(searchWord === ""){
            $("vegetable").css("diplay", "block");
        } else{
            $(".keyword-list").each(function(index, element){
                let keyword = $(element).text();
                if(keyword.indexOf(searchWord) === -1){
                    $(element).parent().css("display", "none");
                }else{
                    $(element).parent().css("display", "block");
                 }
            });

        }
    });
});  