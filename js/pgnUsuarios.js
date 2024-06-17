document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutBtn');
    const profileBtn = document.getElementById('profileBtn');
    const offersBtn = document.getElementById('offersBtn');

    logoutBtn.addEventListener('click', () => {
        location.href = '../../Proyecto/html/login.html';
    });

    profileBtn.addEventListener('click', () => {
        location.href = 'perfil.html'; // Cambia esto a la URL de tu página de perfil
    });

    offersBtn.addEventListener('click', () => {
        location.href = 'ofertas.html'; // Cambia esto a la URL de tu página de ofertas
    });
});
