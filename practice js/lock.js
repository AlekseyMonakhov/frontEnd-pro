function a() {
    let a = 10;
    return function () {
        return a--;
    }
}
let b = a();
let c = a();
let d = a();

for (let index = 0; index < 10; index++) {
    console.log(b());
    console.log(c());
    console.log(d());    
}