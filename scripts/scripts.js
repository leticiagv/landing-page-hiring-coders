const form = document.getElementById('form')

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    alert('Cadastro realizado! Enviaremos as novidades para seu e-mail')

    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

})

