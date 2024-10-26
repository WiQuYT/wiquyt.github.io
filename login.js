const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Funkcja do wyświetlania alertu
function showAlert(message) {
    const alert = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.innerText = message; // Ustawienie treści alertu
    alert.classList.add('visible'); // Dodanie klasy do widoczności
}

// Funkcja do zamykania alertu
function closeAlert() {
    const alert = document.getElementById('customAlert');
    alert.classList.remove('visible'); // Usunięcie klasy widoczności
}

// Użycie alertu w kodzie
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const userData = { name, email, password };
    localStorage.setItem('user_' + email, JSON.stringify(userData));

    showAlert('Rejestracja zakończona sukcesem! Możesz się teraz zalogować.'); // Użycie nowego alertu
    container.classList.remove("active");
});

// Rejestracja użytkownika
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const userData = { name, email, password };
    localStorage.setItem('user_' + email, JSON.stringify(userData));

    showAlert('Rejestracja zakończona sukcesem! Możesz się teraz zalogować.');
    container.classList.remove("active");
});

// Logowanie użytkownika
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem('user_' + email));

    if (storedUser && storedUser.password === password) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'home.html';
    } else {
        showAlert('Nieprawidłowy login lub hasło.');
    }
});