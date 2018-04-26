$(document).ready(function() {

    //  Controla el cierre de los popups de las actividades
    $(document).on('click', 'div.sweet-overlay', function() {
        $("button.confirm").click();
    });
    $('.contenido .lbox').each(function() {
        $(this).html('<div class="text">' + $(this).html() + '</div><a href="#_"></a>');
    });
    // Controla el cierre de popups
    $(".lbox").click(function() {
        window.location = window.location + "#_";
    });
    $(".text").click(function() {
        return false;
    });
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            window.location = window.location + "#_";
        }
    });
    // Ampliar con la lupa el mapa conceptual desde el menu
    $("#ampliaLupa").click(function() {
        $("#contenedorMapaConceptual").click();
    });
    $("#versionTxt").click(function() {
        $('#contenedorMapaConceptual').css('display', 'none');
        $('#txtMapaConceptual').css('display', 'block');
    });
    $("#versionAmbos").click(function() {
        $('#contenedorMapaConceptual').css('display', 'block');
        $('#txtMapaConceptual').css('display', 'block');
    });
    $("#versionImagen").click(function() {
        $('#contenedorMapaConceptual').css('display', 'block');
        $('#txtMapaConceptual').css('display', 'none');
    });
    $(".descubre").click(function() {
        $(this).removeClass();
        $(this).addClass('animate-trans caja');
        console.log($(this).children);
    });
    // mostramos los elementos que están ocultos y que estén configurados con la clase nomostrar
    // para ser mostrados
    $(".nomostrar").each(function(index) {
        mostrar($(this), $(this).data("tiempo"), $(this).data("efecto"));
    });
    $(".div_oculto").click(function() {
        $(this).addClass("animated bounceOut");
        $(this).off();
        setTimeout(animaoculto, 600, $(this));
    });
    $(".ocultook").click(function() {
        $(this).addClass("animated bounceOut");
        $(this).off();
        setTimeout(animaoculto, 600, $(this));
    });
    agregaLlamadas();
}); // FIN DOCUMENT READY
// Barra de progreso
function animaoculto(a) {
    a.removeClass("div_oculto animated bounceOut");
    a.addClass("nooculto animated " + a.data("efecto"));
}

function mostrar(elem, tiempo, efecto) {
    setTimeout(function() {
        elem.removeClass('nomostrar');
        elem.addClass("nooculto animated " + elem.data("efecto"));
    }, tiempo);
}

function resetea_estilo() {
    var classes = $(".centro *").not('img').not('#img');
    classes.attr('style', '');
    classes.removeAttr('class');
}

function ampliarImagen(src, id, alt, pie, width) {
    document.write('<div class="clear"></div><p class="centrado"><a class="imagenAmplia tabulable" href="#', id, '"><img src="', src, '" alt="', alt, '" title="', alt, '" width="100%"></a></p><div class="clear"></div>' +
        '<div id="', id, '" class="lbox imagenModal"><img src="', src, '" alt="', alt, '" title="', alt, '" width="100%"><p class="pieImagen">', pie, '</p></div>' +
      '<style>.imagenAmplia {width: ', width, '%}</style>');
}

function generaImagen(src, alt, pie, ancho) {
    document.write('<div class="clear"></div><p class="centrado"><img src="../0_assets/curso/imagenes/ilustrativas/', src, '" alt="', alt, '" title="', alt, '" width="', ancho, '%"></p><p class="pieImagen">', pie, '</p><div class="clear"></div>');
}

function actComprobar(opciones_correctas, num_opciones) {
    $('.row.actividades .avance p').html(parseInt(100 * opciones_correctas / num_opciones) + ' %');
    if (opciones_correctas == num_opciones) { // 100% CORRECTO
        $('.row.actividades .avance p').html('');
        $('.row.actividades .avance').addClass('ok animated pulse');
        $('.row.actividades p.estado').html('Completa');
        $('.row.actividades .comprobar').toggleClass('disabled-clicks').fadeTo('slow', 0.4);
        $('.row.actividades .reiniciar').fadeTo('slow', 0.4);
        $('.row.actividades .resolver').fadeTo('slow', 0.4);
        $('.reiniciar').off('click', reiniciar);
        $('.resolver').off('click', soluciona);
        $('.comprobar').off('click', resuelve);
        $('.row.actividades .avance p').remove();
        setTimeout(function() {
            $('#actSolucionCorrecto').click();
        }, 0);
    } else { // MENOS DEL 100%
        $('.reiniciar').on('click', reiniciar);
        $('.resolver').on('click', soluciona);
        $('.comprobar').off('click', resuelve);
        $('.row.actividades .comprobar').toggleClass('disabled-clicks').fadeTo('slow', 0.4);
        $('.row.actividades .reiniciar').toggleClass('disabled-clicks').fadeTo('slow', 1);
        $('.row.actividades .resolver').toggleClass('disabled-clicks').fadeTo('slow', 1);
        setTimeout(function() {
            $('#actSolucionIncorrecto').click();
        }, 0);
    }
    $('select').attr('disabled', 'disabled');
}

function actReiniciar() {
    $('.row.actividades .avance p').html('0 %');
    $('.row.actividades p.estado').html('Incompleta');
    $('.row.actividades span.fui').attr("class", "fui");
    $('.row.actividades .comprobar').addClass('disabled-clicks').fadeTo('slow', 0.4);
    $('.row.actividades .reiniciar').toggleClass('disabled-clicks').fadeTo('slow', 0.4);
    $('.row.actividades .resolver').toggleClass('disabled-clicks').fadeTo('slow', 0.4);
    $('.reiniciar').off('click', reiniciar);
    $('.resolver').off('click', soluciona);
    $('.comprobar').off('click', resuelve);
    $('select').removeAttr('disabled');
}

function actResolver() {
    $('.resolver').off('click', soluciona);
    $('.comprobar').off('click', resuelve);
    $('.reiniciar').off('click', reiniciar);
    $('.row.actividades .avance p').html('0 %');
    $('.row.actividades p.estado').html('Incompleta');
    $('.row.actividades .comprobar').addClass('disabled-clicks').fadeTo('slow', 0.4);
    $('.row.actividades .reiniciar').toggleClass('disabled-clicks').fadeTo('slow', 0.4);
    $('.row.actividades .resolver').toggleClass('disabled-clicks').fadeTo('slow', 0.4);
    $('select').attr('disabled', 'disabled');
}

function actHabilitaComprobar() {
    $('.row.actividades .comprobar').removeClass('disabled-clicks').fadeTo('slow', 1);
    $('.comprobar').on('click', resuelve);
}

function agregaLlamadas() {
    var llamadas = [
        [
            '.wizard-content',
            '<link type="text/css" rel="stylesheet" href="../0_assets/curso/css/jquery-wizard.css">' +
            '<script type="text/javascript" src="../0_assets/curso/js/jquery-wizard.js"></script>' +
            '<script type="text/javascript" src="../0_assets/curso/js/wizard-slider.js"></script>' +
            '        <script>' +
            '            (function(document, window, $) {' +
            '                "use strict";' +
            '                var Site = window.Site;' +
            '                (function() {' +
            '                    var defaults = $.components.getDefaults("wizard");' +
            '                    var options = $.extend(true, {}, defaults, {' +
            '                        step: ".wizard-pane",' +
            '                        onInit: function() {' +
            '                            this.$progressbar = this.$element.find(".progress-bar")' +
            '                                .addClass("progress-bar-striped");' +
            '                        },' +
            '                        onBeforeShow: function(step) {' +
            '                            step.$element.tab("show");' +
            '                        },' +
            '                        onFinish: function() {' +
            '                            this.$progressbar.removeClass("progress-bar-striped").addClass(' +
            '                                "progress-bar-success");' +
            '                        },' +
            '                        onAfterChange: function(prev, step) {' +
            '                            var total = this.length();' +
            '                            var current = step.index + 1;' +
            '                            var percent = (current / total) * 100;' +
            '                            this.$progressbar.css({' +
            '                                width: percent + "%"' +
            '                            }).find(".sr-only").text(current + "/" + total);' +
            '                        },' +
            '                        buttonsAppendTo: ".panel-body"' +
            '                    });' +
            '                    $("#exampleWizardProgressbar").wizard(options);' +
            '                })();' +
            '            })(document, window, jQuery);' +
            '        </script>',
        ],
        [
            '.tabs-style-circle',
            '<link rel="stylesheet" type="text/css" href="../0_assets/curso/css/tab/demo.css" />' +
            '<link rel="stylesheet" type="text/css" href="../0_assets/curso/css/tab/tabs.css" />' +
            '<link rel="stylesheet" type="text/css" href="../0_assets/curso/css/tab/tabstyles.css" />' +
            '<script src="../0_assets/curso/js/tab/cbpFWTabs.js"></script>' +
            '<script>' +
            '(function() {' +
            '[].slice.call(document.querySelectorAll(".tabs")).forEach(function(el) {' +
            'new CBPFWTabs(el);' +
            '});' +
            '})();' +
            '</script>',
        ],
        [
            '.nav--zahi',
            '<script type="text/javascript" src="../0_assets/curso/js/clipboard_timeline.min.js"></script>' +
            '<script type="text/javascript" src="../0_assets/curso/js/main_timeline.js"></script>' +
            '<link type="text/css" rel="stylesheet" href="../0_assets/curso/css/component_timeline.css" />' +
            '<link type="text/css" rel="stylesheet" href="../0_assets/curso/css/demo_timeline.css" />' +
            '<link type="text/css" rel="stylesheet" href="../0_assets/curso/css/normalize_timeline.css" />' +
            '<script type="text/javascript" src="../0_assets/curso/js/etapas.js"></script>',
        ],
        [
            '.tablesaw',
            '<link type="text/css" rel="stylesheet" href="../0_assets/curso/css/tablesaw.css">' +
            '<script type="text/javascript" src="../0_assets/curso/js/tablesaw.js"></script>' +
            '<link type="text/css" rel="stylesheet" href="../0_assets/libs/fonts/wi/web-icons.css" />',
        ],
        [
            '.slide-mio',
            '<script type="text/javascript" src="../0_assets/curso/js/slide.js"></script>' +
            '<link type="text/css" rel="stylesheet" href="../0_assets/curso/css/slide.css" />' +
            '<link type="text/css" rel="stylesheet" href="../0_assets/libs/fonts/fa/font-awesome.css">',
        ],
        [
            '.cd-breadcrumb',
            '<link type="text/css" rel="stylesheet" href="../0_assets/curso/css/etapas.css" />' +
            '<script type="text/javascript" src="../0_assets/curso/js/etapas.js"></script>',
        ],
        [
            '.cd-multi-steps',
            '<link type="text/css" rel="stylesheet" href="../0_assets/curso/css/etapas.css" />' +
            '<script type="text/javascript" src="../0_assets/curso/js/etapas.js"></script>',
        ],
        [
            '.kontext',
            '<link type="text/css" rel="stylesheet" href="../0_assets/curso/css/kontext.css">' +
            '<link type="text/css" rel="stylesheet" href="../0_assets/curso/css/demo.css">',
        ],
        [
            '.numeros',
            '<link type="text/css" rel="stylesheet" href="../0_assets/curso/css/slider_numeros.css" />' +
            '<script type="text/javascript" src="../0_assets/curso/js/slider_numeros.js"></script>',
        ],
        [
            '.zoom',
            '<script type="text/javascript">' +
            '$(function() {' +
            '$(".zoom").zoomy();' +
            '});' +
            '</script>' +
            '<link type="text/css" rel="stylesheet" href="../0_assets/curso/css/zoomy.css" />' +
            '<script type="text/javascript" src="../0_assets/curso/js/zoomy.js"></script>',
        ],
        [
            '.timeline',
            '<link type="text/css" rel="stylesheet" href="../0_assets/curso/css/timeline_iconos.css" />'
        ],
        [
            '.lbox',
            '<link type="text/css" rel="stylesheet" href="../0_assets/curso/css/leafbox.css" />',
        ],
        [
            '.nomostrar',
            '<link type="text/css" rel="stylesheet" href="../0_assets/curso/css/animate.css">',
        ],
        [
            '.ribbon-inner',
            '<link type="text/css" rel="stylesheet" href="../0_assets/libs/fonts/wi/web-icons.css" />',
        ],
        [
            '.comic-pane',
            '<link type="text/css" rel="stylesheet" href="../0_assets/curso/css/cita_imagen.css">',
        ],
        [
            '.div_oculto',
            '<link rel="stylesheet" href="../0_assets/curso/css/animate.css" />',
        ],
        [
            '.panel-heading',
            '<link rel="stylesheet" href="../0_assets/libs/fonts/wi/web-icons.min.css" />' +
            '<style>.panel-group .panel-title:hover, .panel-group .panel-title:focus, .panel-group .panel-title {color: white;}ul li {color: white;}</style>',
        ],


    ];
    txtLlamadas = '';
    $.each(llamadas, function(index, el) {
        if ($(el[0]).length > 0 && txtLlamadas.lastIndexOf(el[1]) == -1) {
            txtLlamadas += el[1];
        }
    });
    $('body').append('<!-- Llamadas específicas -->' + txtLlamadas);
}
