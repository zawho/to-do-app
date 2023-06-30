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
    const savedItems = JSON.parse(localStorage.getItem('default-0'));
    return savedItems;
}

// Clear storage.
function clearStorage() {
    localStorage.clear();
}

// clearStorage();

export { savetoStorage, checkStorage, getStorage };