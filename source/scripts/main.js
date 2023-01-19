$('document').ready(function () {




})

function update() {


    var unidade = document.getElementById('qtd');
    var valorIndex = unidade.options[unidade.selectedIndex].value;



    $('.val').each(function (index, element) {


        const preco = element.innerHTML;

        var multplica = parseFloat(preco) * valorIndex;

        element.innerHTML = multplica.toFixed(2);






    });








    // const precoOriginal = 249.90;
    // var precoAlterado = precoOriginal;

    // if (valor > 1) {
    //     var ola = document.querySelector('.val');
    //     ola.innerHTML = precoAlterado * 2;
    // }




}