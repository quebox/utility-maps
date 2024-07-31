// load-navbar.js
function loadNavbar() {
    fetch('navigation.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
}

document.addEventListener('DOMContentLoaded', loadNavbar);
