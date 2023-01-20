let precos = [];
let precoMultiplicado = [];
let val = document.querySelectorAll('.val');


$('document').ready(function () {

    listandoPrecos();



});

function listandoPrecos() {

    $('.val').each(function (index, element) {
        precos.push(element.innerHTML);
    });
}


function multiplicandoPreco() {

    var unidade = document.getElementById('qtd');
    var valorIndex = unidade.options[unidade.selectedIndex].value;


    precos.forEach(function (element) {
        var multplica = parseFloat(element) * valorIndex;

        precoMultiplicado.push(multplica);
    });

}


function update() {
    
    multiplicandoPreco();
    
    for (var i = 0; i < val.length; i++) {
        val[i].textContent = precoMultiplicado[i].toFixed(2);
    }

};