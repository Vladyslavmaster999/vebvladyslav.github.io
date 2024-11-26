document.getElementById("subscription-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Отримуємо значення з поля вводу з ID "email-input"
    const email = document.getElementById("email-input").value;

    // Перевіряємо, чи введено email
    if (email) {
        // Якщо email введено, виводимо повідомлення про успішну підписку
        alert(`Дякуємо за підписку! Ваш email: ${email}`);

        // Очищаємо поле вводу після успішного введення
        document.getElementById("email-input").value = ""; 
    } else {
        // Якщо поле порожнє, виводимо повідомлення про помилку
        alert("Будь ласка, введіть дійсну адресу електронної пошти.");
    }
});
