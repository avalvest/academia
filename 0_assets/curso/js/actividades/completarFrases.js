var numPalabras = 0;
var contadorPalabras = 0;
var letraActual = 'a';
var preguntasAle = new Array();
var cadenaPulsada = [null, null];


$(document).ready(function() { // INICIO DOCUMENT READY

    for (var i = listaFrases.length - 1; i >= 0; i--) {
        $('#frases').prepend('<p style="margin-bottom:0px">' + listaFrases[i] + '</p>');
    }

    $('#frases p').each(function() {

        $(this).html($(this).html().replace(/@#/g, reemplazoNumeros)); // Reemplaza el carácter # por el resultado de la función reemplazoNumeros

        cambiarLetra();

    });

    desordenaRespuestas();

    $('#frm_respuestas').append(reemplazoLabel);

    $('select').addClass('form-control select select-primary select-xs');

    $("select").change(function() {// Necesario para actividades con selectores

          for (var i = 0; i < $('select').length; i++) {
            if ($($('select')[i])[0].value == '') {
              return false;
            }
          }
            actHabilitaComprobar();
    });

    actReiniciar();

}); // FIN DOCUMENT READY



function aumentaNumRespuesta() {

    return ++numPalabras;

}


function cambiarLetra() { // Incrementa la letra en cada párrafo

    var letra = letraActual;
    var ASCII = letra.charCodeAt();
    var aumento = ((ASCII + 1 >= 65 && ASCII + 1 <= 90) || (ASCII + 1 >= 97 && ASCII + 1 <= 122)) ? ASCII + 1 : ASCII;
    var nuevaLetra = String.fromCharCode(aumento);

    letraActual = nuevaLetra;
    contadorPalabras = 0;

}


function reemplazoNumeros() {

    contadorPalabras++;

    return '<strong id="resp' + aumentaNumRespuesta() + '">_____' + letraActual + '' + contadorPalabras + '_____</strong>';

}

function reemplazoLabel() {
    var cadenaDevuelta = '';

    for (var i = 0; i < numPalabras; i++) {

        identResp = $($('#frases p strong[id *= resp]')[i]).html();
        identResp = identResp.replace(/_/g, '');

        cadenaDevuelta += '<p style="margin-bottom:0px"><LABEL for="r_' + identResp + '">' + identResp + ': </LABEL><select class="tabulable" id="r_' + identResp + '" name"r_' + identResp + '">';
        cadenaDevuelta += generaOpciones();

    }


    return cadenaDevuelta;
}

function generaOpciones() {
    var cadenaGenerada = '';


    for (var i = 0; i < preguntasAle.length; i++) {

        cadenaGenerada += '<option value="' + preguntasAle[i] + '">' + preguntasAle[i] + '</option>';

    }

    cadenaGenerada = '<option value="">---</option>' + cadenaGenerada + '</select></p>';
    desordenaRespuestas();

    return cadenaGenerada;

}

function resuelve() {
    //$('select').css('background', '#4A9E92');
    var flag_resultado = 0;

    for (var i = 0; i < listaRespuestas.length; i++) {

        resptActual = $($('#frm_respuestas select')[i]);

        if (resptActual.val() != listaRespuestas[i]) {
            resptActual.css('color', 'black');

        } else {
            resptActual.css('color', 'white');
            $($('#frases p strong[id *= resp]')[i]).html(listaRespuestas[i]);
            flag_resultado++;

        }
    }

    actComprobar(flag_resultado, listaRespuestas.length);

}

function soluciona() {
    actResolver();
    //$('select').css('background', '#4A9E92');
    for (var i = 0; i < listaRespuestas.length; i++) {

        $($('#frm_respuestas select')[i]).val(listaRespuestas[i]).css('color', 'white');
        $($('#frases p strong[id *= resp]')[i]).html(listaRespuestas[i]);


    }
}

function reiniciar() {
    //$('select').css('background', '#4A9E92');
    actReiniciar();

    $($('#frm_respuestas select')).val('').css('color', 'black')

    for (var i = 0; i < numPalabras; i++) {

        $($('#frases p strong[id *= resp]')[i]).html('_____' + $($('select')[i]).attr('id').replace(/r_/g, '') + '_____');

    }


}


function desordenaRespuestas() {

    for (var i = 0; i < listaRespuestas.length; i++) {
        preguntasAle[i] = listaRespuestas[i];
    }

    preguntasAle = preguntasAle.sort(function() {
        return Math.random() - 0.5
    });

}




$("*").keydown(function(e) {
    // Num entre 48-57, May. 65-90
    if (e.keyCode > 64 && e.keyCode < 91) {

        cadenaPulsada[0] = String.fromCharCode(e.keyCode).toLowerCase();
        cadenaPulsada[1] = null;

    } else if (e.keyCode > 47 && e.keyCode < 58) {
        cadenaPulsada[1] = String.fromCharCode(e.keyCode).toLowerCase();
    } else {
        //$('select').css('background', '#4A9E92');
    }

    if (cadenaPulsada[0] != null && cadenaPulsada[1] != null) {

        //$('select').css('background', '#4A9E92');
        $('#r_' + cadenaPulsada[0] + cadenaPulsada[1]).css('background', 'rgb(21, 104, 92)');
        $('#r_' + cadenaPulsada[0] + cadenaPulsada[1]).focus();

        cadenaPulsada[0] = null;
        cadenaPulsada[1] = null;
    }

});
