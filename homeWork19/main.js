


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
				let inputedValue = Object.values({itemName, itemCount, itemUnit}).filter(el => el !== undefined && el !== ``);
				let itemParagraph = document.createElement(`p`);
				itemParagraph.classList.add(`error`);
				itemParagraph.textContent = `${inputedValue} not added ${err.message}`;
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
	list.addItem(`whater`,3,`pc`);
	list.addItem();
	list.addItem(`milk`,3,`pc`);
	list.addItem(`milk`,3,`pc`);
	list.addItem(`milk`,3,`pc`);
	list.addItem(`milk`,3,`pc`);
	list.addItem(`milk`,3,`pc`);
	list.addItem(`milk`,3,`pc`);
	list.addItem(`milk`,3,`pc`);
	list.addItem(`milk`,3,`pc`);
	list.addItem(`milk`,3,`pc`);
	list.addItem(`milk`,3,`pc`);

	list.removeItem(1);
	list.removeItem(3);
	list.removeItem(44);
	list.removeItem(44);
	list.removeItem(2);
}




start(list);

console.log(list.items);


















