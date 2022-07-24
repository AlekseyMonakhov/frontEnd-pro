const btb = document.querySelector('#load-btn');


btb.addEventListener('click', ()=> {
    const eventSource = new EventSource('http://localhost:3001/sse');
    const updateTemplate = (data) => {
        const body = document.querySelector('body');
        body.innerHTML +=`<p>${data}</p>`;
    }
    eventSource.addEventListener('message', (event) => {
        updateTemplate(event.data);
    })

    setTimeout(()=> eventSource.close(),5000)
})