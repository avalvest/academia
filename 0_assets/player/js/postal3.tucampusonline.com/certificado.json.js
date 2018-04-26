// CONFIGURACIÓN // // //
const numModulo = 1; // NO usar 0, entre 1 y X
const numUA = 1; // SÍ usar 0, entre 0 y x
const _Contexto = true;
const _Resumen = true;
////////////////////////
const codMod = "CODI000";
const nomMod = "Nombre_del_certificado";
const nomURL = "/course/view.php?id=405";
var iniciaControl = 0;
// FIN CONFIGURACIÓN //


var datosCertificadoCompleto = [{
        "MF": "MFXXXX_1",
        "MF_DESC": "Descripción_módulo",
        "MF_OBJ": nZliOy1 + "/mod/scorm/player.php?a=3853&scoid=34747&currentorg=MF0972_1_ua1&mode=&attempt=1",
        "MF_RESUMEN": nZliOy1 + "/mod/scorm/player.php?a=3869&scoid=34779&currentorg=MF0972_1_ua1&mode=&attempt=1",
        "UF": [{
            "UF_ID": "Contexto",
            "DESC": "Descripción_Contexto",
            "UF_URL": nZliOy1 + "/mod/scorm/player.php?a=3872&scoid=34785&currentorg=MF0972_1_ua1&mode=&attempt=1",
            "UF_FORO": nZliOy1 + "/URL_FORO",
            "UF_ACTIVIDAD_1" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_2" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_3" : nZliOy1 + "/URL_ACTIVIDAD",
        }, {
            "UF_ID": "UA1",
            "DESC": "Descripción_Unidad_Aprendizaje_UA1",
            "UF_URL": nZliOy1 + "/mod/scorm/player.php?a=3872&scoid=34785&currentorg=MF0972_1_ua1&mode=&attempt=1",
            "UF_FORO": nZliOy1 + "/URL_FORO",
            "UF_ACTIVIDAD_1" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_2" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_3" : nZliOy1 + "/URL_ACTIVIDAD",
        }, {
            "UF_ID": "UA2",
            "DESC": "Descripción_Unidad_Aprendizaje_UA2",
            "UF_URL": nZliOy1 + "/mod/scorm/player.php?a=3854&scoid=34749&currentorg=MF0972_1_ua1&mode=&attempt=1",
            "UF_FORO": nZliOy1 + "/URL_FORO",
            "UF_ACTIVIDAD_1" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_2" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_3" : nZliOy1 + "/URL_ACTIVIDAD",
        }, {
            "UF_ID": "UA3",
            "DESC": "Descripción_Unidad_Aprendizaje_UA3",
            "UF_URL": nZliOy1 + "/mod/scorm/player.php?a=3855&scoid=34751&currentorg=MF0972_1_ua1&mode=&attempt=1",
            "UF_FORO": nZliOy1 + "/URL_FORO",
            "UF_ACTIVIDAD_1" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_2" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_3" : nZliOy1 + "/URL_ACTIVIDAD",
        }, {
            "UF_ID": "UA4",
            "DESC": "Descripción_Unidad_Aprendizaje_UA4",
            "UF_URL": nZliOy1 + "/mod/scorm/player.php?a=3858&scoid=34757&currentorg=MF0972_1_ua1&mode=&attempt=1",
            "UF_FORO": nZliOy1 + "/URL_FORO",
            "UF_ACTIVIDAD_1" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_2" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_3" : nZliOy1 + "/URL_ACTIVIDAD",
        }, {
            "UF_ID": "UA5",
            "DESC": "Descripción_Unidad_Aprendizaje_UA5",
            "UF_URL": nZliOy1 + "/mod/scorm/player.php?a=3860&scoid=34761&currentorg=MF0972_1_ua1&mode=&attempt=1",
            "UF_FORO": nZliOy1 + "/URL_FORO",
            "UF_ACTIVIDAD_1" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_2" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_3" : nZliOy1 + "/URL_ACTIVIDAD",
        }, {
            "UF_ID": "UA6",
            "DESC": "Descripción_Unidad_Aprendizaje_UA6",
            "UF_URL": nZliOy1 + "/mod/scorm/player.php?a=3863&scoid=34767&currentorg=MF0972_1_ua1&mode=&attempt=1",
            "UF_FORO": nZliOy1 + "/URL_FORO",
            "UF_ACTIVIDAD_1" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_2" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_3" : nZliOy1 + "/URL_ACTIVIDAD",
        }, {
            "UF_ID": "Resumen",
            "DESC": "Descripción_Resumen",
            "UF_URL": nZliOy1 + "/mod/scorm/player.php?a=3872&scoid=34785&currentorg=MF0972_1_ua1&mode=&attempt=1",
            "UF_FORO": nZliOy1 + "/URL_FORO",
            "UF_ACTIVIDAD_1" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_2" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_3" : nZliOy1 + "/URL_ACTIVIDAD",
        }, ]
    },
    ///////////////////////////////////////////
    {
        "MF": "MFXXXX_2",
        "MF_DESC": "Descripción_módulo",
        "MF_OBJ": nZliOy1 + "/mod/scorm/player.php?a=3866&scoid=34773&currentorg=MF0972_1_ua1&mode=&attempt=1",
        "MF_RESUMEN": nZliOy1 + "/mod/scorm/player.php?a=3868&scoid=34777&currentorg=MF0972_1_ua1&mode=&attempt=1",
        "UF": [{
            "UF_ID": "Contexto",
            "DESC": "Descripción_Contexto",
            "UF_URL": nZliOy1 + "/mod/scorm/player.php?a=3872&scoid=34785&currentorg=MF0972_1_ua1&mode=&attempt=1",
            "UF_FORO": nZliOy1 + "/URL_FORO",
            "UF_ACTIVIDAD_1" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_2" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_3" : nZliOy1 + "/URL_ACTIVIDAD",
        }, {
            "UF_ID": "UA1",
            "DESC": "Descripción_Unidad_Aprendizaje_UA1",
            "UF_URL": nZliOy1 + "/mod/scorm/player.php?a=3857&scoid=34755&currentorg=MF0972_1_ua1&mode=&attempt=1",
            "UF_FORO": nZliOy1 + "/URL_FORO",
            "UF_ACTIVIDAD_1" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_2" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_3" : nZliOy1 + "/URL_ACTIVIDAD",
        }, {
            "UF_ID": "UA2",
            "DESC": "Descripción_Unidad_Aprendizaje_UA2",
            "UF_URL": nZliOy1 + "/mod/scorm/player.php?a=3862&scoid=34765&currentorg=MF0972_1_ua1&mode=&attempt=1",
            "UF_FORO": nZliOy1 + "/URL_FORO",
            "UF_ACTIVIDAD_1" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_2" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_3" : nZliOy1 + "/URL_ACTIVIDAD",
        }, {
            "UF_ID": "UA3",
            "DESC": "Descripción_Unidad_Aprendizaje_UA3",
            "UF_URL": nZliOy1 + "/mod/scorm/player.php?a=3865&scoid=34771&currentorg=MF0972_1_ua1&mode=&attempt=1",
            "UF_FORO": nZliOy1 + "/URL_FORO",
            "UF_ACTIVIDAD_1" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_2" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_3" : nZliOy1 + "/URL_ACTIVIDAD",
        }, {
            "UF_ID": "UA4",
            "DESC": "Descripción_Unidad_Aprendizaje_UA4",
            "UF_URL": nZliOy1 + "/mod/scorm/player.php?a=3856&scoid=34753&currentorg=MF0972_1_ua1&mode=&attempt=1",
            "UF_FORO": nZliOy1 + "/URL_FORO",
            "UF_ACTIVIDAD_1" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_2" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_3" : nZliOy1 + "/URL_ACTIVIDAD",
        }, {
            "UF_ID": "Resumen",
            "DESC": "Descripción_Resumen",
            "UF_URL": nZliOy1 + "/mod/scorm/player.php?a=3872&scoid=34785&currentorg=MF0972_1_ua1&mode=&attempt=1",
            "UF_FORO": nZliOy1 + "/URL_FORO",
            "UF_ACTIVIDAD_1" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_2" : nZliOy1 + "/URL_ACTIVIDAD",
            "UF_ACTIVIDAD_3" : nZliOy1 + "/URL_ACTIVIDAD",
        }, ]
    },
    //////////////////////////////////////////////

];


if (!_Resumen) {
    $.each(datosCertificadoCompleto, function(arrayID, group) {
        group.UF.splice((group.UF.length - 1), 1);
    });
}

if (!_Contexto) {
    $.each(datosCertificadoCompleto, function(arrayID, group) {
        group.UF.splice(0, 1);
    });
}


var datosCertificadoActual = {
    "certificado": codMod,
    "certificado_desc": nomMod,
    "certificado_URL": nZliOy1 + nomURL,
    "modulo": datosCertificadoCompleto[numModulo - 1].MF,
    "modulo_desc": datosCertificadoCompleto[numModulo - 1].MF_DESC,
    "modulo_obj": datosCertificadoCompleto[numModulo - 1].MF_OBJ,
    "UA": datosCertificadoCompleto[numModulo - 1].UF[numUA].UF_ID,
    "UA_desc": datosCertificadoCompleto[numModulo - 1].UF[numUA].DESC,
    "UA_FORO": datosCertificadoCompleto[numModulo - 1].UF[numUA].UF_FORO,
    "actividad1" : datosCertificadoCompleto[numModulo - 1].UF[numUA].UF_ACTIVIDAD_1,
    "actividad2" : datosCertificadoCompleto[numModulo - 1].UF[numUA].UF_ACTIVIDAD_2,
    "actividad3" : datosCertificadoCompleto[numModulo - 1].UF[numUA].UF_ACTIVIDAD_3,

};

$(document).ready(function() {
    $('#nombreCurso').html(datosCertificadoActual.certificado + ' / ' + datosCertificadoActual.modulo + ' / ' + datosCertificadoActual.UA);
    $('#nombreModulo').html(datosCertificadoActual.modulo_desc + ' <span style="color: #555">' + datosCertificadoActual.modulo + '</span>');
    $('#nombreTema').html(datosCertificadoActual.UA_desc + ' <span style="color: #e6c42a">' + datosCertificadoActual.UA) + '</span>' ;
    $('#nombreTema').attr('title', datosCertificadoActual.UA_desc);




    // INICIO BOTONES NAVEGACIÓN
    // Añadimos botón Inicio
    $('#aside-top-menu').append(
        '<li id="tope">' +
        '<a id="enlaceInicio" href="#" data-url="' + datosCertificadoActual.certificado_URL + '" class="menu-link" onclick="cambiaModulo(this)">' +
        '<span class="menu-icon" title="Pantalla de Inicio"><i class="zmdi zmdi-assignment-return zmdi-hc-lg"></i> Inicio</span>' +
        // '<span class="menu-text">Inicio</span>' +
        '</a>' +
        '</li>'
    );

    // Añadimos botones módulos
    for (var i = 0; i < datosCertificadoCompleto.length; i++) {
        $('#aside-top-menu').append(
            '<li id=liModulo' + (i + 1) + '>' +
            '<a href="javascript:void(0)" class="menu-link">' +
            '<span class="menu-icon"><i class="zmdi zmdi-book zmdi-hc-lg" style="margin-right: 7px;"></i>' + datosCertificadoCompleto[i].MF + '</span>' +
            // '<span class="menu-text">' + datosCertificadoCompleto[i].MF + '</span>' +
            '</a>' +
            '</li>'
        );

        $('[id=liModulo' + (i + 1) + ']').append('<ul id=ulModulo' + (i + 1) + '></ul>');

        // Añadimos menú contextual certificados
        for (var x = 0; x < datosCertificadoCompleto[i].UF.length; x++) {
            $('[id=ulModulo' + (i + 1) + ']').append(
                '<li id=MOD' + (i + 1) + 'UF' + (x) + '><a id=enlaceMOD' + (i + 1) + 'UF' + (x) + ' class="enlacesModulos" ' + ' href="#" data-url="' + datosCertificadoCompleto[i].UF[x].UF_URL + '" onclick="cambiaModulo(this)"><i style="color: #555 !important;" class="zmdi m-r-md zmdi-hc-lg zmdi-file-text"></i>' + datosCertificadoCompleto[i].UF[x].UF_ID + '</a></li>'
            );
        }

    }
    // Añadimos botón foro
    // $('#aside-top-menu').append(
    //     '<li>' +
    //     '<a id="enlaceForo" href="javascript:void(0)" class="menu-link" target="_blank">' +
    //     '<span class="menu-icon"><i class="zmdi zmdi-accounts-alt zmdi-hc-lg"></i></span>' +
    //     '<span class="menu-text">Foro</span>' +
    //     '</a>' +
    //     '</li>'
    // );
    // Añadimos botón chat
    // $('#aside-top-menu').append(
    //     '<li>' +
    //     '<a id="enlaceChat" href="javascript:void(0)" class="menu-link">' +
    //     '<span class="menu-icon"><i class="zmdi zmdi-comments zmdi-hc-lg"></i></span>' +
    //     '<span class="menu-text">Chat</span>' +
    //     '</a>' +
    //     '</li>'
    // );
    // FIN BOTONES NAVEGACIÓN
    $('#liModulo' + numModulo).addClass('actualCurso');
    $('#MOD' + numModulo + 'UF' + numUA + ' a').addClass('actualCurso').removeClass('enlacesModulos').prop('onclick', null).off('click');
    $('a.actualCurso > i').css('color', 'white');
$('#enlaceMOD' + numModulo + 'UF' + numUA).removeAttr('href').prop('onclick', null).off('click');


    $('.aside-top-menu li a').focus(function(event) {
        /* Act on the event */
        $(this).next().css({
            'display': 'block',
        })
    });

    $('.aside-top-menu li ul li').focusin(function(event) {
        /* Act on the event */
        parent.$(this).css({
            'display': 'block',
        })
    });

    $('.aside-top-menu li ul li:nth-last-child(1)').focusout(function(event) {
        /* Act on the event */
        $('.aside-top-menu li ul').css({
            'display': 'none',
        })
    });

    $(document).click(function(event) {
        /* Act on the event */
        $('.aside-top-menu li ul').css({
            'display': 'none',
        })
    });

    setTimeout(function() {
        $($('#navegador')[0].contentDocument).on('click', function(event) {
            /* Act on the event */
            $('.aside-top-menu li ul').css({
                'display': 'none',
            })
        });
    }, 5000);



});

// function limite(){
//  var texto = document.getElementById('nombreTema');
//  if(texto.value.length>=50){
//   texto.value=texto.value.substring(0,50);
//  }
// }
