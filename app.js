const contenidoColor = document.querySelectorAll('.contenidoColor');



contenidoColor.forEach((btn)=>{
    const respuestas = btn.querySelector('.respuestas');
    const icono = btn.querySelector('.icono');

    btn.addEventListener('click', ()=>{
        icono.classList.toggle('faq')
        respuestas.classList.toggle('faq')
        
        btn.classList.toggle('faq')
    })
})