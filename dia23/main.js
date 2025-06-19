fetch("Link en formato JSON")
    .then(response => response.json())
    .then(data => {
        console.log(data);
});