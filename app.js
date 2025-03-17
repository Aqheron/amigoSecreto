// Nombres de los amigos ingresados
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    
    // Para que no ingrese espacios en blanco
    if (amigo === '') {
        alert("Por favor inserte un nombre");
    } else {
        amigos.push(amigo);
        mostrarLista();
    }

    document.getElementById('amigo').value = '';
}

// Limpiar lista existente y mostrar la lista nueva
function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    // Para agregar los elementos a la lista anializandolos
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos [i];
        lista.appendChild(li);
    }
}

//Sortear amigo
function sortearAmigo() {

    // Validar amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return; 
        }
        
        // 2. Generar un índice Aleatorio
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        
        // 3. Obtener un Ganador
        let amigoSorteado = amigos[indiceAleatorio];
        
        // 4. Mostrar Amigo Seleccionado
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = "El amigo sorteado es: " + amigoSorteado;
}