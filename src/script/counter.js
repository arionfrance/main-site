const counterContainer = document.getElementById('counter-container');
var counter = document.getElementById('counter');
var counter2 = document.getElementById('counter2');
var counter3 = document.getElementById('counter3');
var count = 0;

// Crée un observer pour suivre la visibilité de l'élément
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // L'élément est maintenant visible, commencez l'animation du compteur
            firstNumber()
            secondNumber()
            thirdNumber()
            observer.unobserve(entry.target); // Arrêtez de surveiller une fois l'animation déclenchée
        }
    });
});

// Observez l'élément
observer.observe(counterContainer);

// Anime le compteur ici (par exemple, incrémente le compteur)
function firstNumber () {
    var interval = setInterval(() => {
        if (count < 99) {
            count++;
            counter.textContent = count;
        } else {
            clearInterval(interval);
        }
    }, 12);
}
function secondNumber() {
    var interval2 = setInterval(() => {
        if (count < 100) {
            count++;
            counter2.textContent = count;
        } else {
            clearInterval(interval2);
        }
    }, 12);
}
function thirdNumber() {
    var interval3 = setInterval(() => {
        if (count < 23) {
            count++;
            counter3.textContent = count;
        } else {
            clearInterval(interval3);
        }
    }, 13);
}
// Fait apparaître l'élément avec une animation d'opacité
counterContainer.style.opacity = 1;
