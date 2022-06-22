const toDo = fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => data.filter(el => el.userId === 1 && el.title.includes(` aut `)))
    .then(([{title: objectTitle = `Hellow` }]) => objectTitle)
    .then(word => word.charAt(0).toUpperCase() + word.slice(1))
    .then(word => word.length)
    .then(length => length>5 ? console.log(`Big Word`) : console.log(`Not big word`))




let cont = document.querySelector(`.div`);

function add(id, title) {
    let h3 = document.createElement(`h3`);
    let p = document.createElement(`p`);
    h3.textContent = id;
    p.textContent = title;
    cont.append(h3,p);
    
}


const toDo1 = fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(function(data) {
        data.forEach(element => {
            add(element.id, element.title)
        });
        return 12;
    })
    .then(data => console.log(data));


async function one(url) {
    let responce = await fetch(url);

    let foto = await responce.json()
    .then(el => el.filter(el => el.albumId === 1 && el.id === 1))
    
    console.log(foto);
}
one(`https://jsonplaceholder.typicode.com/photos`);



async function create() {
    let responce = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    let url = await responce.json()
        .then(el => el.find(el => el.id === 1))
        .then(({ url: fotoUrl }) => fotoUrl);


    let img = document.createElement(`img`);
    img.style = `position:fixed;top:10px;left:10px;width:100px;`;
    document.body.append(img);

    img.src = url;

    setTimeout(() => {
        img.remove();
        URL.revokeObjectURL(img.src);
    }, 3000);
}

create();

let user = {
    userName: `Aleksey`,
    userAge: 27
}





async function hellow() {
    let responce = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(user),
    });

    let result = await responce.json();
    console.log(result);
};

hellow();