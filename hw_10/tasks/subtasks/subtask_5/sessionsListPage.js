document.addEventListener('DOMContentLoaded', function () {
    let sessionListBlock = document.getElementById('sessions-list');
    let sessionList = JSON.parse(localStorage.getItem('sessionList')) || [];
    if(sessionList.length === 0) {
        sessionListBlock.innerHTML = 'No sessions yet';
    }else {
        for(const session of sessionList) {
            let item = document.createElement('li');
            item.textContent = `Дата: ${session.date}, Час: ${session.time}`;
            sessionListBlock.appendChild(item);

        }
    }
});


