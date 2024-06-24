// Создаем переменную
let number = 10;

// Узнаем тип переменной
let type = getType(number);

// Выводим текст в зависимости от значения переменной
if (number > 0) {
    console.log("Переменная положительная");
} else if (number < 0) {
    console.log("Переменная отрицательная");
} else {
    console.log("Переменная равна нулю");
}

// Выводим тип переменной
console.log("Тип переменной: " + type);

// Функция для определения типа переменной
function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}
