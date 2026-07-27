document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            
            // Mock Auth Process
            if(email) {
                utils.saveUser(email);
                window.location.href = 'dashboard.html';
            }
        });
    }
});
