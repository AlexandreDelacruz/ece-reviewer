function toggleAnswer(answerId) {
    var answerElement = document.getElementById(answerId);
    if (answerElement.style.display === "none" || answerElement.style.display === "") {
        answerElement.style.display = "block";
    } else {
        answerElement.style.display = "none";
    }
}

function toggleSolution(solutionId) {
    var solutionElement = document.getElementById(solutionId);
    if (solutionElement.style.display === "none" || solutionElement.style.display === "") {
        solutionElement.style.display = "block";
    } else {
        solutionElement.style.display = "none";
    }
}