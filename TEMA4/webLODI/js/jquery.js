/*Ejercicio 10*/
$(function(){
        $("#menu-principal > label").on("mouseenter", function() {
            $("#menu-principal > label > span").finish().animate({ color: "lightgray" }, 170); 
        })
        $("#menu-principal > label").on("mouseleave", function() {
            $("#menu-principal > label > span").finish().animate({ color: "black" }, 150);
        });
        
        $("#menu-principal > label").on("click", function() {
            $("#menu").finish().fadeToggle(200);
        });
    });
/*Ejercicio 8*/
$(function(){
    $(window).on("scroll", function(){
        
        if ($(this).scrollTop() == 0) {
            $("header").css({position: "relative", "background-color": "white", width: "auto", top: "0"});
            console.log("todo fatal");
        } else {
            $("header").css({position: "fixed", "background-color": "rgba(255, 255, 255, .8)", width: "100%", top: "0"});
        }
    });
    $(window).on("resize", function(){
        $('#menu').hide();
    });
});

