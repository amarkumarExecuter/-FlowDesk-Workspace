document.addEventListener('DOMContentLoaded', () => {
    // Check if user is already logged in, maybe change CTA button
    const user = utils.getUser();
    if (user) {
        const ctaBtn = document.querySelector('.navbar .btn');
        if(ctaBtn) {
            ctaBtn.textContent = 'Go to Dashboard';
            ctaBtn.href = 'dashboard.html';
        }
    }
});
