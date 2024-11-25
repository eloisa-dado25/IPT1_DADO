document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".intro h1 span"); // Target the span inside h1
    const text = "Jayrald B. Bonucan"; // The text to type
    let index = 0; // Start from the first character

    // Function to type each character
    function typeText() {
        if (index < text.length) {
            textElement.textContent += text[index]; // Add the next character
            index++; // Move to the next character
            setTimeout(typeText, 150); // Delay between characters (adjust speed here)
        }
    }

    // Start the typing effect
    textElement.textContent = ""; // Clear the text at the beginning
    typeText();
});
