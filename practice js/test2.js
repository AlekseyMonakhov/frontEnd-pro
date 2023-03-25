const test = prom();
const test1 = prom();
const test2 = prom();
const test3 = prom();

Promise.race([test, test1, test2, test3])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });


function prom() {
    const random = Math.floor(Math.random() * 10);
    console.log(random);
    return new Promise((res, rej) => {
        setTimeout(() => {

            if(random > 5) {
                res('resolved');
            }else{
                rej("rejected");
            }
        }, random * 100)
    })
}
function * generator() {
    for (let i = 0; i <100; i++) {
        yield i;
        if(i === 10) {
            return "done to 10"
        }
    }
}

const gene = generator();
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());





