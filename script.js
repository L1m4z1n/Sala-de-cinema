// Seleção de assento
document.querySelectorAll('.assento').forEach(assento => {
    assento.addEventListener('click', function() {
        this.classList.toggle('selecionado'); // Alterna entre selecionado e desmarcado
    });
});
