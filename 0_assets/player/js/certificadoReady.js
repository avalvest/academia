// // // // // // // // // // // // // // // CONFIGURACIÓN // // // // // // // // // // // // // // // // //
//
// VALORES CONSTANTES, MODIFICAR PARA CONFIGURAR // // // // // // // // // // // // // // // // // // // //
var rutaHtml = "../document/"; // Si va en la raíz dejar en blanco
var textoSinNota = "Sin nota"; // Texto a mostrar cuando no hay puntuación
var textoEstadoNotAttemped = "Iniciado"; // Texto que se muestra en el infoStats, según el dato devuelto por Moodle
var textoEstadoIncomplete = "Incompleto"; // Texto que se muestra en el infoStats, según el dato devuelto por Moodle
var textoEstadoCompleted = "Completo"; // Texto que se muestra en el infoStats, según el dato devuelto por Moodle
var textoEstadoPassed = "Aprobado"; // Texto que se muestra en el infoStats, según el dato devuelto por Moodle
var textoEstadoFailed = "Suspenso"; // Texto que se muestra en el infoStats, según el dato devuelto por Moodle
var mostrarSoloIndices = true; // Mostrar sólo índices o todas las pantallas (En el panel de navegación)
var mostrarActividades = true; // Mostrar las actividades (En el panel de navegación)
var notaAprobado = 50;
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
var DEBUG = true; // false; NO se muestran console.log, true; SÍ se muestran console.log
var OFFLINE = true; // true para trabajar fuera de Moodle
// FIN CONFIGURACIÓN //
//
//
// // VARIABLES, NO CAMBIAR PARA MODO ONLINE
numPag = 1;
estadoCurso = '';
duracionTotal = '';
duracionSesion = '';
comments = '';
commentsTotal = '';
contraste = false;
tamFuente = 14;
numPantallas = 0;
puntuacionTotal = 0;
numActividades = 0;
numPantallas = mapWeb.length;
posicionNotas = [];
arrayVistos = [];
valorNotas = [];
notasPorActividad = [];
valorLocation = 1; // Valor almacenado en el location (EN MODO OFFLINE EDITAR MANUALMENTE)
valorMoodle = ""; // Valor almacenado en el data (EN MODO OFFLINE EDITAR MANUALMENTE)
// //

$(document).ready(function() {

	// contenidos 10112016
	function receiver(event) {
			eval(event.data);
	}
	window.addEventListener('message', receiver, false);

    iniciarNavegador();

});
