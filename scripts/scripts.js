/**
 * Cambia el estado de visibilidad de un modal de forma segura.
 * @param {string} idModal - El ID del elemento modal.
 * @param {boolean} visible - True para mostrar (flex), false para ocultar (none).
 */
function setModalVisibility(idModal, visible) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.style.display = visible ? "flex" : "none";
    }
}

/**
 * Abre un modal específico.
 * @param {string} idModal - El ID del modal a abrir.
 */
function abrirModal(idModal) {
    setModalVisibility(idModal, true);
}

/**
 * Cierra un modal específico.
 * @param {string} idModal - El ID del modal a cerrar.
 */
function cerrarModal(idModal) {
    setModalVisibility(idModal, false);
}

// Cierra la ventana de forma interactiva si el usuario hace clic afuera de la caja blanca.
// Usamos addEventListener en el document para no sobrescribir window.onclick,
// lo que reduce efectos secundarios y complejidad de depuración.
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal-overlay")) {
        event.target.style.display = "none";
    }
});