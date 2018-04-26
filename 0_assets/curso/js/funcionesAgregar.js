var contadorNumeros = $('.numeros').length;

function agregaNumeros() {
    txtNum = '';
    txtDiv = '';
    txtCopy = '';
    contadorNumeros++;
    numPX = contadorNumeros * 40;

    for (var i = 1; i <= contadorNumeros; i++) {
        txtNum += '<a href="#" id="a' + i + '" class="numeros tabulable"><span class="green">' + i + '</span></a>'
        txtDiv += '<div id="div' + i + '" class="gris" style="display: none;"><p class="centrado"><strong>Título' + i + '</strong></p><p>Texto' + i + '</p></div>'
    }

    txtNum = '<div style="max-width: ' + numPX + 'px; margin: 0 auto; margin-botom: 10px">' + txtNum + '</div>';
    txtDiv = '<div class="clear"></div>' + txtDiv;
    //replace < y > por &lt; &gt;
    txtCopy = txtNum + txtDiv;
    txtCopy = txtCopy.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    $('#genBotonesSlider').html(txtNum);
    $('#genDivsSlider').html(txtDiv);
    $('#codBotonesSlider').html(txtCopy);
    $('#a1').addClass('numActivo');
    $('#div1').show();

    $('.numeros').on('click', function() {
        $('.numeros').removeClass('numActivo');
        $('div [id *= div]').hide();
        var str = $(this).attr('id');
        var res = str.slice(1, 3);
        $(this).addClass('numActivo');
        $('#div' + res).show();
    });
}

function cambiaLetrasNumeros() {
  $('#genBotonesSlider .numeros .green').each(function(index, el) {
    texto = ($(el).html());
    switch (texto) {
      case (index + 1).toString():
        etiqueta = String.fromCharCode((parseInt(texto)+64)).toLowerCase();
        break;
      case (String.fromCharCode(((index + 1)+64)).toLowerCase()):
        etiqueta = texto.toUpperCase();
        break;
      default:
        etiqueta = (index + 1);
    }
    $(el).html(etiqueta);
    txtNum = $('#genBotonesSlider').html();
    txtDiv = $('#genDivsSlider').html();
    txtCopy = (txtNum+txtDiv).replace(/</g, '&lt;').replace(/>/g, '&gt;');
    $('#codBotonesSlider').html(txtCopy);
  });
}

///////////////////////////////////////////

var contadorTabs = $('.tab-pane').length;

function agregaPesta() {
    txtPest = '';
    txtDiv = '';
    txtCopy = '';
    contadorTabs++;

    for (var i = 1; i <= contadorTabs; i++) {
        i == 1 ? classTemp = 'active' : classTemp = '';
        txtPest += '<li id="tab' + i + '" role="presentation" style="text-align:center;font-weight:bold;" class="clickable ' + classTemp + '"><a class="tabulable" data-toggle="tab" href="#exampleTabs' + i + '" aria-controls="exampleTabs' + i + '" role="tab">Título' + i + '</a></li>'
        txtDiv += '<div class="tab-pane ' + classTemp + '" id="exampleTabs' + i + '" role="tabpanel"><p>Texto' + i + '_Texto' + i + '_Texto' + i + '_Texto' + i + '_Texto' + i + '_Texto' + i + '_Texto' + i + '_Texto' + i + '_Texto' + i +
            '_Texto' + i + '_</p></div>'
    }

    txtPest = '<ul class="nav nav-tabs" data-plugin="nav-tabs" role="tablist">' + txtPest + '</ul>';
    txtDiv = '<div class="tab-content padding-top-20 gris">' + txtDiv + '</div>';
    //replace < y > por &lt; &gt;
    txtCopy = '<div class="nav-tabs-horizontal">' + txtPest + txtDiv + '</div><div class="clear"></div>';
    txtCopy = txtCopy.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    $('.nav-tabs-horizontal').html(txtPest + txtDiv);
    $('#codPestañas').html(txtCopy);
    $('#tab1, #exampleTabs1').addClass('active');
}

//////////////////////////////////////////

var contadorAcordeon = $('.panel').length;

function agregaAcordeon() {
    txtAcor = '';
    contadorAcordeon++;

    for (var i = 1; i <= contadorAcordeon; i++) {
      aria = i == 1 ? 'true' : 'false';
      collapse = i == 1 ? ' in' : '';
        txtAcor += '<div class="panel">' +
            '<div class="panel-heading" id="exampleHeadingDefault' + i + '" role="tab">' +
            '<a class="panel-title " data-toggle="collapse" href="#exampleCollapseDefault' + i + '" ' +
            'data-parent="#exampleAccordionDefault" aria-expanded="'+aria+'" aria-controls="exampleCollapseDefault' + i + '">' +
            'titulo_titulo_' + i +
            '</a></div>' +
            '<div class="panel-collapse collapse'+collapse+'" id="exampleCollapseDefault' + i + '" aria-labelledby="exampleHeadingDefault' + i + '" role="tabpanel">' +
            '<div class="panel-body">' +
            'Texto_de_prueba' + i +
            '</div></div></div>'
    }

    txtAcor = '<div class="examle-wrap"><div class="example"><div class="panel-group" id="exampleAccordionDefault" aria-multiselectable="true" role="tablist">' + txtAcor + '</div></div></div><div class="clear"></div>';

    $('#recursoAcordeon').html(txtAcor);
    rellenaCopy('recursoAcordeon', 'codAcordeon');
}


var contadorTabsCirculos = $('.glyphicon').length;

function agregaTabCirculo() {
    txtPest = '';
    txtDiv = '';
    txtCopy = '';
    contadorTabsCirculos++;

    for (var i = 1; i <= contadorTabsCirculos; i++) {
        txtPest += '<li><a href="#section-circle-' + i + '" class="glyphicon glyphicon-list-alt"><span>Título_' + i + '</span></a></li>';
        txtDiv += '<section id="section-circle-' + i + '"><p class="negrita">Título_' + i + '</p><p>Texto_' + i + '_Texto_' + i + '_Texto_' + i + '_Texto_' + i +
            '_Texto_' + i + '_Texto_' + i + '_Texto_' + i + '_Texto_' + i + '_Texto_' + i + '_Texto_' + i + '_Texto_' + i + '_Texto_' + i + '_Texto_' + i +
            '_Texto_' + i + '_</p><br /><br /></section>';
    }

    $('#cambiaClase').hasClass('small_circles') ? classTemp = 'small_circles' : classTemp = '';

    txtCopy = '<section style="margin-top:50px; width:100%;">' +
        '<div id="cambiaClase" class="tabs tabs-style-circle ' + classTemp + '">' +
        '<nav><ul>' + txtPest +
        '</ul></nav>' +
        '<div class="clear"></div>' +
        '<div class="clear"></div>' +
        '<div class="content-wrap">' + txtDiv +
        '</div>' +
        '</div>' +
        '</section><div class="clear"></div>';


    $('#recursoTabs').html(txtCopy);
    rellenaCopy('recursoTabs', 'codTabs1');

    (function() {

        [].slice.call(document.querySelectorAll('.tabs')).forEach(function(el) {
            new CBPFWTabs(el);
        });

    })();
}

//////////////////////////////////////////////
var contadorSlider = $('.slide-contenido').children().length;

function agregaSlider() {
    txtPest = '';
    txtDiv = '';
    txtCopy = '';
    contadorSlider++;

    for (var i = 2; i <= contadorSlider; i++) {
        txtPest += '<li class="negrita"><a href="#slide' + i + '">' + i + '</a></li>'

        txtDiv += '<div id="slide' + i + '">' +
            '<p>Texto_' + i + '_Texto_' + i + '_Texto_' + i + '_Texto_' + i + '_Texto_' + i + '_Texto_' + i + '_Texto_' + i + '_Texto_' + i + '_Texto_' + i + '_Texto_' + i + ' </p>' +
            '</div>'
    }

    txtCopy = '<div class="slide-mio">' +
        '<ul class="slide-cabecera">' +
        '<span class="fa fa-chevron-circle-left fa-lg"></span>' +
        '<li class="active negrita"><a href="#slide1">1</a></li>' + txtPest +
        '<span class="fa fa-chevron-circle-right fa-lg"></span>' +
        '</ul>' +
        '<div class="slide-contenido">' +
        '<div id="slide1">' +
        '<p>Texto_1_Texto_1_Texto_1_Texto_1_Texto_1_Texto_1_Texto_1_Texto_1_Texto_1_Texto_1</p>' +
        '</div>' + txtDiv +
        '</div>' +
        '</div><div class="clear"></div>';

    $('#recursoSlider').html(txtCopy);
    rellenaCopy('recursoSlider', 'codSlider');

    $('body').append('<script type="text/javascript" src="../0_assets/curso/js/slide.js"></script>');
}



//////////////////////////////////////////////

function generaTabla() {
    var filas = $('#Filas').val();
    var columnas = $('#Columnas').val();
    var txtFinal = '';
    var txtHead = '';
    var txtBody = '';

    $('.tablesaw-bar').remove();

    //Generando thead
    txtHead = '<th id="Cabecera_1" data-tablesaw-priority="persist">Cabecera_1</th>';
    for (var i = 1; i < columnas; i++) {
        txtHead += '<th id="Cabecera_' + (i + 1) + '">Cabecera_' + (i + 1) + '</th>';
    }

    //Generando tbody
    for (var i = 1; i <= filas; i++) {
        txtBody += '<tr><td id="Celda_' + i + '_1" class="negrita">Celda_' + i + '_1</td>';
        for (var x = 1; x < columnas; x++) {
            txtBody += '<td id="Celda_' + i + '_' + (x + 1) + '">Celda_' + i + '_' + (x + 1) + '</td>';
        }
        txtBody += '</tr>';
    }

    txtFinal = '<table class="tablesaw table-hover table-bordered" data-tablesaw-mode="swipe" data-tablesaw-minimap>' +
        '<thead><tr>' + txtHead + '</tr></thead><tbody>' + txtBody + '</tbody></table><div class="clear"></div>';

    $('#recursoTabla').html(txtFinal);

    $('body').append('<script type="text/javascript" src="../0_assets/curso/js/tablesaw.js"></script>');

    numHijos = $('.tablesaw-bar').children().length;

    for (var i = numHijos - 1; i > 1; i--) {
        $('.tablesaw-bar').children()[i].remove();
    }

    $('#navTabla').html($('.tablesaw-bar'));
    rellenaCopy('recursoTabla', 'codTabla');
    clicCelda();
}

function generaTablaExtendida() {
    var filas = $('#Filas').val();
    var columnas = $('#Columnas').val();
    var txtFinal = '';
    var txtHead = '';
    var txtBody = '';

    $('.tablesaw-bar').remove();

    //Generando thead
    txtHead = '<th id="Cabecera_1" data-tablesaw-priority="persist">Cabecera_1</th>';
    for (var i = 1; i < columnas; i++) {
        txtHead += '<th id="Cabecera_' + (i + 1) + '">Cabecera_' + (i + 1) + '</th>';
    }

    //Generando tbody
    for (var i = 1; i <= filas; i++) {
        txtBody += '<tr><td id="Celda_' + i + '_1" class="negrita">Celda_' + i + '_1</td>';
        for (var x = 1; x < columnas; x++) {
            txtBody += '<td id="Celda_' + i + '_' + (x + 1) + '">Celda_' + i + '_' + (x + 1) + '</td>';
        }
        txtBody += '</tr>';
    }
    txtFinal = '<table class="tablesaw table-striped table-bordered" data-tablesaw-mode="swipe" data-tablesaw-mode-switch data-tablesaw-minimap data-tablesaw-mode-exclude="columntoggle">' +
        '<thead><tr>' + txtHead + '</tr></thead><tbody>' + txtBody + '</tbody></table><div class="clear"></div>';

    $('#recursoTabla').html(txtFinal);

    $('body').append('<script type="text/javascript" src="../0_assets/curso/js/tablesaw.js"></script>');

    numHijos = $('.tablesaw-bar').children().length;

    for (var i = numHijos - 1; i > 2; i--) {
        $('.tablesaw-bar').children()[i].remove();
    }

    $('#navTabla').html($('.tablesaw-bar'));
    rellenaCopy('recursoTabla', 'codTabla');
    clicCelda();
}


function fcolapsar(accion, celda1, celda2) {
    var numCol1 = isNaN($('#' + celda1).attr(accion)) ? numCol1 = 1 : $('#' + celda1).attr(accion);
    var numCol2 = isNaN($('#' + celda2).attr(accion)) ? numCol2 = 1 : $('#' + celda2).attr(accion);

    $('#' + celda1).attr(accion, parseInt(numCol1) + parseInt(numCol2));
    $('#' + celda2).remove();
}

var contadorClic = 0;
var celda1 = '';
var celda2 = '';

function clicCelda() {
    $('th, td').on('click', function(event) {
        event.preventDefault();
        contadorClic++;
        $(this).addClass('clicCelda');

        if (contadorClic == 2) {
            celda2 = $(this).attr('id');
            colapsaCeldas();
            $('th, td').removeClass('clicCelda');
            contadorClic = 0;
            celda1 = '';
            celda2 = '';
        } else {
            celda1 = $(this).attr('id');
        }
    });
}

function colapsaCeldas() {
    eval("fcolapsar($(':checked').attr('value'), celda1, celda2)");
    $('#navTabla').html($('.tablesaw-bar'));
    rellenaCopy('recursoTabla', 'codTabla');
}

//////////////////////////////////////////////

function generaBloques() {
    var txtCopy = '';
    efecto = $('#efecto').val();
    tiempo = $('#tiempo').val();
    margen = $('#margen').val();
    ancho = $('#ancho').val();
    degradado = $('#degradado').val();
    txtCopy = '<div class="bloque ' + degradado + ' nomostrar" data-tiempo="' + tiempo + '" data-efecto="' + efecto + '" style="width:' + ancho + '%; margin-left:' + margen + '%">Bloque</div>';
    $('#recursoTabla').append(txtCopy);
    txtCopy = txtCopy.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    $('#codTabla').append(txtCopy);

    $(".nomostrar").each(function(index) {
        mostrar($(this), $(this).data("tiempo"), $(this).data("efecto"));
    });

}

$("#degradado").change(function() {
console.log(this);
});

function testAnim(x) {
    $('#ejemplo').removeClass().addClass(x + ' ' + $('#degradado').val() + ' animated bloque').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass().addClass($('#degradado').val() + ' bloque');
    });
};


    $('.js--triggerAnimation').click(function(e) {
        e.preventDefault();
        var anim = $('.js--animations').val();
        testAnim(anim);
    });

    $('.js--animations, #degradado').change(function() {
        var anim = $(this).val();
        testAnim(anim);
    });


//////////////////////////////////////////////

function rellenaCopy(origen, destino) {
    var txtCopy = '';
    txtCopy = $('#' + origen).html();
    txtCopy = txtCopy.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    $('#' + destino).html(txtCopy);
}

function cambiaClase(id, clase) {
    $('#' + id).toggleClass(clase);
    contadorTabsCirculos--;
    agregaTabCirculo();
}

function copyToClipboard(elemento) {
    var $temp = $("<input>")
    $("body").append($temp);
    $temp.val($(elemento).text()).select();
    document.execCommand("copy");
    $temp.remove();
}
