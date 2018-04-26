$(document).ready(function() {
    $(".desplegable").append('<hr class="finDesp">');
    setTimeout(function() {

        // INICIO BOTONES OPCIONES
        $('#top-nav').append(
            '<li title="Variar fuente" class="nav-item dropdown">' +
            '<a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i id="iconoAccesibilidad" class="zmdi zmdi-hc-lg zmdi-format-color-text"></i><br/><span>Accesibilidad</span></a>' +
            '<ul class="dropdown-menu animated flipInY">' +
            '<li><a id="ampliartexto" href="#"><i class="zmdi m-r-md zmdi-hc-lg zmdi-zoom-in"></i>Agrandar letra</a></li>' +
            '<li><a id="disminuirtexto" href="#"><i class="zmdi m-r-md zmdi-hc-lg zmdi-zoom-out"></i>Empequeñecer letra</a></li>' +
            '<li><a id="contraste" href="#"><i class="zmdi m-r-md zmdi-hc-lg zmdi-brightness-4"></i>Alto contraste</a></li>' +
            '<li><a id="sinContraste" href="#"><i class="zmdi m-r-md zmdi-hc-lg zmdi-brightness-5"></i>Vista normal</a></li>' +
            '</ul>' +
            '</li>' +
            '<li title="Opciones de pantalla" class="nav-item dropdown">' +
            '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="zmdi zmdi-hc-lg zmdi-settings"></i><br/><span>Opciones</span></a>' +
            '<ul class="dropdown-menu animated flipInY">' +
            '<li><a id="verinfo" href="#statsCurso"><i class="zmdi m-r-md zmdi-hc-lg zmdi-hourglass-alt"></i>Progreso de la pantalla</a></li>' +
            '<li><a id="imprimir" href="#"><i class="zmdi m-r-md zmdi-hc-lg zmdi-print"></i>Imprimir pantalla actual</a></li>' +
            '<li><a id="map" href="#mapaCurso"><i class="zmdi m-r-md zmdi-hc-lg zmdi-map"></i>Mapa</a></li>' +
            //  '<li><a id="notas" href="#notasCurso"><i class="zmdi m-r-md zmdi-hc-lg zmdi-comment-alt-text"></i>Anotaciones</a></li>' +
            '</ul>' +
            '</li>' +
            '<li title="Ayuda" class="nav-item">' +
            '<a id="ayuda" href="#ayudaCurso" role="button" aria-haspopup="true" aria-expanded="false"><i class="zmdi zmdi-hc-lg zmdi-help"></i><br/><span>Ayuda</span></a>' +
            '</li>' +
            '<li title="Contacto CAU" class="nav-item">' +
            '<a id="cau" href="#cauCurso" role="button" aria-haspopup="true" aria-expanded="false"><i class="zmdi zmdi-hc-lg zmdi-phone-forwarded"></i><br/><span>CAU</span></a>' +
            '</li>' +
            '<li title="Guardar" class="nav-item">' +
            '<a id="guardar" href="#" role="button" aria-haspopup="true" aria-expanded="false"><i class="zmdi zmdi-hc-lg zmdi-floppy"></i><br/><span>Guardar</span></a>' +
            '</li>'
        );

        // Creando los popups
        $('body').append('<div id="mapaCurso" class="lbox"><div class="text mapa-posicion mapa-skin-top" id="mapa-posicion"></div><a href="#_"></a></div>');
        $('body').append('<div id="statsCurso" class="lbox"><div class="text mapa-posicion mapa-skin-top" id="stats-posicion"></div><a href="#_"></a></div>');
        $('body').append('<div id="ayudaCurso" class="lbox"><div class="text mapa-posicion mapa-skin-top" id="ayuda-posicion"></div><a href="#_"></a></div>');
        $('body').append('<div id="cauCurso" class="lbox"><div class="text mapa-posicion mapa-skin-top" id="cau-posicion"></div><a href="#_"></a></div>');
        $('body').append('<div id="notasCurso" class="lbox"><div class="text mapa-posicion mapa-skin-top" id="notas-posicion"></div><a href="#_"></a></div>');

        $('.lbox').each(function() {
            $(this).html('<div class="text">' + $(this).html() + '</div><a href="#_"></a>');
        });

        // Controla el cierre de popups

        $(".lbox").click(function() {
            window.location = window.location + "#_";
        });

        $(".text").click(function(event) {
            return false;
        });

        $(document).keyup(function(e) {
            if (e.keyCode == 27) {
                window.location = window.location + "#_";
                $('#aside-top-menu li ul').css('display', 'none');
            }
        });

        //

        indice = 0;
        dataIndex = 0;
        clase_add = "";

        // INICIO POPUP MAPA

        $('#mapa-posicion').html('');
        $('#mapa-posicion').append('<div class="panel-group info-pantalla">');
        $('#mapa-posicion .info-pantalla').append('<div class="col-md-2"><i class="zmdi zmdi-hc-border zmdi-hc-4x zmdi-map" style="margin: 14px 0 0 0;"></i></div>');
        $('#mapa-posicion .info-pantalla').append('<div class="col-md-10">');
        $('#mapa-posicion .info-pantalla .col-md-10').append('<p class="certificado">' + datosCertificadoActual.certificado + ': ' + datosCertificadoActual.certificado_desc + '</p>');
        $('#mapa-posicion .info-pantalla .col-md-10').append('<p class="modulo">' + datosCertificadoActual.modulo + ': ' + datosCertificadoActual.modulo_desc + '</p>');
        $('#mapa-posicion .info-pantalla .col-md-10').append('<p class="uf">' + datosCertificadoActual.UA + ': ' + datosCertificadoActual.UA_desc + '</p>');
        $('#mapa-posicion').append('<div class="clear"></div>');
        $('#mapa-posicion').append('<div class="separador">Este icono: <i class="controles zmdi zmdi-pin zmdi-hc-lg"></i> y el sombreado  indican la posición actual. Puede navegar libremente por el resto del certificado.</div>');
        $('#mapa-posicion').append('<div class="clear"></div>');
        $('#mapa-posicion').append('<div class="panel-group estructura">');

        $.each(datosCertificadoCompleto, function(arrayID, group) {

            $('#mapa-posicion .estructura').append('<div class="col-md-6" id="' + group.MF + '">');
            $('#' + group.MF).append('<div class="top">' + group.MF + '</div>');

            if (indice == 1) {
                $('#mapa-posicion .estructura').append('<div class="clear"></div>');
            }

            $.each(group.UF, function(eventID, eventData) {

                clase_add = "";
                icono_add = "zmdi-book";
                href_add = eventData.UF_URL;

                if ((datosCertificadoActual.UA == eventData.UF_ID) && (datosCertificadoActual.modulo == group.MF)) {
                    clase_add = "actual";
                    icono_add = "zmdi-pin";
                    href_add = "#";
                }

                $('#' + group.MF).append('<div class="marca ' + clase_add + '"><i class="controles zmdi ' + icono_add + ' zmdi-hc-lg"></i><a data-index="' + dataIndex + '" class="enlaceControl" onclick="cambiaModulo(this)" href="#" data-url="' + href_add + '">' + eventData.UF_ID + '</a></div>');
                $('#' + group.MF).append('<div class="desc ' + clase_add + '">' + eventData.DESC + '</div>');

                dataIndex++;
            });
            indice++;
        });

        $('#mapa-posicion').append('<div class="clear"></div>');

        // FIN POPUP MAPA

        // INICIO POPUP stats

        if (numUA !== 0 && numUA <= datosCertificadoCompleto[numModulo - 1].UF.length) {


            //contenido de INFO
            var infoData = [];
            textoinfoData = "<div class='tope'>";
            _estadoCurso = "<span id='estadoCurso'>Iniciado</span>";
            _progresoCurso = "<span id='progresoCurso'>" + actualizarPorcentajeVisto() + "</span>";
            _duracionTotal = "<span id='duracionTotal'>00:00:00</span>";
            _duracionSesion = "<span id='duracionSesion'>00:00:00</span>";
            _puntuacionCurso = "<span id='puntuacionCurso'>" + textoSinNota + "</span>";

            infoData = [
                ['Estado: ', _estadoCurso],
                ['Progreso: ', _progresoCurso],
                ['Duración total: ', _duracionTotal],
                ['Puntuación total: ', _puntuacionCurso],
                ['Duración de la sesión: ', _duracionSesion],

            ];

            var colum = 6;
            for (var i = 0; i < infoData.length; i++) {
                textoinfoData = textoinfoData + "<div class='col-md-" + colum + "'><p><b>" + infoData[i][0] + "</b>" + infoData[i][1] + "</p></div>";
                if (i == 1) {
                    colum = 4;
                }
            }

            textoinfoData += "</div><div class='panel-group estructura'>";

            var nota = 0;
            var posicion = 0;
            var clase = '';
            var claseIcono = '';
            for (var i = 0; i < valorNotas.length; i++) {
                if (valorNotas[i] != -1) {
                    nota = valorNotas[i];
                    posicion++;
                    if (nota >= notaAprobado) {
                        clase = " actual";
                        claseIcono = 'zmdi-thumb-up';
                    } else {
                        clase = " suspenso";
                        claseIcono = 'zmdi-thumb-down';
                    }
                    textoinfoData = textoinfoData + "<div class='col-md-4'><div  data-marca='" + (i + 1) + "' class='marca" + clase + "'><i class='controles zmdi m-r-md zmdi-hc-lg " + claseIcono + "'></i><a href='#' class='enlaceControl' data-pos='" + (i + 1) + "'>Control Online " + (posicion + iniciaControl) +
                        " </a></div><div class='desc" + clase + "' id='nota" + (i + 1) + "'>" + (nota / 10) + "/10</></div></div>";
                    clase = '';
                }
            }

            textoinfoData += "</div>";

            setInterval(function() {
                obtenerTiempoSesion();
            }, 1000);

            $('#stats-posicion').html('');
            $('#stats-posicion').append('<div class="panel-group info-pantalla">');
            $('#stats-posicion .info-pantalla').append('<div class="col-md-2"><i class="zmdi zmdi-hc-border zmdi-hc-4x zmdi-hourglass-alt" style="margin: 14px 0 0 0;"></i></div>');
            $('#stats-posicion .info-pantalla').append('<div class="col-md-10">');
            $('#stats-posicion .info-pantalla .col-md-10').append('<p class="certificado">' + datosCertificadoActual.certificado + ': ' + datosCertificadoActual.certificado_desc + '</p>');
            $('#stats-posicion .info-pantalla .col-md-10').append('<p class="modulo">' + datosCertificadoActual.modulo + ': ' + datosCertificadoActual.modulo_desc + '</p>');
            $('#stats-posicion .info-pantalla .col-md-10').append('<p class="uf">' + datosCertificadoActual.UA + ': ' + datosCertificadoActual.UA_desc + '</p>');
            $('#stats-posicion').append('<div class="clear"></div>');
            $('#stats-posicion').append('<div class="separador">Si lo desea, puede acceder directamente a los diferentes Controles Online.</div>');
            $('#stats-posicion').append('<div class="clear"></div>');
            $('#stats-posicion').append(textoinfoData);

            $(".enlaceControl").click(function() {
                numPag = $(this).attr('data-pos');
                actualizarBarraProgreso();
                mostrarBotones();
                irAlPrimero();
                actualizaArray();
                posicionarScroll();
                window.location = window.location + "#_";
            });

            $("#guardar").click(function() {
                guardandoDatos();
                $('#confirmarSalir').click();
            });

            $(".confirm").click(function() {
                numPag = 999;
                irAlPrimero();
            });

            actualizarInfoData();

        } else {
            $('#verinfo').remove();
        }

        // FIN POPUP STATS

        // INICIO POPUP ayuda
        var ayuIconos = [];
        var ayuContenidos = [];
        var textoAyu = "";

        separador1 = "Botonera común a todas las pantallas"; // Texto separador 1
        separador2 = "Iconos en contenidos"; // Texto separador 2
        ayu1 = "Aumenta el tamaño de letra un número determinado de veces.";
        ayu2 = "Disminuye el tamaño de letra un número determinado de veces.";
        ayu3 = "Activa el modo 'alto contraste' (fondo negro).";
        ayu4 = "Activa el modo de vista predeterminado.";
        ayu5 = "Muestra diferentes datos sobre el curso y controles online.";
        ayu6 = "Imprime el contenido del curso.";
        ayu7 = "Muestra un mapa con la posición actual dentro del certificado.";
        ayu8 = "Guarda tu progreso en la plataforma.";
        ayu9 = "Guarda tus anotaciones personales sobre el curso.";
        ayu10 = "Nos proporciona información de contacto sobre el Centro de Atención al Usuario.";
        ayu11 = "Pulsando este icono se ocultará el panel de navegación lateral.";
        ayu12 = "Pulsando este icono volverá a la primera página de la unidad.";
        ayu13 = "Puede introducir el número de página y presionar ENTER si lo desea.";

        ayuIconos = [ //['ETIQUETA IMG CON ALT', 'NOMBRE', 'DESCRIPCIÓN'],
            [
                '<i class="zmdi-hc-border zmdi zmdi-hc-lg zmdi-format-color-text grande"></i>',
                'Botón de accesibilidad: ',
                '<ul class="zmdi-hc-ul" style="margin-top: 10px;"><li><i class="zmdi-hc-li zmdi m-r-md zmdi-hc-lg zmdi-zoom-in"></i><b>Agrandar letra:</b> ' + ayu1 + '</li>' +
                '<li><i class="zmdi-hc-li zmdi m-r-md zmdi-hc-lg zmdi-zoom-out"></i><b>Empequeñecer letra:</b> ' + ayu2 + '</li>' +
                '<li><i class="zmdi-hc-li zmdi m-r-md zmdi-hc-lg zmdi-brightness-4"></i><b>Alto contraste:</b> ' + ayu3 + '</li>' +
                '<li><i class="zmdi-hc-li zmdi m-r-md zmdi-hc-lg zmdi-brightness-5"></i><b>Vista normal:</b> ' + ayu4 + '</li></ul>'
            ],

            [
                '<i class="zmdi-hc-border zmdi zmdi-hc-lg zmdi-settings grande"></i>',
                'Botón de opciones: ',
                '<ul class="zmdi-hc-ul" style="margin-top: 22px;"><li><i class="zmdi-hc-li zmdi m-r-md zmdi-hc-lg zmdi-hourglass-alt"></i><b>Progreso de la pantalla:</b> ' + ayu5 + '</li>' +
                '<li><i class="zmdi-hc-li zmdi m-r-md zmdi-hc-lg zmdi-print"></i><b>Imprimir:</b> ' + ayu6 + '</li>' +
                '<li><i class="zmdi-hc-li zmdi m-r-md zmdi-hc-lg zmdi-map"></i><b>Mapa:</b> ' + ayu7 + '</li></ul>'
                //  '<li><i class="zmdi-hc-li zmdi m-r-md zmdi-hc-lg zmdi-comment-alt-text"></i><b>Anotaciones:</b> ' + ayu9 + '</li></ul>'
            ],

            [
                '<i class="zmdi-hc-border zmdi zmdi-hc-lg zmdi-view-dashboard grande"></i>',
                'Otros botones: ',
                '<ul class="zmdi-hc-ul" style="margin-top: 10px;"><li><i class="zmdi-hc-li zmdi m-r-md zmdi-hc-lg zmdi-phone-forwarded"></i><b>CAU:</b> ' + ayu10 + '</li>' +
                '<li><i class="zmdi-hc-li zmdi m-r-md zmdi-hc-lg zmdi-floppy"></i><b>Guardar avance:</b> ' + ayu8 + '</li>' +
                '<li><i class="zmdi-hc-li zmdi m-r-md zmdi-hc-lg zmdi-format-list-bulleted"></i><b>Ocultar navegación:</b> ' + ayu11 + '</li>' +
                //'<li><i class="zmdi-hc-li zmdi m-r-md zmdi-hc-lg zmdi-home"></i><b>Inicio:</b> ' + ayu12 + '</li>' +
                '<li><i class="zmdi-hc-li zmdi m-r-md zmdi-hc-lg zmdi-square-o"></i><b>Ir a página:</b> ' + ayu13 + '</li></ul>'
            ],
        ];

        ayuContenidos = [ //['ETIQUETA IMG CON ALT', 'NOMBRE', 'DESCRIPCIÓN'],
            [
                '<i class="enlaceExterno">',
                'Más información</i>',
                'Nos dá la posibilidad de acceder a más información.',
            ],

            [
                '<i class="enlacepdf">',
                'Enlaces pdf</i>',
                'Enlace a más información en un documento pdf.',
            ],


            [
                '<i class="pop_up">',
                'Ventana emergente</i>',
                'Al hacer clic en textos con este icono se nos mostrará información adicional.',
            ],

            [
                '<i class="ayuModal">',
                'Mostrar ayuda</i>',
                'Muestra información sobre cómo realizar las actividades y controles online.',
            ],

            [
                '<i class="imagenAmplia">',
                'Ampliar imagen</i>',
                'Nos permite ampliar una imagen.',
            ],

        ];

        // Fin configuración

        textoAyu = "<div class='separador'>" + separador1 + "</div>";


        try {
            for (var i = 0; i < ayuIconos.length; i++) {
                textoAyu += '<div class="row">' +
                    '<p><strong>' + ayuIconos[i][1] + '</strong></p>' + ayuIconos[i][0] + '' + ayuIconos[i][2] + '</div>';
            }
        } catch (e) {
            console.log('1 Error ' + e);
        } finally {

        }


        textoAyu += '<div class="separador">' + separador2 + '</div><ul class=""';

        try {
            for (var i = 0; i < ayuContenidos.length; i++) {
                textoAyu += '<li>' + ayuContenidos[i][0] + '' +
                    '<strong>' + ayuContenidos[i][1] + '</strong>: ' +
                    '' + ayuContenidos[i][2] + '</li>';
            }

        } catch (e) {
            console.log('2 Error ' + e);
        } finally {

        }


        $('#ayuda-posicion').html(textoAyu + '</ul>');

        // FIN POPUP ayuda

        // INICIO POPUP cau
        $('#cau-posicion').html('');
        $('#cau-posicion').append('<div class="panel-group info-pantalla">');
        $('#cau-posicion .info-pantalla').append('<div class="col-md-2"><i class="zmdi zmdi-hc-border zmdi-hc-4x zmdi-phone-forwarded" style="margin: 14px 0 0 0;"></i></div>');
        $('#cau-posicion .info-pantalla').append('<div class="col-md-10">');
        $('#cau-posicion .info-pantalla .col-md-10').append('<p class="certificado">' + datosCertificadoActual.certificado + ': ' + datosCertificadoActual.certificado_desc + '</p>');
        $('#cau-posicion .info-pantalla .col-md-10').append('<p class="modulo">' + datosCertificadoActual.modulo + ': ' + datosCertificadoActual.modulo_desc + '</p>');
        $('#cau-posicion .info-pantalla .col-md-10').append('<p class="uf">' + datosCertificadoActual.UA + ': ' + datosCertificadoActual.UA_desc + '</p>');
        $('#cau-posicion').append('<div class="clear"></div>');
        $('#cau-posicion').append('<div class="separador">Centro de Atención al Usuario (CAU).</div>');
        $('#cau-posicion').append('<div class="clear"></div>');
        $('#cau-posicion').append('<p>La finalidad del <strong>CAU</strong> es que usted disponga de una asistencia para cualquier cuestión o duda que le pueda generar la utilización  del software o hardware a nivel técnico.</p>');
        $('#cau-posicion').append('<p style="text-align: justify !important;">' +
            'Si desea <strong>contactar con su tutor/es</strong>, utilice alguno de los elementos de comunicación de la plataforma, o bien escriba a: <br> <strong><a class="mailto" style="font-weight: bold" href="mailto:tutores@educaticonline.com?Subject=Contacto CAU - ' + datosCertificadoActual.certificado + '" alt="Enviar correo electrónico" target="_blank" title="Enviar correo electrónico"><i class="zmdi zmdi-email"></i> tutores@educaticonline.com</a></strong></p>' +
            '<p style="text-align: justify !important;">En caso de que necesite contactar con el Centro de Atención al Usuario (CAU), escriba un correo a: <br> <a class="mailto" style="font-weight: bold" href="mailto:soporte@educaticonline.com?Subject=Contacto CAU - ' + datosCertificadoActual.certificado + '" alt="Enviar correo electrónico" target="_blank" title="Enviar correo electrónico"><i class="zmdi zmdi-email"></i> soporte@educaticonline.com</a><br> O bien llame al teléfono <i class="zmdi zmdi-phone-in-talk"></i> <span style="font-weight: bold">986 211 295</span> en horario de <strong>09:00</strong> a <strong>14:00</strong> y de <strong>16:00</strong> a <strong>19:00</strong>, de lunes a viernes.' +
            '</p>');

        // FIN POPUP cau


        $(".mailto").click(function(event) {
            window.location = $(this).attr('href');
        });

        $('.marca.actual a').prop('onclick', null).off('click').css('cursor', 'default');
        $('#MOD' + numModulo + 'UF' + numUA + ' a').css('cursor', 'default');
        var indexActual = parseInt($('#mapaCurso .actual .enlaceControl').attr('data-index'));
        var siguienteUA = indexActual + 1;
        var anteriorUA = siguienteUA - 2;
        var siguienteURL = $('[data-index=' + siguienteUA + ']').attr('data-url');
        var anteriorURL = $('[data-index=' + anteriorUA + ']').attr('data-url');
        var siguienteText = $('[data-index=' + siguienteUA + ']').html();
        var anteriorText = $('[data-index=' + anteriorUA + ']').html();
        var siguienteDesc = $($('#mapaCurso .desc')[siguienteUA]).html();
        var anteriorDesc = $($('#mapaCurso .desc')[anteriorUA]).html();
        var siguienteMod = $($('#mapaCurso .desc')[siguienteUA]).parent().attr('id');
        var anteriorMod = $($('#mapaCurso .desc')[anteriorUA]).parent().attr('id');
        $('#siguienteUA').attr('data-url', siguienteURL);
        $('#anteriorUA').attr('data-url', anteriorURL);
        $('#txtUAsig').html(siguienteMod + " / " + siguienteText);
        $('#txtUAant').html(anteriorMod + " / " + anteriorText);
        $('#descUAsig').html(siguienteDesc);
        $('#descUAant').html(anteriorDesc);
        if (indexActual === 0) {
            $('#anteriorUA').css('visibility', 'hidden');
        }
        if (indexActual == $('#mapaCurso .enlaceControl').length - 1) {
            $('#siguienteUA').css('visibility', 'hidden');
        }



        //Responsivo
        calculaCabecera();

    }, 2000);


});
