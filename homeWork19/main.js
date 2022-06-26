


let div = document.querySelector(`.items`);


class MyError extends Error{
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
	createErr(message) {
		let paragraph = document.createElement(`p`);
		paragraph.classList.add(`error`);
		paragraph.textContent = message;
		div.append(paragraph);
	};

}


class NotDeleted extends MyError {
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
};
class EmptyFields extends MyError {
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
};
class MaxItemsCountLimit extends MyError {
	constructor(message) {
		super(message);
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
			if (err instanceof EmptyFields) {
				let inputedValue = Object.values({ itemName, itemCount, itemUnit }).filter(el => el !== undefined && el !== ``);
				err.message = `${inputedValue} not added ${err.message}`;
				throw err;
			}else{
				throw err;
			};
		}
	};
	removeItem(id) {
			let removeItem = this.items.find(el => el.itemId === id);

			if (!removeItem) {
				throw new NotDeleted(`not deleted - no item with this id: ${id}`)
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








function start() {
	try {
		list.addItem(`milk`, 3, `pc`);
	} catch (error) {
		if(error instanceof MyError) {
			error.createErr(error.message);
		}else{
			throw error;
		}
	}
	try {
		list.addItem(`milk`, 3, `pc`);
	} catch (error) {
		if(error instanceof MyError) {
			error.createErr(error.message);
		}else{
			throw error;
		}
	}
	try {
		list.addItem(`milk`, 3, `pc`);
	} catch (error) {
		if(error instanceof MyError) {
			error.createErr(error.message);
		}else{
			throw error;
		}
	}
	try {
		list.addItem(`milk`, 3, `pc`);
	} catch (error) {
		if(error instanceof MyError) {
			error.createErr(error.message);
		}else{
			throw error;
		}
	}
	try {
		list.addItem();
	} catch (error) {
		if(error instanceof MyError) {
			error.createErr(error.message);
		}else{
			throw error;
		}
	}
	try {
		list.addItem(`1`);
	} catch (error) {
		if(error instanceof MyError) {
			error.createErr(error.message);
		}else{
			throw error;
		}
	}
	try {
		list.addItem();
	} catch (error) {
		if(error instanceof MyError) {
			error.createErr(error.message);
		}else{
			throw error;
		}
	}
	try {
		list.removeItem();
	} catch (error) {
		if(error instanceof MyError) {
			error.createErr(error.message);
		}else{
			throw error;
		}
	}
	try {
		list.removeItem(1);
	} catch (error) {
		if(error instanceof MyError) {
			error.createErr(error.message);
		}else{
			throw error;
		}
	}
	
}




start();

console.log(list.items);