$(document).ready(function() {

    titulo_pantalla = $('.titulo').html();
    subtitulo_pantalla = $('h2 span#titulos').html();
    $('p, ul, li').css('font-size', (parent.tamFuente) + 'px');

    $(".enlacepdf, .enlaceExterno, .enlaceVideo").each(function(i) {
        $(this).attr('target', '_blank');
    });

    parent.$('#ampliartexto').click(function() {
        var tamMax = 20;


          try {
            if (parent.tamFuente < tamMax) {
                $('p, ul, li').css('font-size', (++parent.tamFuente) + 'px');
            }
          } catch (e) {}

    });

    parent.$('#disminuirtexto').click(function() {
        var tamMin = 10;


            try {
              if (parent.tamFuente > tamMin) {
                  $('p, ul, li, div, span, a, th, td, button').css('font-size', (--parent.tamFuente) + 'px');
              }
            } catch (e) {}

    });

    parent.$('#imprimir').click(function() {
        $('.contenido').print({
            globalStyles: false,
            mediaPrint: false,
            stylesheet: null,
            noPrintSelector: ".informacion, .sidebar, .copiaTexto, .codigoOculto, .noImprimir",
            iframe: true,
            append: null,
            prepend: null,
            manuallyCopyFormValues: true,
            deferred: $.Deferred(),
            timeout: 250,
            title: null,
            doctype: '<!doctype html>'
        });
    });

    //

    function ponerContraste() {
        $('div, input, select, option, p, li, span, button').addClass('contrasteFondo');
        $('p, li, h1, h2, h3, h4, h5, div, a, input, select, option, button, span').addClass('contrasteLetra');
    }

    function quitarContraste() {
        $('div, input, select, option, p, li, span, button').removeClass('contrasteFondo');
        $('p, li, h1, h2, h3, h4, h5, div, a, input, select, option, button, span').removeClass('contrasteLetra');
    }


    parent.$('#contraste').click(function() {
        ponerContraste();
    });

    parent.$('#sinContraste').click(function() {
        quitarContraste();
    });

    if (parent.contraste) {
        ponerContraste();
    } else {
        quitarContraste();
    }

    while (document.readyState != 'complete') {
        setTimeout(function() {
            parent.$('#contLoader').remove();
            parent.$('#contLoaderSon').remove();
        }, 2000);
        return;
    }



});
