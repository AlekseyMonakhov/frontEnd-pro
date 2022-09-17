// GET ALL TODOS
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => console.log(data));

// GET ALL COMMENTS

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((res) => res.json())
  .then((data) => console.log(data));

// POST CREATE SMTH...
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 11,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data));
// PUT UDPT SMTH...
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    title: "fooz",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data));
// PATCH UDPT SMTH...
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    title: "foozy",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data));
// PATCH UDPT SMTH...
fetch("https://jsonplaceholder.typicode.com/posts/13", {
  method: "DELETE",
});

// QUERY PARAM
fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("hello");

const arr = [
  { label: "label1", id: 1, des: "des here1" },
  { label: "label2", id: 1, des: "des here2" },
  { label: "label3", id: 1, des: "des here3" },
  { label: "label4", id: 1, des: "des here4" },
];

function filter(arr, key) {
  let counter = 0;
  return arr.map((el) => {
    return {
      [key]: el[key],
    };
  });
}

console.log(filter(arr, "label"));

let arr1 = [1, [3, 3], [[2, 1], [[[1, 2, 3]]]], [[[[[[[[[[12]]]]]]]]]]];

function flat(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res.push(...flat(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  console.log("hello");
  return res;
}

console.log(flat(arr1));
