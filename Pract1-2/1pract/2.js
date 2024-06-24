console.log("Цикл for:");
for (let i = 1; i <= 40; i++) {
    process.stdout.write(i + " ");
}
console.log(); // Переход на след строку


console.log("Цикл while:");
let j = 1;
while (j <= 40) {
    process.stdout.write(j + " ");
    j++;
}
console.log(); // Переход на след строку


console.log("Цикл do-while:");
let n = 1;
do {
    process.stdout.write(n + " ");
    n++;
} while (n <= 40);
console.log(); // Переход на новую строку
