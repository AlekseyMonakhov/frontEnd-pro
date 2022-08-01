import {v4 as uuidv4} from 'uuid';
import {createServer} from 'http';
import {addOrder, getOrderId, findOrder, getOrders} from './servisesOrders.js';


class order {
    id = uuidv4();
    status = 'pending';

    constructor(description) {
        this.description = description;
    }
}


const server = createServer((request, response) => {
    const url = new URL(`http://${request.headers.host}${request.url}`);
    const method = request.method.toLowerCase();
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET');
    response.setHeader('Access-Control-Allow-Headers', 'Content-type');

    if (method === 'get') {
        if(url.pathname === '/get-orders') {
            if(getOrders().length) {
                response.statusCode = 200;
                response.end(JSON.stringify(getOrders()));
                return;
            }
            response.statusCode = 204;
            response.end('No orders yet')
            return;
        }
        if (url.pathname === '/order') {
            let orderDescry = url.searchParams.get('clientOrder');
            let client = new order(orderDescry);
            addOrder(client);
            response.statusCode = 201;
            response.end(JSON.stringify(client));
            return;
        }

        if (url.pathname === `/${getOrderId()}` && getOrderId()) {
            let id = getOrderId();
            let order = findOrder(id)
            response.setHeader('Content-Type', 'text/event-stream');
            response.setHeader('Access-control-allow-origin', '*');
            response.setHeader('Connection', 'keep-alive');
            let counter = 0;
            let inter = setInterval(() => {
                let availableStatuses = ['pending', 'processed', 'boxing', 'delivering', 'Delivered'];
                order.status = availableStatuses[counter];
                response.write(`event: message\n`);
                response.write(`id: ${id}\n`);
                response.write(`data: ${availableStatuses[counter]}\n`);
                response.write(`\n`);
                if (availableStatuses[counter] === 'Delivered') {
                    response.end("done");
                    clearInterval(inter);
                }
                ++counter;
            }, 2222)
            return;
        }

    }
    response.statusCode = 404;
    response.end('Page not found');

})


server.listen(3001, () => console.log('server started on port 3001'));