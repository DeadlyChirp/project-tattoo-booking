
    window.onload = function () {
        const language = localStorage.getItem('language') || 'en';
        if (language === 'en') {
            document.getElementById('english-content').style.display = 'block';
        } else if (language === 'vi') {
            document.getElementById('vietnamese-content').style.display = 'block';
        }
    };

