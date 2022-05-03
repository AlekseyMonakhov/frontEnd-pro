const server = (requestData, callback) => {
    console.log(`server recived ${requestData}`);
    setTimeout(() => {
        callback (`200 ok`);
    }, 6000);
    
};

function sendRequest (data, callback) {
    const preparedData = JSON.stringify(data);
    server(preparedData, (responce)=> {
        callback(parseInt(responce) === 200 ? `Evrething is good`: `Something whent wrong`);
    });
}

sendRequest({name: "Leo", age: 27}, (responce) => {
    console.log(`client resive responce:${responce}`);
})