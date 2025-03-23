// Sélection des éléments
const text = document.getElementById('text');
const speedInput = document.getElementById('speed');
const fontSizeInput = document.getElementById('font-size');
const fontFamilyInput = document.getElementById('font-family');
const backgroundColorInput = document.getElementById('background-color');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

// Éléments pour afficher les valeurs dynamiques
const speedValueDisplay = document.getElementById('speed-value');
const fontSizeValueDisplay = document.getElementById('font-size-value');

let scrollSpeed = 50; // Vitesse par défaut
let animationInterval;

// Fonction pour démarrer le défilement
function startScroll() {
    const duration = (100 / scrollSpeed) * 10; // Calcule la durée en fonction de la vitesse
    clearInterval(animationInterval); // Arrête toute animation précédente
    animationInterval = setInterval(() => {
        text.scrollTop += 1; // Fait défiler le texte vers le bas
    }, duration);
}

// Fonction pour arrêter le défilement
function stopScroll() {
    clearInterval(animationInterval);
}

// Écouteurs d'événements
speedInput.addEventListener('input', () => {
    scrollSpeed = speedInput.value;
    speedValueDisplay.textContent = scrollSpeed; // Met à jour l'affichage de la vitesse
    stopScroll(); // Arrête le défilement actuel
    startScroll(); // Redémarre avec la nouvelle vitesse
});

fontSizeInput.addEventListener('input', () => {
    const fontSize = fontSizeInput.value;
    fontSizeValueDisplay.textContent = fontSize; // Met à jour l'affichage de la taille
    text.style.fontSize = `${fontSize}px`;
});

fontFamilyInput.addEventListener('change', () => {
    text.style.fontFamily = fontFamilyInput.value;
});

backgroundColorInput.addEventListener('input', () => {
    document.body.style.backgroundColor = backgroundColorInput.value;
});

startButton.addEventListener('click', startScroll);
stopButton.addEventListener('click', stopScroll);

// Valeurs par défaut au chargement
text.style.fontSize = `${fontSizeInput.value}px`;
document.body.style.backgroundColor = backgroundColorInput.value;
speedValueDisplay.textContent = speedInput.value; // Initialise l'affichage de la vitesse
fontSizeValueDisplay.textContent = fontSizeInput.value; // Initialise l'affichage de la taille