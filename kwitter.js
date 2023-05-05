function addUser() {
   var name = document.getElementById("nomeUsuario").value
   localStorage.setItem("name", name)
   window.location = "kwitter_room.html"
}