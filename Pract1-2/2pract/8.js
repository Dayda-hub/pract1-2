const newCombinedArray = new Array(newArray.length + 1);
newCombinedArray[0] = -1;
newArray.forEach((element, index) => {
    newCombinedArray[index + 1] = element;
});