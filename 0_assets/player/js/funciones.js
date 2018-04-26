// FUNCIONES DE LA PLANTILLA.
//
function iniciarNavegador() {
    debug();
    crearMapaWeb();
    iniciarArrays();
    crearDivs();
    comprobarAvance();
    valoresIniciales();


    $("#mapa .list-group-item").click(function(e) {
        eventoClicLista(e.currentTarget);
    });

    $("#navAnterior, #navSiguiente").click(function(e) {
        anteriorSiguiente(e.currentTarget);
    });

    $("#inputPag").change(function(e) {
        inputPag(e.currentTarget);
    });

    $(document).on("click", "#contraste", function() {
        contraste = true;
    });

    $(document).on("click", "#sinContraste", function() {
        contraste = false;
    });


    $(window).resize(function() {
        calculaCabecera();
    });



}

function anteriorSiguiente(e) {

    if ($(e).attr('id') == "navAnterior") {
        if (numPag < 2) {
            return;
        }
        if (numPag > 1) {
            numPag--;
        }
    } else {
        if (numPag < numPantallas) {
            if (numPag === 0 || numPag == numPantallas) {
                return;
            }
            numPag++;
        }
    }


    irAlPrimero();
    posicionarScroll();
    actualizaArray();
}

function clicLista() {

    //$(".activo:not(.despliega)").removeClass('activo');
    actualizarBarraProgreso();
    mostrarBotones();
    irAlPrimero();
    actualizaArray();
}

function inputPag(e) {

    var valorInput = parseInt($(e).val());
    if (valorInput > 0 && valorInput <= numPantallas) {
        $("#inputPag").val(valorInput);
        numPag = valorInput;
        irAlPrimero();
    }
}

function debug() {
    if (!DEBUG) { // En modo DEBUG los datos son manuales. DEBUG false, los datos se obtienen de Moodle
        if (!window.console) window.console = {};
        var methods = ["log", "debug", "warn", "info"];
        for (var i = 0; i < methods.length; i++) {
            console[methods[i]] = function() {};
        }
    }
}

function eventoClicLista(e) {

    if (!isNaN(parseInt($(e).attr('data')))) {
        numPag = parseInt($(e).attr('data'));
    }

    $('i', e).removeClass('fa-circle-o');

    if ($(e).hasClass('actividad') && $('i', e).hasClass('text-success') === false) {
        $('i', e).addClass('fa-circle text-warning');

    } else if ($(e).hasClass('indice despliega') && mostrarSoloIndices) { // Si pulso en un menú desplegable
        var lista = parseInt($(e).attr('data-padre'));

        if ($('i', e).hasClass('zmdi-plus')) {
            $('i', e).removeClass('zmdi-plus').addClass('zmdi-minus animaIcono');

            $('[data-div=' + lista + ']').animate({
                height: $('[data-div=' + lista + ']').get(0).scrollHeight
            }, 1000, function() {
                $(this).height('auto');
            }).css('overflow-y', 'hidden');

        } else {
            $('i', e).removeClass('zmdi-minus').addClass('zmdi-plus animaIcono');
            $('[data-div=' + lista + ']').animate({
                height: 0
            }, 1000); //.css('overflow-y', 'visible');
        }
        setTimeout(function() {
            $('i', e).removeClass('animaIcono');
        }, 1000);

        return;

    } else if ($(e).hasClass('indice')) {
        $('.despliega').removeClass('activo');
        $('i', e).addClass('fa-circle text-success');
    } else {
        $('i', e).addClass('fa-circle text-success');
    }
    clicLista();
}

function irAUltimaVista() {
    numPag = valorLocation;
    irAlPrimero();
}

function irPrimeraVista() {
    $('*').removeClass('activo');
    numPag = 1;
    irAlPrimero();
    $('[data="1"]').addClass('activo');
}

function crearMapaWeb() {
    var txt = "";
    textoMapaWeb = "";
    desfase = 0;

    for (var i = 1; i <= numPantallas; i++) {

        if (mapWeb[i - 1].trim().toLowerCase() == "control online") {
            posicionNotas.push(i - 1);
            textoMapaWeb = textoMapaWeb + '<a data=' + (i - desfase) + ' href="#" class="list-group-item actividad"  lista=' + desfase + '><i class="m-r-sm fa fa-circle-o"></i><span>' + mapWeb[i - 1] + '</span></a>';
        } else if (mapWeb[i - 1].lastIndexOf('%') != -1) { // Elemento desplegable
            textoMapaWeb = textoMapaWeb + '<a data-indice=' + (i - desfase) + ' data-padre=' + (desfase + 1) + ' href="#" class="list-group-item indice despliega"><i class="m-r-sm fa fa-circle-o"></i><span>' + mapWeb[i - 1] + '</span></a>';
            desfase++;
        } else if (mapWeb[i - 1].lastIndexOf('@') != -1) {
            if (mapWeb[i - 1].trim().toLowerCase().lastIndexOf("control online") != -1) {
                posicionNotas.push(i - 1);
                textoMapaWeb = textoMapaWeb + '<a data=' + (i - desfase) + ' href="#" class="list-group-item actividad"><i class="m-r-sm fa fa-circle-o"></i><span>' + mapWeb[i - 1] + '</span></a>';
            } else {
                textoMapaWeb = textoMapaWeb + '<a data=' + (i - desfase) + ' href="#" class="list-group-item indice"><i class="m-r-sm fa fa-circle-o"></i><span>' + mapWeb[i - 1] + '</span></a>';
            }
        } else {
            textoMapaWeb = textoMapaWeb + '<a data=' + (i - desfase) + ' href="#" class="list-group-item"  lista=' + desfase + '><i class="m-r-sm fa fa-circle-o"></i><span>' + mapWeb[i - 1] + '</span></a>';
        }

    }

    numActividades = posicionNotas.length;
    txt = textoMapaWeb.replace(/@/g, '').replace(/%/g, '');
    $('#mapa').html(txt);
}


function iniciarArrays() {
    // Iniciar arrays
    numPantallas = $('#mapa a:not(.despliega)').length;

    for (var i = 0; i < numPantallas; i++) {
        arrayVistos[i] = 0;
    }

    for (var i = 0; i < $('#mapa a:not(.despliega)').length; i++) {
        if ($($('#mapa a:not(.despliega)')[i]).hasClass('actividad')) {
            valorNotas[i] = 0;
        } else {
            valorNotas[i] = -1;
        }
        notasPorActividad[i] = new Array();
        notasPorActividad[i] = null;
    }


    arrayVistos[0] = 1; // La página 1 siempre estará vista

    $('#irApag').html('<a href="#" onclick="irPrimeraVista()" title="Inicio"><i class="m-r-md zmdi zmdi-hc-lg zmdi-home"></i></a>' +
        '<span title="Introduzca el número de página y presione ENTER"><span>Página</span> <input id="inputPag" type="text" style="width: 30px" name="name" value="' + numPag + '"><span> de ' +
        $('#mapa a:not(.despliega)').length + '</span></span>');

}


function porcentajeVistos() {
    var cont = 0;
    for (var i = 0; i < arrayVistos.length; i++) {
        if (arrayVistos[i] == 1) {
            cont++;
        }
    }
    return cont * 100 / arrayVistos.length;
}

function actualizarPorcentajeVisto() {
    var porct = porcentajeVistos();
    $("#progresoCurso").html(parseInt(porct) + '%');
    return parseInt(porct) + '%';
}

function deshabilitarBotones() {
    ocultarAtras();
    ultimaPantalla();
}

function irAlPrimero() {
    mostrarBotones();
    if (numPag <= 1) {
        ocultarAtras();
    } else if (numPag >= numPantallas) {
        ultimaPantalla();
    } else {
        seleccionaEnPanel();
    }
    actualizarBarraProgreso();
    activaDesplegables();
}

function seleccionaEnPanel() {
    var contador = 0;

    if ($('[data="' + numPag + '"]').css('display') != "none") {
        $(".activo:not(.despliega)").removeClass('activo');
        $('[data="' + numPag + '"]').addClass('activo');
    }

    $('#mapa a[data="' + numPag + '"] i').removeClass('fa-circle-o');
    if ($('[data="' + numPag + '"]').hasClass('actividad') && $('[data="' + numPag + '"] i').hasClass('text-success') === false) {
        $('[data="' + numPag + '"] i').addClass('fa-circle text-warning');
    } else {
        $('[data="' + numPag + '"] i').addClass('fa-circle text-success');
    }

}

function posicionarScroll() {
    seleccionaEnPanel();
    setTimeout(function() {
        var suma = parseInt($('[data-indice=' + numPag + ']').css('height'));
        var centroIframe = parseInt($('#contacts-action-panel').css('height')) / 2 - 100;

        if ($('.activo:not(.despliega)').position().top > (centroIframe * 2 + 100) || $('.activo:not(.despliega)').position().top < 100) { // 800 y 100 aproximación manual, se puede variar según tamaño iframe
            $("#categories-list").animate({
                scrollTop: $('.activo:not(.despliega)').position().top - centroIframe
            }, 500);
            return;
        }

        if (isNaN(suma)) {
            suma = 0;
        }

        if ($('.activo:not(.despliega)').position().top > (centroIframe)) {
            $("#categories-list").animate({
                scrollTop: $("#categories-list").scrollTop() + (parseInt($('[data=' + numPag + ']').css('height')) + suma)
            }, 100);
        } else {
            $("#categories-list").animate({
                scrollTop: $("#categories-list").scrollTop() - (parseInt($('[data=' + numPag + ']').css('height')) + suma)
            }, 100);

        }
    }, 0);

}


function ultimaPantalla() {
    //$("#navSiguiente").css('opacity', .2);
    //$("#navSiguiente").css('cursor', 'not-allowed');
    $("#navSiguiente").css('display', 'none');
    $("#siguienteUA").css('display', 'block');
}

function mostrarBotones() {
    $("#navSiguiente, #navAnterior").css('opacity', 1).css('display', 'block').css('cursor', 'pointer');
    $("#siguienteUA, #anteriorUA").css('display', 'none');
}

function actualizarBarraProgreso() {

    //console.log(numPag);
    // AÑADIDO POR CONTENIDOS 16/11/2016
    if ((numPag !== 0) && ((numPag != 999))) {
        valorLocation = numPag;
    }


    $('#navegador').attr('src', rutaHtml + ("00" + numPag).slice(-3) + '.html');
    $('#nombrePantallaActual').html($($("[data=" + numPag + "] span")[0]).html()); // Añade en el panel inferior el nombre de la pantalla actual
    $('#inputPag').attr('value', numPag).val(numPag);
    if (numPag == 999) {
        $('#inputPag').val('');
    }
    $('#mapa a:not(.despliega)').removeClass('activo');
    $('[data="' + numPag + '"]').addClass('activo');
}

function ocultarAtras() {
    //$("#navAnterior").css('opacity', .2);
    //$("#navAnterior").css('cursor', 'not-allowed');
    $("#navAnterior, #siguienteUA").css('display', 'none');
    $("#anteriorUA").css('display', 'block');
}

function valoresIniciales() {
    // Activa la primera pantalla
    $('#mapa a[data="' + numPag + '"]').addClass('activo');
    $($('#mapa i')[0]).removeClass('fa-circle-o').addClass('fa-circle text-success');
    $('#nombrePantallaActual').html($($("[data=1] span")[0]).html());
    $('#navegador').attr('src', rutaHtml + ("00" + numPag).slice(-3) + '.html');

    // Añade puntuación en las pantallas donde hay actividad
    $('.actividad').append('<span class="pull-right badge bg-primary">0</span>');

    ocultarAtras();
    actualizarInfoData();

    if (numPag === 0) {
        $('#mapa a[data="1"]').removeClass('activo');
        $('#nombrePantallaActual').html('Reanudar curso');
    }

    if (mostrarActividades) {
        $('#mapa a.actividad').show();
    } else {
        $('#mapa a.actividad').hide();
    }

    if (mostrarSoloIndices) {
        $('.indice.despliega i').removeClass().addClass('zmdi m-r-sm fa zmdi-minus');
    } else {
        $('.despliega').hide();
    }


}

function activaDesplegables() {
    var lista = $('[data=' + numPag + ']').attr('lista');
    $('.despliega').removeClass('activo');
    $('.desplegable').removeClass('bordeIzqMenu');
    $('[data-padre=' + lista + ']').addClass('activo');
    $('[data-div=' + lista + ']').addClass('bordeIzqMenu');
}

function guardarTodo() {
    $('#guardar i').removeClass().addClass('zmdi zmdi-refresh zmdi-hc-spin');
    if (!OFFLINE) {
        enviarArrayVistos();
        finalizar();
    }
    setTimeout(function() {
        $('#guardar i').removeClass().addClass('zmdi zmdi-hc-lg zmdi-floppy');
    }, 2000);

}

function eliminarNota() {
    $("#textoNotas").val("");
}

function obtenerFecha() {
    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
    var fecha = new Date();
    return diasSemana[fecha.getDay()] + ", " + fecha.getDate() + " de " + meses[fecha.getMonth()] + " de " + fecha.getFullYear() + " " + fecha.toLocaleTimeString().slice(0, -3);
}

function crearDivs() {

    $('.despliega').each(function(index, ele) {
        $(ele).after('<div class="desplegable" data-div=' + (index + 1) + '></div>');
        $('[data-div=' + (index + 1) + ']').append($('[lista=' + (index + 1) + ']'));
    });

}

//////////////////////////////////////////

function todosControlesRealizados() {
    var contRea = 0;
    for (var i = 0; i < valorNotas.length; i++) {
        if (valorNotas[i] != -1 && valorNotas[i] >= 50) {
            contRea++;
        }
    }

    if (contRea == numActividades) {
        return true;
    } else {
        return false;
    }
}


function actualizaArray() { // Actualiza el array de páginas vistas


    if (arrayVistos[numPag - 1] != 1) { // Si ya estaba visto previamente, nos saltamos la función
        arrayVistos[numPag - 1] = 1;
        actualizarPorcentajeVisto();
        console.log("[DEBUG] Añadido en arrayVistos[" + (numPag - 1) + "] el valor " + arrayVistos[(numPag - 1)]);
    }
}

function guardandoDatos() {
    $('#guardar i').removeClass().addClass('zmdi zmdi-refresh zmdi-hc-spin');
    enviarArrayVistos();
    setTimeout(function() {
        $('#guardar i').removeClass().addClass('zmdi zmdi-hc-lg zmdi-floppy');
    }, 2000);

}

function gestionaActividad(nota) { // true o false
    listaRespuestas = 0;
    var totalTemp = 0;
    console.log("[DEBUG] Nota: " + nota);
    console.log("[DEBUG] Lista de respuestas: " + listaRespuestas);

    if (notasPorActividad[numPag - 1] != "undefined") {
        if (valorNotas[numPag - 1] <= nota) {
            valorNotas[numPag - 1] = nota;
            notasPorActividad[numPag - 1] = listaRespuestas;


            if (nota >= notaAprobado) {
                $('#mapa a[data="' + numPag + '"] i').removeClass().addClass('m-r-sm fa fa-check-square text-success');
                $('#nota' + numPag + ', [data-marca=' + numPag + ']').removeClass('suspenso').addClass('actual');
                console.log("[DEBUG] OK");
            } else {
                $('#mapa a[data="' + numPag + '"] i').removeClass().addClass('m-r-sm fa fa-circle text-danger');
                console.log("[DEBUG] KO");
            }

            $($('#mapa a[data="' + numPag + '"] span')[1]).text(nota / 10);

            for (var i = 0; i < valorNotas.length; i++) {
                if (valorNotas[i] == -1) {
                    totalTemp += 1;
                }
                totalTemp = totalTemp + valorNotas[i];
            }

            console.log("[DEBUG] totalTemp " + totalTemp);
            if (isNaN(puntuacionTotal)) {
                puntuacionTotal = 0;
            }

            if (puntuacionTotal < parseInt(totalTemp / numActividades)) {
                puntuacionTotal = (parseInt(totalTemp / numActividades) / 10);
            }

            console.log(puntuacionTotal);
            $('#puntuacionTotal').html(puntuacionTotal);
            $('#puntuacionCurso').html(puntuacionTotal + '/10');
            $('#nota' + numPag).html(parseInt(valorNotas[numPag - 1] / 10) + "/10");
        }
    }
}

function enviarListaRespuestas() { // Vincular actividades
    if (null !== notasPorActividad[numPag - 1]) {
        return notasPorActividad[numPag - 1];
    } else {
        return null;
    }
}

function cambiaModulo(moduloClicado) { // función para navegar entre los diferentes módulos / unidades formativas
    ruta = $(moduloClicado).attr('data-url');
    console.log(ruta);
    parent.postMessage('parent.location = "' + ruta + '"', dominio);
    //parent.location = ruta;
}

function calculaCabecera() {
    var altoHead = $('#app-navbar').css('height');
    var altoHead2 = $('#app-aside').css('height');
    var altoTotal = parseInt(altoHead) + parseInt(altoHead2);

    $('#app-aside').attr('style', 'top:' + altoHead + ' !important');
    $('#app-main').attr('style', 'padding-top:' + altoTotal + 'px !important');
}
