function speak(text){
    location.href = 'sample.html';
    window.onload = speechSynthesis.speak(
        new SpeechSynthesisUtterance(text)
    );
}