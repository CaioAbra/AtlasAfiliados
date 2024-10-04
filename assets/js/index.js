$(document).ready(function () {
    // Função para verificar a largura da tela e trocar a imagem
    function trocarImagemPorLargura() {
        if ($(window).width() < 1024) {
            $('.nvlPrata').attr('src', './src/img/cards/nvlPrataMobi.webp');
            $('.nvlOuro').attr('src', './src/img/cards/nvlOuroMobi.webp');
            $('.nvlDima').attr('src', './src/img/cards/nvlDimaMobi.webp');
            $('.nvlMestre').attr('src', './src/img/cards/nvlMestreMobi.webp');
            $('.nvlLendario').attr('src', './src/img/cards/nvlLendarioMobi.webp');

            $('.premioUm').attr('src', './src/img/cards/premioUmMob.webp');
            $('.premioDois').attr('src', './src/img/cards/premioOuroMobi.webp');
            $('.premioDima').attr('src', './src/img/cards/premioDimaMobi.webp');
            $('.premioMestre').attr('src', './src/img/cards/premioMestreMobi.webp');
            $('.premioLendario').attr('src', './src/img/cards/premioLendarioMobi.webp');



        } else {
            $('.nvlPrata').attr('src', './src/img/cards/prata.webp');
            $('.nvlOuro').attr('src', './src/img/cards/nvlOuro.webp');
            $('.nvlDima').attr('src', './src/img/cards/nvlDima.webp');
            $('.nvlMestre').attr('src', './src/img/cards/nvlMestre.webp');
            $('.nvlLendario').attr('src', './src/img/cards/nvlLendario.webp');

            $('.premioUm').attr('src', './src/img/cards/premioUm.webp');
            $('.premioDois').attr('src', './src/img/cards/premioOuro.webp');
            $('.premioDima').attr('src', './src/img/cards/premioDima.webp');
            $('.premioMestre').attr('src', './src/img/cards/premioMestre.webp');
            $('.premioLendario').attr('src', './src/img/cards/premioLendario.webp');

        }
    }

    // Chamar a função ao carregar a página
    trocarImagemPorLargura();

    // Chamar a função sempre que a janela for redimensionada
    $(window).resize(function () {
        trocarImagemPorLargura();
    });
});
