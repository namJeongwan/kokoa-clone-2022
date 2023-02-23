document.addEventListener("DOMContentLoaded", function() {
    const nowSpan = document.getElementById('status-bar__now');

    function setNow() {
        const now = new Date();
        nowSpan.innerText = `${now.getHours()}:${now.getMinutes()}`;
        //console.log(nowSpan.innerText);
    }

    setNow();
    setInterval(setNow, 1000);
});