let validInput = false;
let number = 0;

// Цикл, работает пока не будет введено корректное число
while (!validInput) {
    // Запрашиваем число у пользователя
    let input = prompt("Введите число больше 5:");

    // Проверяем на отмену или ввод не валидного значения
    if (input === null) {
        // Пользователь отменил ввод
        alert("Отменена пользователем.");
        break;
    }

    // Парсим введенные строки в число
    number = parseInt(input, 10);

    // Проверяем условия (число больше 5)
    if (!isNaN(number) && number > 5) {
        validInput = true;
    } else if (isNaN(number)) {
        // Вывод сообщения об ошибке при вводе не числа
        alert("Ошибка! Введите целое число.");
    } else {
        // Вывод сообщения об ошибке
        alert("Число должно быть больше 5. Введите повторно.");
    }
}

// Вывод сообщения с поздравлением
if (validInput) {
    alert("Поздравляем! Вы ввели число больше 5: " + number);
}
