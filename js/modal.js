function openModal(id) {
    var modal_id = document.getElementById(id);
    modal_id.classList.add('is-active');
}

function closeModal(id) {
    var modal_id = document.getElementById(id);
    modal_id.classList.remove('is-active');
}
