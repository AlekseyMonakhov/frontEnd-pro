const arr = [1,2,3,4,5,6,7,8,9,10];

function chunk(arr, chunkSize) {
  newArr = [];
  if (!chunkSize) {
    alert(`Invalid , value cannot = ${chunkSize}`);
  } else if (chunkSize === 1) {
    return arr;
  }
  else {
    for (let i = 0; i < arr.length; i += chunkSize) {
      newArr.push(arr.slice(i, i+chunkSize));
    }
    return newArr;
  }
  // while (arr.length > 0) {
  //   newArr.push(arr.splice(0, chunkSize))
  // }
  // return newArr;
}


console.log(chunk(arr, 3));


// Первый метод не меняет исходный массив , второй меняет 