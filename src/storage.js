// Save to dos to local storage.
function savetoStorage(listObj) {
    localStorage.setItem(`allLists`, JSON.stringify(listObj));
}

// Get storage items for page load.
function getStorage(listObj) {
    const savedLists = JSON.parse(localStorage.getItem('allLists'));
    Object.assign(listObj, savedLists);
}

// Clear storage.
function clearStorage() { // eslint-disable-line no-unused-vars
    localStorage.clear();
}

// clearStorage();

// Check storage.
function checkStorage() { // eslint-disable-line no-unused-vars
    for (let i = 0; i < localStorage.length; i++) {
        console.log(JSON.parse(localStorage.getItem(localStorage.key(i)))); // eslint-disable-line no-console
    }
}

export { savetoStorage, getStorage };