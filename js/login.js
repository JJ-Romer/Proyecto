
const handleLogin = () => {
    console.log('Login button clicked');
};

const handleBack = () => {
    history.back();
};

document.addEventListener('DOMContentLoaded', () => {
    const ingresarBtn = document.getElementById('ingresarBtn');
    const backBtn = document.getElementById('regresarBtn');

    if (ingresarBtn) {
        ingresarBtn.addEventListener('click', handleLogin);
    }

    if (regresarBtn) {
        backBtn.addEventListener('click', handleBack);
    }
});

// document.addEventListener('DOMContentLoaded', () => {
//     const loginForm = document.getElementById('loginForm');
    
//     loginForm.addEventListener('submit', (event) => {
//         event.preventDefault();
        
//         const email = document.getElementById('usuario').value;
//         const password = document.getElementById('password').value;
        
//         fetch('https://script.google.com/macros/s/AKfycbyWCH8bTvpl8t135rGXMDEDDiYqtrWcuHWzAxRiiOSt-cXKhcMZfrnDT_MCI2I6oK8/exec', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 alert('Login successful!');
//                 // Redirect to the main page or do something else on successful login
//             } else {
//                 alert('Invalid credentials. Please try again.');
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     });
// });

