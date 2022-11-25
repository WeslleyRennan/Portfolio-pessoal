function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const texto = document.querySelector('.texto-sobre-mim');
typeWrite(texto);

window.sr = ScrollReveal({ reset: true })
sr.reveal('.conhecimetos-texto', { duration: 2500 })
sr.reveal('.box1-1', { duration: 2500 })
sr.reveal('.box-img', { duration: 2500 })
sr.reveal('footer h1, ul, a', { duration: 2500 })