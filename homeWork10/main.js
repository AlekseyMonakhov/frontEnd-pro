const arr = [1,2,3,4,5,6,7,8,9,10];


function chunk(list = [], chunkSize = list.length) {
  if (chunkSize) {
    return list.reduce((res, curr, index)=>{
      if(index % chunkSize === 0) {
        res.push([]);
      }
      res[res.length-1].push(curr); 
      return res;
    },[]);
  } else {
    return 'Пользователь, ты не прав!';
  }
}


// function chunk(list = [], chunkSize = list.length) {
//   if (chunkSize) {
//     return list.reduce((result, currentNum, index) => {
//       if (index % chunkSize === 0) {
//         result.push([]);
//       }
//       result[result.length-1].push(currentNum);
//       return result;
//     }, []);
//   } else {
//     return 'Пользователь, ты не прав!';
//   }
// }



// function chunk(arr, chunk) {
//   newArr = [];
//   if(chunk > arr.length) {
//     return `noup`;
//   }
//   if(chunk === 1) {
//     return arr;
//   }
//   for (let index = 0; index < arr.length; index += chunk) {
//     newArr.push(arr.slice(index, index+chunk));
//   }
//   return newArr;
// }

// function chunk(arr, chunkSize) {
//   newArr = [];
//   if (!chunkSize) {
//     alert(`Invalid , value cannot = ${chunkSize}`);
//   } else if (chunkSize === 1) {
//     return arr;
//   }
//   else {
//     while (arr.length > 0) {
//       newArr.push(arr.splice(0, chunkSize))
//     }
//     return newArr;
//   }

  // for (let i = 0; i < arr.length; i += chunkSize) {
  //   newArr.push(arr.slice(i, i+chunkSize));
  // }
  // return newArr;
// }


console.log(chunk(arr,7));

// Первый метод не меняет исходный массив , второй меняет 