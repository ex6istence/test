let questions = [
    {
        question: "какой закон является основным в Российской Федерации?",
        options: ['Конституция', 'Уголовный кодекс', 'Гражданский кодекс', 'КоАП'],
        correctAnswer: "Конституция"
    },
    {
        question: "Кто утверждает бюджет Российской Федерации?",
        options: ['Президент', 'Правительство РФ', 'Госдума', 'Конституционный суд'],
        correctAnswer: "Госдума"
    },
    {
        question: "Кто объявляет помилование в России?",
        options: ['Госдума', 'Генеральный прокурор', 'Правительство РФ', 'Президент'],
        correctAnswer: "Президент"
    },
    {
        question: "Какой закон регулирует отношения связанные с неприкосновенностью собственности, свободы договора и тд?",
        options: ['КоАП', 'Уголовный кодекс', 'Гражданский кодекс', 'Трудовой кодекс'],
        correctAnswer: "Гражданский кодекс"
    },
];

let currentQuestion = 0;
let correctAnswers = 0;
let questionElement = document.getElementById("question");
let optionsElement = document.getElementById("option");
let resultElement = document.getElementById("result");

console.log(questions[0].question);

function displayQuestion() {
    questionElement.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question}`
    optionsElement.innerHTML = '';
    let optionsArray = questions[currentQuestion].options;
    optionsArray.forEach((option) => {
        let button = document.createElement('button');
        optionsElement.append(button);
        button.textContent = option;
    });
    optionsElement.addEventListener('click', (event) => {
        let currentAnswer = event.target.textContent;
        console.log(currentAnswer);
        nextQuestion(currentAnswer);
    }, { once: true })
}

function nextQuestion(answer) {
    if (answer === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    resultElement.textContent = `правильных ответов ${correctAnswers} из ${questions.length}`;
}

displayQuestion()