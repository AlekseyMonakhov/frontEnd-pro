let arr = [4,1,4,4,12,23,43,24,1,34,123,4,123,4,1234,];

// function arrFilt(arr) {
//   let filt =[];
//   arr.forEach(value => {
//     if(!filt.includes(value)){
//       filt.push(value);
//     }
//   })
//   return filt;
// }

function arrFilt(arr) {
  filt =[];
  arr.filter((el, index, arr) => {
    if (!filt.includes(el)) {
      filt.push(el);
    }
  })
  return filt;
}


console.log(arrFilt(arr));