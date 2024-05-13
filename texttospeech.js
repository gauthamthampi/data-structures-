
const message = new SpeechSynthesisUtterance();

function speakText() {
    const text = document.getElementById('text-input').value;
    message.text = "Welcome to Gtimes";
    window.speechSynthesis.speak(message);
    
}

document.getElementById('speak-button').addEventListener('click', speakText);
