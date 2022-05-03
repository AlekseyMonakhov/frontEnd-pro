const obj = {number:5};
const func = (x = { ...obj}) => {
    console.log(x.number *= 3);
}

func();
func();
func(obj);
func(obj);


