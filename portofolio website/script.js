const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    successMsg.textContent = "Thanku you! your message has been sent successfully.";
    form.reset();
});