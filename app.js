
    const quiz = [
        { question: "What is the capital of Japan?", options: ["Beijing", "Seoul", "Tokyo", "Bangkok"], answer: "Tokyo" },
        { question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Gold", "Osmium", "Iron"], answer: "Oxygen" },
        { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"], answer: "Mitochondria" }
    ];

    let currentQuestion = 0;
    let score = 0;

    function loadQuestion() {
        const questionData = quiz[currentQuestion];
        document.getElementById("question").textContent = questionData.question;
        document.getElementById("options").innerHTML = questionData.options.map(option => 
            `<button onclick="checkAnswer('${option}')">${option}</button>`
        ).join('');
        document.getElementById("next-btn").style.display = 'none';
    }

    function checkAnswer(selectedOption) {
        const correctAnswer = quiz[currentQuestion].answer;
        if (selectedOption === correctAnswer) {
            score++;
        }
        document.getElementById("next-btn").style.display = 'block';
        document.querySelectorAll(".options button").forEach(button => {
            button.disabled = true;
            if (button.textContent === correctAnswer) {
                button.style.backgroundColor = "rgba(108, 91, 123, 0.9)";
            } else {
                button.style.backgroundColor = "rgba(255, 95, 87, 0.9)";
            }
        });
    }

    function nextQuestion() {
        currentQuestion++;
        if (currentQuestion < quiz.length) {
            loadQuestion();
        } else {
            document.getElementById("question").textContent = "Quiz Completed!";
            document.getElementById("options").innerHTML = '';
            document.getElementById("score").textContent = `Your score is: ${score}`;
            document.getElementById("next-btn").style.display = 'none';
        }
    }

    loadQuestion();