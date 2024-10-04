$(document).ready(function () {
    // Função para verificar a largura da tela e trocar a imagem
    function trocarImagemPorLargura() {
        if ($(window).width() < 1024) {
            $('.nvlPrata').attr('src', './src/img/cards/nvlPrataMobi.png');
            $('.nvlOuro').attr('src', './src/img/cards/nvlOuro.png');

            $('.premioUm').attr('src', './src/img/cards/premioUmMob.png');



        } else {
            $('.nvlPrata').attr('src', './src/img/cards/prata.png');
            $('.nvlOuro').attr('src', './src/img/cards/nvlOuroMob.png');

            $('.premioUm').attr('src', './src/img/cards/premioUm.png');

        }
    }

    // Chamar a função ao carregar a página
    trocarImagemPorLargura();

    // Chamar a função sempre que a janela for redimensionada
    $(window).resize(function () {
        trocarImagemPorLargura();
    });
});
