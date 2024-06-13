let points = 0;

// Load saved points from local storage
window.onload = function() {
    let savedPoints = localStorage.getItem("points");
    if (savedPoints) {
        points = parseInt(savedPoints);
        document.getElementById("points").innerText = "Points: " + points;
    }
}

// Function to handle cookie click
function clickCookie() {
    points++;
    document.getElementById("points").innerText = "Points: " + points;
    saveGame(); // Save game after each click
}

// Function to save game using local storage
function saveGame() {
    localStorage.setItem("points", points);
}
