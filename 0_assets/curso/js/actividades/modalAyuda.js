$(document).ready(function() {

    // Contenido de las ventanas modales laterales de las actividades.
    $('.tile.instrucciones').append(
            '<span id="spanAyuda"><a href="#explicacion" class="exp" data-target="#examplePositionSidebar" data-toggle="modal" type="button">' +
            '<img class="tabulable" alt="Mostrar Ayuda" title="Mostrar Ayuda" id="imgAyuda" src="../0_assets/libs/imagenes/plantilla/iconos/explica.png"></a></span>'
        )
        // Ayuda Verdadero Falso / Control Online
    $('#bodyAyudaVF').html('<p>Pulsando la tecla <tecla>Tab <img src="../0_assets/curso/imagenes/plantilla/iconos/tab.png" alt="Tecla tabulador"></tecla> puedes navegar entre los distintos botones.</p>' +
        '<hr/><p>Pulsando las teclas <tecla>1</tecla> ... <tecla>5</tecla> podrás acceder directamente a la pregunta con el número correspondiente, después, mediante las teclas <tecla>&#9650;</tecla> y <tecla>&#9660;</tecla> podrás navegar entre las posibles respuestas.</p>' +
        '<hr/><p><tecla>Comprobar <img src="../0_assets/curso/imagenes/ejercicios/svg/book.png" alt="Imagen del botón comprobar" style="width: 16px;"> </tecla> mostrará si has acertado o fallado las respuestas que has indicado.</p><p><tecla>Reiniciar <img src="../0_assets/curso/imagenes/ejercicios/svg/pencils.png" alt="Imagen del botón reiniciar" style="width: 16px;"> </tecla> reinicia la actividad.</p>' +
        '<p><tecla>Resolver <img src="../0_assets/curso/imagenes/ejercicios/svg/gift-box.png" alt="Imagen del botón resolver" style="width: 16px;"> </tecla> resuelve la actividad.</p>' +
        '<hr/><p>Para cerrar esta ayuda pulsa <tecla>Esc</tecla> o bien en la x de la parte superior derecha.</p>');

    // Ayuda Seleccionar opción
    $('#bodyAyudaSel').html('<p>Pulsando la tecla <tecla>Tab <img src="../0_assets/curso/imagenes/plantilla/iconos/tab.png" alt="Imagen de la tecla tabulador"></tecla> puedes navegar entre los distintos botones.</p>' +
        '<hr/><p>Pulsando las teclas <tecla>1</tecla> ... <tecla>5</tecla> podrás acceder directamente al desplegable correspondiente, después, mediante las teclas <tecla>&#9650;</tecla> y <tecla>&#9660;</tecla>podrás navegar entre las posibles opciones de cada desplegable.</p>' +
        '<hr/><p><tecla>Comprobar <img src="../0_assets/curso/imagenes/ejercicios/svg/book.png" alt="Imagen del botón comprobar" style="width: 16px;"> </tecla> mostrará si has acertado o fallado las respuestas que has indicado.</p>' +
        '<p><tecla>Reiniciar <img src="../0_assets/curso/imagenes/ejercicios/svg/pencils.png" alt="Imagen del botón reiniciar" style="width: 16px;"> </tecla> reinicia la actividad.</p>' +
        '<p><tecla>Resolver <img src="../0_assets/curso/imagenes/ejercicios/svg/gift-box.png" alt="Imagen del botón resolver" style="width: 16px;"> </tecla> resuelve la actividad.</p>' +
        '<hr/><p>Para cerrar esta ayuda pulsa <tecla>Esc</tecla> o bien en la x de la parte superior derecha.</p>');

    // Ayuda Completar frases
    $('#bodyAyudaFrases').html('<p><p>Pulsando la tecla <tecla>Tab <img src="../0_assets/curso/imagenes/plantilla/iconos/tab.png" alt="Tecla tabulador"></tecla> puedes navegar entre los distintos botones.</p>' +
        '<hr/><p>Pulsando primero las teclas <tecla>a</tecla> ... <tecla>z</tecla> y después las teclas <tecla>1</tecla> ... <tecla>5</tecla> podrás acceder directamente al desplegable correspondiente, después, mediante las teclas <tecla>&#9650;</tecla> y <tecla>&#9660;</tecla> podrás navegar entre las posibles opciones de cada desplegable.</p>' +
        '<p>Por ejemplo, para acceder al despegable A1, pulsa <tecla>a</tecla> y a continuación <tecla>1</tecla>, verás como el despegable cambia a un color más oscuro.</p>' +
        '<hr/><p><tecla>Comprobar <img src="../0_assets/curso/imagenes/ejercicios/svg/book.png" alt="Imagen del botón comprobar" style="width: 16px;"> </tecla> mostrará si has acertado o fallado las respuestas que has indicado.</p>' +
        '<p><tecla>Reiniciar <img src="../0_assets/curso/imagenes/ejercicios/svg/pencils.png" alt="Imagen del botón reiniciar" style="width: 16px;"> </tecla> reinicia la actividad.</p>' +
        '<p><tecla>Resolver <img src="../0_assets/curso/imagenes/ejercicios/svg/gift-box.png" alt="Imagen del botón resolver" style="width: 16px;"> </tecla> resuelve la actividad.</p></p>' +
        '<hr/><p>Para cerrar esta ayuda pulsa <tecla>Esc</tecla> o bien en la x de la parte superior derecha.</p>');

    // Ayuda arrastrar
    $('#bodyAyudaArrastra').html('<p>Pulsando la tecla <tecla>Tab <img src="../0_assets/curso/imagenes/plantilla/iconos/tab.png" alt="Tecla tabulador"></tecla> puedes navegar entre los distintos botones.</p>' +
        '<hr/><p>Haz clic y mantén pulsado sobre uno de los elementos inferiores para arrastrarlo a uno de los elementos superiores.</p>' +
        '<hr/><p><tecla>Comprobar <img src="../0_assets/curso/imagenes/ejercicios/svg/book.png" alt="Imagen del botón comprobar" style="width: 16px;"> </tecla> mostrará si has acertado o fallado las respuestas que has indicado.</p><p><tecla>Reiniciar <img src="../0_assets/curso/imagenes/ejercicios/svg/pencils.png" alt="Imagen del botón reiniciar" style="width: 16px;"> </tecla> reinicia la actividad.</p>' +
        '<p><tecla>Resolver <img src="../0_assets/curso/imagenes/ejercicios/svg/gift-box.png" alt="Imagen del botón resolver" style="width: 16px;"> </tecla> resuelve la actividad.</p>' +
        '<hr/><p>Para cerrar esta ayuda pulsa <tecla>Esc</tecla> o bien en la x de la parte superior derecha.</p>');

    // Ayuda arrastrar
    $('#bodyAyudaOrdenarListas').html('<p>Pulsando la tecla <tecla>Tab <img src="../0_assets/curso/imagenes/plantilla/iconos/tab.png" alt="Tecla tabulador"></tecla> puedes navegar entre los distintos botones.</p>' +
        '<hr/><p>Haz clic y mantén pulsado sobre uno de los elementos inferiores para arrastrarlo a uno de los elementos superiores.</p>' +
        '<hr/><p><tecla>Comprobar <img src="../0_assets/curso/imagenes/ejercicios/svg/book.png" alt="Imagen del botón comprobar" style="width: 16px;"> </tecla> mostrará si has acertado o fallado las respuestas que has indicado.</p><p><tecla>Reiniciar <img src="../0_assets/curso/imagenes/ejercicios/svg/pencils.png" alt="Imagen del botón reiniciar" style="width: 16px;"> </tecla> reinicia la actividad.</p>' +
        '<p><tecla>Resolver <img src="../0_assets/curso/imagenes/ejercicios/svg/gift-box.png" alt="Imagen del botón resolver" style="width: 16px;"> </tecla> resuelve la actividad.</p>' +
        '<hr/><p>Para cerrar esta ayuda pulsa <tecla>Esc</tecla> o bien en la x de la parte superior derecha.</p>');

    //Fin ayuda


});
