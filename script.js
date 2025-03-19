// script.js

// Function to check for saved theme preference
function checkTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('toggleBtn').innerText = 'Switch to Light Mode';
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('toggleBtn').innerText = 'Switch to Dark Mode';
    }
}

// Function to toggle theme
function toggleTheme() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        document.getElementById('toggleBtn').innerText = 'Switch to Dark Mode';
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        document.getElementById('toggleBtn').innerText = 'Switch to Light Mode';
    }
}

// Set up event listener for button
document.getElementById('toggleBtn').addEventListener('click', toggleTheme);

// Check theme on page load
checkTheme();
