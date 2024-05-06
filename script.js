// Updated script to ensure proper redirection to results.html after the quiz
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentData = {
        rollNumber: document.getElementById('rollNumber').value,
        name: document.getElementById('name').value,
        batch: document.getElementById('batch').value,
        section: document.getElementById('section').value
    };
    sessionStorage.setItem('studentData', JSON.stringify(studentData));
    // Ensure the file name for redirection matches the actual file name
    window.location.href = './quiz.html'; // Correct redirection to quiz page
});
