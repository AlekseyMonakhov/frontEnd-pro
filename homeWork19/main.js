


let div = document.querySelector(`.items`);


const createErr = (message) => {
		let paragraph = document.createElement(`p`);
		paragraph.classList.add(`error`);
		paragraph.textContent = message;
		div.append(paragraph);
}

class MyError extends Error{
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}


class NotDeleted extends MyError {
	constructor(id) {
		super(`${id !== undefined ? `not deleted - no item with this id: ${id}` : `id field is empty`}`);
		this.name = this.constructor.name;
	}
};
class EmptyFields extends MyError {
	constructor(inputedValue,emptyFields) {
		super(`${inputedValue} not added: ${emptyFields.join(`, `)}  ${emptyFields.length > 1 ? `fields are` : `field is`}  empty`);
		this.name = this.constructor.name;
	}
};
class MaxItemsCountLimit extends MyError {
	constructor(maxCount) {
		super(`not added: to match to carry, you cant add more than ${maxCount} items`);
		this.name = this.constructor.name;
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
			if (Object.values({ itemName, itemCount, itemUnit }).includes(``) || Object.values({ itemName, itemCount, itemUnit }).includes(undefined)) {
				let emptyFields = Object.entries({ itemName, itemCount, itemUnit }).filter(el => el.includes(``) || el.includes(undefined)).flat().filter(el => el !== undefined && el !== ``);
				let inputedValue = Object.values({ itemName, itemCount, itemUnit }).filter(el => el !== undefined && el !== ``);
				if (emptyFields.length) {
					throw new EmptyFields(inputedValue,emptyFields);
				}
			};
			if (this.items.length >= this.maxCount) {
				throw new MaxItemsCountLimit(this.maxCount);
			}
			let itemParagraph = document.createElement(`p`);
			itemParagraph.textContent = `${itemName}${itemCount}${itemUnit} was added to list id is ${this.id}`;
			div.append(itemParagraph);
			let newItem = new Item(itemName, itemCount, itemUnit, this.id);
			this.items.push(newItem);
			this.id++;
	};
	removeItem(id) {
			let removeItem = this.items.find(el => el.itemId === id);

			if (!removeItem) {
				throw new NotDeleted(id);
			};
			let paragraph = document.createElement(`p`);
			paragraph.classList.add(`deleted`);
			paragraph.textContent = `${removeItem.itemName} ${removeItem.itemCount} ${removeItem.itemUnit} was deleted from list`;
			div.append(paragraph);


			let indexOfRemoveItem = this.items.indexOf(removeItem);
			this.items.splice(indexOfRemoveItem, 1);
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

function addItem() {
	const data = [[`milk`, 3, `pc`],[`milk`, 3, `pc`],[`milk`, 3, `pc`],[`milk`, 3, `pc`],[],[``, 3, `pc`],[`milk`, 3, `pc`],[],];
	for (let index = 0; index < data.length; index++) {
		const item = data[index];
		try{
			list.addItem(...item)
		}catch(err){
			if(err instanceof MyError) {
				createErr(err.message);
			}else{
				throw err;
			}
		}
	}
};
function removeItem() {
	const data = [[1],[2],[44]];
	for (let index = 0; index < data.length; index++) {
		const item = data[index];
		try{
			list.removeItem(...item)
		}catch(err){
			if(err instanceof MyError) {
				createErr(err.message);
			}else{
				throw err;
			}
		}
	}
};




addItem();
removeItem();


console.log(list.items);