var allUsers = []

function createUser() {

    var user = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value
    }
    allUsers.push(user);
    localStorage.setItem("storedUsers",JSON.stringify(allUsers))
    displayUsers();
    clearUser();
}

function clearUser() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
}