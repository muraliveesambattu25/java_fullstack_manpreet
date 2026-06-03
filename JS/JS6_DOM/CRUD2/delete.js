

function deleteUser(index){
    allUsers.splice(index,1);
    localStorage.setItem("storedUsers",JSON.stringify(allUsers))
    displayUsers();
}