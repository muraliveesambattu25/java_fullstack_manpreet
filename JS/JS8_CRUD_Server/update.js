function editUser(index) {


    document.getElementById("name").value = allUsers[index].name;
    document.getElementById("email").value = allUsers[index].email;

    editIndex = index;
    // swapButtons();
}

function update(){
    
}