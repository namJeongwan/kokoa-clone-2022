document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form")
    loginForm.addEventListener("submit", (event) => {
        console.log('hi')
        event.preventDefault();
        location.href = "friends.html"
        console.log(location.href);
    });
})