function addRoom() {
    document.getElementById("nomeSala").innerHTML
    localStorage.setItem("nomeSala")
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
roomNames = childKey;
//Início do código
<div id="Salas"></div>
//Fim do código
});});}
getData();

function redirectToRoomName() {
    localStorage.setItem("")
}