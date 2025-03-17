// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// funcion para agregar amigos
let listaDeAmigos=[]; 
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo=='') {
        alert("INGRESE UN NOMBRE PORFAVOR");
        return;
    }
    if (/\d/.test(amigo)) {
        alert("El nombre no debe contener números");
        return;
    }
    listaDeAmigos.push(amigo);
    document.getElementById('amigo').value = '';
    
    viewAmigos();
  }
//funcion para vizualizar amigos 
function viewAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    listaDeAmigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
//funcion para sortear amigo 
function sortearAmigo(){
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceSorteado];
    document.getElementById('resultado').textContent = `Amigo sorteado: ${amigoSorteado}`;

}


document.getElementById('amigo').addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
    agregarAmigo();
}
});