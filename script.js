const icone = document.querySelector('i');
console.log(icone);

icone.addEventListener('click', function(){
    console.log('icone cliqué ');
    icone.classList.toggle("fa-face-smile");
    icone.classList.toggle('happy')
})