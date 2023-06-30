import { allLists, checkCurrentList } from './lists';

// Save to dos to local storage.
function savetoStorage(toDoVar, listName, toDoName) {
    localStorage.setItem(`${listName}-${toDoName}`, JSON.stringify(toDoVar));
}

// Check storage.
function checkStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
}

// Get storage items for page load.
function getStorage() {
    const currentList = checkCurrentList();
    for (let i = 0; i < localStorage.length; i++) {
            allLists[currentList].push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
}

// Clear storage.
function clearStorage() {
    localStorage.clear();
}

// clearStorage();

export { savetoStorage, checkStorage, getStorage };