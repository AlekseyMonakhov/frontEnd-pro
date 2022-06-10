class List {
    items = [];
    constructor(listName, listAuthor, maxItems) {
        this.listName = listName;
        this.listAuthor = listAuthor;
        this.maxItems = maxItems;
    }
    add(title, amount, unit) {
        let newItem = new Item(title, amount, unit);
        this.items.push(newItem);
    };
    remove(title) {
        this.items = this.items.filter(el => el.title !== title);
    };
}
class Item {
    constructor(title, amount, unit) {
        this.title = title;
        this.amount = amount;
        this.unit = unit;
    }
}

const listCreator = document.querySelector(`.listCreator`);
const listName = document.querySelector(`#listName`);
const author = document.querySelector(`#author`);
const maxCount = document.querySelector(`#maxCount`);
const itemName = document.querySelector(`#itemName`);
const itemCount = document.querySelector(`#itemCount`);
const itemUnit = document.querySelector(`#unit`);
const removeVariants = document.querySelector(`#remove`);

function clear() {
    if(listArr.length) {
        listName.value = ``;
        author.value = ``;
        maxCount.value = ``;
        itemName.value = ``;
        itemCount.value = ``;
        itemUnit.value = ``;
        while(removeVariants.hasChildNodes()) {
            removeVariants.removeChild(removeVariants.lastChild);
        }
    }
}

const listArr = [];

listCreator.addEventListener(`click`, (event)=> {
    if(event.target.classList.contains(`finish`) && listName.value && author.value && maxCount.value) {
        newList = new List(listName.value, author.value, maxCount.value);
        listArr.push(newList);
        clear();
        console.log(listArr);
    };
    if(event.target.classList.contains(`addListItem`) && listArr.length && listArr[listArr.length-1].items.length < listArr[listArr.length-1].maxItems) {
        if(itemName.value && itemCount.value && itemUnit.value) {
            listArr[listArr.length-1].add(itemName.value, itemCount.value, itemUnit.value);
            let option = document.createElement(`option`);
            option.textContent = itemName.value;
            option.value = itemName.value;
            removeVariants.append(option);
            console.log(listArr[listArr.length-1].items);
        }   
    }
    if(event.target.classList.contains(`removeItems`) && removeVariants.value) {
        listArr[listArr.length-1].remove(removeVariants.value);
        let delElem = Array.from(removeVariants.querySelectorAll(`option`))
        .find(el => el.textContent === removeVariants.value);
        removeVariants.removeChild(delElem);
        console.log(listArr);
    }
});