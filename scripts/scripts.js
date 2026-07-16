function abrirModal(idModal) {
    document.getElementById(idModal).style.display = "flex";
}

function cerrarModal(idModal) {
    document.getElementById(idModal).style.display = "none";
}

// Cerrar la ventana de forma interactiva si el usuario hace clic afuera de la caja blanca
window.onclick = function (event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = "none";
    }
}