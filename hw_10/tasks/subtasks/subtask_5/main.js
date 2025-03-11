document.addEventListener('DOMContentLoaded', function() {
    let sessionList = JSON.parse(localStorage.getItem('sessionList')) || [];
    sessionList.push({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
    });
    localStorage.setItem('sessionList', JSON.stringify(sessionList));
});