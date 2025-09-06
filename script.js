let score = 0;
let clickValue = 1; // How much score you get per click
let password = ""; // To store the password for saving

const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickButton');
const passwordInput = document.getElementById('passwordInput');
const saveButton = document.getElementById('saveButton');
const loadButton = document.getElementById('loadButton');

// Function to update the score display on the screen
function updateScoreDisplay() {
    scoreDisplay.textContent = score;
}

// Event listener for when the button is clicked
clickButton.addEventListener('click', () => {
    score += clickValue;
    updateScoreDisplay();
});

// Save game functionality
saveButton.addEventListener('click', () => {
    password = passwordInput.value; // Get the password from input
    const saveData = { score, clickValue };
    localStorage.setItem(password, JSON.stringify(saveData)); // Save to local storage
    alert("Game saved with password: " + password);
});

// Load game functionality
loadButton.addEventListener('click', () => {
    const inputPassword = passwordInput.value; // Get the password from input
    const savedData = localStorage.getItem(inputPassword); // Retrieve from local storage
    if (savedData) {
        const data = JSON.parse(savedData);
        score = data.score;
        clickValue = data.clickValue;
        updateScoreDisplay();
        alert("Game loaded successfully!");
    } else {
        alert("Incorrect password or no saved game found.");
    }
});

// Initialize the score display when the page loads
updateScoreDisplay();
