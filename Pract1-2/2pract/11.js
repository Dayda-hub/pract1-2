function productOfRandomNumbers() {
  const random = new Random(); 
  const num1 = random.nextInt(51);
  const num2 = random.nextInt(51);
  return num1 * num2;
}

function main() {
  console.log("Произведение двух рандомных чисел: " + productOfRandomNumbers());
}

main(); 