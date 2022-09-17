const xhr = new XMLHttpRequest();
xhr.open("GET", "some url", false);
xhr.onload = () => console.log("loaded");
xhr.onreadystatechange = () => console.log("onreadystatechange");
xhr.send = () => console.log("send");
xhr.onprogress = () => console.log("onprogress");
xhr.onsuccess = () => console.log("onsuccess");
xhr.setRequestHeader("Conent-type", "aplication/json; charset=utf-8")
xhr.send()
