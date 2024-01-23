// Javascript for navbar component toggle button
const hamburger = document.querySelector('#hamburger');
const closeButton = document.querySelector('#closeButton');
const navbarMenu = document.querySelector('#menuNavbar');

hamburger.addEventListener('click', function() {
    hamburger.classList.add('hidden');
    navbarMenu.classList.remove('hidden');
    closeButton.classList.remove('hidden');
});

closeButton.addEventListener('click', function(){
    hamburger.classList.remove('hidden');
    navbarMenu.classList.add('hidden');
});
