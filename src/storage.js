// Save to dos to local storage.
function savetoStorage(listObj) {
    localStorage.setItem(`allLists`, JSON.stringify(listObj));
}

// Check storage.
function checkStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
}

// Get storage items for page load.
function getStorage(listObj) {
    const savedLists = JSON.parse(localStorage.getItem('allLists'))
    Object.assign(listObj, savedLists);
}

// Clear storage.
function clearStorage() {
    localStorage.clear();
}

// clearStorage();

export { savetoStorage, checkStorage, getStorage };