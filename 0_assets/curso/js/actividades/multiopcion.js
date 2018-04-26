$(document).ready(function() {
  reiniciar();

  $('input').on('click', function() {
          actHabilitaComprobar();
      });
});

var cont=0;
var temp = false;

function a_validar (elem, solucion, pregunta) {
  if (elem.value.toLowerCase() == solucion) {
    elem.style.color = "#555";
    elem.style.fontWeight = "bold";
    elem.disabled = 'true';
    cont++;   //incrementamos al deshabilitar
    
    var tab_index;
    tab_index = parseInt($(elem).attr('tabindex')) + 1;
    $('input[tabindex='+tab_index+']').focus();
    
    switch(pregunta){
      case 1:   
          if (cont==4){    
          cont=0;   
          temp = true;
        }
          break;
        
                         
    }
  }
}




function resuelve() {



  if (

$("input[value=1]:checked").length == $("input[value=1]").length && $("input[value=0]:checked").length == 0 && temp
    ) {


actComprobar(10,10);


  } else {

    actComprobar(0,10);
  }



   

}







function reiniciar() {

        $('input').filter(':checkbox').prop('checked',false);
        $('.casillaInput').val('');
        $("input").prop('disabled', false);



    actReiniciar();
}   


function soluciona() {

$($('.casillaInput')[0]).val('a');
$($('.casillaInput')[1]).val('p');
$($('.casillaInput')[2]).val('e');
$($('.casillaInput')[3]).val('s');
$('.casillaInput').css('color', 'red');
$('input').filter(':checkbox').prop('checked',false);
$("input[value=1]").prop('checked', true);
$("input").prop('disabled', true);

  actResolver();

}