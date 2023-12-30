const Adicionar= document.querySelector('form')
const user = document.querySelector('#user')
const phone = document.querySelector('#phone')

Adicionar.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const linha = `<tr> <td>${user.value}</td> <td>${phone.value}</td> </tr>`
    
    document.querySelector('tbody').innerHTML += linha
    user.value = ''
    phone.value = ''
})