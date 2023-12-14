const scriptURL = 'https://script.google.com/macros/s/AKfycbzKLuBlGoG4gmMgaSwj3UonbMcd7unrc0VQk4NFxYmtOee3-pzDqDPCSbySxmQbAVGqkg/exec'

const form = document.forms['souscription-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Merci ! Nous avons bien enregistré vos données !" ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})