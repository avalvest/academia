$(document).ready(function() {


    $('.numeros').on('click', function() {

        $('.numeros').removeClass('numActivo');

        $('div [id *= div]').hide();

        var str = $(this).attr('id');
        var res = str.slice(1, 3);

        $(this).addClass('numActivo');

        $('#div' + res).show();

    });

    $('#a1').addClass('numActivo');
    $('#div1').show();

});
