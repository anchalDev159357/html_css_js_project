document.addEventListener('DOMContentLoaded', function () {
    const questions = [
        {
            question: 'What is the capital of France?',
            options: ['London', 'Berlin', 'Paris'],
            answer: 'Paris'
        },
        {
            question: 'What is 2 + 2?',
            options: ['3', '4', '5'],
            answer: '4'
        },
        {
            question: 'Which planet is known as the Red Planet?',
            options: ['Mars', 'Venus', 'Jupiter'],
            answer: 'Mars'
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const resultContainer = document.getElementById('result-container');
    const nextButton = document.getElementById('next-button');

    function showQuestion() {
        const question = questions[currentQuestionIndex];
        questionContainer.textContent = question.question;

        for (let i = 0; i < question.options.length; i++) {
            const option = question.options[i];
            const optionElement = document.getElementById(`option${i + 1}`);
            optionElement.value = option;
            optionElement.nextElementSibling.textContent = option;
        }
    }

    function checkAnswer() {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (!selectedOption) return;

        const userAnswer = selectedOption.value;
        const correctAnswer = questions[currentQuestionIndex].answer;

        if (userAnswer === correctAnswer) {
            score++;
        }
    }

    nextButton.addEventListener('click', function () {
        checkAnswer();
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            // Display the final score
            questionContainer.textContent = 'Quiz Completed!';
            optionsContainer.style.display = 'none';
            nextButton.style.display = 'none';
            resultContainer.textContent = `Your Score: ${score} / ${questions.length}`;
        }
    });

    showQuestion();
});
