
const form = document.querySelector('#form');
const resultDiv = document.querySelector('#result-div');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const targetForm = e.target;
    const celsius = targetForm.celsius.value;
    const fahrenheit = celsius * 9/5 + 32;
    resultDiv.innerHTML = `<p> ${celsius}°C, sono ${Math.floor(fahrenheit)}°F</p>`
})