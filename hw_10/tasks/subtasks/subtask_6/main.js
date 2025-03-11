const kgInput = document.getElementById('kilogram');

kgInput.addEventListener('input', function () {
    const poundOutput = document.getElementById('pound');
    const kgValue = parseFloat(this.value);
    if (kgValue <= 0) {
        poundOutput.textContent = 'Введіть додатнє значення';
        return;
    }
    if(isNaN(kgValue)) {
        poundOutput.textContent = '';
        return;
    }
    const pound = kgValue * 2.20462;

    poundOutput.textContent = `${pound.toFixed(2)}`;
})