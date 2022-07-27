let h3 = document.querySelector('h3');
let form = document.querySelector('form');
let main = document.querySelector('main');
const BASE_API = 'http://localhost:3001/order';


function renderOrder({id, description, status}) {
    let order = document.createElement('div');
    order.setAttribute('id', id);
    order.classList.add('order');
    let orderId = document.createElement('h3');
    orderId.textContent = `order id: ${id}`;
    let orderDescription = document.createElement('p');
    orderDescription.textContent = `order: ${description}`;
    let orderStatus = document.createElement('h4');
    orderStatus.textContent = `order status: ${status}`;
    orderStatus.addEventListener('message', (ev)=> {
        console.log(ev);
    })
    order.append(orderId,orderDescription,orderStatus);
    main.append(order);
}

function startAnim() {
    h3.classList.add('animation-start');
    setTimeout(() => {
        h3.classList.remove('animation-start');
    }, 10000)
}
function findOrder(id) {
    return document.getElementById(id).querySelector('h4');
}

function sse(url) {
    const eventSource = new EventSource(url);
    eventSource.addEventListener('message', (event) => {
        let {lastEventId:id} = event;
        let {data:currentStatus} = event;

       let order = findOrder(id);
       order.textContent = currentStatus;

        if (event.data === 'Delivered') {
            eventSource.close();
        }
    })
}

function addQuery(value) {
    let data = {
        clientOrder: value
    }
    return new URLSearchParams(data);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputValue = event.target.querySelector('input').value;

    fetch(`${BASE_API}?${addQuery(inputValue)}`, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(res => {
            sse(`http://localhost:3001/${res.id}`);
            renderOrder(res);
        })
        .catch(err => console.log(err));


    event.target.reset();
    startAnim();
})