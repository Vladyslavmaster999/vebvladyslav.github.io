// Встановлюємо кінцеву дату таймера (31 грудня 2024 року, 23:59:59)
const targetDate = new Date("2024-12-31T23:59:59").getTime();

function updateTimer() {
    // Отримуємо поточний час у мілісекундах
    const now = new Date().getTime();
    // Обчислюємо час, що залишився до кінцевої дати
    const timeLeft = targetDate - now;

    // Якщо час вийшов (час, що залишився, менше 0)
    if (timeLeft < 0) {
        // Виводимо повідомлення, що подія завершилася
        document.getElementById("countdown").innerHTML = "Подія завершилася!";
        return; // Завершуємо виконання функції
    }

    // Обчислюємо кількість днів, годин, хвилин і секунд, що залишилися
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); // Дні
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Години
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); // Хвилини
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000); // Секунди

    // Оновлюємо значення у відповідних елементах на сторінці
    document.getElementById("days").textContent = days.toString().padStart(2, '0'); // Додаємо нулі перед числом, якщо потрібно
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0'); // Формат годин
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0'); // Формат хвилин
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0'); // Формат секунд
}

// Запускаємо оновлення таймера кожну секунду
setInterval(updateTimer, 1000);

// Викликаємо функцію один раз одразу після завантаження, щоб не чекати першого інтервалу
updateTimer();



