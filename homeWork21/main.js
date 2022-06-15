// function reqListener() {
//   console.log(this.response);
// }

// var oReq = new XMLHttpRequest();

// // fetch('https://jsonplaceholder.typicode.com/posts/1')
// //   .then((response) => response.json())
// //   .then((json) => console.log(json));

// try {
//     oReq.addEventListener(`load`, reqListener);
//     oReq.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
//     oReq.send();
// }catch(error) {
//     console.error(error);
// }



// // fetch('https://jsonplaceholder.typicode.com/posts')
// //   .then((response) => response.json())
// //   .then((json) => console.log(json));

// try {
//     oReq.addEventListener(`load`, reqListener);
//     oReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
//     oReq.send();
// }catch(error) {
//     console.error(error);
// }

// // fetch('https://jsonplaceholder.typicode.com/posts', {
// //   method: 'POST',
// //   body: JSON.stringify({
// //     title: 'foo',
// //     body: 'bar',
// //     userId: 1,
// //   }),
// //   headers: {
// //     'Content-type': 'application/json; charset=UTF-8',
// //   },
// // })
// //   .then((response) => response.json())
// //   .then((json) => console.log(json));



// try {
//     oReq.addEventListener("load", reqListener);
//     oReq.open("POST", 'https://jsonplaceholder.typicode.com/posts');
//     oReq.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
//     oReq.send(JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }))
// }catch(error) {
//     console.log(error);
// }


// // fetch('https://jsonplaceholder.typicode.com/posts/1', {
// //   method: 'PUT',
// //   body: JSON.stringify({
// //     id: 1,
// //     title: 'foo',
// //     body: 'bar',
// //     userId: 1,
// //   }),
// //   headers: {
// //     'Content-type': 'application/json; charset=UTF-8',
// //   },
// // })
// //   .then((response) => response.json())
// //   .then((json) => console.log(json));



//   try {
//     oReq.addEventListener("load", reqListener);
//     oReq.open("PUT", "https://jsonplaceholder.typicode.com/posts/1");
//     oReq.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
//     oReq.send(JSON.stringify({
//         id: 1,
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }))

//   }catch(error){
//       console.log(error);
//   }


fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
  .then((response) => response.json())
  .then((json) => console.log(json));

  