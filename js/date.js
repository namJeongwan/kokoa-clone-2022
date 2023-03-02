const WEEKDAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

document.addEventListener("DOMContentLoaded", function() {
    const nowSpan = document.getElementById('status-bar__now');
    const timeStampToday = document.querySelector('.chat__timestamp, today')

    function setNow() {
        const now = new Date();
        nowSpan.innerText = `${now.getHours()}:${now.getMinutes()}`;
    }

    setNow();
    setInterval(setNow, 1000);

    if (timeStampToday !== null) {
        const now = new Date();
        timeStampToday.innerText = `${WEEKDAY[now.getDay()]}, ${MONTH[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
    }
});