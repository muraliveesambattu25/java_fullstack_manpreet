function addUser() {
    var user = {};
    user.id = document.getElementById("id").value;
    user.name = document.getElementById("name").value;
    user.age = document.getElementById("age").value;
    user.city = document.getElementById("city").value;
    user.profession = document.getElementById("profession").value;
    user.salary = document.getElementById("salary").value;
    user.isActive = document.getElementById("isActive").value;
    users.push(user);
    displayUsers();
    clearForm();
}