// Спрашиваем у пользователя его знак зодиака
let zodiacSign = prompt("Введите знак зодиака:");

// Всплывающее окно приветствия в зависимости от знака зодиака
switch (zodiacSign.toLowerCase()) {
    case "овен":
        alert("Привет, Овен!");
        break;
    case "телец":
        alert("Привет, Телец!");
        break;
    case "близнецы":
        alert("Привет, Близнецы!");
        break;
    case "рак":
        alert("Привет, Рак!");
        break;
    case "лев":
        alert("Привет, Лев!");
        break;
    case "дева":
        alert("Привет, Дева!");
        break;
    case "весы":
        alert("Привет, Весы!");
        break;
    case "скорпион":
        alert("Привет, Скорпион!");
        break;
    case "стрелец":
        alert("Привет, Стрелец!");
        break;
    case "козерог":
        alert("Привет, Козерог!");
        break;
    case "водолей":
        alert("Привет, Водолей!");
        break;
    case "рыбы":
        alert("Привет, Рыбы!");
        break;
    default:
        alert("Неизвестный знак зодиака!");
        break;
}
