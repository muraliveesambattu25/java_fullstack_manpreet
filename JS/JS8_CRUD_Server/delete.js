

function deleteUser(index) {
    // fetch("http://localhost:3000/users/"+allUsers[index].id)
    console.log("http://localhost:3000/users/" + allUsers[index].id);
    fetch("http://localhost:3000/users/" + allUsers[index].id, {
        method: "DELETE"
    }).then(function () {
        alert("User deleted successfully");
        displayUsers();
    })

}