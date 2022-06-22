
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


//================================================ANOTHER TRY
function carMade () {
  let availabelModels = {
      Tesla: [`X5`, `X6`,`X7`,`X8`,`X9`,`X10`,],
      Ford: [`X5`, `X6`,`X7`,`X8`,`X92`,`X10`,],
      Mus: [`X5`, `X6`,`X7`,`X8`,`X91`,`X10`,],
      Zaz: [`X5`, `X6`,`X7`,`X8`,`X93`,`X10`,],
      Bnw: [`X5`, `X6`,`X7`,`X8`,`X94`,`X10`,],
  }
  let chose = ``;
  function hellow() {
      chose = prompt(Object.keys(availabelModels), `What model`);
      if(!Object.keys(availabelModels).includes(chose)) hellow();
  }
  hellow()
  if(Object.keys(availabelModels).includes(chose)) {
      let model = ``;
      function by () {
          model = prompt(availabelModels[chose].join(`, `), `enter model you whant`);
          if(!availabelModels[chose].includes(model)) by();
      }
      by()
      if(availabelModels[chose].includes(model)) {
          return `Nice choise, you chose ${chose}, model ${model}`
      }
  }

}
console.log(carMade());









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