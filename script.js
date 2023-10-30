function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function setLanguage(language) {
    localStorage.setItem('language', language);
    location.href = 'index.html';
}


window.onload = function () {
    const language = localStorage.getItem('language') || 'en';
    if (language === 'en') {
        document.getElementById('english-content').style.display = 'block';
    } else if (language === 'vi') {
        document.getElementById('vietnamese-content').style.display = 'block';
    }
};

