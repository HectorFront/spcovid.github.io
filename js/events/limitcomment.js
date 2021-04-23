const limitComment = () =>{
    const caracteres = $('.input__comment').val();
    let countCaracteres = 500 - caracteres.length;
    $('#qtd_caracteres').html(countCaracteres);
    let qtd_span = $('#qtd_caracteres').html();
    if(qtd_span == 0){
        $('#qtd_caracteres').css('color', 'rgb(216, 60, 60)');
        $('#qtd_caracteres').css('border', '5px solid rgb(216, 60, 60)');
    }else{
        $('#qtd_caracteres').css('color', '#1da584');
        $('#qtd_caracteres').css('border', '5px solid #1da584');
    }
}