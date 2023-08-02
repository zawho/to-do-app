import { newToDoButton, newListButton, listMenu, newListForm, listNameInput, listButtonDiv, defaultListButton, projectDiv, listEditDiv } from './ui';
import { savetoStorage, getStorage } from './storage';

// List object.
const allLists = {
    default: [],
    other: [],
}

getStorage(allLists);

// Set default list selected border on page load.
function setDefaultListBorder() {
    defaultListButton.style.border = '2px solid rgb(255, 0, 0)';
}

setDefaultListBorder();

// Highlight selected list.
function highlightList() {
    const listButtonArr = Array.from(listButtonDiv.childNodes);
    for (let i = 0; i < listButtonArr.length; i++) {
        if (listButtonArr[i].className === projectDiv.id) {
            listButtonArr[i].style.border = '2px solid rgb(255, 0, 0)';
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

function loadLists() {
    const allListsArr = Object.keys(allLists);
    for (let i = 2; i < allListsArr.length; i++) {
        const newListOption = document.createElement('option');
        newListOption.value = allListsArr[i];
        newListOption.innerText = allListsArr[i];
        listMenu.appendChild(newListOption);
        const newList = document.createElement('button');
        newList.className = `${allListsArr[i]}`.replaceAll(' ', '-');
        newList.id = `${allListsArr[i]}-list`.replaceAll(' ', '-');
        newList.innerText = allListsArr[i];
        listButtonDiv.appendChild(newList);
        newList.addEventListener('click', displayList);
    }
}

loadLists();

// Create new list.
function createList(e) {
    e.preventDefault();
    const listButtonArr = Array.from(listButtonDiv.childNodes);
    if (listNameInput.value === '') {
        listNameInput.placeholder = 'please enter a name';
    } else {
        allLists[listNameInput.value] = [];
        const newListOption = document.createElement('option');
        newListOption.value = listNameInput.value;
        newListOption.innerText = listNameInput.value;
        listMenu.appendChild(newListOption);
        const newList = document.createElement('button');
        newList.className = `${listButtonArr.length}-${listNameInput.value}`.replaceAll(' ', '-');
        newList.id = `${listButtonArr.length}-${listNameInput.value}-list`.replaceAll(' ', '-');
        newList.innerText = listNameInput.value;
        listButtonDiv.appendChild(newList);
        newList.addEventListener('click', displayList);
        newListForm.style.display = 'none';
        newToDoButton.style.display = 'flex';
        newListButton.style.display = 'flex';
        savetoStorage(allLists);
    }
}

// Check for list name from array and menu.
function checkListMenu(listMenuVar) {
    const keys = Object.keys(allLists);
    let selectedList = '';
    keys.forEach(x => {
        if (x === listMenuVar.value) {
            selectedList = x;
        }
    });
    return selectedList;
}

// Check for currently selected list from list button array.
function checkCurrentList() {
    let currentList;
    const listButtonArr = Array.from(listButtonDiv.childNodes);
    for (let i = 0; i < listButtonArr.length; i++) {
        const listStyles = window.getComputedStyle(listButtonArr[i]);
        if (listStyles.border === '2px solid rgb(255, 0, 0)') {
            currentList = listButtonArr[i].innerText;
        }
    }
    return currentList;
}

// Cancel list edit.
function cancelListEdit() {
    const listEditArr = Array.from(listEditDiv.childNodes);
    for (let i = 0; i < listEditArr.length; i++) {
        if (listEditArr[i].className === 'edit-list-button') {
            listEditArr[i].style.display = 'flex';
        } else {
            listEditArr[i].remove();
        }
    }
}

// Confirm list edit.
function confirmListEdit() {
    const listButtonArr = Array.from(listButtonDiv.childNodes);
    const editListInput = document.querySelector('.edit-list-input');
    if (editListInput.value === '') {
        editListInput.placeholder = 'please enter a name';
    } else {
        for (let i = 0; i < listButtonArr.length; i++) {
            if (listButtonArr[i].style.border === '2px solid rgb(255, 0, 0)') {
                listButtonArr[i].innerText = editListInput.value;
                listButtonArr[i].className = `${editListInput.value}`.replaceAll(' ', '-');
                listButtonArr[i].id = `${editListInput.value}-list`.replaceAll(' ', '-');
                projectDiv.id = `${editListInput.value}`.replaceAll(' ', '-');   
            }
        }
        cancelListEdit();
    }
}

// Open list editor.
function openListEditor() {
    const editListInput = document.createElement('input');
    const confirmCancelDiv = document.createElement('div');
    const confirmListEditButton = document.createElement('button');
    const cancelListEditButton = document.createElement('button');
    editListInput.className = 'edit-list-input';
    confirmCancelDiv.className = 'confirm-cancel-div';
    confirmListEditButton.className = 'confirm-list-edit';
    cancelListEditButton.className = 'cancel-list-edit';
    confirmCancelDiv.style.marginTop = '10px';
    confirmCancelDiv.style.display = 'flex';
    confirmCancelDiv.style.gap = '10px';
    confirmListEditButton.innerText = 'confirm';
    cancelListEditButton.innerText = 'cancel';
    confirmListEditButton.addEventListener('click', confirmListEdit);
    cancelListEditButton.addEventListener('click', cancelListEdit);
    listEditDiv.appendChild(editListInput);
    listEditDiv.appendChild(confirmCancelDiv);
    confirmCancelDiv.appendChild(confirmListEditButton);
    confirmCancelDiv.appendChild(cancelListEditButton);
    this.style.display = 'none';
}

export { allLists, createList, checkListMenu, displayList, checkCurrentList, openListEditor };