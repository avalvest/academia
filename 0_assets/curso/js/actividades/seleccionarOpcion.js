$(document).ready(function() {
    // NO MODIDICAR
    num_opciones = textoTerminos.length;
    opciones = new Array();
    generaLabel();
    reiniciar();

    for (var i = 0; i < textoFrases.length; i++) {
      opciones[i] = i + 1;
    }

    $('*').keydown(function(e) {// Activa un selector pulsando su posición numérica 1-x
      var pul = e.keyCode - 48;
      if (pul > 0 && pul <= opciones.length) {
        $('select')[pul-1].focus();
  
        $($('select')[pul-1]).css('background', '#47B8C6');
      } else {
    
      }

    });

    $("select").change(function() {// Necesario para actividades con selectores

          for (var i = 0; i < $('select').length; i++) {
            if ($($('select')[i])[0].value == '0') {
              return false;
            }
          }
            actHabilitaComprobar();
    });

});


// Funciones
function resuelve() {
$('select').css('background', 'rgba(71, 184, 194, .5)');

    opciones_correctas = 0;

    $.each(opciones, function(index, elem) {
        if (elem == $('select')[index].value) {
            opciones_correctas++;
            $('.row.actividades span.fui').eq(index).attr("class", "fui fui-check");
        } else {
            $('.row.actividades span.fui').eq(index).attr("class", "fui fui-cross");
        }
    });

    actComprobar(opciones_correctas, num_opciones);


}

function reiniciar() {
$('select').css('background', 'rgba(71, 184, 194, .5)');
    $('.select2-chosen').html('Escoge una opción...');
    $('select').val('0');
    $('.row.actividades span.fui').attr("class", "fui");

    actReiniciar();
}



// Botones
function soluciona() {
//
    actResolver();

    $.each(opciones, function(index, elem) {
        $('.row.actividades select').eq(index).val(elem);
    });

}

function generaLabel() {
    var codigoTemp = '';
    var codigoGenerado = '<ul>';

    for (var i = 0; i < textoFrases.length; i++) {

        codigoGenerado += '<li><label class="share-label" for="share-toggle6">' + textoFrases[i] + '</label>' +
            '<select class="form-control select select-primary select-sm" data-toggle="select">' +
            '<option value="0">Escoge una opción...</option>'

        for (var x = 0; x < textoTerminos.length; x++) { // Hacer aquí el random con una variable temporal
            var numAle = Math.floor((Math.random() * 2) + 1);

            if (numAle == 1) {
                codigoTemp += '<option value="' + (x + 1) + '">' + textoTerminos[x] + '</option>';
            } else {
                codigoTemp = '<option value="' + (x + 1) + '">' + textoTerminos[x] + '</option>' + codigoTemp;
            }

        }

        codigoGenerado += codigoTemp;
        codigoTemp = '';
        codigoGenerado += '</select><span class="fui"></span></li>'

    }

    codigoGenerado += '</ul>';
    $('.tile.panel-actividad').append(codigoGenerado);

}
