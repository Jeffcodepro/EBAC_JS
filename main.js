document.getElementById('numberForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const message = document.getElementById('message');
    
    if (campoB > campoA) {
        message.textContent = 'Formulário válido: O número B é maior que o número A.';
        message.style.color = 'green';
        //document.getElementById('campoA').value = '';
        //document.getElementById('campoB').value = '';
    } else {
        message.textContent = 'Formulário inválido: O número B deve ser maior que o número A.';
        message.style.color = 'red';
    }
});

document.getElementById('campoA').addEventListener('input', function() {
    document.getElementById('message').textContent = '';
});

document.getElementById('campoB').addEventListener('input', function() {
    document.getElementById('message').textContent = '';
});
