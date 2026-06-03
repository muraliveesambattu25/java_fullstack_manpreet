var editIndex = null;
function editUser(index) {
    console.log(index);
    console.log(allUsers[index]);

    document.getElementById("fname").value = allUsers[index].fname;
    document.getElementById("lname").value = allUsers[index].lname;
    document.getElementById("email").value = allUsers[index].email;

    editIndex = index;
    swapButtons();
}

function swapButtons() {
    if (editIndex == null) {
        document.getElementById("addButton").style.display = "block";
        document.getElementById("updateButton").style.display = "none";

    } else {
        document.getElementById("updateButton").style.display = "block";
        document.getElementById("addButton").style.display = "none"

    }
}

function updateUser() {

    var user = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value
    }
    allUsers[editIndex] = user;
    localStorage.setItem("storedUsers", JSON.stringify(allUsers));
    displayUsers();
    clearUser();
    editIndex = null;
    swapButtons();
}