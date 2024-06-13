let points = 0;
let multitapLevel = 0;
let multitapCost = 50;

// Load saved points and multitap level from local storage
window.onload = function() {
    let savedPoints = localStorage.getItem("points");
    let savedMultitapLevel = localStorage.getItem("multitapLevel");
    if (savedPoints) {
        points = parseInt(savedPoints);
        document.getElementById("points").innerText = "Points: " + points;
    }
    if (savedMultitapLevel) {
        multitapLevel = parseInt(savedMultitapLevel);
        updateMultitapDisplay();
    }
}

// Function to handle cookie click
function clickCookie() {
    points += (1 + multitapLevel); // Increment points based on multitap level
    document.getElementById("points").innerText = "ZT Coins: " + points;
    saveGame(); // Save game after each click
}

// Function to buy multitap upgrade
function buyMultitap() {
    if (points >= multitapCost) {
        points -= multitapCost;
        multitapLevel++;
        multitapCost = Math.ceil(multitapCost * 2); // Increase cost by 100%
        document.getElementById("points").innerText = "ZT Coins: " + points;
        updateMultitapDisplay();
        saveGame(); // Save game after buying upgrade
    } else {
        alert("Not enough ZT Coins to buy Multitap!");
    }
}

// Function to update multitap display
function updateMultitapDisplay() {
    document.getElementById("multitap").innerText = "Multitap: " + multitapLevel + " (Cost: " + multitapCost + ")";
}

// Function to save game using local storage
function saveGame() {
    localStorage.setItem("points", points);
    localStorage.setItem("multitapLevel", multitapLevel);
}
