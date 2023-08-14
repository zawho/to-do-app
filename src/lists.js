import { newToDoButton, newListButton, listMenu, newListForm, listNameInput, listButtonDiv, defaultListButton, projectDiv, listEditDiv, editListButton, deleteListButton } from './ui';
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

// Display delete list button.
function displayDeleteListButton(listVar) {
    if (listVar.className.slice(0, 1) === '0' || editListButton.style.display === 'none' ||
    (listVar.className.slice(0, 1) === '0' && editListButton.style.display === 'none')) {
        deleteListButton.style.display = 'none';
    } else {
        deleteListButton.style.display = 'flex';
    }  
}

// Highlight selected list.
function highlightList() {
    const listButtonArr = Array.from(listButtonDiv.childNodes);
    for (let i = 0; i < listButtonArr.length; i++) {
        if (listButtonArr[i].className === projectDiv.id) {
            listButtonArr[i].style.border = '2px solid rgb(255, 0, 0)';
            displayDeleteListButton(listButtonArr[i]);
        } else {
            listButtonArr[i].style.border = '2px solid black';
        }
    }
}

// Display List.
function displayList() {
    projectDiv.id = this.className;
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

// Update list selection options.
function addListOption(listVar) {
    const newListOption = document.createElement('option');
        newListOption.value = listVar.value;
        newListOption.innerText = listVar.value;
        listMenu.appendChild(newListOption);
}

// Create new list.
function createList(e) {
    e.preventDefault();
    const listButtonArr = Array.from(listButtonDiv.childNodes);
    if (listNameInput.value === '') {
        listNameInput.placeholder = 'please enter a name';
    } else {
        addListOption(listNameInput);
        allLists[listNameInput.value] = [];
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
    const listButtonArr = Array.from(listButtonDiv.childNodes);
    for (let i = 0; i < listEditArr.length; i++) {
        if (listEditArr[i].className === 'edit-list-button') {
            listEditArr[i].style.display = 'flex';
        } else {
            listEditArr[i].remove();
        }
    }
    for (let i = 0; i < listButtonArr.length; i++) {
        if (listButtonArr[i].style.border === '2px solid rgb(255, 0, 0)') {
            displayDeleteListButton(listButtonArr[i]);
        }
    }
}

// Update list selection options when name is edited.
function editListOption(listVar) {
    const listMenuArr = Array.from(listMenu.childNodes);
    const currentList = checkCurrentList();
    for (let i = 0; i < listMenuArr.length; i++) {
        if (listMenuArr[i].innerText === currentList) {
            listMenuArr[i].innerText = listVar.value;
            listMenuArr[i].value = listVar.value;
        }
    }
}

// Update list object key names on list edit.
function updateKeyNames(listVar) {
    const currentList = checkCurrentList();
    allLists[`${listVar.value}`] = allLists[currentList];
    delete allLists[currentList];
}

// Update list property values.
function updateListPropValue(listVar) {
    for (let i = 0; i < allLists[listVar.value].length; i++) {
        allLists[listVar.value][i].list = listVar.value;
    }
}

// Update to do class names on list name edit.
function updateListClassNames(listVar) {
    const testArr = Array.from(projectDiv.childNodes);
    const currentList = checkCurrentList();
    for (let i = 0; i < testArr.length; i++) {
        if (testArr[i].className === 
            `${testArr[i].className.slice(0, (testArr[i].className.indexOf('-') + 1))}${currentList}`) {
                testArr[i].className = 
                `${testArr[i].className.slice(0, (testArr[i].className.indexOf('-') + 1))}${listVar.value}`;
        } else if (testArr[i].className ===
            `${testArr[i].className.slice(0, (testArr[i].className.indexOf('-') + 1))}${currentList}-expanded`) {
                testArr[i].className = 
                `${testArr[i].className.slice(0, (testArr[i].className.indexOf('-') + 1))}${listVar.value}-expanded`;
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
        updateListClassNames(editListInput);
        updateKeyNames(editListInput);
        editListOption(editListInput);
        updateListPropValue(editListInput);
        for (let i = 0; i < listButtonArr.length; i++) {
            if (listButtonArr[i].style.border === '2px solid rgb(255, 0, 0)') {
                listButtonArr[i].innerText = editListInput.value;
                listButtonArr[i].className =
                `${listButtonArr[i].className.slice(0, (listButtonArr[i].className.indexOf('-') + 1))}${editListInput.value}`.replaceAll(' ', '-');
                listButtonArr[i].id = 
                `${listButtonArr[i].id.slice(0, (listButtonArr[i].id.indexOf('-') + 1))}${editListInput.value}-list`.replaceAll(' ', '-');
                projectDiv.id = 
                `${listButtonArr[i].className.slice(0, (listButtonArr[i].className.indexOf('-') + 1))}${editListInput.value}`.replaceAll(' ', '-');
                displayDeleteListButton(listButtonArr[i]);
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
    deleteListButton.style.display = 'none';
}

// Highlight previous list.
function highlightPrevList(listVar) {
    const listButtonArr = Array.from(listButtonDiv.childNodes);
    for (let i = 0; i < listButtonArr.length; i++) {
        if (listButtonArr[i] === listVar) {
            listButtonArr[i - 1].style.border = '2px solid rgb(255, 0, 0)';
        }
    }
}

// Display previous list.
function displayPrevList(listVar) {
    projectDiv.id = listVar.className.replaceAll(' ', '-');
    const listArr = Array.from(projectDiv.childNodes);
    for (let i = 0; i < listArr.length; i++) {
        if (listArr[i].className === projectDiv.id) {
            listArr[i].style.display = 'flex';
        } else {
            listArr[i].style.display = 'none';
        }
    }
}

// Delete list selection options.
function deleteListOption(listVar) {
    const listMenuArr = Array.from(listMenu.childNodes);
    for (let i = 0; i < listMenuArr.length; i++) {
        if (listMenuArr[i].innerText === listVar) {
            listMenuArr[i].remove();
        }
    }
}

// Delete list.
function deleteList() {
    const listButtonArr = Array.from(listButtonDiv.childNodes);
    const todoArr = Array.from(projectDiv.childNodes);
    const currentList = checkCurrentList();
    let currentListClass;
    for (let i = 0; i < listButtonArr.length; i++) {
        if (listButtonArr[i].style.border === '2px solid rgb(255, 0, 0)') {
            currentListClass = listButtonArr[i].className;
            deleteListOption(listButtonArr[i].innerText);
            highlightPrevList(listButtonArr[i]);
            displayDeleteListButton(listButtonArr[i - 1]);
            displayPrevList(listButtonArr[i - 1]);
            listButtonArr[i].remove();
        }
    }
    for (let i = 0; i < todoArr.length; i++) {
        if (todoArr[i].className.slice(0, todoArr[i].className.indexOf('-')) === 
        currentListClass.slice(0, currentListClass.indexOf('-'))) {
            todoArr[i].remove();
        }
    }
    delete allLists[currentList];
}

export { allLists, createList, checkListMenu, displayList, checkCurrentList, 
    openListEditor, deleteList };