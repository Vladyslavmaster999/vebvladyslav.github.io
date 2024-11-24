
// Встановлюємо кінцеву дату таймера
const targetDate = new Date("2024-12-31T23:59:59").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "Подія завершилася!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}

// Оновлюємо таймер кожну секунду
setInterval(updateTimer, 1000);

// Перший запуск
updateTimer();

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

   
