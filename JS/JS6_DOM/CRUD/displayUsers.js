function displayUsers() {
    document.querySelector("#myUsers").innerHTML = "";
    for (i = 0; i < users.length; i++) {
        var myTr = document.createElement("tr");
        myTr.innerHTML = `
            <td>${users[i].id}</td>
            <td>${users[i].name}</td>
            <td>${users[i].age}</td>
            <td>${users[i].city}</td>
            <td>${users[i].profession}</td>
            <td>${users[i].salary}</td>
            <td>${users[i].isActive}</td>
            <td><button >Edit</button></td>
            <td><button onclick="deleteUser()">Delete</button></td>
            `
        document.querySelector("#myUsers").appendChild(myTr)
    }
}

displayUsers();


function clearForm() {

    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("isActive").value = "";

}