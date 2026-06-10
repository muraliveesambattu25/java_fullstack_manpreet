function addUser() {
    var user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
    }

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(function () {
        alert("User added successfully");
    })

}