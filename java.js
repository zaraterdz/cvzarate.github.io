function cambiarImagen(){
    let mostrarImagen = document.getElementById('imagen1')
    if(mostrarImagen.src.match("avatarclicaqui.png"))
    {
        mostrarImagen.src="yo.png"
    }
    else
    {
        mostrarImagen.src="avatarclicaqui.png"
    }
}