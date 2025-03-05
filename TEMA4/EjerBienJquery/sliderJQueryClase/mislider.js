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
                if (currentSlider !== $(this).index()) {
                    cambiarPanel($(this).index());
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
                cambiarPanel(nueva);
            });

            $('#slider-next').on('click', function () {
                var nueva = currentSlider + 1;
                if (nueva >= lengthSlider) nueva = 0; // Si estamos en la última imagen, avanzamos a la primera
                cambiarPanel(nueva);
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
            controles.eq(nextSlider).addClass('active');
            paneles.eq(currentSlider).fadeOut('slow');
            paneles.eq(nextSlider).fadeIn('slow');

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
            controles.eq(indice).addClass('active');
            paneles.eq(currentSlider).fadeOut('slow');
            paneles.eq(indice).fadeIn('slow');

            currentSlider = indice;
            nextSlider = indice + 1;

            SliderInit(); // Reiniciamos el intervalo al cambiar de panel
        };

        return pb;
    }());

    SliderModule.init({ duration: 2000 }); // Establecemos la duración en 2000ms
});
