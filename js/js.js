
document.getElementById("cambiarModo").addEventListener("click",cambiarModo)
let temaActual=localStorage.getItem("tema")
let body=document.querySelector(".body")
let img= document.getElementById("modoIcono")
if (temaActual=="oscuro") {
    body.classList.add("modoOscuro") 
}

function cambiarModo () {   
    body.classList.toggle("modoOscuro")

    if (body.classList.contains("modoOscuro")) {
        localStorage.setItem("tema", "oscuro") 
         img.src="../imagenes Tudai/light_mode_24dp_FILL0_wght400_GRAD0_opsz24.svg"
    }
    else {
       localStorage.setItem("tema","claro")
       img.src="../imagenes Tudai/dark_mode_24dp_FILL0_wght400_GRAD0_opsz24.svg"
       
}

}

