$(function(){
    $("#menu").css("display", "none");
    $(window).on("scroll", function(){
       
        if ($(this).scrollTop() > 300) {
            $("div#volverarriba").finish().fadeIn();
            console.log("apareceBoton");
        } else {
            $("div#volverarriba").finish().fadeOut();
            console.log("quitaBoton");
        }
    });
    $("div#volverarriba a").on("click", function(e){
        e.preventDefault();
        $("html, body").stop().animate({ scrollTop: 0 }, 800);
        console.log("clickBoton");
    });
});

/*El menú se debe mostrar y ocultar utilizando efectos y debes controlar la acumulación de efectos en la cola de ejecución.*/
$(function(){
    $("#menu-principal > span").css("color","#000000");
      
    $("#menu-principal").on("mouseleave", function() {
        $("#menu-principal > span").finish().animate({ color: "#000000" }, 100);
        console.log("negro");
    });
    $("#menu-principal").on("mouseenter", function() {
        $("#menu-principal > span").finish().animate({ color: "#525252" }, 200);
        console.log("sePonegris");
    });
    
   
    $("#menu-principal > span").on("click", function() {
        $("#menu").finish().fadeToggle(200);
        console.log("menus");
    });
});

/*Cada opción del submenú se muestra con un efecto y al mostrar una opción se ocultan todas las demás.*/
/*No sale porque se queda pillado y vuelve a mostrar la lista y no cambia los iconos*/
$(function(){
    $("#menu > li > a").on("click", function(){
        $("#menu > li > ul").slideUp();
        console.log("ole1");
        
        $("#menu > li > a span i").removeClass("fa-angle-up").addClass("fa-angle-down");
        console.log("ole3");
        /*Lo mejor seria cambiar la clase donde hayas echo click cambia a fa-angle-up"*/
        if (!$(this).siblings("ul").is(":visible")) {
            $(this).siblings("ul").slideDown();
            $(this).find("span i").removeClass("fa-angle-down").addClass("fa-angle-up");
        }
    });
});


/*Cuando haces un poco de scroll sobre la página debe aparecer con el efecto que consideres más apropiado, la cabecera de la página fijada en la parte superior.*/
$(function(){
    $(window).on("scroll", function(){
        
        if ($(this).scrollTop() == 600) {
            $("header").css({position: "relative", "background-color": "white", width: "100%", top: "0"});
        } else {
            $("header").css({position: "fixed", "background-color": "rgba(255, 255, 255, .8)", width: "100%", top: "0"});
        }
    });   
});

/*Al posicionar el ratón sobre la imagen de un producto debe aparecer otra imagen del mismo producto. Cuando el ratón deja de estar sobe la imagen aparece la imagen inicial. */

$(function(){
    $(".product-image").on("mouseenter", function(){
        $(this).attr("src", "img/zapato1-1.jpg");
    }).on("mouseleave", function(){
        $(this).attr("src", "img/zapato1.jpg");
    });
});
$(function(){
    // Cambiar la imagen al pasar el ratón sobre ella en todos los artículos del main
    $("main article .product-image").on("mouseenter", function(){
        const originalSrc = $(this).attr("src");
        const newSrc = originalSrc.replace(".jpg", "-1.jpg");
        $(this).attr("src", newSrc);
    }).on("mouseleave", function(){
        const newSrc = $(this).attr("src");
        const originalSrc = newSrc.replace("-1.jpg", ".jpg");
        $(this).attr("src", originalSrc);
    });
});