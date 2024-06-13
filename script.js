let points = 0;

// Load saved points from cookies
window.onload = function() {
    let savedPoints = getCookie("points");
    if (savedPoints) {
        points = parseInt(savedPoints);
        document.getElementById("points").innerText = "Points: " + points;
    }
}

document.getElementById("cookie").addEventListener("click", function() {
    points++;
    document.getElementById("points").innerText = "Points: " + points;
});

document.getElementById("save").addEventListener("click", function() {
    setCookie("points", points, 365);
    alert("Game saved!");
});

// Function to set cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get cookie
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}
