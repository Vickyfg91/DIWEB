$(function () {
    $("#main-menu > ul > li").on("mouseenter", function() {
        $(this).css("font-weight", "bold");
    }).on("mouseleave", function() {
        $(this).css("background-color", "lightgray");
    });

    
});
