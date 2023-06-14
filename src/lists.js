import { newToDoButton, newListButton, listMenu, newListForm, listNameInput, listButtonDiv, projectDiv } from "./ui";

// List object.
const allLists = {
    default: [],
    other: [],
}

// Highlight selected list.
function highlightList() {
    const listButtonArr = Array.from(listButtonDiv.childNodes);
    for (let i = 0; i < listButtonArr.length; i++) {
        if (listButtonArr[i].className === projectDiv.id) {
            listButtonArr[i].style.border = '2px solid red';
        } else {
            listButtonArr[i].style.border = '2px solid black';
        }
    }
}

// Display List.
function displayList() {
    projectDiv.id = this.className.replaceAll(' ', '-');
    const listArr = Array.from(projectDiv.childNodes);
    for (let i = 0; i < listArr.length; i++) {
        if (listArr[i].className === projectDiv.id) {
            listArr[i].style.display = 'flex';
        } else {
            listArr[i].style.display = 'none';
        }
    }
    highlightList();
}

// Create new list.
function createList(e) {
    e.preventDefault();
    allLists[listNameInput.value] = [];
    const newListOption = document.createElement('option');
    newListOption.value = listNameInput.value;
    newListOption.innerText = listNameInput.value;
    listMenu.appendChild(newListOption);
    const newList = document.createElement('button');
    newList.className = `${listNameInput.value}`.replaceAll(' ', '-');
    newList.id = `${listNameInput.value}-list`.replaceAll(' ', '-');
    newList.innerText = listNameInput.value;
    listButtonDiv.appendChild(newList);
    newList.addEventListener('click', displayList);
    newListForm.style.display = 'none';
    newToDoButton.style.display = 'flex';
    newListButton.style.display = 'flex';
}

// Check for list name from array and menu.
function checkForList() {
    const keys = Object.keys(allLists);
    let y = '';
    keys.forEach(x => {
        if (x === listMenu.value) {
            y = x;
        }
    });
    return y;
}

// test.
function test() {
    let z;
    const listButtonArr = Array.from(listButtonDiv.childNodes);
    for (let i = 0; i < listButtonArr.length; i++) {
        if (listButtonArr[i].style.border === '2px solid red') {
            z = listButtonArr[i].className.replaceAll('-', ' ');
        }
    }
    console.log(z);
    return z;
}

export { allLists, createList, checkForList, displayList, test };