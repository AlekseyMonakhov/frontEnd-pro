const firstPromise = new Promise((resolve, reject) => {
    const a = 200;
    if (a > 100) {
        reject(`Erorr`);
    } else {
        resolve(`Done`);
    }

});
//  Promise status are : PENDING, FULFILLED, REJECTED.

firstPromise.catch((Erorr) => console.log(Erorr));



const secondPromise2 = new Promise((resolve) => {
    resolve(`ok`);
});
secondPromise2.then((data) => console.log(data));

const rejectPromise = new Promise((_, reject) => {
    reject(`Erorr`);
});


rejectPromise.then(
    (succses) => console.log(succses),
    (error) => console.log(error)
).catch(err => console.log(err))

rejectPromise.catch(err => console.log(err));

//----------------------------------------------------------------------
const secondPromise = new Promise((resolve, reject) => {
    const succsesLoad = false;
    succsesLoad ? resolve(`done`) : reject(`erorr`);

});

secondPromise
    .then(mes => console.log(mes))
    .catch(err => console.log(err))
    .finally(() => console.log(`Finnaly`));


Promise.resolve(`data`).then(data => console.log(data));
Promise.reject(`erorr`).catch(data => console.log(data));


let i = 1;
Promise.resolve(`WOW`)
    .then((data) => {
        console.log(data);
        return data + i++;
    })
    .then((data) => {
        console.log(data);
        return data + i++;
    })
    .then((data) => {
        console.log(data);
        return data + i++;
    })
    .then((data) => {
        console.log(data);
        return data;
    })

Promise.resolve(`Великолепные данные`)
    .then((data) => {
        console.log(`Старт записи`);
        return data;
    })
    .then((data) => {
        console.log(`Запись данных: ` + data);
        return data;
    })
    .finally(() => {
        console.log(`Запись оконченна`);
    })

//============================================================ASYNC
const asyncPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`End`)
    }, 2000);
});

asyncPromise.then((data) => console.log(data));

// const delay = (ms)=> new Promise((resolve) => setTimeout( () => resolve(),ms));
// delay(4000).then(()=>console.log(123));


const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms)); // delay func
const asyncProm = async () => {
    try {
        console.log(`start`);
        await delay(2000);
        console.log(`run`);
        const responce = await new Promise((resolve) => {
            setTimeout(() => resolve(`Hellow`), 1000);
        })
        console.log(`Result ` + responce);
    } catch (err) {
        console.log(err);
    } finally {
        console.log(`Finaly`);
    }
};
asyncProm();

const returnData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Данные переданы`);
        }, 2000);
    });
}

const getAsyncData = async () => {
    try {
        throw `Ужас , ошибка`;
        const data = await returnData();
        console.log(data);
    } catch (err) {
        console.log(err);
    } finally {
        console.log(`Finally`);
    }
};
console.log(getAsyncData());


//----------------------------------------------------------------------
let prom = new Promise((resolve, reject) => {
    resolve(`Hello in other way`)
});
prom
    .then(el => console.log(el));

// Promise.reject(`Eroor`).catch((data) => console.log(data));
let prom2 = new Promise((_, reject) => {
    reject(`Eroor23`);
});
prom2.then(
    (() => { }),
    (err => {
        console.log(err)
        return `Hi ` + err;
    }))
    .then(data => console.log(data))
prom2.catch(err => console.log(err));

const num = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(4);
    }, 1000);
});
num.then(el => console.log(el));

async function num1() {
    let a = await num;
    console.log(a + `dadada`);
}
num1();

Promise.resolve(4).then(el => setTimeout(() => console.log(el), 2000));