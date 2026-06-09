var allUsers = []

function createUser() {
    var user = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value
    }
    allUsers.push(user);
    // localStorage.setItem("storedUsers", JSON.stringify(allUsers)); 
    // Send the Info to the Server 
    displayUsers();
    clearUser();
    valdateInput();
}

function clearUser() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
}

function valdateInput() {
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var pattern = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/
    console.log("valdateInput triggered !!", fname);
    if (fname.length >= 6 && pattern.test(email)) {
        document.querySelector("#addButton").removeAttribute("disabled", true);
        document.querySelector("span").style.display = "none"
    } else {
        document.querySelector("#addButton").setAttribute("disabled", true)
        document.querySelector("span").style.display = "inline-block"

    }
}