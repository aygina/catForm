postButton.onclick = function (event) {
    event.preventDefault();

    const form = document.getElementById("userForm");
    const data = new FormData(form);

    fetch("https://httpbin.org/post", {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'multipart/form-data;'
            },
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => console.log(error));
}