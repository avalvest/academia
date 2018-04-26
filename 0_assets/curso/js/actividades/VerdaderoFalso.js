  /*IMPORTANTE - No se necesita ninguna modificación en el código, salvo en la variable "preguntas"
      que debe ir en el html de la actividad

      TODOS los demás elementos se generan de manera dinámica*/
  // CONFIGURACIÓN //
  const caracterAcierto = "✓";
  const caracterFallo = "✗";
  const caracterVacio = "?";
  const cambiarPreguntaAuto = false; // Cambia a la siguiente pergunta (si la hay) en cuanto se selecciona un radio button
  const bloquearNav = false; // Bloquea la navegación por las preguntas si se ha fallado una
  // En caso de estar en un iFrame habría que ejecutar la función desde el parent o top.

  $(document).ready(function() { // INICIO DOCUMENT READY

      //SCRIPT encargado de ocultar DIVs con las preguntas
      $('.numeros').on('click', function() {
          ocultaTodo();
          $(this).addClass('activo');
          $('#div' + $(this).attr('value')).show();
      });

      $('*').keydown(function(e) {
          var pul = e.keyCode - 48;
          if (pul > 0 && pul <= preguntas.length) {
              ocultaTodo();
              $('#a' + pul).click();
              if (!estaSeleccionada(pul)) {
                  $($('#form' + pul + ' div input')[0])[0].focus();
              }
          }

      });

      reiniciar();

      $('input').iCheck({ // Radio button
          checkboxClass: 'icheckbox_square-blue',
          radioClass: 'iradio_square-blue',
          increaseArea: '20%' // optional
      });

  }); // FIN DOCUMENT READY

  ////////////////////////////////////////////////////////////
  ////////////////   GENERANDO CÓDIGO    /////////////////////
  ////////////////////////////////////////////////////////////

  index = 1;
  valor = 1;

  // Imprime DIVs necesarios para anidar los datos. También añade el BOTONCOMPRUEBA y la animación de TODOOK
  // El botón requiere BOOTSTRAP
  $('.panel-actividad').addClass('clearfix').append('<div class="separacion"></div>' +
      '<div class="clearfix caja practica" id="respuestas"><div id="cajaNum" class="cajaNum"></div></div>' +
      '<div style="max-width:150px; margin:0 auto;"></div>');
  //'<input id="BotonComprueba" class="btn btn-primary" type="button" value="COMPROBAR" onclick="JavaScript:resuelve()" /></div>');
  //
  //Imprime el DIV donde van LOS NÚMEROS. Se centra y expande automáticamente según el número de preguntas
  $('#cajaNum').append('<div id="contenedorNum" class="clearfix" style="max-width: ' +
      ((preguntas.length * 60) + (preguntas.length * 1)) + 'px; margin:0 auto; padding:10px"></div>');

  $.each(preguntas, function(key, value) {
      //Imprime LOS CÍRCULOS CON NÚMEROS
      $('#contenedorNum').append('<div class="numeros lista" id="a' + index + '" value="' + index + '">' + index + '</div>');
      valor = 1;
      index++;
  });

  index = 1;

  var preguntasAle = new Array();
  var aleatorio = 0;
  var divAleatorio = 0;

  for (var i = 0; i < preguntas.length; i++) {
      preguntasAle[i] = i + 1;
  }

  $.each(preguntas, function(key, value) {
      // Genera Random para desordenar las respuestas
      aleatorio = Math.floor(Math.random() * (preguntasAle.length));
      divAleatorio = preguntasAle[aleatorio];
      preguntasAle.splice(aleatorio, 1);
      //Imprime LAS PREGUNTAS Y RESPUESTAS
      $('#respuestas').append('<div class="numerosDiv" id="div' + divAleatorio +
          '" style="margin: 0 auto; display: none;"><div style="margin: 0 auto;"><p style="padding:2px;"><span>' +
          value['pregunta'] + '</p><div style="float:left;"><form id="form' + divAleatorio +
          '" style="float:left; margin-top:10px; margin-left:20px; margin-bottom: 20px"></form></div>' +
          '<div class="clear"></div><div style="display:none" class="cajaFeedback"><p><strong>Feedback:</strong> ' + value['feedback'] + '</p></div>' +
          '</div></div>');
      //
      //Imprime LAS RESPUESTAS ALEATORIAMENTE
      $.each(value['respuestas'], function(key, value) {
          var numAl2 = Math.floor((Math.random() * 2) + 1);

          if (numAl2 == 1) {
              $('#form' + divAleatorio + '').append('<table><tbody><tr><th><input id="pregunta' + divAleatorio + valor + '"  name="pregunta' +
                  divAleatorio + '"  type="radio" value="' + valor + '" class="radio" /></div></th><th><label for="pregunta' + divAleatorio +
                  valor + '" style="cursor: pointer;"><span>' + value + '</span></label></th></tr></tbody></table>');
          } else {
              $('#form' + divAleatorio + '').prepend('<table><tbody><tr><th><input id="pregunta' + divAleatorio + valor + '"  name="pregunta' +
                  divAleatorio + '"  type="radio" value="' + valor + '" class="radio" /></div></th><th><label for="pregunta' + divAleatorio +
                  valor + '" style="cursor: pointer;"><span>' + value + '</span></label></th></tr></tbody></table>');
          }

          valor++;

      });

      valor = 1;

  });



  ////////////////////////////////////////////////////////////
  ////////////////   INICIO FUNCIONES    /////////////////////
  ////////////////////////////////////////////////////////////

  totales = 0;
  respondida = 1;
  mostrarNoRespondida = false;
  fallo = false;

  function resuelve() {
      var numPreguntas = $('form').length; //Cuenta todos los form de la página (número de preguntas)
      cont = 0;

      for (num = 1; num <= numPreguntas; num++) { //Recorre todas las preguntas y las comprueba
          comprueba($('form input[name="pregunta' + num + '"]'));
      }

      muestraNoRespondida();
      mostrarNoRespondida = false;

      nota = parseInt(100 * cont / numPreguntas); // Nota sobre 100

      if (enviarNotaMoodle) {
          try {
              enviarNota(nota);
          } catch (e) {

          } finally {

          }

      }

      actComprobar(cont, numPreguntas);
  }

  function comprueba(origen) {
      var preguntaActual = origen;
      for (var posibles = 0; posibles < preguntaActual.length; posibles++) { //Recorre todas las respuestas de una pregunta
          if (preguntaActual[posibles].checked == true) { //Si está marcada, comprueba si es correcta o incorrecta
              $(preguntaActual).attr('disabled', true); //Desactiva el radio buttom

              if (preguntaActual[posibles].value == 1) { //Si es correcta aumenta el contador y se modifican colores y etiquetas
                  cont++;
                  totales++;
                  $('#a' + num).addClass('circuloAcierto').html(caracterAcierto);
                  if (cont == $('form').length) { //Si son todas correctas se inician animaciones y deshabilitan objetos
                      return; /*En el momento que se confirma que es correcta, se abandona el bucle de la pregunta, ya no es necesario seguir*/
                  }
              } else {
                  totales++;
                  $('#a' + num).addClass('circuloFallo').html(caracterFallo);
                  fallo = true; //Indica que se ha producido un fallo (respuesta incorrecta)
                  if (bloquearNav) {
                      $('.numeros').css('cursor', 'default').unbind(); //OPCIONAL - Deshabilita la pulsación de los números si se ha fallado alguna
                  }

                  $('form input[name *= pregunta]').attr('disabled', 'true');
                  ////$('#txtFeed').remove();
                  ////$('.actividades .col-xs-10').append('<p id="txtFeed" class="tile"><strong>Repasa la pantalla:</strong><br>' + textoFeedBack + '</p>');

                  return; /*En el momento que se confirma que es incorrecta, se abandona la función, ya no es necesario seguir*/
              }

          } else { //Si no está marcada se comprueba si las demás lo están o no (podría no estar marcada la 1º opción, pero sí la 2º, 3º...)
              var marcado = 0;
              for (var i = 0; i < preguntaActual.length; i++) {
                  if (preguntaActual[i].checked == true) {
                      marcado = 1; //Si hay alguna marcada, se puede salir del bucle
                      break;
                  }
              }
              if (marcado == 0) {
                  $('#a' + num).addClass('circuloVacio').html(caracterVacio);
                  mostrarNoRespondida = true;
                  return;
                  /*En caso de que no se haya marcado ninguna, se modifica color y etiqueta y se sale de la función.
                  Si no se sale se corre el riesgo de que comprueba si el resto de preguntas son verdaderas o falsas
                  cuando no es necesario*/
              }
          }
      }
  }


  function muestraNoRespondida() { //Una vez pulsado el botón comprobar muestra en pantalla la primera pregunta que está sin responder, en caso de haber alguna
      if (mostrarNoRespondida == true && fallo == false) { //Solo se muestra la primera pregunta sin resonder cuando se han dejado preguntas sin responder y no se han tenido fallos

          ocultaTodo();

          for (i = 1; i <= preguntas.length; i++) {
              if (($('#a' + i).html() != caracterAcierto) && ($('#a' + i).html() != caracterFallo)) {
                  $('#a' + i).addClass('activo');
                  $('#div' + i).show();
                  break;
              }
          }
      }
  }

  function saltaAsiguiente() { //Una vez pulsado el radio button muestra en pantalla la siguiente pregunta

      if (preguntas.length > 1) {
          if (respondida < preguntas.length) {
              respondida++;
              ocultaTodo();
              $('#a' + respondida).addClass('activo');
              $('#div' + respondida).show();
          }
      }
  }

  function enviarNota(calificacion) { // Envía la nota obtenida a Moodle

      try {
          console.log("vamos a enviar la nota" + calificacion);
          parent.gestionaActividad(calificacion);
          parent.setLMS("cmi.core.score.raw", calificacion);
      } catch (e) {

      } finally {

      }


  }

  function ocultaTodo() {
      $('.numeros').removeClass('activo');
      $('.numerosDiv').hide();
  }

  function reiniciar() {

      actReiniciar();

      $('.checked').removeClass('checked');
      $('*').removeClass('circuloAcierto circuloFallo circuloVacio');
      //$('#txtFeed').remove();

      $('.numeros').each(function() {
          $(this).html($(this).attr('value'));
      });

      for (var i = 0; i < $('form').length; i++) {
          for (var x = 0; x < $('form input[name="pregunta' + (i + 1) + '"]').length; x++) {
              $('form input[name="pregunta' + (i + 1) + '"]')[x].checked = false;
          }
      }

      ocultaTodo();
      $('form input[name *= pregunta]').removeAttr('disabled');


      if (preguntas.length == 1) {
          $('#cajaNum').hide(); // Si solo hay una pregunta, oculta el contenedor con número de preguntas
          $('#div1').show();
      } else {
          $('#a1').addClass('activo');
          $('#div1').show();
      }

      $('.row.actividades .comprobar').addClass('disabled-clicks').fadeTo('slow', .4);
      $('.comprobar').off('click', resuelve);

  }


  function soluciona() {
      console.log('soluciona');
      $('.checked').removeClass('checked');

      for (num = 1; num <= $('form').length; num++) { //Recorre todas las preguntas y las comprueba
          $('#a' + (num)).addClass('circuloAcierto').html(caracterAcierto);

          numRespuestas = $('#form' + (num) + ' table').length;

          for (var posibles = 0; posibles < numRespuestas; posibles++) { //Recorre todas las respuestas de una pregunta

              if ($($('#form' + (num) + ' table div input')[posibles]).attr('value') == 1) {
                  console.log('correcta ')
                  $($('#form' + (num) + ' table div')[posibles]).addClass('checked');

              }
          }
      }
      actResolver();
      $('.cajaFeedback').show();
  }

  function estaSeleccionada(pul) {
      var numRes = $('#form' + pul + ' div input').length;

      for (var i = 0; i < numRes; i++) {
          if ($($('#form' + pul + ' div input')[i])[0].checked) {
              return true;
          }
      }
      return false;
  }
