$(document).ready(function() {
    var ok = true;
    $('.slide-cabecera a').on('click', function(event) {
        if (ok) {
            ok = false;
            var id = $(this).attr('href');
            var elemento = $(this).parent();
            $('.slide-cabecera .active').removeClass('active');
            $('.slide-contenido > div:visible').fadeOut('500', function() {
                $(id).fadeIn('slow', function() {
                    ok = true;
                    $(this).trigger('eVisible');
                });
                elemento.addClass('active');
            });
            event.preventDefault();
        }
    });
    //Mueve Slider con pulsación en el teclado FLECHA DERECHA
    $(document).on("keydown", function(e) {
        if (e.which == 39 || e.which == 102) { //Teclas Flecha Der y Num Pad 6
            if ($('.slide-cabecera li:last-of-type').is('.active')) {
                $('.slide-cabecera li:first-of-type').children('a').click();
                return;
            }
            $('.slide-cabecera li.active').next().children('a').click();
        }
    });
    //FIN

    //Mueve Slider con pulsación en el teclado FLECHA IZQUIERDA
    $(document).on("keydown", function(e) {
        if (e.which == 37 || e.which == 100) { //Teclas Flecha Izq y Num Pad 4
            if ($('.slide-cabecera li:first-of-type').is('.active')) {
                $('.slide-cabecera li:last-of-type').children('a').click();
                return;
            }
            $('.slide-cabecera li.active').prev().children('a').click();
        }
    });
    //FIN
    $('.slide-cabecera .fa-chevron-circle-right').on('click', function(e) {
        if ($('.slide-cabecera li:last-of-type').is('.active')) {
            $('.slide-cabecera li:first-of-type').children('a').click();
            return;
        }
        $('.slide-cabecera li.active').next().children('a').click();
    });
    $('.slide-cabecera .fa-chevron-circle-left').on('click', function(e) {
        if ($('.slide-cabecera li:first-of-type').is('.active')) {
            $('.slide-cabecera li:last-of-type').children('a').click();
            return;
        }
        $('.slide-cabecera li.active').prev().children('a').click();
    });
});
