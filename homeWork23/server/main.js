import {createServer} from 'http';
import {v4 as uuidv4} from 'uuid';
import {StringDecoder} from 'string_decoder';
import {getTodos, addTodo, deleteTodo, checkTodo, changeIsComplited} from "./todoSerivices.js";

class TodoItem {
    id = uuidv4();
    done = false;

    constructor(description, important) {
        this.description = description;
        this.important = important;
    }
}

const handler = (url, buffer, request, response, method) => {
    if (url.pathname === '/todos' && method === 'get') {
        if (getTodos()) {
            response.statusCode = 200;
            response.end(JSON.stringify(getTodos()));
            return;
        }
        response.statusCode = 204;
        response.end('No todos added yet');
        return;

    }
    if (url.pathname === '/todos' && method === 'post') {
        const data = JSON.parse(buffer);

        let newTodo = new TodoItem(data.description, data.important);
        addTodo(newTodo);

        response.statusCode = 201;
        response.end(JSON.stringify(newTodo));
        return;

    }
    if (url.pathname.includes("/todos/") && method === "options") {
        const id = url.pathname.slice(7);
        if (checkTodo(id)) {
            response.statusCode = 200;
            response.end('ok');
            return;
        }
        response.statusCode = 400;
        response.end('not found');
        return;
    }


    if (url.pathname.includes("/todos/") && method === "delete") {
        const id = url.pathname.slice(7);
        const result = deleteTodo(id);
        response.statusCode = 200;
        response.end(JSON.stringify(result));
        return;
    }
    if (url.pathname.includes('/todos') && method === 'put') {
        const id = url.pathname.slice(7);
        const result = changeIsComplited(id);

        response.statusCode = 200;
        response.end(JSON.stringify(result));
        return;
    }


    response.statusCode = 404;
    response.end('Page not found');
}


const server = createServer((request, response) => {
    const url = new URL(`http://${request.headers.host}${request.url}`);
    const decoder = new StringDecoder('utf8');
    const method = request.method.toLowerCase();
    let buffer = '';

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Content-type');
    response.setHeader('Access-Control-Allow-Credentials', true);

    request.on('data', (data) => {
        buffer += decoder.write(data);
    });
    request.on('end', () => {
        buffer += decoder.end();
        handler(url, buffer, request, response, method);
    });

});


server.listen(3001, () => console.log('server started on port 3001'));