/*El menú se debe mostrar y ocultar utilizando efectos y debes controlar la acumulación de efectos en la cola de ejecución.*/
$(function () {
    $("#menu").css("display", "none");

    $("#menu-principal > span").on("click", function () {
        $("#menu").finish().slideToggle(300);
        console.log("menus");
    });

    //clicar en el icono de cerrar
    $("img#cerrarMenu").on("click", function () {
        $("#menu").finish().slideToggle(300);
    });
});

$(function () {
    var SliderModule = (function () {
        var pb = {};
        pb.elslider = $('#slider');

        pb.items = {
            panels: pb.elslider.find('.slider-wrapper > li'), // Aquí estamos seleccionando todos los elementos li
        };

        var SliderInterval,
            currentSlider = 0,
            nextSlider = 1,
            lengthSlider = pb.items.panels.length;

        pb.init = function (settings) {
            var loscontroles = '';
            this.settings = settings || { duration: 3000 }; // Si no se pasa una duración, se usa 3000ms como predeterminado
            SliderInit();

            // Creamos los controles del slider en tiempo de ejecución
            for (var i = 0; i < lengthSlider; i++) {
                if (i == 0) {
                    loscontroles += '<li class="active"></li>';
                } else {
                    loscontroles += '<li></li>';
                }
            }

            $('#control-buttons').html(loscontroles);

            // Agregar evento click a los controles
            $('#control-buttons li').on("click", function () {
                if (currentSlider !== $(this).finish().index()) {
                    cambiarPanel($(this).finish().index());
                }
            });

            // Asegúrate de que pb.items.panels sea un objeto jQuery, para poder usar .on()
            pb.items.panels.on('mouseenter', function () {
                clearInterval(SliderInterval); // Detener el slider cuando el ratón entra en la imagen
            });

            pb.items.panels.on('mouseleave', function () {
                SliderInit(); // Reiniciar el slider cuando el ratón sale de la imagen
            });

            // Agregar eventos para los botones de las flechas
            $('#slider-prev').on('click', function () {
                var nueva = currentSlider - 1;
                if (nueva < 0) nueva = lengthSlider - 1; // Si estamos en la primera imagen, retrocedemos a la última
                cambiarPanel(nueva).finish();
            });

            $('#slider-next').on('click', function () {
                var nueva = currentSlider + 1;
                if (nueva >= lengthSlider) nueva = 0; // Si estamos en la última imagen, avanzamos a la primera
                cambiarPanel(nueva);
            });


            // Mostrar la imagen en minuatura previamente
            $("#control-buttons li").on("mouseenter", function () {
                // Obtener el índice del control en el slider
                var index = $(this).finish().index();

                // Buscar la imagen dentro del panel correspondiente usando 'pb.items.panels.eq(index)'
                var imgSrc = pb.items.panels.eq(index).find("img").attr("src");

                // Asignar la fuente de la imagen al contenedor de la miniatura
                $("#containerImgPrev > img").finish().attr("src", imgSrc);

                // Mostrar el contenedor de la miniatura
                $("#containerImgPrev").finish().show();
            });

            // Ocultar la miniatura cuando el ratón sale del control
            $("#control-buttons li").on("mouseleave", function () {
                // Ocultar el contenedor de la miniatura
                $("#containerImgPrev").hide();
            });
            $("#control-buttons li").on("mouseenter", function () {
                var index = $(this).index();
                var imgSrc = pb.items.panels.eq(index).finish().find("img").attr("src");
                $("#containerImgPrev > img").finish().attr("src", imgSrc);
                $("#containerImgPrev").finish().show();
            });

        };

        var SliderInit = function () {
            SliderInterval = setInterval(pb.startSlider, pb.settings.duration); // Usamos la duración definida en settings
        };

        pb.startSlider = function () {
            var paneles = pb.items.panels;
            var controles = $('#control-buttons li');

            if (nextSlider >= lengthSlider) {
                nextSlider = 0;
                currentSlider = lengthSlider - 1;
            }

            controles.removeClass('active');
            controles.eq(nextSlider).finish().addClass('active');
            paneles.eq(currentSlider).finish().fadeOut('slow');
            paneles.eq(nextSlider).finish().fadeIn('slow');

            currentSlider = nextSlider;
            nextSlider += 1;
        };

        var cambiarPanel = function (indice) {
            clearInterval(SliderInterval);

            var paneles = pb.items.panels;
            var controles = $('#control-buttons li');

            if (indice >= lengthSlider) {
                indice = 0;
            } else if (indice < 0) {
                indice = lengthSlider - 1;
            }

            controles.removeClass('active');
            controles.eq(indice).finish().addClass('active');
            paneles.eq(currentSlider).finish().fadeOut('slow');
            paneles.eq(indice).finish().fadeIn('slow');

            currentSlider = indice;
            nextSlider = indice + 1;

            SliderInit(); // Reiniciamos el intervalo al cambiar de panel
        };

        return pb;
    }());

    SliderModule.init({ duration: 10000 }); // Establecemos la duración en 2000ms
});
$(function () {
    // Agregar el evento mouseenter para aplicar el filtro de brillo
    $('#slider-prev').on('mouseenter', function () {
        $(this).finish().css('filter', 'brightness(1.5)'); // Aumentar el brillo al pasar el ratón por encima
    });

    $('#slider-prev').on('mouseleave', function () {
        $(this).finish().css('filter', 'brightness(0) invert(1)'); // Restaurar el brillo original
    });

    $('#slider-next').on('mouseenter', function () {
        $(this).finish().css('filter', 'brightness(1.5)'); // Aumentar el brillo al pasar el ratón por encima
    });

    $('#slider-next').on('mouseleave', function () {
        $(this).finish().css('filter', 'brightness(0) invert(1)'); // Restaurar el brillo original
    });
});
