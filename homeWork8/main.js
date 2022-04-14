
cars = [];

function carCreate () {
  let myCars = { 
    mark: ["BWM", "Toyota", "MAZDA"],
    model: ["X5", "X6", "X7"],
    year: ["2020", "2015", "2010"],
    price: ["High", "Low", "Medium"],
    color: ["black", "white", "pink"],
  };
  let myCar = {}
    for (key in myCars) {
      do
        myCar[key] = prompt(`Chose from available options what ${key}: ${myCars[key]}`);
      while(!myCars[key].includes(myCar[key]));
  }
  cars.push(myCar);
}
carCreate();
console.log(cars);