// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let unAmigo = "";
let itemLista = "";
let lista = document.getElementById("listaAmigos");
let sorteado = document.getElementById("resultado");
let aleatorio = 0;

/*
Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada 
anteriormente.
Tareas específicas:
- Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado 
por el usuario.
- Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con 
un mensaje de error: "Por favor, inserte un nombre."
- Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
- Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
*/

//Vacia la caja de entrada de texto 
function inputNombre(){
    sorteado.textContent="";
}

//Funcion que valida el nombre de entrada
function validarNombre(nombre){
    if (nombre !== "") {
        return true;
} else {
    return false;
    }
}


function agregarAmigo() {
    //Captura el valor de entrada
    unAmigo = document.getElementById("amigo").value;

    //Valida que no este vacio
    if (validarNombre(unAmigo)) {

        //Agrega el nombre a la lista
        amigos.push(unAmigo);

        //Limpia el campo de entrada
        document.querySelector("#amigo").value= "";
    } else {

        //Muestra mensaje de error
        alert('Por favor, inserte un nombre.');
    }
    actualizaListaAmigos();
}

/* Implementa una función para actualizar la lista de amigos
Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. 
Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

Tareas específicas:

- Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se 
mostrarán los amigos.

- Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

- Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

- Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista. */



function actualizaListaAmigos() {
    
    //Limpia la lista existente
    lista.innerHTML="";

    //Recorre el arreglo de amigos y crea los elementos de la lista
    for (let i = 0; i < amigos.length; i++){
        itemLista = document.createElement("li");
        itemLista.textContent = amigos[i];
        lista.appendChild(itemLista);
       }
}

/*
Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. 
Usa Math.random() y Math.floor() para obtener un índice aleatorio.

Tareas específicas:

- Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

- Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

- Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

- Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para 
mostrar el amigo sorteado.
*/

function sortearAmigo(){
    let amigoSorteado = "";

    //Comprueba que haya amigos para sortear
    if (amigos.length !== 0){

        //Obtiene un numero aleatorio de acuerdo a la cantidad de amigos 
        aleatorio = Math.floor(Math.random() * amigos.length);

        //Obtiene el nombre del amigo usando el numero aleatorio como indice
        amigoSorteado = amigos[aleatorio];

        //Lo muestra en pantalla
        sorteado.textContent = "El amigo secreto es: "+ amigoSorteado;

        //Vacia la lista y el arreglo de amigos
        lista.innerHTML="";
        amigos = [];
      } 

}
