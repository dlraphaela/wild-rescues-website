/* 
    Author: Your Name
    File: script.js
    Date: MM/DD/YYYY
*/

// Hamburger menu function
document.getElementById("hamburger-menu").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("show");
});

// FAQ interactivity
const questions = document.querySelectorAll(".faq-question");
const answerBox = document.getElementById("faq-answer");

questions.forEach(question => {
    question.addEventListener("click", function () {
        answerBox.textContent = `Answer: ${this.textContent} - This is a placeholder answer.`;
    });
});
