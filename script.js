function switchTab(tabId) {
    // 1. Quitar la clase 'active' de todos los botones y secciones
    const buttons = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.portfolio-section');

    buttons.forEach(btn => btn.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));

    // 2. Buscar el botón que se presionó y activar su sección correspondiente
    // Buscamos el botón que tenga el onclick correspondiente al tabId
    const clickedButton = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(tabId));
    if (clickedButton) {
        clickedButton.classList.add('active');
    }

    // Activar la sección del portfolio
    const targetSection = document.getElementById(tabId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}
