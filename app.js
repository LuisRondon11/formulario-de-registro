const contrasena = document.querySelector('#contrasena');
const confirmar = document.querySelector('#confirmar');
const button = document.querySelector('[type=submit]');
const mostrar = document.querySelector('[type=button]');
mostrar.addEventListener('click', () => {
    if (mostrar.value === 'mostrar') {
        contrasena.type = 'text';
        confirmar.type = 'text';
        mostrar.value = 'ocultar'
    }else if (mostrar.value === 'ocultar') {
        contrasena.type = 'password';
        confirmar.type = 'password';
        mostrar.value = 'mostrar'
    }
})
confirmar.addEventListener('change', comprobar)
function comprobar() {
    if (contrasena.value != confirmar.value) alert('las contraseñas no coinciden');
    if (contrasena.value === confirmar.value) button.disabled =false;
}
button.addEventListener('click', () => {
    alert('registro exitoso')
})