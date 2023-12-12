const scriptURL = 'https://script.google.com/macros/s/AKfycbxRvle0Ncg5uTZj-16qeQz2ftHl-R9aFYq61hnB8l0r2zryNtguy3SCYiyVDRsiB834/exec'

const form = document.forms['form-info']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Merci ! Nous avons bien enregistré vos données !" ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})