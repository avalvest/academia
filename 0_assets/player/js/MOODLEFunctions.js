
// FUNCIONES RELACIONADAS CON MOOODLE
//
var url = document.referrer;
if (url === "") {
  url = document.URL;
}
var urlArray = url.split('/');
var dominio = urlArray[0] + '/' + urlArray[1] + '/' + urlArray[2];

function comprobarAvance() { // carga datos de moodle
    var cadenaDevuelta;
  //  exitPageStatus = false;

    if (!OFFLINE) {

        getLMS("cmi.core.lesson_status");
        getLMS("cmi.core.lesson_location");
        getLMS("cmi.suspend_data");
        getLMS("cmi.core.score.raw");

        if (status != "completed" && status != "passed") {
            setLMS("cmi.core.lesson_status", "incomplete");
        }

    } else {
        console.log("[DEBUG] Trabajando OFFLINE");
    }

setTimeout(function () {
  // Recuperando información de páginas vistas
  if (valorMoodle !== "") {
      /*
       * La cadenaDevuelta tiene el siguiente formato:
       *
       * 1;0;1;1;0;1#-1;-1;100;-1;-1;100#$1;2;3$2;2;2$uno;dos;tres$true;false$12;89;32
       *
       * Los datos están separados por el caracter #
       * La primera cadena son las páginas vistas, representadas con 1 y las no vistas con 0. Están separados por el caracter ;
       * La segunda cadena es la puntuación de las actividades por página. Si no hay actividad en esa pantalla, se pone -1. Están separados por el caracter ;
       * La tercera cadena (que no siempre está presente) son las respuestas dadas en cada una de las actividades:
       *   Están separadas por el caracter $ y si no hay actividad en esa pantalla se dejará en blanco ($""$""$ = $$$)
       *   Se puede guardar cualquier tipo de datos; números, bool, strings... Ya que son Arrays (o variables si solo contienen un dato)
       */
       var cont = 0;
       cadenaDevuelta = valorMoodle.split("#"); // Pág. Vistas # Notas # Notas por actividad
       arrayVistos = cadenaDevuelta[0].split(";"); // Pág. Vistas
       valorNotas = cadenaDevuelta[1].split(";"); // Notas

       for (var i = 0; i < valorNotas.length; i++) {
           valorNotas[i] = parseInt(valorNotas[i]);
       }

       if (null !== cadenaDevuelta[2]) {
           notasPorActividad = cadenaDevuelta[2].split("$"); // Notas por actividad
       }

       for (var i = 0; i < notasPorActividad.length; i++) {
           if (notasPorActividad[i] === "") {
               notasPorActividad[i] = null;
           } else {
               notasPorActividad[i] = notasPorActividad[i].split(";");
           }
       }

       for (var i = 0; i < arrayVistos.length; i++) {
           if (arrayVistos[i] == 1) { // Si está visitada, añadimos clase
               $('#mapa a[data="' + (i + 1) + '"] i').removeClass('fa-circle-o');
               $('#mapa a[data="' + (i + 1) + '"] i').addClass('fa-circle text-success');
               //$($(".mapaWeb")[i]).parent().addClass('visitadoIcono');
               cont++;
               if (valorNotas[i] > -1) { // Puede estar visitada y ser una actividad, lo comprobamos
                   if (valorNotas[i] >= notaAprobado) {
                       $('#mapa a[data="' + (i + 1) + '"] i').removeClass().addClass('m-r-sm fa fa-check-square text-success');
                   } else {
                       $('#mapa a[data="' + (i + 1) + '"] i').removeClass().addClass('m-r-sm fa fa-circle text-danger');
                   }
               }
           }
       }


       if (cont == arrayVistos.length) { // Curso completo (TODO VISTO)
           numPag = 1;
           //$('#estadoCurso').html(textoEstadoCompleted);
       } else {

           numPag = 0;

       }

      console.log("[DEBUG] El estado de la sesión es " + status);
      console.log("[DEBUG] El valor del data es " + valorMoodle);
      console.log("[DEBUG] El valor del location es " + valorLocation);
      console.log("[DEBUG] El valor de la puntuación es " + puntuacionTotal);
  } else {
      console.log("[DEBUG] Iniciando datos por primera vez:");
      console.log(arrayVistos);
      console.log(valorNotas);
      console.log(notasPorActividad);
      numPag = 1;

  } // Si no hay datos en Moodle el array ya está iniciado con todos los valores a 0

  if (valorLocation === 0 || valorLocation == 1) {
    numPag = 1;
  } else {
    numPag = 0;
  }

  irAlPrimero();
  seleccionaEnPanel();
  actualizarInfoData();
  actualizarPorcentajeVisto();

}, 2000);


}

function enviarArrayVistos() { // Envía la información a Moodle
    console.log("[DEBUG] Guardando ");


    var cadena = "";
    cont = 0;
    todoVisto = false;

    // Generando cadena con páginas vistas
    for (var i = 0; i < arrayVistos.length; i++) {
        cadena += arrayVistos[i] + ";";
        if (arrayVistos[i] == 1) {
            cont++;
        }
    }

    cadena = cadena.substring(0, cadena.length - 1) + "#"; // Se elimina la última ";" y se añade "#"


    // Añadiendo a la cadena las notas por página
    for (var i = 0; i < valorNotas.length; i++) {
        cadena += valorNotas[i] + ";";
    }

    cadena = cadena.substring(0, cadena.length - 1) + "#"; // Se elimina la última ";" y se añade "#"


    // Añadiendo a la cadena las respuestas por actividad (si las hay)
    for (var i = 0; i < notasPorActividad.length; i++) {
        if (null !== notasPorActividad[i]) {
            for (var x = 0; x < notasPorActividad[i].length; x++) {
                cadena += notasPorActividad[i][x] + ";";
            }
            cadena = cadena.substring(0, cadena.length - 1); // Se elimina la última ";" y se añade "#"
        }
        cadena += "$";
    }

    cadena = cadena.substring(0, cadena.length - 1);

    valorMoodle = cadena;



    todoVisto = (cont == arrayVistos.length);

    if (!OFFLINE) {
        doCommit();

        if (isNaN(puntuacionTotal)) {
            puntuacionTotal = 0;
        }

        setLMS("cmi.suspend_data", cadena.toString()); // Envio String de páginas vistas
        setLMS("cmi.core.lesson_location", valorLocation); // Envio página actual
        setLMS("cmi.core.score.raw", puntuacionTotal); // Envio puntuación
        console.log("[DEBUG] Enviando a Moodle data " + cadena);
        console.log("[DEBUG] Enviando a Moodle location " + numPag);
        console.log("[DEBUG] Enviando a Moodle puntuación " + puntuacionTotal);
        doFinish();
        doInit();
    }

    if (todoVisto) { // Si están todas las pantallas vistas, el curso está aprobado o suspenso
        if (!OFFLINE) {

            if (puntuacionTotal >= 5 && todosControlesRealizados()) {
                console.log("[DEBUG] Curso COMPLETO");
                setLMS("cmi.core.lesson_status", "passed");
                $('#estadoCurso').html(textoEstadoPassed);
                doFinish();
                doLoadPage();
            } else {
                console.log("[DEBUG] Curso SUSPENSO");
                setLMS("cmi.core.lesson_status", "failed");
                $('#estadoCurso').html(textoEstadoFailed);
                doFinish();
                doLoadPage();
            }
        }
        enviarDatos = false;
        console.log("[DEBUG] Estado actual -> " + getLMS("cmi.core.lesson_status"));
    }

    $('#estadoCurso').html(estadoCurso);

    console.log("[DEBUG] Guardado OK");

}

function actualizarInfoData() {

    var textTemp = "";
    if (!OFFLINE) {
         getLMS("cmi.core.lesson_status");
         getLMS("cmi.core.total_time");//.substring(0, 8);
         getLMS("cmi.core.score.raw");
    }

    switch (estadoCurso) { // Editar
        case "not attempted":
        case "":
            estadoCurso = "Iniciado";
            break;
        case "incomplete":
            estadoCurso = "Incompleto";
            break;
        case "completed":
            estadoCurso = "Completo";
            break;
        case "passed":
            estadoCurso = "Aprobado";
            break;
        case "failed":
            estadoCurso = "Suspenso";
            break;
    }

    if (puntuacionTotal === "" || isNaN(puntuacionTotal)) {
        textTemp = textoSinNota;
        puntuacionTotal = 0;
    } else {
        textTemp = puntuacionTotal + "/10";
    }

    if (duracionTotal === "") {
        duracionTotal = "00:00:00";
    }

    for (var i = 0; i < valorNotas.length; i++) {
        if (valorNotas[i] != -1) {
            $($('#mapa a[data="' + (i + 1) + '"] span')[1]).text(valorNotas[i]);
        }
    }

    $('#duracionTotal').html(duracionTotal.slice(0, -3));
    $('#puntuacionCurso').html(textTemp);
    $('#puntuacionTotal').html(puntuacionTotal);
    $('#estadoCurso').html(estadoCurso);
    actualizarPorcentajeVisto();

}

function mostrarDatos() { // Función para tests
    console.log("[DEBUG] Datos almacenados en MOODLE");
    try {
        console.log("[DEBUG] El estado de la sesión es: " + getLMS("cmi.core.lesson_status"));
        console.log("[DEBUG] El valor del data es: " + getLMS("cmi.suspend_data"));
        console.log("[DEBUG] El valor del location es: " + getLMS("cmi.core.lesson_location"));
        console.log("[DEBUG] El valor de la puntuación es: " + getLMS("cmi.core.score.raw"));
        console.log("[DEBUG] El valor del tiempo total es: " + getLMS("cmi.core.total_time"));
    } catch (e) {

    } finally {

    }

    console.log("");
    console.log("[DEBUG] Datos LOCALES");
    console.log("[DEBUG] El valor de valorMoodle es:  " + valorMoodle);
    console.log("[DEBUG] El valor de arrayVistos es:  " + arrayVistos);
    console.log("[DEBUG] El valor de valorNotas es:  " + valorNotas);
    console.log("[DEBUG] El valor de notasPorActividad es: " + notasPorActividad);

}

function guardarNotaMoodle() {

    if ($("#textoNotas").val() !== "") {

        if ($("#textoNotasMoodle").val() == "No existen anotaciones.") {
            $("#textoNotasMoodle").val("");
            commentsTotal = "";
        }

        comments =
            "[" + obtenerFecha() + "]\n" +
            "(Página " + $('#inputPag').attr('value') + " - " + $('#nombrePantallaActual').html() + ")" + "\n" +
            $("#textoNotas").val();

        commentsTotal += comments + "\n\n\n" + "";
        $("#textoNotas").val("");
        $("#textoNotasMoodle").val(commentsTotal);

        if (!OFFLINE) {
            setLMS('cmi.comments', comments.toString().trim());
            console.log('[DEBUG] Nota Guardada');
        }

        console.log('[DEBUG] Simulando guardado');
        return;
    }

    console.log('[DEBUG] Texto vacío');

}

function obtenerComments() {
    if (!OFFLINE && commentsTotal === "") {
      getLMS('cmi.comments');
        console.log('[DEBUG] Obtener comments');
    }

    if (commentsTotal === "") {
        commentsTotal = "No existen anotaciones.";
    }

    console.log('[DEBUG] Simulando obtener comments');
    return commentsTotal;

}

function obtenerNombreAlumno() {
    if (!OFFLINE) {
       getLMS('cmi.core.student_name');
    }

    setTimeout(function () {
      return nombreAlumno;
    }, 2000);

}

function obtenerTiempoSesion() {
  if (!OFFLINE) {
      doVerTiempoSesion();
  }
}

///////////////////////

function getLMS(texto) {
  var envio = 'intercambioDatos("' + texto + '")';
  console.log("hijo " + envio);
  parent.postMessage(envio, dominio);

}

function doVerTiempoSesion() {
  parent.postMessage('intercambioDatos("verTiempoSesion()")', dominio);
//  return "00:00:00";
}


function leerDatosstatus(dato) {
status = dato;

switch (dato) { // Editar
    case "not attempted":
    case "":
        estadoCurso = "Iniciado";
        break;
    case "incomplete":
        estadoCurso = "Incompleto";
        break;
    case "completed":
        estadoCurso = "Completo";
        break;
    case "passed":
        estadoCurso = "Aprobado";
        break;
    case "failed":
        estadoCurso = "Suspenso";
        break;
}
}

function leerDatosvalorLocation(dato) {
valorLocation = dato;
if (valorLocation == "999") {
  valorLocation = 1;
}
}

function leerDatosvalorMoodle(dato) {
valorMoodle = dato;

}

function leerDatosduracionTotal(dato) {
duracionTotal = dato;
}

function leerDatospuntuacionTotal(dato) {
puntuacionTotal = dato;
puntuacionTotal = parseInt(puntuacionTotal / 10);
}

function leerDatosNombreAlumno(dato) {
  nombreAlumno = dato;
  nombreAlumno = nombreAlumno.substring(nombreAlumno.lastIndexOf(',') + 1).trim();

}

function leerDatosComments(dato) {
commentsTotal = dato;
}

function leerDatosTiempoSesion(dato) {
$('#duracionSesion').html(dato);
}


////////////////////////

function setLMS(texto, valor) {
    var envio = 'actualizarDatos("' + texto + '", "' + valor + '")';
    parent.postMessage(envio, dominio);
}

function doCommit() {
  parent.postMessage('doLMSCommit()', dominio);
}

function doFinish() {
  parent.postMessage('doLMSFinish()', dominio);
}

function doInit() {
  parent.postMessage('doLMSInitialize()', dominio);
}

function doLoadPage() {
  parent.postMessage('loadPage()', dominio);
}
