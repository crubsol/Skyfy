const questions = [
    { question: "Tsunamis are caused by underwater earthquakes.", answer: true },
    { question: "Hurricanes only occur in the Southern Hemisphere.", answer: false },
    { question: "Wildfires can be started by lightning.", answer: true },
    { question: "Earthquakes can be predicted accurately.", answer: false },
    { question: "Volcano eruptions release toxic gases.", answer: true }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.querySelector('.question').textContent = questions[currentQuestionIndex].question;
    } else {
        showResult();
    }
}

function submitAnswer(userAnswer) {
    if (currentQuestionIndex < questions.length) {
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (userAnswer === correctAnswer) {
            score++;
        }
        currentQuestionIndex++;
        showQuestion();
    }
}

function showResult() {
    document.querySelector('.question_container').style.display = 'none';
    document.querySelector('.result').textContent = `You scored ${score} out of ${questions.length}!`;
}


showQuestion();