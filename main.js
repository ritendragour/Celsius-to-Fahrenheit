
function formdata() {
    var c = document.getElementById("fetch").value;
    event.preventDefault();
    F = c * (9 / 5) + 32;
    document.querySelector('p').innerHTML = "In a Fahrenheit " + F
}