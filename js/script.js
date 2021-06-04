var submit = document.getElementById('btn-genera');
submit.addEventListener("click", function(){

    var nome = document.getElementById('nome').value;
    document.getElementById('nome-biglietto').innerHTML = nome;

    var eta = document.getElementById('eta').value;
    document.getElementById('offerta').innerHTML = eta;

    var km = document.getElementById('km').value;
    document.getElementById('costo').innerHTML = (km * 0.21).toFixed(2) + 'Euro';
    if (eta == 'over65'){
        document.getElementById('costo').innerHTML = (km * 0.21 * 0.6).toFixed(2) + 'Euro';

    }else if (eta == 'minorenne'){
        document.getElementById('costo').innerHTML = (km * 0.21 * 0.8).toFixed(2) + 'Euro';
    }

    var ncarrozza = Math.floor((Math.random() * 9) + 1);
    document.getElementById('carrozza').innerHTML = ncarrozza;

    var cp = Math.floor((Math.random() * 90000) + 10000);
    document.getElementById('codice-cp').innerHTML = cp;

    var none = document.getElementById("biglietto");
    none.classList.remove("d-none");none4.classList.add("d-block");

    var none2 = document.getElementById("titolobiglietto");
    none2.classList.remove("d-none");none4.classList.add("d-block");

})
var annulla = document.getElementById('btn-annulla');
annulla.addEventListener("click", function(){
 
    var none3 = document.getElementById("biglietto");
    none3.classList.remove("d-block");
    none3.classList.add("d-none");

    var none4 = document.getElementById("titolobiglietto");
    none4.classList.remove("d-block");
    none4.classList.add("d-none");


})
    