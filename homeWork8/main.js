
cars = [];

function carCreate (num) {
  
  let myCars = { 
    mark: ["BWM", "Toyota", "MAZDA"],
    model: ["X5", "X6", "X7"],
    year: ["2020", "2015", "2010"],
    price: ["High", "Low", "Medium"],
    color: ["black", "white", "pink"],
  };
  let myCar = {};
  do {
    for (key in myCars) {
      do {
        myCar[key] = prompt(`Chose from available options what ${key}: ${myCars[key]}`);
        if(myCars[key].includes(myCar[key])) {
          alert(`${key} aded`);
        }else {
          alert(`invalid ${key}: availabel are next - ${myCars[key]}`);
        }
      }
      while(!myCars[key].includes(myCar[key]));
    }
    cars.push(myCar);
  }while (--num);
};
  
carCreate(2);
console.log(cars);