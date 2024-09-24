let input = document.querySelector('.input');
let btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
   const text = new SpeechSynthesisUtterance(input.value);
   text.rate = 1;
   window.speechSynthesis.speak(text);
})