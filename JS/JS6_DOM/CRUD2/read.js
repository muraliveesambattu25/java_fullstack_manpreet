
allUsers = JSON.parse(localStorage.getItem("storedUsers"));

function displayUsers(){
    document.querySelector("tbody").innerHTML = "";
    allUsers.forEach(function(usr,index){
        var myTr = document.createElement('tr');
        myTr.innerHTML = `
        <td>${usr.fname}</td>
        <td>${usr.lname}</td>
        <td>${usr.email}</td>
        <td><button onclick="editUser(${index})">Edit</button></td>
        <td><button onclick="deleteUser(${index})">Delete</button></td>`;
        document.querySelector("tbody").appendChild(myTr)
    })  
}
displayUsers();