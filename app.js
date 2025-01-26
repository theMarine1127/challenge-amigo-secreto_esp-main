// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];

function asignarTextElement(elemento, texto) { //function para asiganar text
    let elementHtml = document.querySelector(elemento);
    elementHtml.innerHTML = texto;
}

function agregarAmigo() {
    let addAmigo = document.getElementById("amigo").value;
    if (addAmigo.trim() === "") { // Verifica si el valor está vacío o contiene solo espacios
        alert("Debe ingresar un nombre.")
    } else {
        amigos.push(addAmigo);
        alert(`Amigo agregado: ${addAmigo}`);
        console.log(amigos);
        limpiaNombre();
        mostrarAmiguis();
    }
    return;
}


//esta function crea elemetos html usando JS
function mostrarAmiguis() {
    const lAmigos = document.getElementById("listaAmigos");
    lAmigos.innerHTML = ""; // Limpia el contenido previo
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lAmigos.appendChild(li);
    }
}

function limpiaNombre() {
    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    if (amigos === 0) {
        alert("Debe registrar amigos.");
    } else {
        const amigoIndex = Math.floor(Math.random() * amigos.length);
        const aleatorioAmigo = amigos[amigoIndex];
        return aleatorioAmigo;
    }
}

sortearAmigo()