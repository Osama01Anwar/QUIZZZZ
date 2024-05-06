// Updated script to handle displaying results on the results page
document.addEventListener('DOMContentLoaded', function() {
    const studentData = JSON.parse(sessionStorage.getItem('studentData') || '{}');
    const score = sessionStorage.getItem('quizScore') || '0';  // Default to '0' if not found
    const resultsDiv = document.getElementById('resultsDisplay');

    if (Object.keys(studentData).length) {
        // Display student details if available
        resultsDiv.innerHTML += `<h1>Results for: ${studentData.name}</h1>`;
        resultsDiv.innerHTML += `<p>Roll Number: ${studentData.rollNumber}</p>`;
        resultsDiv.innerHTML += `<p>Batch: ${studentData.batch}</p>`;
        resultsDiv.innerHTML += `<p>Section: ${studentData.section}</p>`;
    } else {
        resultsDiv.innerHTML += `<p>No student details found.</p>`;
    }

    // Display quiz results
    resultsDiv.innerHTML += `<p>Score: ${score} out of 5</p>`;
});
