const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');


function toggleNav() {
    nav.classList.add("nav-visible");
    cerrar.classList.remove('reiniciar-spin');
    void cerrar.offsetWidth; // Trigger reflow
    cerrar.classList.add('reiniciar-spin');
    document.body.style.overflow = 'hidden';
}


cerrar.addEventListener('click', () => {
    //usamos el id del nav para agregarle la clase nav-visible
    nav.classList.remove("nav-visible");
    cerrar.classList.remove('reiniciar-spin');
    document.body.style.overflow = 'scroll';
    void cerrar.offsetWidth; // Trigger reflow
    cerrar.classList.add('reiniciar-spin');
})



function test() {
    nav.classList.remove("nav-visible");
    document.body.style.overflow = 'scroll';
}
