const scriptURL = 'https://script.google.com/macros/s/AKfycbyq3E-7DZ74s3hdHzL0gr-5xp8FkV-JfbKxWuDQbx7pDCTwle_YEtFrfxyHUYNdOima/exec'

const form = document.forms['form-info']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Merci ! Nous avons bien enregistré vos données ! ;-)" ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})