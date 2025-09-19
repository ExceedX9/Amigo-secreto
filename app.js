// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//Principales funciones del programa
// 1) Agregar nombres a una lista
// 2) Validar la entrada del usuario y alertar de espacio vacío
// 3) Mostrar la lista actualizada en la página
// 4) Realizar un sorteo aleatorio de un nombre de la lista
// 5) Reiniciar el sorteo



// Variables globales 

let listaDeNombres = []; // Lista para almacenar los nombres ingresados por el usuario
let nombresSorteadosAleatoriamente = []; // Lista para almacenar los nombres que ya han sido sorteados y evitar que se repitan 

// Funciones globales
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

// 1) y 2) Función para agregar un nombre a la lista y validar sus caracteres

function agregarAmigo() {
    let nombreUsuario = document.getElementById('amigo').value;

    //Realiza la comparación para validar que el nombre no esté vacío
    if (nombreUsuario === '') {
        asignarTextoElemento('h2', 'Nombre de Usuario Invalido');
        return;
    }
    // Validar que el nombre no contenga caracteres especiales o números
    if (!/^[a-zA-Z\s]+$/.test(nombreUsuario)) {
        asignarTextoElemento('h2', 'El nombre debe contener caracteres válidos');
        return;
    }
    // Validar que el nombre no esté repetido en la lista
    if (listaDeNombres.includes(nombreUsuario)) {
        asignarTextoElemento('h2', 'Este nombre ya fue ingresado');
        return;
    }
    // Si el nombre es válido, se agrega a la lista
    listaDeNombres.push(nombreUsuario);
    asignarTextoElemento('h2', 'Digite el nombre de sus amigos');
    mostrarListaDeAmigos();
    console.log(listaDeNombres);
}

// 3) Función para mostrar la lista actualizada en la página


function mostrarListaDeAmigos() {
    const contenedor = document.getElementById('listaAmigos');
    contenedor.innerHTML = ''; // Limpia la lista antes de actualizar

    // Agrega cada nombre como un elemento de lista
    listaDeNombres.forEach(nombre => {
        const item = document.createElement('li');
        item.textContent = nombre;
        contenedor.appendChild(item);
    });
}


// 4) Función para realizar un sorteo aleatorio de un nombre de la lista

// Esta funcion nos indica si la lista de amigos está vacía o si ya se sortearon todos los nombres
function sortearAmigo() {
    if (listaDeNombres.length === 0) {
        asignarTextoElemento('h2', 'No hay nombres en la lista para sortear');
        return;
    }
    // Esta condición verifica si ya se sortearon todos los nombres y si es así, muestra un mensaje y habilita el botón de reiniciar
    if (nombresSorteadosAleatoriamente.length === listaDeNombres.length) {
        asignarTextoElemento('h2', 'Ya se sortearon todos los amigos. ¿Deseas reiniciar?');
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    }
    // Realiza el sorteo aleatorio
    let amigoSorteado;
    do {
        let indiceAleatorio = Math.floor(Math.random() * listaDeNombres.length);
        amigoSorteado = listaDeNombres[indiceAleatorio];
    } while (nombresSorteadosAleatoriamente.includes(amigoSorteado));

    nombresSorteadosAleatoriamente.push(amigoSorteado);
    asignarTextoElemento('h2', `El amigo secreto es: ${amigoSorteado}`);
}

    console.log(nombresSorteadosAleatoriamente);

// 5) Función para reiniciar el sorteo
function reiniciarPrograma() {
    listaDeNombres = [];
    nombresSorteadosAleatoriamente = [];
    asignarTextoElemento('h2', 'Digite el nombre de sus amigos');
    mostrarListaDeAmigos();
    console.log(listaDeNombres);
    console.log(nombresSorteadosAleatoriamente);
    return;
}