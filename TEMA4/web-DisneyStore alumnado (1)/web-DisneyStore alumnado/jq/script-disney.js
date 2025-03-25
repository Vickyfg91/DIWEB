/*Mª José García Lorite
DISEÑO DE INTERFACES WEB
EXAMEN UNIDAD 4 jQuery
NOMBRE Y APELLIDOS:
Para realizar los siguientes ejercicios debes descargar el archivo comprimido de recursos que
encontrarás en la plataforma. Recuerda que no puedes alterar el código HTML ni el código CSS.
1) (1,5 puntos) PANEL DE COMPRA
a. (0,5 puntos) Al cargar la página se debe mostrar el panel de compra con un
efecto de persiana ascendente y deberá permanecer en todo momento en la
posición especificada en el CSS. Para que funcione correctamente debes
cambiar la capa a display: flex antes de hacer el efecto de tipo slide. En
concreto debes de realizar los siguientes pasos: pasar la capa a flex, ocultarla
con un efecto y mostrarla con el efecto slide.
*/

$(function () {
    $("div#compra").css('display', 'flex')
        .hide().slideDown(1000);
});
/*
b. (0,5 puntos) Al posicionar el ratón sobre el botón “Añadir a la cesta” se debe
producir una animación de color utilizando el plugin animate color. El color de
fondo debe pasar a blanco y el color de fuente al color primario azul (#0795e6)
Controla la acumulación de efectos. Cuando el cursor del ratón deje de estar
posicionado sobre el botón, se deberán restaurar los valores iniciales con una
animación de cambio de color.
*/
$(function () {
    $("span#btn-comprar").on("mouseenter", function () {
        $(this).stop(true, true).animate({
            'background-color': '#ffffff',
            'color': '#0795e6'
        }, 300);
    }).on("mouseleave", function () {
        $(this).stop(true, true).animate({
            'background-color': '',
            'color': ''
        }, 300);
    });
});

/*
    c. (0,5 puntos) Al hacer clic en el icono de corazón se debe intercambiar el
    corazón por otro igual relleno del color primario. Al hacer clic de nuevo, se
    tiene que restaurar su estado inicial. Ten en cuenta que los iconos de corazón
    son de Google Fonts (Material Icons) y se dibujan de la siguiente forma:
    i. <span class="material-icons">favorite</span> → Corazón relleno
    ii. <span class="material-icons">favorite_border</span> → Corazón vacío
*/
$(function () {
    $("#compra > span.material-icons.heart-icon").on("click", function () {

        if ($(this).text() === "favorite_border") {
            $(this).text("favorite");
        } else {
            $(this).text("favorite_border");
        }
    });
});
/*
    2) (2 puntos) CANTIDAD
    a. (0.5 puntos) Al hacer clic en el botón - se debe decrementar en uno la
    cantidad de producto. El valor mínimo a mostrar es 1 por tanto, si hacemos clic
    en este icono cuando la cantidad sea 1, no se debe realizar ninguna acción.
    b. (0.5 puntos) Al hacer clic en el botón + se debe incrementar en uno la
    cantidad de producto. No es posible comprar más de 10 unidades del mismo
    artículo.
*/
$(function(){
    $("span#menos").on("click", function(){
        let cantidad = parseInt($("#cantidad").text());
        if (cantidad > 1) {
            $("#cantidad").text(cantidad - 1);
        }
    });

    $("span#mas").on("click", function(){
        let cantidad = parseInt($("#cantidad").text());
        if (cantidad < 10) {
            $("#cantidad").text(cantidad + 1);
        }

    });

});
/*

    c. (1 punto) Si al hacer clic en el botón + el valor de la cantidad es 10, se debe
    mostrar un mensaje informando de que se ha alcanzado la cantidad máxima.
    Debes mostrar en la interfaz el elemento "span#cartel” que puedes encontrar
    en el HTML. Para mostrar el mensaje en una posición cercana a dónde se ha
    hecho clic utiliza el método .offset().
    
*/
$(function(){
    $()
});
/*
    /*3) (1,5 puntos) DETALLES DEL PRODUCTO
    a. (0,5 puntos) Al hacer clic en DETALLES DEL PRODUCTO, ENVÍO Y
    DEVOLUCIONES U OPINIONES se debe mostrar el contenido asociado. (Controla
    la acumulación de efectos. Si se hace clic sobre un elemento que está visible,
    éste se debe ocultar.
    b. (1 punto) Además el icono de + se debe transformar en un icono de - con un
    efecto de animación de giro. Controla la acumulación de efectos.*/

    $(function () {
        $("section > div > div").on("click", function () {
            $(this).parent().next(".texto").finish().slideToggle(300);
            $(this).children().last().finish().fadeToggle(100);
        });
        $(".texto").hide();
    });
/*
4) (1,5 puntos) MENÚ PRINCIPAL
i. (0,5puntos) Al hacer clic sobre el icono de la hamburguesa se deberá mostrar
el menú principal del sitio deslizándose hacia abajo con un efecto de animación
rápido. Controla la acumulación de efectos.
ii. (0,5puntos) Al hacer clic de nuevo sobre el icono de hamburguesa o al
redimensionar la ventana, se ocultará todo el menú con un efecto de
animación.
iii. (0,5puntos) Además el icono de menú tendrá un efecto de animación de color
pasando del color primario al color de warning (#c66c1d) y viceversa.
*/
$(function(){
   
    $("span#icono-menu").on('click', function(){
        
        $("nav#menu-principal > ul").finish().slideToggle('fast');
        if ($(this).css('color') === 'rgb(7, 149, 230)') { 
            $(this).animate({'color': '#c66c1d'}, 100); 
        } else {
            $(this).animate({'color': '#0795e6'}, 500); 
            console.log("Vuelve al color?");
        }
    });

    $("span#icono-menu").on('resize', function(){
        $("nav#menu-principal > ul").stop(true, true).slideUp('fast');
        $("span#icono-menu").animate({'color': '#0795e6'}, 100);
    });
});

/*
5) (1,5 puntos) OPINIONES
a. (1 punto) Si haces clic en el enlace “2 reseñas” se debe dirigir hacia el destino
con un efecto de animación de scroll. El destino lo puedes obtener con el
método .attr("href") y calcular la posición a la que debe dirigirse con el
método .offset().top.
*/
$(function(){
    $("span#num-resenias > a").on('click', function(){
        $($(this).attr("href")).offset().top;
        con
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000); 
    });
});

/*
b. (0.5 puntos) Al hacer clic en “Reseñar este producto” se debe mostrar el
formulario de reseñas con un efecto de persiana descendente. Una vez se
encuentre visible no se podrá ocultar.

6) (2 puntos) FORMULARIO
El formulario lo puedes encontrar dentro del apartado Opiniones a través del enlace
“Reseñar este producto”.
a. (1 punto) Cuando todos los campos obligatorios pierdan el foco se debe
comprobar si la longitud del dicho campo es 0. En caso afirmativo, debe
aparecer en la parte inferior de dicho campo el mensaje indicando este error.
Cuando no se de esta condición de error, el mensaje debe ocultarse.
b. (1 punto) Cada vez que se pulse una tecla dentro desde el textarea debe
informar del número de caracteres escritos con respecto al total de caracteres.
3*/
