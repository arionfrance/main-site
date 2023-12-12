const scriptURL = 'https://script.google.com/macros/s/AKfycbyPfrthFVBdPLWiNpXRGHd0j50QP7NETq__1FZR8XBucvRaB_xgEyYu40e4Q5jgdk0TZw/exec'

const form = document.forms['form-info']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Merci ! Nous avons bien enregistré vos données !" ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})