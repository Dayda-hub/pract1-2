const array4 = [6, 7, 8, 9, 10];
const combinedArray = new Array(array2.length + array4.length);
array2.forEach((element, index) => {
  combinedArray[index] = element;
});
array4.forEach((element, index) => {
  combinedArray[array2.length + index] = element;
});
combinedArray.forEach((element) => {
  console.log(element);
});