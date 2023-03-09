document.querySelector('form').addEventListener('submit', function(event){
    console.log('Formulário enviado!');
    event.preventDefault()

    const numA = document.getElementById('num1').value;
    const numB = document.getElementById('num2').value;

    if(numB > numA){
        let message = document.createElement('p');
        message.textContent = 'Formulário validado com sucesso!';
        message.style.color = 'green';
        document.body.appendChild(message);
    }else{
        let message = document.createElement('p');
        message.textContent = 'O segundo número deve ser maior que o primeiro!';
        message.style.color = 'red';
        document.body.appendChild(message);
    }
})
