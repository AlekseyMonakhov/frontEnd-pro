


let div = document.querySelector(`.items`);

class ListItem {
	items = [];
	id = 1;
	constructor(title, author, maxCount) {
		this.title = title;
		this.author = author;
		this.maxCount = maxCount;
	}
	addItem(itemName, itemCount, itemUnit) {
		try {
			if(Object.values({itemName, itemCount, itemUnit}).includes(``) || Object.values({itemName, itemCount, itemUnit}).includes(undefined)) {
				let x = Object.entries({itemName, itemCount, itemUnit}).filter(el => el.includes(``) || el.includes(undefined));
				let emptyFields = x.flat().filter(el => el !== undefined);
				if(emptyFields.length) {
					throw new Error(`${emptyFields} this field empty`);
				}
			};
			if(this.items.length >= this.maxCount) {
				throw new Error(`to match to carry`);
			}
			let itemParagraph = document.createElement(`p`);
			itemParagraph.textContent = `${itemName}${itemCount}${itemUnit} was added to list id is ${this.id}`;
			div.append(itemParagraph);
			let newItem = new Item(itemName, itemCount, itemUnit, this.id);
			this.items.push(newItem);
			this.id++;
		}catch(err) {
			if(err.message.includes(`field`)) {
				let itemParagraph = document.createElement(`p`);
				itemParagraph.classList.add(`error`);
				itemParagraph.textContent = `not added ${err.message}`;
				div.append(itemParagraph);
			};
			if(err.message.includes(`carry`)) {
				let itemParagraph = document.createElement(`p`);
				itemParagraph.classList.add(`error`);
				itemParagraph.textContent = `not added ${err.message}`;
				div.append(itemParagraph);
			};
		}
	};
	removeItem(id) {
		try {
			let removeItem = this.items.find(el => el.itemId === id);

			if(!removeItem) {
				throw  new Error(`no item with this id: ${id}`)
			};
			let deletedItem = document.createElement(`p`);
			deletedItem.classList.add(`deleted`);
			deletedItem.textContent =`${removeItem.itemName} ${removeItem.itemCount} ${removeItem.itemUnit} was deleted from list`;
			div.append(deletedItem);


			let indexOfRemoveItem = this.items.indexOf(removeItem);
			this.items.splice(indexOfRemoveItem, 1);
		}catch (err) {
			let deletedItem = document.createElement(`p`);
			deletedItem.classList.add(`error`);
			deletedItem.textContent =`not deleted - ${err.message}`;
			div.append(deletedItem);
		}
		
	};


	
};


class Item {
	constructor(itemName, itemCount, itemUnit, id) {
		this.itemName = itemName;
		this.itemCount = itemCount;
		this.itemUnit = itemUnit;
		this.itemId = id;
	}
};
let list = new ListItem (`Shop`, `Leo`, 5);


function start(list) {
	list.addItem(`milk`);
	list.addItem(`milk`,3);
	list.addItem(`milk`,3,`pc`);
	list.addItem(3,`pc`);
	list.addItem(`milk`,3,`pc`);

	list.removeItem(1);
	list.removeItem(3);
	list.removeItem(44);
	list.removeItem(44);
	list.removeItem(2);
}




start(list);


















// const listCreator = document.querySelector(`.listCreator`);
// const listName = document.querySelector(`#listName`);
// const author = document.querySelector(`#author`);
// const maxCount = document.querySelector(`#maxCount`);
// const itemName = document.querySelector(`#itemName`);
// const itemCount = document.querySelector(`#itemCount`);
// const itemUnit = document.querySelector(`#unit`);
// const removeVariants = document.querySelector(`#remove`);
// const listDescr = document.querySelector(`.list-descr`);
// const listItems = document.querySelector(`.list-items`);
// const listArr = [];

// function clear() {
//     if(listArr.length) {
//         listName.value = ``;
//         author.value = ``;
//         maxCount.value = ``;
//         itemName.value = ``;
//         itemCount.value = ``;
// 		maxCount.removeAttribute(`required`);
//         author.removeAttribute(`required`);
//         listName.removeAttribute(`required`);
// 		itemName.removeAttribute(`required`);
// 		itemCount.removeAttribute(`required`);
// 		itemUnit.removeAttribute(`required`);
//         while(removeVariants.hasChildNodes()) {
//             removeVariants.removeChild(removeVariants.lastChild);
//         }
//         while(listItems.hasChildNodes()) {
//             listItems.removeChild(listItems.lastChild);
//         }
//     }
// }

// function removeHtml() {
//     let delOption = Array.from(removeVariants.querySelectorAll(`option`))
//     .find((el) => el.value === removeVariants.value);

//     let delP = Array.from(listItems.querySelectorAll(`p`))
//     .find(el => el.id === removeVariants.value);

//     removeVariants.removeChild(delOption);
//     listItems.removeChild(delP);
// }



// class List {
//     items = [];
// 	id = 1;
//     constructor(listName, listAuthor, maxItems) {
//         this.listName = listName;
//         this.listAuthor = listAuthor;
//         this.maxItems = maxItems;
//     }

//     add(title, amount, unit) {

// 		let item = document.createElement("p");
//         item.textContent = `${title} count:${amount + unit}`;
//         item.setAttribute("id", `${this.id}`);
//         listItems.append(item);
		
//         let option = document.createElement(`option`);
//         option.textContent = `${title} in quantity of ${amount + unit}`;
//         option.value = this.id;
//         removeVariants.append(option);
        
        
//         let newItem = new Item(title, amount, unit, this.id);
//         this.items.push(newItem);
// 		this.id++;
// 		if(this.items.length > this.maxItems) {
// 			this.items.pop();
//             throw new Error(`to match items`);
//         }
		
// 		if(Object.values(this.items[this.items.length-1]).includes(``)) {
// 			let keys = Object.keys(this.items[this.items.length-1]);
// 			let emptyInput = keys.filter(el => this.items[this.items.length-1][el] === ``);
// 			emptyInput.forEach(el => {
// 				switch (el) {
// 					case `title`:
// 						itemName.setAttribute(`required`, true);
// 						throw new Error(`title is empty`);
// 						break;
// 					case `amount`:
// 						itemCount.setAttribute(`required`, true);
// 						throw new Error(`amount is empty`);
// 						break;
// 					case `unit`:
// 						itemUnit.setAttribute(`required`, true);
// 						throw new Error(`unit is empty`);
// 						break;
// 				}
// 			});

// 		}

//     };
//     remove(id) {
//         let elem = this.items.find(el => console.log(el.id));
//         let index = this.items.indexOf(elem);
//         this.items.splice(index,1);
// 		console.log(this.items);
//     };
//     createList () {
//         if(Object.values(listArr[listArr.length-1]).includes(``)) {
//             let emptyField = Object.keys(listArr[listArr.length-1])
//             .filter(el=>listArr[listArr.length-1][el] === ``);

//             listArr.pop();
//             emptyField.forEach(el => {
//                 switch (el) {
//                     case `listName`:
//                         listName.setAttribute(`required`, true);
// 						throw new Error(`list name is empty`);
//                         break;
//                     case `listAuthor`:
//                         author.setAttribute(`required`, true);
// 						throw new Error(`author is empty`);
//                         break;
//                     case `maxItems`:
//                         maxCount.setAttribute(`required`, true);
// 						throw new Error(`max count is empty`);
//                         break;   
//                 }
//             });
//             if( emptyField.length>1) {
//                 throw new Error(`${emptyField.join(` `)} are empty fields`)
//             }
//             if( emptyField.length <= 1) {
//                 throw new Error(`${emptyField.join(` `)} is empty field`)
//             }
//         }

//         const title = listDescr.querySelector(`h2`);
//         const authorName = listDescr.querySelector(`h3`);
//         const maxItems = listDescr.querySelector(`h4`);
//         title.textContent = "List Name - " + this.listName;
//         authorName.textContent = "List Author - " + this.listAuthor;
//         maxItems.textContent = "Max items - " + this.maxItems;
//     };
    
// }
// class Item {
//     constructor(title, amount, unit, id) {
//         this.title = title;
//         this.amount = amount;
//         this.unit = unit;
// 		this.id = id;
//     }
// }


// listCreator.addEventListener(`click`, (event)=> {
//     if(event.target.classList.contains(`finish`)) {
//         newList = new List(listName.value, author.value, maxCount.value);
//         listArr.push(newList);
//         listArr[listArr.length - 1].createList();
//         clear();
//         console.log(listArr);
//     };
//     if(event.target.classList.contains(`addListItem`) && listArr.length) {
//     	listArr[listArr.length-1].add(itemName.value, itemCount.value, itemUnit.value);
//     }
//     if(event.target.classList.contains(`removeItems`) && removeVariants.value) {
//         listArr[listArr.length-1].remove(removeVariants.value);
//         removeHtml();
//         console.log(listArr);
//     }
// });
