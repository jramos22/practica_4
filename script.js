/**
 * Ejercicio #4:
 *
 * Validar el formulario
 *
 * ¿Como funciona?:
 * 1. La validacion se hace cuando el usuario presiona el boton "Enviar" para enviar el forom
 * 2. Solo se validan los campos con el * (tienen la clase requerido)
 * 3. Al hacer click en "enviar"
 *     3.1. Los campos invalidos deben ponerse con un borde rojo
 *     3.2. Se debe mostrar un aviso con un titulo de: "Ocurrio un error, verifica
 *     los siguientes campos" y seguido un listado con los campos invalidos. El aviso
 *     debe tener border rojo y fondo rojo claro
 *     3.3. Si todos los camppos son validos, debe mostrar un mensaje abajo del boton enviar
 *     que dice: "Su formulario fue enviado". El aviso debe tener borde verde con fondo verde claro
 *
 * ¿Donde empiezo?:
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas (incluyendo buenas practicas pasadas)
 *
 */

// BOILERPLATE
const form = document.querySelector("form");
const aviso = document.createElement('p')
const listo = document.createElement('p');
const nombre = document.querySelector('input[type=nombre]');
const apellido = document.querySelector('input[type=apellidos]');
const correo = document.querySelector('input[type=email]');


const formValidation = () => {
    if( nombre.value === '' && apellido.value === '' && correo.value === '') {
        nombre.classList.remove('rojo');
        apellido.classList.remove('rojo');
        correo.classList.remove('rojo');
        nombre.classList.add('rojo');
        apellido.classList.add('rojo');
        correo.classList.add('rojo');
        aviso.innerHTML = 'Ocurrio un error, verifica los siguientes campos: Nombre, Aplllido y Email'; 
        form.appendChild(aviso);
        listo.innerHTML = '';
    } else if (nombre.value === '' && apellido.value === ''){ 
        nombre.classList.remove('rojo');
        apellido.classList.remove('rojo');
        correo.classList.remove('rojo');
        nombre.classList.add('rojo');
        apellido.classList.add('rojo');
        aviso.innerHTML = 'Ocurrio un error, verifica los siguientes campos: Nombre y Aplllido'; 
        form.appendChild(aviso);
        listo.innerHTML = '';
    } else if (correo.value === '' && apellido.value === ''){ 
        nombre.classList.remove('rojo');
        apellido.classList.remove('rojo');
        correo.classList.remove('rojo');
        correo.classList.add('rojo');
        apellido.classList.add('rojo');
        aviso.innerHTML = 'Ocurrio un error, verifica los siguientes campos: Email y Aplllido'; 
        form.appendChild(aviso);
        listo.innerHTML = '';
    } else if (correo.value === '' && nombre.value === ''){ 
        nombre.classList.remove('rojo');
        apellido.classList.remove('rojo');
        correo.classList.remove('rojo');
        correo.classList.add('rojo');
        nombre.classList.add('rojo');
        aviso.innerHTML = 'Ocurrio un error, verifica los siguientes campos: Email y Nombre'; 
        form.appendChild(aviso);
        listo.innerHTML = '';
    } else if (nombre.value === ''){ 
        nombre.classList.remove('rojo');
        apellido.classList.remove('rojo');
        correo.classList.remove('rojo');
        nombre.classList.add('rojo');
        aviso.innerHTML = 'Ocurrio un error, verifica los siguientes campos: Nombre'; 
        form.appendChild(aviso);
        listo.innerHTML = '';
    }
    else if (apellido.value === ''){ 
        nombre.classList.remove('rojo');
        apellido.classList.remove('rojo');
        correo.classList.remove('rojo');
        apellido.classList.add('rojo');
        aviso.innerHTML = 'Ocurrio un error, verifica los siguientes campos: Apellido'; 
        form.appendChild(aviso);
        listo.innerHTML = '';
    }
    else if (correo.value === ''){ 
        nombre.classList.remove('rojo');
        apellido.classList.remove('rojo');
        correo.classList.remove('rojo');
        correo.classList.add('rojo');
        aviso.innerHTML = 'Ocurrio un error, verifica los siguientes campos: Email'; 
        form.appendChild(aviso);
        listo.innerHTML = '';
    }
    else {
        listo.innerHTML = '';
        aviso.innerHTML = '';
        nombre.classList.remove('rojo');
        apellido.classList.remove('rojo');
        correo.classList.remove('rojo');
        listo.innerHTML = 'Su formulario fue enviado';
        form.appendChild(listo);
    }
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    formValidation();
});