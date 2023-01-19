window.addEventListener('message', function(event) {
    console.log("Message received from the parent: " + event.data); // Message received from parent
    var data = JSON.parse(event.data);
    document.querySelector('.name').value = data.name;
    document.querySelector('.surname').value = data.surname;
    document.querySelector('.role').value = data.role;
});