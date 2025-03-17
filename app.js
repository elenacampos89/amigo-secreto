// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [  ] ; // Array de amigos


// Función Agragar amigo, la cual agrega un amigo al array

function agregarAmigo() {

    let nombreAmigo = (document.getElementById("amigo").value);    // Obtiene el valor del input

    if (nombreAmigo === "") {      // Si el input está vacío, muestra un mensaje de error
        alert("Por favor, inserte un nombre"); } 
    else {
        amigos.push(nombreAmigo);   // Si el input tiene un valor, lo agrega al array
        document.getElementById("amigo").value = "";   // Limpia el input
    }
}
// Función para actualizar la lista de amigos

    function actualizarLista() {
        let lista = document.getElementById("listaAmigos"); // Obtener el elemento de la lista
        lista.innerHTML = ""; // Limpiar la lista existente
        
        for (let i = 0; i < amigos.length; i++) { // Iterar sobre el arreglo
            let nombreLista = document.createElement("li"); // Crear un nuevo elemento de lista
            nombreLista.textContent = amigos[i]; // Asignar el nombre del amigo
            lista.appendChild(nombreLista); // Agregar el elemento a la lista
        }
}

function sortearAmigo() {
    if (amigos.length === 0) { // Validar que haya amigos disponibles
        alert("No hay amigos para sortear");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Obtener el nombre sorteado
    
    let resultado = document.getElementById("resultado"); // Obtener el elemento donde se mostrará el resultado
    resultado.innerHTML = "Amigo Secreto: " + amigoSorteado; // Mostrar el resultado
}



