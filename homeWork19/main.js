


let div = document.querySelector(`.items`);




class NotDeleted extends Error {
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
		let deletedItem = document.createElement(`p`);
		deletedItem.classList.add(`error`);
		deletedItem.textContent = message;
		div.append(deletedItem);
	}
};
class EmptyFields extends Error {
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
		let itemParagraph = document.createElement(`p`);
		itemParagraph.classList.add(`error`);
		itemParagraph.textContent = message;
		div.append(itemParagraph);
	}
};
class MaxItemsCountLimit extends Error {
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
		let itemParagraph = document.createElement(`p`);
		itemParagraph.classList.add(`error`);
		itemParagraph.textContent = message;
		div.append(itemParagraph);
	}
};









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
			if (Object.values({ itemName, itemCount, itemUnit }).includes(``) || Object.values({ itemName, itemCount, itemUnit }).includes(undefined)) {
				let x = Object.entries({ itemName, itemCount, itemUnit }).filter(el => el.includes(``) || el.includes(undefined));
				let emptyFields = x.flat().filter(el => el !== undefined);
				if (emptyFields.length) {
					throw new EmptyFields(`${emptyFields.join(`, `)}  ${emptyFields.length > 1 ? `fields are` : `field is`}  empty`);
				}
			};
			if (this.items.length >= this.maxCount) {
				throw new MaxItemsCountLimit(`not added: to match to carry, you cant add more than ${this.maxCount} items`);
			}
			let itemParagraph = document.createElement(`p`);
			itemParagraph.textContent = `${itemName}${itemCount}${itemUnit} was added to list id is ${this.id}`;
			div.append(itemParagraph);
			let newItem = new Item(itemName, itemCount, itemUnit, this.id);
			this.items.push(newItem);
			this.id++;
		} catch (err) {
			if(err instanceof EmptyFields || err instanceof MaxItemsCountLimit) {
				if (err instanceof EmptyFields) {
					let inputedValue = Object.values({ itemName, itemCount, itemUnit }).filter(el => el !== undefined && el !== ``);
					err.message = `${inputedValue} not added ${err.message}`;
					console.log(err);
				};
				if (err instanceof MaxItemsCountLimit) {
					console.log(err);
				};
			}else{
				throw err;
			}
		}
	};
	removeItem(id) {
		try {
			let removeItem = this.items.find(el => el.itemId === id);

			if (!removeItem) {
				throw new NotDeleted(`not deleted - no item with this id: ${id}`)
			};
			let deletedItem = document.createElement(`p`);
			deletedItem.classList.add(`deleted`);
			deletedItem.textContent = `${removeItem.itemName} ${removeItem.itemCount} ${removeItem.itemUnit} was deleted from list`;
			div.append(deletedItem);


			let indexOfRemoveItem = this.items.indexOf(removeItem);
			this.items.splice(indexOfRemoveItem, 1);
		} catch (err) {
			if (err instanceof NotDeleted){
				console.log(err);
			}else{
				throw err;
			}
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
let list = new ListItem(`Shop`, `Leo`, 5);


function start() {
	try {
		list.addItem(`milk`);
		list.addItem(`milk`, 3);
		list.addItem(`milk`, 3, `pc`);
		list.addItem(3, `pc`);
		list.addItem(`whater`, 3, `pc`);
		list.addItem();
		list.addItem(`milk`, 3, `pc`);
		list.addItem(`milk`, 3, `pc`);
		list.addItem(`milk`, 3, `pc`);
		list.addItem(`milk`, 3, `pc`);
		list.addItem(`milk`, 3, `pc`);
		list.addItem(`milk`, 3, `pc`);
		list.addItem(`milk`, 3, `pc`);
		list.addItem(`milk`, 3, `pc`);
		list.addItem(`milk`, 3, `pc`);
		list.addItem(`milk`, 3, `pc`);

		list.removeItem(1);
		list.removeItem(3);
		list.removeItem(44);
		list.removeItem(44);
		list.removeItem(44);
		list.removeItem(2);
	} catch (error) {
		console.log(error);
	}

}




start();

console.log(list.items);