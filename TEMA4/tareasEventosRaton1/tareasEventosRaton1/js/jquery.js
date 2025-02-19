$(function () {
    $("article.noticia > img")
    .on("mouseenter", function () {
        $(this.nextElementSibling).css ("display", "flex")
        })
        .on("mouseleave", function () {
            $("article.noticia > h3").css("display", "none");
        });
});