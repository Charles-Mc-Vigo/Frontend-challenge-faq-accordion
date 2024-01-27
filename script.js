function toggleAnswer(index) {
    var answer = document.getElementsByClassName('answer')[index - 1];
    var icon = document.getElementById('icon' + index);
    var question = document.getElementsByClassName('question')[index - 1];

    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.src = "/assets/images/icon-plus.svg";
        question.classList.remove('active');
    } else {
        answer.style.display = "block";
        icon.src = "/assets/images/icon-minus.svg";
        question.classList.add('active');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var firstAnswer = document.getElementsByClassName('answer')[0];
    var firstIcon = document.getElementById('icon1');
    var firstQuestion = document.getElementsByClassName('question')[0];

    firstAnswer.style.display = "block";
    firstIcon.src = "/assets/images/icon-minus.svg";
    firstQuestion.classList.add('active');
});
