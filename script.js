const icone = document.querySelector('i');
const btnButton = document.querySelector('.btn')

btnButton.addEventListener('click', function(){
    //On vérifie le texte du bouton
    if(btnButton.innerText === "Abonné") {
    //Action à réaliser si la condition est vraie
        btnButton.innerText = "Abonnez-vous"; 
    } else{
    //Action à réaliser si la condition est fausse
    btnButton.innerText = "Abonné"
    }
  ;
})

icone.addEventListener('click', function(){
    console.log('icone cliqué ');
    icone.classList.toggle("fa-face-smile");
    icone.classList.toggle('happy')
})