let h3 = document.querySelector('h3');
let form = document.querySelector('form');
let main = document.querySelector('MainContainer');
let getHistoryBtn = document.querySelector('.get-orders');
const BASE_API = 'http://localhost:3001';


function renderOrder({id, description, status}) {

    let renderedOrders = Array.from(main.querySelectorAll('.order'));
    if(!renderedOrders.find(order => order.id === id)) {
        let order = document.createElement('div');
        order.setAttribute('id', id);
        order.classList.add('order');
        let orderId = document.createElement('h3');
        orderId.textContent = `order id: ${id}`;
        let orderDescription = document.createElement('p');
        orderDescription.textContent = `order: ${description}`;
        let orderStatus = document.createElement('h4');
        orderStatus.textContent = `order status: ${status}`;

        order.append(orderId,orderDescription,orderStatus);
        main.append(order);
    }
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
       order.textContent = `order status: ${currentStatus}`;

        if (event.data === 'Delivered') {
            eventSource.close();
        }
    })
}
async function getOrders() {
    try {
        let resp = await fetch(`${BASE_API}/get-orders`, {
            method: "GET"
        });
        if(resp.status === 200) {
            let data = await resp.json();
            data.forEach(order => renderOrder(order));
        }
    }catch (err) {
        console.log(err);
    }
}


function addQuery(value) {
    let data = {
        clientOrder: value
    }
    return new URLSearchParams(data);
}

getHistoryBtn.addEventListener('click', () => {
    getOrders();
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputValue = event.target.querySelector('input').value;

    fetch(`${BASE_API}/order?${addQuery(inputValue)}`, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(res => {
            sse(`${BASE_API}/${res.id}`);
            renderOrder(res);
        })
        .catch(err => console.log(err));


    event.target.reset();
})