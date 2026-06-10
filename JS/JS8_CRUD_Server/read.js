var allUsers = [];

function getUsersFromServer() {
    fetch("http://localhost:3000/users").then(function (rawData) {
        return rawData.json()
    }).then((jsonData) => {
        allUsers = jsonData;
        console.log(allUsers);
        displayUsers();
    })
}

getUsersFromServer();

function displayUsers(){
    document.querySelector("tbody").innerHTML = "";
    allUsers.forEach(function(usr,index){
        var myTr = document.createElement('tr');
        myTr.innerHTML = `
        <td>${usr.name}</td>
        <td>${usr.email}</td>
        <td><button onclick="editUser(${index})">Edit</button></td>
        <td><button onclick="deleteUser(${index})">Delete</button></td>`;
        document.querySelector("tbody").appendChild(myTr)
    })  
}
