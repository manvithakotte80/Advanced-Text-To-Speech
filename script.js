let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.getElementById("voiceSelect");

window.speechSynthesis.onvoiceschanged = function() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = "";

    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.appendChild(option);
    });

    speech.voice = voices[0];
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

function speak(){
    if(window.speechSynthesis.speaking){
        window.speechSynthesis.cancel();
    }

    speech.text = document.getElementById("text").value;
    speech.rate = document.getElementById("rate").value;
    speech.pitch = document.getElementById("pitch").value;

    window.speechSynthesis.speak(speech);
}

function pauseSpeech(){
    window.speechSynthesis.pause();
}

function resumeSpeech(){
    window.speechSynthesis.resume();
}

function stopSpeech(){
    window.speechSynthesis.cancel();
}