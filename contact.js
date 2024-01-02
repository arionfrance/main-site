const scriptURL = 'hhttps://script.google.com/macros/s/AKfycbxeqhv3GgoW1CrTn8V6CUYNLajnIEdZpifANNaspINtR_apjeZmVy0gOMrSFVNbQUkX/exec'

const form = document.forms['form-info']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Merci ! Nous avons bien enregistré vos données ! ;-)" ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})