const input = document.getElementById('search-input');
const darkModeBtn = document.querySelector('.dark');

// Google Search when you press Enter
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchGoogle();
    }
});

// Function to search Google
function searchGoogle() {
    const query = input.value;
    if (query.trim() !== '') {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}

// Function to redirect to a random first link (I'm Feeling Lucky)
function feelingLucky() {
    const query = input.value;
    if (query.trim() !== '') {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`;
    }
}

// Voice Search Functionality
function startVoiceSearch() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        input.value = transcript;
        searchGoogle();
    };

    recognition.onerror = function(event) {
        alert('Could not capture your voice. Please try again.');
    };

    recognition.start();
}
function toggleSettings() {
    const settings = document.querySelector('.settings');
    settings.classList.toggle('show'); // Toggle the show class to show/hide the settings box
}