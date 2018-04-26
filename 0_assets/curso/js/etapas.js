$(document).ready(function() {




    $('#a1').on('click', function() {
        quitar();
        $('#a1').addClass('visited current');



        $('#div1').show();
        $('#div2').hide();
        $('#div3').hide();
        $('#div4').hide();
        $('#div5').hide();
        $('#div6').hide();
        $('#div7').hide();
        $('#div8').hide();
        $('#div9').hide();
        $('#div10').hide();

    });
    $('#a2').on('click', function() {
        quitar();
        $('#a2').addClass('current visited');


        $('#div2').show();
        $('#div1').hide();
        $('#div3').hide();
        $('#div4').hide();
        $('#div5').hide();
        $('#div6').hide();
        $('#div7').hide();
        $('#div8').hide();
        $('#div9').hide();
        $('#div10').hide();
    });
    $('#a3').on('click', function() {
        quitar();
        $('#a3').addClass('current visited');

        $('#div3').show();
        $('#div1').hide();
        $('#div2').hide();
        $('#div4').hide();
        $('#div5').hide();
        $('#div6').hide();
        $('#div7').hide();
        $('#div8').hide();
        $('#div9').hide();
        $('#div10').hide();
    });

    $('#a4').on('click', function() {
        quitar();
        $('#a4').addClass('current visited');

        $('#div4').show();
        $('#div1').hide();
        $('#div2').hide();
        $('#div3').hide();
        $('#div5').hide();
        $('#div6').hide();
        $('#div7').hide();
        $('#div8').hide();
        $('#div9').hide();
        $('#div10').hide();

    });
    $('#a5').on('click', function() {
        quitar();
        $('#a5').addClass('current visited');

        $('#div5').show();
        $('#div1').hide();
        $('#div2').hide();
        $('#div3').hide();
        $('#div4').hide();
        $('#div6').hide();
        $('#div7').hide();
        $('#div8').hide();
        $('#div9').hide();
        $('#div10').hide();
    });

    $('#a6').on('click', function() {
        quitar();
        $('#a6').addClass('current visited');

        $('#div6').show();
        $('#div1').hide();
        $('#div2').hide();
        $('#div3').hide();
        $('#div4').hide();
        $('#div5').hide();
        $('#div7').hide();
        $('#div8').hide();
        $('#div9').hide();
        $('#div10').hide();
    });

    $('#a7').on('click', function() {
        quitar();
        $('#a7').addClass('current visited');

        $('#div7').show();
        $('#div1').hide();
        $('#div2').hide();
        $('#div3').hide();
        $('#div4').hide();
        $('#div5').hide();
        $('#div6').hide();
        $('#div8').hide();
        $('#div9').hide();
        $('#div10').hide();
    });

    $('#a8').on('click', function() {
        quitar();
        $('#a8').addClass('current visited');

        $('#div8').show();
        $('#div1').hide();
        $('#div2').hide();
        $('#div3').hide();
        $('#div4').hide();
        $('#div5').hide();
        $('#div6').hide();
        $('#div7').hide();
        $('#div9').hide();
        $('#div10').hide();
    });

    $('#a9').on('click', function() {
        quitar();
        $('#a9').addClass('current visited');

        $('#div9').show();
        $('#div1').hide();
        $('#div2').hide();
        $('#div3').hide();
        $('#div4').hide();
        $('#div5').hide();
        $('#div6').hide();
        $('#div7').hide();
        $('#div8').hide();
        $('#div10').hide();
    });

    $('#a10').on('click', function() {
        quitar();
        $('#a10').addClass('current visited');

        $('#div10').show();
        $('#div1').hide();
        $('#div2').hide();
        $('#div3').hide();
        $('#div4').hide();
        $('#div5').hide();
        $('#div6').hide();
        $('#div7').hide();
        $('#div8').hide();
        $('#div9').hide();
    });



    function quitar() {
        $('#a1').removeClass('current');
        $('#a2').removeClass('current');
        $('#a3').removeClass('current');
        $('#a4').removeClass('current');
        $('#a5').removeClass('current');
        $('#a6').removeClass('current');
        $('#a7').removeClass('current');
        $('#a8').removeClass('current');
        $('#a9').removeClass('current');
        $('#a10').removeClass('current');
    }

});
