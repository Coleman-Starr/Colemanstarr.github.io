let btn = document.getElementById("next");

btn.addEventListener('click', event => {
    requaired();
});

function requaired() {
    if (document.getElementById("name") == "") {
        alert('fill in name');
    }
}
