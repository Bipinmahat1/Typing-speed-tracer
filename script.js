// script.js
const typingArea = document.getElementById('typingArea');
const firstKeyTimeDisplay = document.getElementById('firstKeyTime').querySelector('span');
const completionTimeDisplay = document.getElementById('completionTime').querySelector('span');
const typingSpeedDisplay = document.getElementById('typingSpeed').querySelector('span');
const resetButton = document.getElementById('resetButton');

const sentence = "The quick brown fox jumps over the lazy dog.";
let firstKeyTime = null;
let startTime = null;

// Event listener for typing
typingArea.addEventListener('input', (event) => {
    const typedText = event.target.value;

    // Record the first key press time
    if (!firstKeyTime) {
        firstKeyTime = new Date();
        firstKeyTimeDisplay.textContent = firstKeyTime.toLocaleTimeString();
    }

    // Check if the sentence is fully typed
    if (typedText === sentence) {
        const endTime = new Date();
        const duration = (endTime - firstKeyTime) / 1000; // in seconds

        // Display completion time
        completionTimeDisplay.textContent = `${duration.toFixed(2)} seconds`;

        // Calculate WPM
        const words = sentence.split(' ').length;
        const wpm = (words / duration) * 60;
        typingSpeedDisplay.textContent = wpm.toFixed(2);
    }
});

// Reset button functionality
resetButton.addEventListener('click', () => {
    typingArea.value = '';
    firstKeyTime = null;
    firstKeyTimeDisplay.textContent = '--';
    completionTimeDisplay.textContent = '--';
    typingSpeedDisplay.textContent = '--';
});
