function checkAnswers() {
    var q1 = document.querySelector('input[name="q1"]:checked').value;
    var q2 = document.querySelector('input[name="q2"]:checked').value;
    var q3 = document.querySelector('input[name="q3"]:checked').value;
    var q4 = document.querySelector('input[name="q4"]:checked').value;
    var q5 = document.querySelector('input[name="q5"]:checked').value;

    var correctAnswers = 0;

    if (q1 === "c") {
        correctAnswers++;
    }

    if (q2 === "d") {
        correctAnswers++;
    }

    if (q3 === "c") {
        correctAnswers++;
    }

    if (q4 === "a") {
        correctAnswers++;
    }

    if (q5 === "b") {
        correctAnswers++;
    }

    document.getElementById("result").innerHTML = "Вы ответили правильно на " + correctAnswers + " вопросов из 5.";
};