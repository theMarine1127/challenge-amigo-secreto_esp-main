// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];
let respuesta = true;

function asignarTextElement(elemento, texto) { //function para asiganar text
    let elementHtml = document.querySelector(elemento);
    elementHtml.innerHTML = texto;
    elementHtml.classList.add('result-list');//se usa para agregar clase css
}

function agregarAmigo() {
    let addAmigo = document.getElementById("amigo").value.trim();
    if (addAmigo === "") { // Verifica si el valor está vacío
        limpiaNombre();
        amigos.length = 0;
        preguntaReinicio();
        asignarTextElement('#listaAmigos', ` `);

        return;
    } else {
        if (amigos.includes(addAmigo)) {
            alert(`El nombre ${addAmigo} ya se encuentra en la lista`);
            limpiaNombre();
        } else {
            amigos.push(addAmigo);
            alert(`Amigo agregado: ${addAmigo}`);
            mostrarAmiguis();
            limpiaNombre();
        }
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
    if (amigos.length === 0) {  // Primero validamos si hay amigos en la lista
        alert("Debe registrar amigos.");
        return null;
    } else {
        const amigoIndex = Math.floor(Math.random() * amigos.length);
        const aleatorioAmigo = amigos[amigoIndex];
        asignarTextElement('#listaAmigos', `El amigo seleccionado es: ${aleatorioAmigo} `);

    }

}

function preguntaReinicio() {
    const respuesta = confirm("Quiere volver a jugar?");
    if (respuesta) {
        location.reload(); //esto regarga la pagina
    } else {
        alert("Sorteo finalizado.");
        amigos.length = 0;
        document.querySelector("#listaAmigos").innerHTML = "";
    }
}