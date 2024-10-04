$(document).ready(function () {
    // Função para verificar a largura da tela e trocar a imagem
    function trocarImagemPorLargura() {
        if ($(window).width() < 1024) {
            $('.nvlPrata').attr('src', './src/img/cards/nvlPrataMobi.png');
            $('.nvlOuro').attr('src', './src/img/cards/nvlOuroMobi.png');
            $('.nvlDima').attr('src', './src/img/cards/nvlDimaMobi.png');
            $('.nvlMestre').attr('src', './src/img/cards/nvlMestreMobi.png');

            $('.premioUm').attr('src', './src/img/cards/premioUmMob.png');
            $('.premioDois').attr('src', './src/img/cards/premioOuroMobi.png');
            $('.premioDima').attr('src', './src/img/cards/premioDimaMobi.png');
            $('.premioMestre').attr('src', './src/img/cards/premioMestreMobi.png');



        } else {
            $('.nvlPrata').attr('src', './src/img/cards/prata.png');
            $('.nvlOuro').attr('src', './src/img/cards/nvlOuro.png');
            $('.nvlDima').attr('src', './src/img/cards/nvlDima.png');
            $('.nvlMestre').attr('src', './src/img/cards/nvlMestre.png');

            $('.premioUm').attr('src', './src/img/cards/premioUm.png');
            $('.premioDois').attr('src', './src/img/cards/premioOuro.png');
            $('.premioDima').attr('src', './src/img/cards/premioDima.png');
            $('.premioMestre').attr('src', './src/img/cards/premioMestre.png');

        }
    }

    // Chamar a função ao carregar a página
    trocarImagemPorLargura();

    // Chamar a função sempre que a janela for redimensionada
    $(window).resize(function () {
        trocarImagemPorLargura();
    });
});
