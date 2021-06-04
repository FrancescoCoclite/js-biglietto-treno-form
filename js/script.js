var submit = document.getElementById('btn-genera');
submit.addEventListener("click", function(){

    var nome = document.getElementById('nome').value;
    document.getElementById('nome-biglietto').innerHTML = nome;

    var eta = document.getElementById('eta').value;
    document.getElementById('offerta').innerHTML = eta;

    var km = document.getElementById('km').value;
    document.getElementById('costo').innerHTML = km * 0.21 + 'Euro';
    if (eta == 'over65'){
        document.getElementById('costo').innerHTML = km * 0.21 * 0.6 + 'Euro';

    }else if (eta == 'minorenne'){
        document.getElementById('costo').innerHTML = km * 0.21 * 0.8 + 'Euro';
    }

    var ncarrozza = Math.floor((Math.random() * 9) + 1);
    document.getElementById('carrozza').innerHTML = ncarrozza;

    var cp = Math.floor((Math.random() * 90000) + 10000);
    document.getElementById('codice-cp').innerHTML = cp;
})
var submit = document.getElementById('btn-annulla');
submit.addEventListener("click", function(){


    


)}
    