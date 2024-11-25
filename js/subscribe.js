document.getElementById("subscription-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email-input").value;

    if (email) {
        alert(`Дякуємо за підписку! Ваш email: ${email}`);
        document.getElementById("email-input").value = ""; // Очищаємо поле
    } else {
        alert("Будь ласка, введіть дійсну адресу електронної пошти.");
    }
});
