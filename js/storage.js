const STORAGE_URL = 'https://join-b70bc-default-rtdb.europe-west1.firebasedatabase.app/';


/**
 * Function to save the Userdata in the remote Storage
 * @param {string} key - Keyword 'user' in the remote Storage
 * @param {string} value - Value Data with the stringify JSON Data: email, name, password
 * @returns 
 */
async function setItem(key, value) {
    let response = await fetch(STORAGE_URL + key + ".json", {
        method: "PUT",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(value)
    });
    return responseToJson = await response.json();
}


/**
 * Function to load the Data from the remote Storage with the Key
 * @param {string} key - Get the Data from the Storage Keyword 
 * @returns 
 */
async function getItem(key) {
    let response = await fetch(STORAGE_URL + key + ".json");
    return responseToJson = await response.json();
}


/**
 * Function to delete Data from the remote Storage
 * @param {string} key - Delete Data from the Storage with the Keyword
 * @returns 
 */
async function deleteItem(key= "") {
    let response = await fetch(STORAGE_URL + key + ".json", {
        method: "DELETE",
    });
    return responseToJson = await response.json();
}


/**
 * Function for delete User data in the remote Storage
 * @returns 
 */
async function clearUsers() {
    let response = await fetch(STORAGE_URL + 'users.json', {
        method: 'PUT',
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({})
    });
    return await response.json();
}