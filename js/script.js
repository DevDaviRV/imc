function start() {
    var buttoncalculateimc = document.querySelector('#button-calc-imc')
    buttoncalculateimc.addEventListener('click', handlebuttonclick);

    var inputweight = document.querySelector('#input-weight');
    var inputheight = document.querySelector('#input-height');

    inputheight.addEventListener('input', handlebuttonclick);
    inputweight.addEventListener('input', handlebuttonclick);

    handlebuttonclick();
}

function calculateimc(weight, height) {
    return weight / (height * height)
}

function handlebuttonclick() {
    var inputweight = document.querySelector('#input-weight');
    var inputheight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imc-result');

    var weight = Number (inputweight.value);
    var height = Number (inputheight.value);

    var imc = calculateimc(weight, height);
    var formattedimc = imc.toFixed(2).replace('.', ',');
    
    imcResult.textContent = formattedimc;
}

start();