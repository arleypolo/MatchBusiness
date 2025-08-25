const openModalBtn = document.getElementById('openModalBtn');
const modalBg = document.getElementById('modalBg');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelModalBtn = document.getElementById('cancelModalBtn');
openModalBtn.addEventListener('click', () => {
    modalBg.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});
function closeModal() {
    modalBg.style.display = 'none';
    document.body.style.overflow = '';
}
closeModalBtn.addEventListener('click', closeModal);
cancelModalBtn.addEventListener('click', closeModal);
// Cerrar con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
// Cerrar al hacer click fuera del modal
modalBg.addEventListener('click', (e) => {
    if (e.target === modalBg) closeModal();
});