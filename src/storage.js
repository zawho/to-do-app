import { allLists } from "./lists";

// Save to dos to local storage.
function savetoStorage(testVar) {
    localStorage.setItem(`test`, JSON.stringify(testVar));
}

// Check storage.
function checkStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
}

// Get storage items for page load.
function getStorage() {
    const test = JSON.parse(localStorage.getItem('test'))
    Object.assign(allLists, test);
}

// Clear storage.
function clearStorage() {
    localStorage.clear();
}

// clearStorage();

export { savetoStorage, checkStorage, getStorage };