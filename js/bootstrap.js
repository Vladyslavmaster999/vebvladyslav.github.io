<script>
document.addEventListener('DOMContentLoaded', function () {
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

    const subscriptionForm = document.getElementById('subscriptionForm');
    const emailInput = document.getElementById('emailInput');

    subscriptionForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Перевірка валідності пошти
        if (emailInput.checkValidity()) {
            alert(`Дякуємо за підписку! На ${emailInput.value} буде відправлено підтвердження.`);
            emailInput.value = ''; // Очищення поля
            bootstrap.Modal.getInstance(document.getElementById('subscriptionModal')).hide(); // Закриття модального вікна
        } else {
            emailInput.classList.add('is-invalid');
        }
    });

    // При зміні введення очищаємо повідомлення про помилку
    emailInput.addEventListener('input', function () {
        emailInput.classList.remove('is-invalid');
    });
});
</script>



