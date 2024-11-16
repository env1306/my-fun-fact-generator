// script.js
const funFacts = [
    "I love reading books in my free time",
    "Cooking is one of my favorite creative outlets",
    "I enjoy playing games for entertainment and relaxation",
    "Reading helps me explore new worlds and perspectives",
    "I find joy in trying out new recipes in the kitchen",
    "Gaming is my way to connect with friends and have fun"
];

function generateFact() {
    const factDisplay = document.getElementById('factDisplay');
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    factDisplay.textContent = funFacts[randomIndex];
    factDisplay.classList.add('fade');
    
    setTimeout(() => {
        factDisplay.classList.remove('fade');
    }, 500);
}

// Display initial fact when page loads
window.onload = generateFact;
