import {createServer} from 'http';


let tasksList = [];
let itemId = 0;
let exampleData = `test`;
let sseId = 0;


const server = createServer((request, response) => {
    const url = new URL(`http://${request.headers.host}${request.url}`);



    if (url.pathname === '/sse') {
        response.setHeader('Content-type','text/event-stream');
        response.setHeader('Access-control-allow-origin', '*');
        response.setHeader('Connection','keep-alive');

        setInterval(() => {
            response.write(`data: ${exampleData}\n`);
            response.write(`id: ${++sseId}end\n`);
            response.write('\n');
        },1000);

        return;
    }


    if(url.pathname === '/help') {
        exampleData = url.searchParams.get('message');

        response.end('Help');
        return;
    }





    if (url.pathname.includes('/tasks')) {
        if (url.pathname === '/tasks' && request.method.toLowerCase() === 'get') {
            response.statusCode = 200;
            response.end(JSON.stringify(tasksList));
            return;
        }
        if (url.pathname === '/tasks' && request.method.toLowerCase() === 'post') {
            let newTask = {
                id: ++itemId,
                description: 'Add new task',
            }
            tasksList.push(newTask);

            response.statusCode = 201;
            response.end(JSON.stringify(newTask));
            return;
        }
        if (request.method.toLowerCase() === 'delete') {
            const id = url.pathname.slice(7);

            if (!tasksList.find(el => el.id === +id)) {
                response.statusCode = 400;
                response.end(JSON.stringify({status:false}));
                return;
            }

            tasksList = tasksList.filter(el => el.id !== +id);

            response.statusCode = 200;
            response.end(JSON.stringify({status: true}));
            return;
        }
    }

    response.statusCode = 403;
    response.end('Page not found');


});


server.listen(3001, () => console.log('hello'));