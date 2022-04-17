
cars = [];

function carCreate (num) {
  availabelCars = {
    model: ["X1", "X2", "X3"],
    brand: ["Tesla", "BMW", "Ford"],
    price: ["Large", "Medium", "Small"],
    color: ["red", "blue", "green"],
    age: ["1year", "3years", "5years"],
  };
  do {
    myCar ={};
    for (let key in availabelCars) {
      let value = prompt(`enter ${key} value`, `${availabelCars[key]}`);
      if (availabelCars[key].includes(value)) {
        myCar[key] = value;
      } else {
        alert(`Wrong value: ${key}`);
      }
    }
    cars.push(myCar);    

  } while (--num); 
};
  
carCreate(2);
console.log(cars);












//   do {
//     let myCar = {};
//     for (key in myCars) {
//       do {
//         myCar[key] = prompt(`Chose from available options what ${key}: ${myCars[key]}`);
//         if(myCars[key].includes(myCar[key])) {
//           alert(`${key} aded`);
//         }else {
//           alert(`invalid ${key}: availabel are next - ${myCars[key]}`);
//         }
//       }
//       while(!myCars[key].includes(myCar[key]));
//     }
//     cars.push(myCar);
//   }while (--num);
// }