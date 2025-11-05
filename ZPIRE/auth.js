document.addEventListener('DOMContentLoaded', () => {
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');

    if (signinForm) {
        signinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate a successful sign-in
            alert('Sign in successful! Redirecting...');
            // Redirect to the "My Bookings" page after a short delay
            setTimeout(() => {
                window.location.href = 'my-bookings.html';
            }, 1000);
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate a successful sign-up
            alert('Sign up successful! Please sign in.');
            // Redirect to the sign-in page
            setTimeout(() => {
                window.location.href = 'signin.html';
            }, 1000);
        });
    }
});