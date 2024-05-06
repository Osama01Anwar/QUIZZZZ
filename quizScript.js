// Script to dynamically create and manage a quiz form with visually structured and real-world questions
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quizForm');
    const questions = [
        { question: "What is the capital of France?", options: ["Paris", "Rome", "Berlin", "Madrid"], answer: "A" },
        { question: "Who wrote 'Hamlet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], answer: "B" },
        { question: "Which element has the chemical symbol 'O'?", options: ["Gold", "Oxygen", "Silver", "Helium"], answer: "B" },
        { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "C" },
        { question: "What year did the Titanic sink?", options: ["1912", "1905", "1898", "1923"], answer: "A" },
        { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: "C" },
        { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Quartz"], answer: "C" },
        { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Onion", "Pepper"], answer: "B" },
        { question: "What is the currency of Japan?", options: ["Yen", "Won", "Dollar", "Euro"], answer: "A" },
        { question: "What is the boiling point of water?", options: ["100°C", "90°C", "80°C", "110°C"], answer: "A" }
    ];
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.classList.add('question');
        div.innerHTML = `<h3>${q.question}</h3>`;
        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('options');
        q.options.forEach(option => {
            const optionLabel = document.createElement('label');
            optionLabel.classList.add('option');
            const radioButton = `<input type="radio" name="question${index}" value="${option}"> ${option}`;
            optionLabel.innerHTML = radioButton;
            optionsContainer.appendChild(optionLabel);
        });
        div.appendChild(optionsContainer);
        form.appendChild(div);
    });
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.classList.add('submit-btn');
    form.appendChild(submitButton);
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let score = 0;
        questions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption && selectedOption.value === q.options[q.answer.charCodeAt(0) - 65]) {
                score += 1; // Increment score for each correct answer
            }
        });
        sessionStorage.setItem('quizScore', score);
        window.location.href = './results.html'; // Redirect to results page
    });
});
