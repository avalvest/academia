/*
Modificar n_E.length, n_C.length y las variables accept.
*/
$(document).ready(function() {


    reiniciar();


});

var contador = 0;
temp2 = new Array();

for (var i = 0; i < n_E.length; i++) {
    temp2[i] = "#item_" + (i + 1);
}




function creaActividad() {

    $('.tile.panel-actividad').append('<div style=" margin:0 auto; z-index: 99;"><div id="textos" style="width:100%;"></div></div>' +
        '<div id="frases_arrastrables" style=" margin:0 auto; z-index: 99;"></div><div class="clear"></div>');

    for (var i = 1; i <= n_C.length; i++) {
        $('#textos').append('<div id="ActCaja' + i + '" class="cajaDrop" style=""><p style="font-weight: bold !important"><i class="icon wb-inbox" aria-hidden="true"></i>' + n_C[i - 1] + '</p></div>');
    }

    for (var i = 1; i <= n_E.length; i++) {
        $('#frases_arrastrables').append('<div id="item_' + i + '" class="cajaDrag" style="border-radius:10px; border-width:1px; border-style:solid; border-color:#CCC;">' +
            '<p class="respuesta"><i class="icon wb-move" aria-hidden="true"></i>' + n_E[i - 1] + '</p></div>');
        if ($('#item_' + i + ' p').html().length > 180) {
            $('#item_' + i).css({
                'width': '100%',
                'float': 'left'
            });

        }
    }


    $('.cajaDrag').draggable({
        revert: 'invalid'
    });
    $('.cajaDrag').mouseover(function() {
        $(this).css({
            "-webkit-transform": "scale(1.05)",
            "transform": "scale(1.05)",
            "-ms-transform": "scale(1.05)"
        });
    });
    $('.cajaDrag').mouseleave(function() {
        $(this).css({
            "-webkit-transform": "scale(1)",
            "transform": "scale(1)",
            "-ms-transform": "scale(1)"
        });
    });


    $('.cajaDrag').addClass('animated pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated pulse');
    });

    for (j = 0; j < n_C.length; j++) {
        var temp = eval("accept" + (j + 1));
        $("#ActCaja" + (j + 1)).droppable({
            accept: "'" + temp2 + "'",
            drop: function(event, ui) {
                for (j = 0; j < n_C.length; j++) {
                    var temp = eval("accept" + (j + 1));
                    for (i = 0; i < temp.length; i++) {
                        if ((ui.draggable).is("'" + temp[i] + "'")) {

                            var aux = temp[i].replace('#', '');
                            $('i', temp[i]).remove();
                            $(this).append(document.getElementById(aux).innerHTML);
                            $(temp[i]).remove();
                            fallo = false;
                            contador++;
                            correcto();
                            setTimeout(function() {
                                for (j = 0; j < n_C.length; j++) {};
                            }, 500);
                            break;
                        }
                    }

                }
            }
        });
    }


}


function reiniciar() {
    contador = 0;
    $('.tile.panel-actividad').html('');
    creaActividad();
    actReiniciar();
}


function soluciona() {
    reiniciar();
    $('.cajaDrag').remove();

    for (var i = 0; i < n_C.length; i++) {
        var numOpc = eval("accept" + (i + 1)).length;
        for (var z = 0; z < numOpc; z++) {
            var itemAct = eval("accept" + (i + 1))[z]; //#item_i
            itemAct = itemAct.slice(6) - 1; //número
            $('#ActCaja' + (i + 1)).append('<p><i class="icon wb-extension" aria-hidden="true"></i>' + n_E[itemAct] + '</p>');
        }

    }

    actResolver();
}

function resuelve() {
    var correctas = 0;

    for (var i = 0; i < n_C.length; i++) {
        var numFrases = $('#ActCaja' + (i + 1) + ' p').length;
        var numOpc = eval("accept" + (i + 1)).length;
        for (var j = 1; j < numFrases; j++) {
            var fraseActual = $($('#ActCaja' + (i + 1) + ' p')[j]).html(); //frase
            for (var z = 0; z < numOpc; z++) {
                var itemAct = eval("accept" + (i + 1))[z]; //#item_i
                itemAct = itemAct.slice(6) - 1; //número
                if (fraseActual == n_E[itemAct]) {
                    $($('#ActCaja' + (i + 1) + ' p')[j]).prepend('<i class="icon wb-thumb-up" aria-hidden="true"></i>'); //Correcta
                }
                correctas++;
            }
        }
    }

$('.respuesta').each(function(index, el) {
  if ($(el).children().length == 0) {
    $(el).prepend('<i class="icon wb-thumb-down" aria-hidden="true"></i>');
  }
});
    correctas=$('.wb-thumb-up').length;
    actComprobar(correctas, n_E.length);
    console.log(correctas);
    console.log(n_E.length);
}

function correcto() {
    if (n_E.length == contador) {
        actHabilitaComprobar();

    }

}
